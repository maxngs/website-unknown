import type { EntreprisesContent } from "@/content/entreprises";
import DemoLink from "./DemoLink";
import Image from "next/image";
import { HeroCard } from "./mockups";
import { Rich } from "./rich";

/**
 * Hero : H1 court, sous-titre chiffré, 2 CTA vers le formulaire ; à droite
 * la photo, avec la carte candidat et le créneau d'entretien posés dessus.
 * Le H1 n'est jamais animé ; la photo est chargée en priorité.
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
        data-r="img"
        className="hero-img"
        style={{ position: "relative", borderRadius: 24, overflow: "hidden", minHeight: 540, background: "var(--color-blue-p)" }}
      >
        <Image
          src="/images/hero-entreprises.png"
          alt={c.imageAlt}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 44vw"
          style={{ objectFit: "cover", objectPosition: "50% 20%" }}
        />
        {/* Écrans Hiry posés sur la photo (exemple illustratif) */}
        <div role="img" aria-label={c.visualLabel}>
          <span className="hero-chip hero-float-2">
            <span aria-hidden className="how-dot" style={{ background: "var(--color-green)" }} />
            {c.column.title} · {c.column.slot}
          </span>
          <div className="hero-card hero-float-1">
            <HeroCard c={c} />
          </div>
        </div>
      </div>
    </header>
  );
}
