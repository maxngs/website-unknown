import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";

/** Extrait d'interface propre à chaque étape. */
function StepUi({ index, ui }: { index: number; ui: string[] }) {
  const [a, b] = ui;
  if (index === 0)
    return (
      <div className="how-ui">
        <span className="how-input">{a}</span>
        <span className="how-hint">
          <span aria-hidden className="how-dot" /> {b}
        </span>
      </div>
    );
  if (index === 1)
    return (
      <div className="how-ui" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {ui.map((x) => (
          <span key={x} className="how-pill">
            <span aria-hidden style={{ color: "var(--color-green)" }}>●</span> {x}
          </span>
        ))}
      </div>
    );
  if (index === 2)
    return (
      <div className="how-ui">
        <span className="how-score">{a}</span>
        <span className="how-hint">↳ {b}</span>
      </div>
    );
  return (
    <div className="how-ui">
      <span className="how-slot">{a}</span>
      <span className="how-hint" style={{ color: "var(--color-green)" }}>✓ {b}</span>
    </div>
  );
}

/**
 * 04 · Comment ça marche : 4 marches qui montent de l'offre à l'embauche
 * (décalage vertical sur bureau, pile sur mobile).
 */
export default function HowItWorks({ c }: { c: EntreprisesContent["how"] }) {
  return (
    <section id="how" aria-labelledby="how-title" className="ent-screen" style={{ ...BAND, background: "#fff" }}>
      <div style={INNER}>
        <SectionHead id="how-title" label={c.label} title={c.title} />
        <ol className="stairs">
          {c.steps.map((s, i) => (
            <li key={s.title} className={i ? `rv-up rv-d${Math.min(i, 3)}` : "rv-up"} style={{ ["--step" as string]: i }}>
              <span aria-hidden className="stairs-num serif">{i + 1}</span>
              <h3 style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-.02em", margin: "0 0 8px" }}>{s.title}</h3>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "rgba(15,14,12,.68)", margin: 0 }}>{s.text}</p>
              <StepUi index={i} ui={s.ui} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
