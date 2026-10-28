import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";
import { JournalMock } from "./mockups";

const NUMERALS = ["i", "ii", "iii"];

/**
 * 08 · L'humain au cœur (section foncée) : explicabilité, décision
 * humaine, traçabilité. Ton sobre : Hiry est conçu pour l'AI Act, sans
 * jamais parler des autres.
 */
export default function Humain({ c }: { c: EntreprisesContent["humain"] }) {
  return (
    <section
      id="humain"
      aria-labelledby="humain-title"
      className="ent-screen"
      style={{ ...BAND, background: "var(--color-ink)", color: "var(--color-bg)" }}
    >
      <div data-r="g" style={{ ...INNER, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(32px,5vw,88px)", alignItems: "center" }}>
        <div>
          <SectionHead id="humain-title" label={c.label} title={c.title} subtitle={c.subtitle} dark />
          <div className="rv-up" style={{ display: "grid", gap: 14, maxWidth: 560 }}>
            <JournalMock title={c.logTitle} log={c.log} />
          </div>
        </div>
        <div>
        <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {c.pillars.map((p, i) => (
            <li
              key={p.lead}
              className="rv-up"
              style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 12, borderTop: "1px solid rgba(247,243,236,.2)", padding: "20px 0 22px" }}
            >
              <span aria-hidden className="serif" style={{ fontSize: 28, lineHeight: 1, color: "var(--color-cyan)" }}>
                {NUMERALS[i]}.
              </span>
              <div>
                <h3 style={{ fontSize: "clamp(19px,1.7vw,23px)", fontWeight: 700, letterSpacing: "-.02em", margin: "0 0 8px" }}>{p.lead}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(247,243,236,.72)", margin: 0 }}>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
          <div style={{ display: "grid", gap: 8, borderTop: "1px solid rgba(247,243,236,.2)", paddingTop: 18 }}>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(247,243,236,.75)", margin: 0 }}>{c.note}</p>
              <p className="serif" style={{ fontSize: 14, color: "rgba(247,243,236,.6)", margin: 0 }}>{c.ref}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
