import type { ReactNode } from "react";
import type { EntreprisesContent, ModuleKey } from "@/content/entreprises/types";
import SectionHead, { SECTION } from "./SectionHead";
import ModuleTabs from "./ModuleTabs";
import { Illustrative, MarqueMock, MatchingMock, OffreMock, ProfilMock, SuiviMock } from "./mockups";

/**
 * 03 · Les 5 bénéfices : liste numérotée à gauche, à droite le bénéfice
 * (h3), la fonctionnalité qui le produit et son écran.
 * Le site carrières porte le badge « En option ».
 */
export default function Modules({
  c,
  illustrative,
}: {
  c: EntreprisesContent["modules"];
  illustrative: string;
}) {
  const mocks: Record<ModuleKey, ReactNode> = {
    matching: <MatchingMock m={c.mock.matching} />,
    profil: <ProfilMock m={c.mock.profil} />,
    offre: <OffreMock m={c.mock.offre} />,
    marque: <MarqueMock m={c.mock.marque} />,
    suivi: <SuiviMock m={c.mock.suivi} />,
  };

  const tabs = c.items.map((item) => ({
    key: item.key,
    tab: item.tab,
    caption: item.label,
    panel: (
      <div style={{ display: "grid", gap: 22 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
            <h3 style={{ fontWeight: 700, fontSize: "clamp(22px,2vw,30px)", letterSpacing: "-.025em", lineHeight: 1.15, margin: 0 }}>
              {item.title}
            </h3>
            {item.optional && <span className="opt-badge">{c.optionBadge}</span>}
          </div>
          <p style={{ fontSize: 15.5, lineHeight: 1.6, color: "rgba(15,14,12,.7)", margin: "0 0 8px", maxWidth: 620 }}>{item.text}</p>
          <p style={{ fontSize: 13.5, color: "rgba(15,14,12,.62)", margin: 0 }}>
            <strong style={{ color: "var(--color-blue)" }}>{c.howPrefix}</strong> {item.how}
          </p>
        </div>
        <div className="mod-shot">
          {mocks[item.key]}
          <Illustrative label={illustrative} />
        </div>
      </div>
    ),
  }));

  return (
    <section id="modules" aria-labelledby="modules-title" className="ent-screen" style={SECTION}>
      <ModuleTabs
        label={c.tablistLabel}
        pauseLabel={c.pause}
        playLabel={c.play}
        head={<SectionHead id="modules-title" label={c.label} title={c.title} subtitle={c.subtitle} />}
        tabs={tabs}
      />
    </section>
  );
}
