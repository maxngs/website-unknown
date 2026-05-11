// lib/blog.ts
// Lecture des articles MDX du Mag, organisés par silo SEO : content/mag/<silo>/<slug>.mdx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { isSiloSlug, SILO_SLUGS, type SiloSlug } from "./silos";

const BLOG_DIR = path.join(process.cwd(), "content/mag");

/** Question/réponse balisée FAQPage Schema.org en fin d'article. */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPostMeta {
  silo: SiloSlug;
  slug: string;
  /** Chemin URL complet : /mag/<silo>/<slug> */
  href: string;
  title: string;
  description: string;
  date: string; // ISO 8601 (ex: "2026-04-01")
  author: string;
  /** Slug d'auteur Person (cf. lib/authors.ts). Si absent, on utilise `author` comme Organization. */
  authorSlug?: string;
  tags: string[];
  /** Image OG (ex: "/blog/mon-article.png"). Optionnelle. */
  image?: string;
  published: boolean;
  /** Mots ~200/min pour estimer le temps de lecture. */
  readingTimeMin: number;
  /** Requête SEO cible principale (utilisée en interne pour audit éditorial). */
  targetQuery?: string;
  /** Questions FAQ structurées (balisées FAQPage). */
  faq?: FaqItem[];
}

export interface BlogPost extends BlogPostMeta {
  /** Contenu MDX brut (sans frontmatter). */
  content: string;
}

/** Calcule le temps de lecture (~200 mots/min, minimum 1 min). */
function computeReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function buildMeta(silo: SiloSlug, filename: string): BlogPostMeta | null {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, silo, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const published = data.published !== false;

  return {
    silo,
    slug,
    href: `/mag/${silo}/${slug}`,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "1970-01-01",
    author: data.author ?? "Hiry",
    authorSlug: data.authorSlug,
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image,
    published,
    readingTimeMin: computeReadingTime(content),
    targetQuery: data.targetQuery,
    faq: Array.isArray(data.faq) ? (data.faq as FaqItem[]) : undefined,
  };
}

/** Liste les articles publiés d'un silo, triés du plus récent au plus ancien. */
export function getPostsBySilo(silo: SiloSlug): BlogPostMeta[] {
  const dir = path.join(BLOG_DIR, silo);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => buildMeta(silo, f))
    .filter((m): m is BlogPostMeta => m !== null && m.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** Liste tous les articles publiés (tous silos confondus), triés par date desc. */
export function getAllPosts(): BlogPostMeta[] {
  return SILO_SLUGS.flatMap((silo) => getPostsBySilo(silo)).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/** Lit un article complet (meta + contenu MDX) à partir de son silo + slug. */
export function getPost(silo: SiloSlug, slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, silo, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (data.published === false) return null;

  return {
    silo,
    slug,
    href: `/mag/${silo}/${slug}`,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "1970-01-01",
    author: data.author ?? "Hiry",
    authorSlug: data.authorSlug,
    tags: Array.isArray(data.tags) ? data.tags : [],
    image: data.image,
    published: true,
    readingTimeMin: computeReadingTime(content),
    targetQuery: data.targetQuery,
    faq: Array.isArray(data.faq) ? (data.faq as FaqItem[]) : undefined,
    content,
  };
}

/** Articles liés (intra-silo uniquement, hors article courant). Limité à `limit`. */
export function getRelatedPosts(
  current: { silo: SiloSlug; slug: string },
  limit = 3,
): BlogPostMeta[] {
  return getPostsBySilo(current.silo)
    .filter((p) => p.slug !== current.slug)
    .slice(0, limit);
}

/** Tous les couples (silo, slug) pour generateStaticParams. */
export function getAllPostParams(): { silo: SiloSlug; slug: string }[] {
  return SILO_SLUGS.flatMap((silo) =>
    getPostsBySilo(silo).map((p) => ({ silo, slug: p.slug })),
  );
}

/** Garde-fou : valide qu'une string est bien un silo connu. */
export { isSiloSlug };
