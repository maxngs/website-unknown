// ============================================================
// Adaptation des données éditoriales (lib/blog, lib/glossaire, lib/silos)
// au vocabulaire des composants du Mag.
// ============================================================
import { getAllPosts, type BlogPostMeta } from "@/lib/blog";
import { getAllGlossaryEntries } from "@/lib/glossaire";
import { SILO_SLUGS, SILOS, type SiloSlug } from "@/lib/silos";

/** Teinte de rubrique, alignée sur la charte v3. */
export const SILO_TONE: Record<SiloSlug, string> = {
  entreprises: "var(--color-blue-2)",
  candidats: "var(--color-blue)",
  ecoles: "var(--color-green)",
  etudes: "var(--color-ink)",
};

export type MagData = ReturnType<typeof getMagData>;

export function getMagData() {
  const posts = getAllPosts(); // déjà triés du plus récent au plus ancien
  const [featured, ...rest] = posts;

  const rubriques = SILO_SLUGS.map((slug) => ({
    slug,
    name: SILOS[slug].shortName,
    description: SILOS[slug].description,
    count: posts.filter((p) => p.silo === slug).length,
  }));

  return {
    featured,
    latest: rest.slice(0, 6),
    total: posts.length,
    rubriques,
    glossary: getAllGlossaryEntries().slice(0, 3),
  };
}

/** « 7 mai · 7 min » */
export function formatMeta(post: BlogPostMeta, locale: string): string {
  const d = new Date(post.date);
  const day = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
  }).format(d);
  return `${day} · ${post.readingTimeMin} min`;
}

/** « Par la rédaction · 7 mai 2026 · Lecture 9 min » */
export function formatByline(
  post: BlogPostMeta,
  locale: string,
  by: string,
  reading: string
): string {
  const full = new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(post.date));
  return `${by} ${post.author} · ${full} · ${reading} ${post.readingTimeMin} min`;
}
