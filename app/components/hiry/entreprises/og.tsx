import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };

/** Image Open Graph des pages Entreprises : charte Hiry (ivoire, bleu, encre). */
export function entreprisesOg({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F7F3EC",
          padding: 64,
          fontFamily: "sans-serif",
          color: "#0F0E0C",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
            hiry<span style={{ color: "#0F4B70" }}>.</span>
          </div>
          <div style={{ display: "flex", background: "#CFE4F2", borderRadius: 999, padding: "12px 24px", fontSize: 24, fontWeight: 600 }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 1000 }}>
          {title}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "rgba(15,14,12,.65)" }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, background: "#1E7A64" }} />
          {footer}
        </div>
      </div>
    ),
    OG_SIZE
  );
}
