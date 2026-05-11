// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllPosts, getPostsBySilo } from "@/lib/blog";
import { getAllGlossaryEntries } from "@/lib/glossaire";
import { SILO_SLUGS } from "@/lib/silos";

const BASE_URL = "https://hiry.fr";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Pages statiques ──
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/candidats`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/entreprises`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/ecoles`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/a-propos`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/fonctionnalites`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tarifs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgu`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/cgv`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // ── Blog : index + index par silo + articles ──
  const allPosts = getAllPosts();
  const blogPages: MetadataRoute.Sitemap = [];

  if (allPosts.length > 0) {
    blogPages.push({
      url: `${BASE_URL}/mag`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    });
  }

  // Index de chaque silo (uniquement si au moins 1 article publié dedans)
  for (const silo of SILO_SLUGS) {
    const siloPosts = getPostsBySilo(silo);
    if (siloPosts.length === 0) continue;

    blogPages.push({
      url: `${BASE_URL}/mag/${silo}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  // Articles
  for (const post of allPosts) {
    blogPages.push({
      url: `${BASE_URL}${post.href}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  // ── Glossaire : index + entrées ──
  const glossaryEntries = getAllGlossaryEntries();
  const glossaryPages: MetadataRoute.Sitemap = [];

  if (glossaryEntries.length > 0) {
    glossaryPages.push({
      url: `${BASE_URL}/glossaire`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    for (const entry of glossaryEntries) {
      glossaryPages.push({
        url: `${BASE_URL}${entry.href}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return [...staticPages, ...blogPages, ...glossaryPages];
}
