import type { ReactNode } from "react";
import type { EntreprisesContent, ModuleKey } from "@/content/entreprises/types";
import SectionHead, { SECTION } from "./SectionHead";
import ModuleTabs from "./ModuleTabs";
import { Illustrative, MarqueMock, MatchingMock, OffreMock, ProfilMock, SuiviMock } from "./mockups";

/**
 * 03 · Les 5 bénéfices, portés par un sélecteur de modules : chaque
 * onglet = un bénéfice (h3), la fonctionnalité qui le produit et son
 * mockup. Le site carrières porte le badge « En option ».
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

  const tabs = c.items.map((item, i) => ({
    key: item.key,
    tab: item.tab,
    panel: (
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)", gap: "clamp(28px,5vw,72px)", alignItems: "center" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".16em", color: "var(--color-blue-2)" }}>
              {String(i + 1).padStart(2, "0")} · {item.label.toUpperCase()}
            </span>
            {item.optional && <span className="opt-badge">{c.optionBadge}</span>}
          </div>
          <h3 style={{ fontWeight: 700, fontSize: "clamp(26px,2.6vw,38px)", letterSpacing: "-.03em", lineHeight: 1.1, margin: "0 0 16px" }}>
            {item.title}
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(15,14,12,.68)", margin: "0 0 22px", maxWidth: 520 }}>
            {item.text}
          </p>
          <p style={{ display: "inline-block", fontSize: 13.5, lineHeight: 1.5, background: "#fff", borderRadius: 14, padding: "10px 14px", margin: 0, boxShadow: "0 8px 24px rgba(15,14,12,.04)" }}>
            <strong style={{ color: "var(--color-blue)" }}>{c.howPrefix}</strong> {item.how}
          </p>
        </div>
        <div style={{ background: "#F2F8FC", borderRadius: 24, padding: "clamp(18px,3vw,40px)" }}>
          {mocks[item.key]}
          <Illustrative label={illustrative} />
        </div>
      </div>
    ),
  }));

  return (
    <section id="modules" aria-labelledby="modules-title" style={SECTION}>
      <SectionHead id="modules-title" label={c.label} title={c.title} subtitle={c.subtitle} />
      <div className="rv-up">
        <ModuleTabs label={c.tablistLabel} tabs={tabs} />
      </div>
    </section>
  );
}
