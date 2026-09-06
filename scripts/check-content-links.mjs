// Vérifie que tous les liens internes des MDX pointent vers une page existante.
// Usage : node scripts/check-content-links.mjs   (code de sortie 1 si cassé)
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : join(dir, e.name)
  );

const files = existsSync("content") ? walk("content").filter((f) => f.endsWith(".mdx")) : [];
const existing = new Set(
  files.map((f) => {
    const parts = f.split("/");
    return parts[1] === "mag"
      ? `/mag/${parts[2]}/${basename(f, ".mdx")}`
      : `/glossaire/${basename(f, ".mdx")}`;
  })
);
// Pages de l'app (hors contenu MDX)
const routes = new Set([
  "/", "/candidats", "/entreprises", "/ecoles", "/mag", "/glossaire", "/contact",
  "/a-propos", "/tarifs", "/fonctionnalites", "/cgu", "/cgv", "/mentions-legales",
  "/politique-confidentialite", "/mag/tag",
  "/mag/entreprises", "/mag/candidats", "/mag/ecoles", "/mag/etudes",
]);

let broken = 0;
for (const f of files) {
  const src = readFileSync(f, "utf-8");
  for (const m of src.matchAll(/\]\((\/[^)\s#]*)/g)) {
    const href = m[1];
    if (!existing.has(href) && !routes.has(href)) {
      console.error(`✗ ${f} → ${href}`);
      broken++;
    }
  }
}
console.log(
  broken ? `\n${broken} lien(s) interne(s) mort(s).` : "Tous les liens internes du contenu sont valides."
);
process.exit(broken ? 1 : 0);
