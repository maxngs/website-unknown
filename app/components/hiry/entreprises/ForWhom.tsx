import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";
import DemoLink from "./DemoLink";
import Counter from "./Counter";

/**
 * 09 · Pour qui : deux profils d'entreprise, l'encart « volume », puis les
 * chiffres. JCDecaux, médias et témoignages ont chacun leur interrupteur
 * dans le contenu : rien ne s'affiche tant que ce n'est pas validé.
 */
export default function ForWhom({
  c,
  locale,
}: {
  c: EntreprisesContent["forWhom"];
  locale: string;
}) {
  const p = c.proofs;
  const t = p.testimonials;
  return (
    <section id="pour-qui" aria-labelledby="pour-qui-title" className="ent-screen" style={SECTION}>
      <SectionHead id="pour-qui-title" label={c.label} title={c.title} />
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.15fr", gap: 14 }}>
        {c.cards.map((card, i) => (
          <article key={card.key} className={`lift-card rv-up${i ? ` rv-d${i}` : ""}`}>
            <h3 style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-.02em", margin: "0 0 10px" }}>{card.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(15,14,12,.68)", margin: 0 }}>{card.text}</p>
          </article>
        ))}
        <article
          className="rv-up rv-d2"
          style={{ background: "var(--color-blue)", color: "#fff", borderRadius: 20, padding: 28, display: "flex", flexDirection: "column", gap: 12, justifyContent: "space-between" }}
        >
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-.02em", margin: "0 0 10px" }}>{c.volume.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: 0 }}>{c.volume.text}</p>
          </div>
          <DemoLink
            className="btn btn-white"
            style={{ fontSize: 14.5, padding: "13px 22px", alignSelf: "flex-start" }}
            prefill={{ mode: "demo", problematique: "campagnes_volume", formule: "sur_mesure" }}
          >
            {c.volume.cta}
          </DemoLink>
        </article>
      </div>

      <div style={{ marginTop: "clamp(36px,5vh,64px)" }}>
        <h3 className="ats-kicker">{p.label}</h3>
        <dl data-r="g" style={{ display: "grid", gridTemplateColumns: `repeat(${p.stats.length},minmax(0,1fr))`, gap: 16, margin: 0 }}>
          {p.stats.map((s) => (
            <div key={s.label} style={{ borderTop: "2px solid var(--color-ink)", paddingTop: 14 }}>
              <dt style={{ fontWeight: 700, fontSize: "clamp(34px,3.4vw,48px)", letterSpacing: "-.04em", lineHeight: 1 }}>
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} locale={locale} />
              </dt>
              <dd style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.5, color: "rgba(15,14,12,.65)" }}>{s.label}</dd>
            </div>
          ))}
        </dl>
        {(p.jcdecaux.enabled || p.media.enabled) && (
          <div style={{ marginTop: 22, display: "grid", gap: 8, fontSize: 14.5 }}>
            {p.jcdecaux.enabled && <p style={{ margin: 0, fontWeight: 600 }}>{p.jcdecaux.text}</p>}
            {p.media.enabled && (
              <p style={{ margin: 0, color: "rgba(15,14,12,.65)" }}>
                <strong style={{ color: "var(--color-ink)" }}>{p.media.label}</strong> {p.media.list.join(" · ")}
              </p>
            )}
          </div>
        )}
        {t.enabled && t.stories.length > 0 && (
          <div data-r="g" style={{ marginTop: 28, display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 14 }}>
            {t.stories.map((s) => (
              <a key={s.title} href={s.href} className="lift-card" style={{ display: "grid", gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-blue)" }}>{s.sector}</span>
                <span style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>{s.title}</span>
                <span style={{ fontSize: 14, fontWeight: 600 }}>{t.read} →</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
