import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";

/**
 * 06 · Un ATS complet : la grille « Inclus », regroupée en deux familles
 * (l'essentiel d'un ATS / ce que seul un ATS AI-native apporte).
 */
export default function AtsComplet({
  c,
  optionBadge,
}: {
  c: EntreprisesContent["ats"];
  optionBadge: string;
}) {
  return (
    <section id="ats" aria-labelledby="ats-title" style={{ ...BAND, background: "#fff" }}>
      <div style={INNER}>
        <SectionHead id="ats-title" label={c.label} title={c.title} subtitle={c.subtitle} />
        <div data-r="g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(28px,4vw,64px)" }}>
          {c.groups.map((g, gi) => (
            <div key={g.title} className="rv-up">
              <h3
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: gi ? "var(--color-blue)" : "rgba(15,14,12,.62)",
                  margin: "0 0 8px",
                  paddingBottom: 14,
                  borderBottom: `2px solid ${gi ? "var(--color-blue)" : "var(--color-ink)"}`,
                }}
              >
                {g.title}
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {g.items.map((it) => (
                  <li key={it.title} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 10, padding: "16px 0", borderBottom: "1px solid rgba(15,14,12,.08)" }}>
                    <span aria-hidden style={{ color: gi ? "var(--color-blue)" : "var(--color-green)", fontWeight: 700 }}>
                      {gi ? "✦" : "✓"}
                    </span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15.5, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        {it.title}
                        {it.optional && <span className="opt-badge">{optionBadge}</span>}
                      </div>
                      <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(15,14,12,.62)", margin: "4px 0 0" }}>{it.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
