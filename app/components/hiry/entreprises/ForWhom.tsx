import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";
import DemoLink from "./DemoLink";

/** 09 · Pour qui : cartes par taille, puis l'encart « Vous recrutez en volume ? ». */
export default function ForWhom({ c }: { c: EntreprisesContent["forWhom"] }) {
  const cards = c.cards.filter((card) => card.enabled);
  return (
    <section id="pour-qui" aria-labelledby="pour-qui-title" style={SECTION}>
      <SectionHead id="pour-qui-title" label={c.label} title={c.title} />
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: `repeat(${cards.length},minmax(0,1fr))`, gap: 16, marginBottom: 16 }}>
        {cards.map((card, i) => (
          <article key={card.key} className={`lift-card rv-up${i ? ` rv-d${i}` : ""}`}>
            <h3 style={{ fontWeight: 700, fontSize: 21, letterSpacing: "-.02em", margin: "0 0 10px" }}>{card.title}</h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(15,14,12,.65)", margin: 0 }}>{card.text}</p>
          </article>
        ))}
      </div>
      <div
        data-r="g"
        className="rv-up"
        style={{
          background: "var(--color-blue)",
          color: "#fff",
          borderRadius: 22,
          padding: "clamp(28px,3.4vw,48px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 28,
          alignItems: "center",
        }}
      >
        <div>
          <h3 style={{ fontWeight: 700, fontSize: "clamp(24px,2.4vw,34px)", letterSpacing: "-.03em", margin: "0 0 8px" }}>{c.volume.title}</h3>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(255,255,255,.8)", margin: 0, maxWidth: 620 }}>{c.volume.text}</p>
        </div>
        <DemoLink className="btn btn-white" style={{ fontSize: 15, padding: "15px 26px" }} prefill={{ mode: "demo", problematique: "campagnes_volume", formule: "sur_mesure" }}>
          {c.volume.cta}
        </DemoLink>
      </div>
    </section>
  );
}
