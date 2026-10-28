import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";
import DemoForm from "./DemoForm";

/**
 * Prise de rendez-vous (#demo), pensée pour tenir sur un écran : à gauche
 * l'accroche et ce qui se passe pendant la démo, à droite le formulaire en
 * 2 étapes. Partagée par /entreprises et /entreprises/demo.
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
    <section
      id="demo"
      aria-labelledby="demo-title"
      className="ent-screen"
      style={{ ...BAND, padding: "56px 44px", background: "var(--color-blue-p)", scrollMarginTop: 70 }}
    >
      <div data-r="g" style={{ ...INNER, display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: "clamp(28px,5vw,80px)", alignItems: "center" }}>
        <div>
          <SectionHead id="demo-title" label={c.label} title={c.title} subtitle={c.subtitle} />
          <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(15,14,12,.62)", margin: "-16px 0 14px" }}>
            {c.asideTitle}
          </h3>
          <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 12 }}>
            {c.points.map((p, i) => (
              <li key={p} style={{ display: "grid", gridTemplateColumns: "28px 1fr", gap: 8, fontSize: 15, lineHeight: 1.5 }}>
                <span aria-hidden className="serif" style={{ fontSize: 22, lineHeight: 1, color: "var(--color-blue)" }}>
                  {i + 1}.
                </span>
                {p}
              </li>
            ))}
          </ol>
          <ul style={{ listStyle: "none", margin: "22px 0 0", padding: "16px 0 0", borderTop: "1px solid rgba(15,14,12,.15)", display: "flex", flexWrap: "wrap", gap: "6px 18px", fontSize: 14, fontWeight: 600 }}>
            {c.facts.map((f) => (
              <li key={f} style={{ display: "flex", gap: 7 }}>
                <span aria-hidden style={{ color: "var(--color-green)" }}>✓</span>
                {f}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: 14, color: "rgba(15,14,12,.68)", margin: "14px 0 0" }}>
            {c.contact}{" "}
            <a href="mailto:contact@hiry.fr" style={{ color: "var(--color-blue)", fontWeight: 600 }}>
              contact@hiry.fr
            </a>
          </p>
          {showOrigin && (
            <p className="serif" style={{ fontSize: 19, lineHeight: 1.35, color: "rgba(15,14,12,.75)", margin: "26px 0 0", maxWidth: 480 }}>
              {c.origin}
            </p>
          )}
        </div>
        <div style={{ background: "#fff", borderRadius: 24, padding: "clamp(22px,2.6vw,34px)", boxShadow: "0 8px 24px rgba(15,14,12,.05)", position: "relative" }}>
          <DemoForm c={form} locale={locale} />
        </div>
      </div>
    </section>
  );
}
