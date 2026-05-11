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
  /** Date de publication (frontmatter, ISO 8601). */
  date: string;
  /** Date de dernière modification du fichier MDX (mtime, ISO 8601). */
  dateModified: string;
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
  const stats = fs.statSync(filePath);
  const dateModified = stats.mtime.toISOString().slice(0, 10);

  return {
    silo,
    slug,
    href: `/mag/${silo}/${slug}`,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "1970-01-01",
    dateModified,
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

  const stats = fs.statSync(filePath);
  const dateModified = stats.mtime.toISOString().slice(0, 10);

  return {
    silo,
    slug,
    href: `/mag/${silo}/${slug}`,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "1970-01-01",
    dateModified,
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

/** Tous les articles publiés signés par un auteur Person (cf. lib/authors.ts). */
export function getPostsByAuthor(authorSlug: string): BlogPostMeta[] {
  return getAllPosts().filter((p) => p.authorSlug === authorSlug);
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

// ── Tags transversaux ───────────────────────────────────────────────────────
// Les tags sont définis librement dans le frontmatter des MDX. On les normalise
// en slug URL-safe pour générer des pages d'agrégation /mag/tag/<slug>.

/** Convertit un tag affiché ("Soft skills") en slug URL ("soft-skills"). */
export function tagToSlug(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip diacritics
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Liste tous les tags présents au moins une fois, avec leur compte d'articles. */
export function getAllTags(): { tag: string; slug: string; count: number }[] {
  const counts = new Map<string, { tag: string; count: number }>();
  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      const slug = tagToSlug(tag);
      const existing = counts.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(slug, { tag, count: 1 });
      }
    }
  }
  return Array.from(counts.entries())
    .map(([slug, { tag, count }]) => ({ slug, tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag, "fr"));
}

/** Retrouve les articles taggés avec un slug donné (tous silos confondus). */
export function getPostsByTag(slug: string): BlogPostMeta[] {
  return getAllPosts().filter((p) =>
    p.tags.some((t) => tagToSlug(t) === slug),
  );
}

/** Retrouve le label d'affichage d'un tag à partir de son slug. */
export function getTagLabel(slug: string): string | null {
  const found = getAllTags().find((t) => t.slug === slug);
  return found ? found.tag : null;
}

/** Garde-fou : valide qu'une string est bien un silo connu. */
export { isSiloSlug };
