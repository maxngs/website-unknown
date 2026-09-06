// app/sitemap.ts
// Toutes les URLs du site sont préfixées par la locale (cf. i18n/routing.ts,
// localePrefix: "always"). Le contenu éditorial (articles, glossaire, tags,
// auteurs) n'existe qu'en français : il n'est déclaré que sous /fr.
import type { MetadataRoute } from "next";
import { getAllPosts, getAllTags, getPostsBySilo } from "@/lib/blog";
import { getAllGlossaryEntries } from "@/lib/glossaire";
import { SILO_SLUGS } from "@/lib/silos";
import { AUTHORS } from "@/lib/authors";

const BASE_URL = "https://hiry.fr";
const fr = (path = "") => `${BASE_URL}/fr${path}`;
const en = (path = "") => `${BASE_URL}/en${path}`;

/** Page présente dans les deux langues → entrée FR + alternates hreflang. */
function bilingual(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  lastModified: Date
): MetadataRoute.Sitemap[number] {
  return {
    url: fr(path),
    lastModified,
    changeFrequency,
    priority,
    alternates: {
      languages: { fr: fr(path), en: en(path), "x-default": fr(path) },
    },
  };
}

/** Page française uniquement (contenu éditorial). */
function frenchOnly(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  lastModified: Date
): MetadataRoute.Sitemap[number] {
  return { url: fr(path), lastModified, changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Pages bilingues ──
  const pages: MetadataRoute.Sitemap = [
    bilingual("", 1, "weekly", now),
    bilingual("/candidats", 0.9, "weekly", now),
    bilingual("/entreprises", 0.9, "weekly", now),
    bilingual("/ecoles", 0.9, "weekly", now),
    bilingual("/a-propos", 0.8, "monthly", now),
    bilingual("/contact", 0.7, "monthly", now),
    bilingual("/presse", 0.6, "monthly", now),
    bilingual("/mentions-legales", 0.3, "yearly", now),
    bilingual("/cgu", 0.3, "yearly", now),
    bilingual("/politique-confidentialite", 0.3, "yearly", now),
  ];
  // /cgv est volontairement absente : document en cours de rédaction, en noindex.

  // ── Le Mag (français) ──
  const allPosts = getAllPosts();
  if (allPosts.length > 0) pages.push(frenchOnly("/mag", 0.8, "weekly", now));

  for (const silo of SILO_SLUGS) {
    if (getPostsBySilo(silo).length === 0) continue;
    pages.push(frenchOnly(`/mag/${silo}`, 0.7, "weekly", now));
  }

  for (const post of allPosts) {
    pages.push(
      frenchOnly(post.href, 0.7, "monthly", new Date(post.dateModified))
    );
  }

  // ── Tags ──
  const tags = getAllTags();
  if (tags.length > 0) {
    pages.push(frenchOnly("/mag/tag", 0.6, "weekly", now));
    for (const t of tags) {
      pages.push(frenchOnly(`/mag/tag/${t.slug}`, 0.5, "weekly", now));
    }
  }

  // ── Auteurs (E-E-A-T) ──
  for (const slug of Object.keys(AUTHORS)) {
    pages.push(frenchOnly(`/auteur/${slug}`, 0.6, "monthly", now));
  }

  // ── Glossaire ──
  const entries = getAllGlossaryEntries();
  if (entries.length > 0) {
    pages.push(frenchOnly("/glossaire", 0.6, "monthly", now));
    for (const entry of entries) {
      pages.push(frenchOnly(`/glossaire/${entry.slug}`, 0.5, "monthly", now));
    }
  }

  return pages;
}
