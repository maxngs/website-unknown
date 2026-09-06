// app/[locale]/mag/[silo]/[slug]/opengraph-image.tsx
// OG image dynamique générée par article via l'API Next.js OpenGraph Image.
// Une PNG 1200×630 est générée pour chaque article au build (SSG).
import { ImageResponse } from "next/og";
import { getPost, getAllPostParams } from "@/lib/blog";
import { getSilo, isSiloSlug, siloTheme, type SiloSlug } from "@/lib/silos";

// Métadonnées attendues par Next pour la convention opengraph-image
export const alt = "Article du Mag Hiry";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// SSG : pré-génère une OG image par article publié
export function generateStaticParams() {
  // articles en français uniquement
  return getAllPostParams().map((p) => ({ locale: "fr", ...p }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; silo: string; slug: string }>;
}) {
  const { silo, slug } = await params;
  if (!isSiloSlug(silo)) return new Response("Bad silo", { status: 400 });

  const siloSlug = silo as SiloSlug;
  const post = getPost(siloSlug, slug);
  if (!post) return new Response("Not found", { status: 404 });

  const meta = getSilo(siloSlug);
  const theme = siloTheme(siloSlug);

  const dateFr = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: `linear-gradient(135deg, ${theme.hex}, ${darken(theme.hex, 0.25)})`,
          color: "white",
          padding: 80,
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Halo lumineux décoratif */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            filter: "blur(80px)",
          }}
        />

        {/* En-tête */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              borderRadius: 8,
              background: "rgba(255,255,255,0.18)",
              border: "1px solid rgba(255,255,255,0.3)",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "white",
                marginRight: 12,
              }}
            />
            {meta.shortName}
          </div>
          <div style={{ fontSize: 38, fontWeight: 900, letterSpacing: -1 }}>
            Hiry
          </div>
        </div>

        {/* Titre */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "center",
            fontSize: post.title.length > 80 ? 52 : 64,
            fontWeight: 900,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {post.title}
        </div>

        {/* Pied : date + branding */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 32,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.25)",
            fontSize: 18,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          <span>
            {post.author} · {dateFr} · {post.readingTimeMin} min
          </span>
          <span style={{ letterSpacing: 2, textTransform: "uppercase" }}>
            HIRY.FR/MAG
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}

// Utilitaire pour assombrir un hex (gradient bottom-right plus foncé)
function darken(hex: string, amount: number): string {
  const c = hex.replace("#", "");
  const r = Math.max(0, Math.floor(parseInt(c.slice(0, 2), 16) * (1 - amount)));
  const g = Math.max(0, Math.floor(parseInt(c.slice(2, 4), 16) * (1 - amount)));
  const b = Math.max(0, Math.floor(parseInt(c.slice(4, 6), 16) * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}
