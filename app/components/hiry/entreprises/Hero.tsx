import type { EntreprisesContent } from "@/content/entreprises";
import DemoLink from "./DemoLink";
import { HeroVisual } from "./mockups";
import { Rich } from "./rich";

/**
 * Hero : H1 court, sous-titre chiffré, 2 CTA vers le formulaire, puis un
 * visuel produit codé (pas d'image : le texte du H1 est l'élément LCP et
 * n'est jamais animé).
 */
export default function Hero({ c }: { c: EntreprisesContent["hero"] }) {
  return (
    <header
      id="hero"
      data-r="g"
      style={{
        padding: "20px 44px 0",
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.12fr) minmax(0,.88fr)",
        gap: 20,
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          background: "var(--color-blue-p)",
          borderRadius: 24,
          padding: "clamp(32px,4.4vw,64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <p
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "rgba(255,255,255,.6)",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 500,
            width: "fit-content",
            maxWidth: "100%",
            lineHeight: 1.35,
            margin: 0,
          }}
        >
          <span aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-blue)", flex: "none" }} />
          {c.eyebrow}
        </p>

        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(42px,5vw,76px)",
            lineHeight: 1,
            letterSpacing: "-.04em",
            margin: 0,
            textWrap: "balance",
          }}
        >
          <Rich text={c.title} />
        </h1>

        <p style={{ fontSize: 18, lineHeight: 1.5, color: "rgba(15,14,12,.75)", maxWidth: 520, margin: 0 }}>
          {c.subtitle}
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <DemoLink className="btn btn-ink-alt" style={{ fontSize: 15, padding: "16px 28px" }} prefill={{ mode: "demo" }}>
            {c.ctaDemo}
          </DemoLink>
          <DemoLink className="btn btn-white" style={{ fontSize: 15, padding: "16px 28px" }} prefill={{ mode: "video" }}>
            {c.ctaVideo}
          </DemoLink>
        </div>

        <div style={{ borderTop: "1px solid rgba(15,14,12,.14)", paddingTop: 20, display: "grid", gap: 8 }}>
          <ul
            aria-label={c.reassurance.join(", ")}
            style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "6px 18px", fontSize: 13.5, fontWeight: 600 }}
          >
            {c.reassurance.map((r) => (
              <li key={r} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                <span aria-hidden style={{ color: "var(--color-green)" }}>✓</span>
                {r}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 13.5, color: "rgba(15,14,12,.6)", margin: 0 }}>{c.scope}</p>
        </div>
      </div>

      <div
        role="img"
        aria-label={c.visualLabel}
        data-r="img"
        style={{
          background: "#F2F8FC",
          borderRadius: 24,
          minHeight: 540,
          display: "grid",
          placeItems: "center",
          padding: "clamp(16px,3vw,44px)",
          overflow: "hidden",
        }}
      >
        <HeroVisual c={c} />
      </div>
    </header>
  );
}
