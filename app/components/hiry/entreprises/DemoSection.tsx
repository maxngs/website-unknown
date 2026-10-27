import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";
import DemoForm from "./DemoForm";

/**
 * Formulaire de prise de rendez-vous (#demo) : formulaire à gauche,
 * réassurance à droite. Partagé par /entreprises et /entreprises/demo.
 */
export default function DemoSection({
  c,
  form,
  locale,
  showOrigin = true,
}: {
  c: EntreprisesContent["demo"];
  form: EntreprisesContent["form"];
  locale: "fr" | "en";
  showOrigin?: boolean;
}) {
  return (
    <section id="demo" aria-labelledby="demo-title" style={{ ...BAND, background: "var(--color-blue-p)", scrollMarginTop: 70 }}>
      <div style={INNER}>
        {showOrigin && (
          <p className="serif rv-up" style={{ fontSize: "clamp(22px,2.2vw,30px)", lineHeight: 1.3, maxWidth: 820, margin: "0 0 56px" }}>
            {c.origin}
          </p>
        )}
        <SectionHead id="demo-title" label={c.label} title={c.title} subtitle={c.subtitle} />
        <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,1.4fr) minmax(0,.6fr)", gap: "clamp(24px,4vw,56px)", alignItems: "start" }}>
          <div style={{ background: "#fff", borderRadius: 24, padding: "clamp(22px,3vw,40px)", boxShadow: "0 8px 24px rgba(15,14,12,.05)", position: "relative" }}>
            <DemoForm c={form} locale={locale} />
          </div>
          <aside aria-label={c.asideTitle} style={{ display: "grid", gap: 22 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(15,14,12,.62)", margin: 0 }}>
              {c.asideTitle}
            </h3>
            <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 16 }}>
              {c.points.map((p, i) => (
                <li key={p} style={{ display: "grid", gridTemplateColumns: "34px 1fr", gap: 10, fontSize: 15, lineHeight: 1.55 }}>
                  <span aria-hidden className="serif" style={{ fontSize: 24, lineHeight: 1, color: "var(--color-blue)" }}>
                    {i + 1}.
                  </span>
                  {p}
                </li>
              ))}
            </ol>
            <ul style={{ listStyle: "none", margin: 0, padding: "18px 0 0", borderTop: "1px solid rgba(15,14,12,.15)", display: "grid", gap: 8, fontSize: 14, fontWeight: 600 }}>
              {c.facts.map((f) => (
                <li key={f} style={{ display: "flex", gap: 8 }}>
                  <span aria-hidden style={{ color: "var(--color-green)" }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 14, color: "rgba(15,14,12,.65)", margin: 0 }}>
              {c.contact}{" "}
              <a href="mailto:contact@hiry.fr" style={{ color: "var(--color-blue)", fontWeight: 600 }}>
                contact@hiry.fr
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
