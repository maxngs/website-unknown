import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { BAND, INNER } from "./SectionHead";
import HironLive from "./HironLive";

/** 02 · Hiron en action : l'IA montrée au travail, pas décrite. */
export default function HironSection({
  c,
  illustrative,
}: {
  c: EntreprisesContent["hiron"];
  illustrative: string;
}) {
  return (
    <section id="hiron" aria-labelledby="hiron-title" style={{ ...BAND, background: "#F2F8FC" }}>
      <div data-r="g" style={{ ...INNER, display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
        <div>
          <SectionHead id="hiron-title" label={c.label} title={c.title} subtitle={c.subtitle} />
          <blockquote className="rv-up" style={{ margin: 0, borderLeft: "2px solid var(--color-blue)", paddingLeft: 18 }}>
            <p className="serif" style={{ fontSize: "clamp(22px,2vw,28px)", lineHeight: 1.25, margin: 0 }}>
              {c.quote}
            </p>
          </blockquote>
        </div>
        <div className="rv-scale">
          <HironLive c={c} illustrative={illustrative} />
        </div>
      </div>
    </section>
  );
}
