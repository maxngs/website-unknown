// app/mag/feed.xml/route.ts
// Flux RSS 2.0 du Mag Hiry. Servi à /mag/feed.xml — lecteurs RSS, Feedly, syndication.
// Régénéré au build (ISR off — statique car SSG).
import { getAllPosts } from "@/lib/blog";
import { getSilo } from "@/lib/silos";

const SITE_URL = "https://hiry.fr";

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllPosts();
  const lastBuildDate = new Date().toUTCString();
  const feedUrl = `${SITE_URL}/mag/feed.xml`;

  const items = posts
    .map((post) => {
      const url = `${SITE_URL}${post.href}`;
      const pubDate = new Date(post.date).toUTCString();
      const silo = getSilo(post.silo);
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>noreply@hiry.fr (${escapeXml(post.author)})</author>
      <category>${escapeXml(silo.name)}</category>
${post.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n")}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Le Mag Hiry — Recrutement, IA, Soft Skills et Insertion</title>
    <link>${SITE_URL}/mag</link>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml" />
    <description>Décryptages, guides et données sur le recrutement, l'alternance et l'insertion — par Hiry.</description>
    <language>fr-FR</language>
    <copyright>© ${new Date().getFullYear()} Hiry. Tous droits réservés.</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js + Hiry custom RSS route</generator>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
