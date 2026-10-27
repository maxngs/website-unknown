import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";
import Checklist from "./Checklist";

/**
 * 01 · Le constat : douleur puis soulagement, la mini-histoire, les
 * 3 questions, le bloc « Cochez » et le chiffre BMO sourcé.
 */
export default function Constat({ c }: { c: EntreprisesContent["constat"] }) {
  return (
    <section id="constat" aria-labelledby="constat-title" style={SECTION}>
      <SectionHead id="constat-title" label={c.label} title={c.title} maxWidth={940} />

      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>
        <div className="rv-up">
          <p style={{ fontSize: "clamp(22px,2vw,28px)", fontWeight: 700, lineHeight: 1.25, letterSpacing: "-.02em", margin: "0 0 18px" }}>
            {c.relief}
          </p>
          <p style={{ fontSize: 16.5, lineHeight: 1.65, color: "rgba(15,14,12,.68)", margin: "0 0 30px", maxWidth: 560 }}>
            {c.story}
          </p>
          <ul style={{ listStyle: "none", margin: "0 0 34px", padding: 0, display: "grid" }}>
            {c.questions.map((q) => (
              <li key={q} style={{ borderTop: "1px solid rgba(15,14,12,.12)", padding: "16px 0", fontSize: 17, fontWeight: 600 }}>
                {q}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 18, alignItems: "baseline", flexWrap: "wrap" }}>
            <span style={{ fontWeight: 700, fontSize: 44, letterSpacing: "-.03em", color: "var(--color-blue)" }}>
              {c.stat.figure}
            </span>
            <p style={{ fontSize: 14.5, lineHeight: 1.5, margin: 0, maxWidth: 360 }}>
              {c.stat.text}
              <span style={{ display: "block", fontSize: 12, color: "rgba(15,14,12,.62)", marginTop: 4 }}>{c.stat.source}</span>
            </p>
          </div>
        </div>
        <div className="rv-up sticky-desk">
          <Checklist c={c.checklist} />
        </div>
      </div>
    </section>
  );
}
