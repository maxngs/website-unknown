import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";

/** 04 · Comment ça marche : timeline horizontale (bureau), verticale (mobile). */
export default function HowItWorks({ c }: { c: EntreprisesContent["how"] }) {
  return (
    <section id="how" aria-labelledby="how-title" style={SECTION}>
      <SectionHead id="how-title" label={c.label} title={c.title} />
      <ol className="timeline">
        {c.steps.map((s, i) => (
          <li key={s.title} className={i ? `rv-up rv-d${Math.min(i, 3)}` : "rv-up"}>
            <span className="timeline-num" aria-hidden>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-.02em", margin: "0 0 8px" }}>{s.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(15,14,12,.65)", margin: 0 }}>{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
