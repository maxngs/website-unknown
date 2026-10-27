import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";
import Counter from "./Counter";

/**
 * 10 · Preuves : chiffres, mention JCDecaux × VivaTech, médias et
 * histoires clients. Chaque bloc a son interrupteur `enabled` dans le
 * contenu : rien n'est affiché tant que ce n'est pas validé.
 */
export default function Proofs({
  c,
  locale,
}: {
  c: EntreprisesContent["proofs"];
  locale: string;
}) {
  const t = c.testimonials;
  return (
    <section id="preuves" aria-labelledby="preuves-title" style={{ ...BAND, background: "#F2F8FC" }}>
      <div style={INNER}>
        <SectionHead id="preuves-title" label={c.label} title={c.title} />
        <dl data-r="g" style={{ display: "grid", gridTemplateColumns: `repeat(${c.stats.length},minmax(0,1fr))`, gap: 16, margin: 0 }}>
          {c.stats.map((s, i) => (
            <div key={s.label} className={`rv-up${i ? ` rv-d${Math.min(i, 3)}` : ""}`} style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 18 }}>
              <dt style={{ fontWeight: 700, fontSize: "clamp(38px,4vw,56px)", letterSpacing: "-.04em", lineHeight: 1 }}>
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} locale={locale} />
              </dt>
              <dd style={{ margin: "10px 0 0", fontSize: 14.5, lineHeight: 1.5, color: "rgba(15,14,12,.65)" }}>{s.label}</dd>
            </div>
          ))}
        </dl>

        {(c.jcdecaux.enabled || c.media.enabled) && (
          <div className="rv-up" style={{ marginTop: 44, display: "grid", gap: 14, fontSize: 15 }}>
            {c.jcdecaux.enabled && <p style={{ margin: 0, fontWeight: 600 }}>{c.jcdecaux.text}</p>}
            {c.media.enabled && (
              <p style={{ margin: 0, color: "rgba(15,14,12,.65)" }}>
                <strong style={{ color: "var(--color-ink)" }}>{c.media.label}</strong> {c.media.list.join(" · ")}
              </p>
            )}
          </div>
        )}

        {t.enabled && t.stories.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(15,14,12,.62)", margin: "0 0 18px" }}>
              {t.label}
            </h3>
            <div data-r="g" style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 16 }}>
              {t.stories.map((s) => (
                <a key={s.title} href={s.href} className="lift-card" style={{ display: "grid", gap: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-blue)" }}>{s.sector}</span>
                  <span style={{ fontWeight: 700, fontSize: 18, lineHeight: 1.3 }}>{s.title}</span>
                  <span style={{ fontSize: 14, fontWeight: 600 }}>{t.read} →</span>
                </a>
              ))}
            </div>
            {t.quote.text && (
              <figure style={{ margin: "32px 0 0" }}>
                <blockquote className="serif" style={{ margin: 0, fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.3 }}>
                  {t.quote.text}
                </blockquote>
                <figcaption style={{ marginTop: 12, fontSize: 14, color: "rgba(15,14,12,.6)" }}>
                  {t.quote.author}, {t.quote.role}
                </figcaption>
              </figure>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
