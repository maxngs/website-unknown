// lib/blog.ts
// Utilitaire pour lire les articles MDX depuis content/blog/
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO 8601 (ex: "2026-04-01")
  author: string;
  tags: string[];
  image?: string; // chemin relatif vers l'image OG (ex: "/blog/mon-article.png")
  published: boolean;
}

export interface BlogPost extends BlogPostMeta {
  content: string; // contenu MDX brut (sans le frontmatter)
}

/**
 * Retourne la liste de tous les articles publiés, triés du plus récent au plus ancien.
 */
export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));

  const posts = files
    .map((filename) => {
      const filePath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title ?? "Sans titre",
        description: data.description ?? "",
        date: data.date ?? "1970-01-01",
        author: data.author ?? "Hiry",
        tags: data.tags ?? [],
        image: data.image,
        published: data.published !== false, // publié par défaut
      } satisfies BlogPostMeta;
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

/**
 * Retourne un article complet (metadata + contenu MDX brut) à partir de son slug.
 * Retourne null si le fichier n'existe pas ou si l'article n'est pas publié.
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const post: BlogPost = {
    slug,
    title: data.title ?? "Sans titre",
    description: data.description ?? "",
    date: data.date ?? "1970-01-01",
    author: data.author ?? "Hiry",
    tags: data.tags ?? [],
    image: data.image,
    published: data.published !== false,
    content,
  };

  if (!post.published) return null;

  return post;
}

/**
 * Retourne tous les slugs des articles publiés (pour generateStaticParams).
 */
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
