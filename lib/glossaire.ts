// lib/glossaire.ts
// Lecture des entrées du glossaire SEO : content/glossaire/<slug>.mdx
// Le glossaire est le seul "pont" inter-silos : ses pages peuvent être liées
// depuis n'importe quel article de blog (cf. blueprint § 8).
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GLOSSAIRE_DIR = path.join(process.cwd(), "content/glossaire");

export interface GlossaryEntryMeta {
  slug: string;
  href: string;
  /** Terme affiché (ex: "Soft Skills"). */
  term: string;
  /** Définition courte ("citation magnet" pour les IA, 1-2 phrases). */
  shortDefinition: string;
  /** Description meta SEO. */
  description: string;
  /** Termes apparentés (autres slugs du glossaire). */
  seeAlso: string[];
  published: boolean;
}

export interface GlossaryEntry extends GlossaryEntryMeta {
  content: string;
}

function buildMeta(filename: string): GlossaryEntryMeta | null {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(GLOSSAIRE_DIR, filename);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    slug,
    href: `/glossaire/${slug}`,
    term: data.term ?? slug,
    shortDefinition: data.shortDefinition ?? "",
    description: data.description ?? data.shortDefinition ?? "",
    seeAlso: Array.isArray(data.seeAlso) ? data.seeAlso : [],
    published: data.published !== false,
  };
}

/** Toutes les entrées publiées, triées alphabétiquement par terme. */
export function getAllGlossaryEntries(): GlossaryEntryMeta[] {
  if (!fs.existsSync(GLOSSAIRE_DIR)) return [];

  return fs
    .readdirSync(GLOSSAIRE_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map(buildMeta)
    .filter((e): e is GlossaryEntryMeta => e !== null && e.published)
    .sort((a, b) => a.term.localeCompare(b.term, "fr"));
}

/** Lit une entrée complète. */
export function getGlossaryEntry(slug: string): GlossaryEntry | null {
  const filePath = path.join(GLOSSAIRE_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  if (data.published === false) return null;

  return {
    slug,
    href: `/glossaire/${slug}`,
    term: data.term ?? slug,
    shortDefinition: data.shortDefinition ?? "",
    description: data.description ?? data.shortDefinition ?? "",
    seeAlso: Array.isArray(data.seeAlso) ? data.seeAlso : [],
    published: true,
    content,
  };
}

export function getAllGlossarySlugs(): string[] {
  return getAllGlossaryEntries().map((e) => e.slug);
}
