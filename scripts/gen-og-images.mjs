// scripts/gen-og-images.mjs
// Génère 4 OG images PNG (1200x630) — une par silo du Mag.
// Utilise sharp pour rendre les SVG en PNG. Lancer avec: node scripts/gen-og-images.mjs
import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "..", "public");

const SILOS = [
  {
    slug: "entreprises",
    name: "Entreprises & Recruteurs",
    eyebrow: "01 · Entreprises",
    from: "#3B82F6",
    to: "#1D4ED8",
  },
  {
    slug: "candidats",
    name: "Candidats & Étudiants",
    eyebrow: "02 · Candidats",
    from: "#8B5CF6",
    to: "#6D28D9",
  },
  {
    slug: "ecoles",
    name: "Écoles & Enseignement supérieur",
    eyebrow: "03 · Écoles",
    from: "#10B981",
    to: "#047857",
  },
  {
    slug: "etudes",
    name: "Études & Baromètres",
    eyebrow: "04 · Études",
    from: "#F59E0B",
    to: "#B45309",
  },
];

function buildSvg({ name, eyebrow, from, to }) {
  // Découpe le titre en deux lignes si trop long pour rendre lisible à 1200x630.
  const isLong = name.length > 22;
  const titleLines = isLong
    ? splitTitle(name)
    : [name];

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="halo" cx="80%" cy="20%" r="60%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.25)"/>
      <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#halo)"/>

  <!-- Watermark numéro silo géant en bas à droite -->
  <text x="1180" y="730" text-anchor="end"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-weight="900" font-size="540"
        fill="rgba(255,255,255,0.08)">${eyebrow.split(" ")[0]}</text>

  <!-- Eyebrow chip -->
  <g transform="translate(80, 80)">
    <rect width="280" height="48" rx="8"
          fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.3)" stroke-width="1"/>
    <circle cx="22" cy="24" r="4" fill="white"/>
    <text x="40" y="32"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-weight="700" font-size="14" letter-spacing="2"
          fill="white">${eyebrow.toUpperCase()}</text>
  </g>

  <!-- Titre -->
  ${titleLines
    .map(
      (line, i) =>
        `<text x="80" y="${260 + i * 90}"
          font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          font-weight="900" font-size="84" letter-spacing="-2"
          fill="white">${escapeXml(line)}</text>`,
    )
    .join("\n  ")}

  <!-- Sous-titre Le Mag Hiry -->
  <text x="80" y="${260 + titleLines.length * 90 + 40}"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-weight="500" font-size="28"
        fill="rgba(255,255,255,0.85)">Le Mag Hiry · décryptages, guides et données</text>

  <!-- Logo Hiry en haut à droite -->
  <text x="1120" y="115" text-anchor="end"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-weight="900" font-size="40" letter-spacing="-1"
        fill="white">Hiry</text>

  <!-- Liseré bas avec hiry.fr -->
  <line x1="80" y1="540" x2="1120" y2="540" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
  <text x="80" y="580"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
        font-weight="600" font-size="18" letter-spacing="2"
        fill="rgba(255,255,255,0.7)">HIRY.FR/MAG</text>
</svg>`;
}

function splitTitle(name) {
  const words = name.split(" ");
  const half = Math.ceil(words.length / 2);
  return [words.slice(0, half).join(" "), words.slice(half).join(" ")];
}

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

async function main() {
  await mkdir(PUBLIC_DIR, { recursive: true });
  for (const silo of SILOS) {
    const svg = buildSvg(silo);
    const outPath = path.join(PUBLIC_DIR, `og-mag-${silo.slug}.png`);
    await sharp(Buffer.from(svg)).png().toFile(outPath);
    console.log(`✓ ${path.relative(process.cwd(), outPath)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
