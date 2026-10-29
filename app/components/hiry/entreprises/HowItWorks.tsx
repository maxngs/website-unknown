import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead from "./SectionHead";
import HowScroller from "./HowScroller";
import { Eyebrow, MatchingMock, Screen, SuiviMock } from "./mockups";

type Mock = EntreprisesContent["modules"]["mock"];

/** Extrait d'interface compact d'une étape (affiché sur mobile). */
function StepUi({ index, ui }: { index: number; ui: string[] }) {
  const [a, b] = ui;
  if (index === 0)
    return (
      <div className="how-ui">
        <span className="how-input">{a}</span>
        <span className="how-hint">
          <span aria-hidden className="how-dot" /> {b}
        </span>
      </div>
    );
  if (index === 1)
    return (
      <div className="how-ui" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {ui.map((x) => (
          <span key={x} className="how-pill">
            <span aria-hidden style={{ color: "var(--color-green)" }}>●</span> {x}
          </span>
        ))}
      </div>
    );
  if (index === 2)
    return (
      <div className="how-ui">
        <span className="how-score">{a}</span>
        <span className="how-hint">↳ {b}</span>
      </div>
    );
  return (
    <div className="how-ui">
      <span className="how-slot">{a}</span>
      <span className="how-hint">✓ {b}</span>
    </div>
  );
}

/** Écran 1 : le besoin se tape, Hiron rédige l'offre. */
function DraftScreen({ m }: { m: Mock["offre"] }) {
  return (
    <Screen style={{ padding: 28 }}>
      <Eyebrow>{m.needLabel}</Eyebrow>
      <div style={{ background: "var(--color-bg)", borderRadius: 12, padding: "13px 16px", fontSize: 15, fontWeight: 600, marginBottom: 20 }}>
        <span className="how-type">{m.need}</span>
      </div>
      <div className="how-pop" style={{ ["--i" as string]: 1, display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", color: "var(--color-blue)", marginBottom: 10 }}>
        <span aria-hidden className="how-dot" />
        {m.writing.toUpperCase()}
      </div>
      <div className="how-pop" style={{ ["--i" as string]: 2, fontWeight: 700, fontSize: 18, letterSpacing: "-.01em", marginBottom: 12 }}>
        {m.draftTitle}
      </div>
      <div style={{ display: "grid", gap: 8, marginBottom: 18 }}>
        {[96, 88, 92, 64].map((w, i) => (
          <span key={i} className="how-line" style={{ width: `${w}%`, ["--i" as string]: i + 3 }} />
        ))}
      </div>
      <div className="how-pop" style={{ ["--i" as string]: 7, display: "flex", gap: 6, flexWrap: "wrap" }}>
        {m.chips.map((ch) => (
          <span key={ch} className="how-chip">{ch}</span>
        ))}
      </div>
    </Screen>
  );
}

/** Écran 2 : une publication, plusieurs canaux. */
function DiffusionScreen({ m }: { m: Mock["offre"] }) {
  return (
    <Screen style={{ padding: 28 }}>
      <Eyebrow>{m.diffusionTitle}</Eyebrow>
      <div style={{ fontWeight: 700, fontSize: 18, letterSpacing: "-.01em", marginBottom: 20 }}>{m.draftTitle}</div>
      <div style={{ display: "grid", gap: 10 }}>
        {m.channels.map((ch, i) => (
          <div key={ch.name} className="how-pop how-channel" style={{ ["--i" as string]: i + 1 }}>
            <span aria-hidden className="how-channel-icon" data-optional={ch.optional || undefined}>
              {ch.optional ? "+" : "✓"}
            </span>
            <span style={{ flex: 1, fontWeight: 600 }}>{ch.name}</span>
            <span className="how-status" data-optional={ch.optional || undefined}>{ch.status}</span>
          </div>
        ))}
      </div>
    </Screen>
  );
}

/**
 * 04 · Comment ça marche : 4 étapes épinglées au défilement (bureau), sur
 * fond Atlantic Blue. Écrans à droite : mêmes données que les mockups des
 * modules, pour une seule interface cohérente.
 */
export default function HowItWorks({
  c,
  mock,
  illustrative,
}: {
  c: EntreprisesContent["how"];
  mock: Mock;
  illustrative: string;
}) {
  const panels = [
    <DraftScreen key="draft" m={mock.offre} />,
    <DiffusionScreen key="diffusion" m={mock.offre} />,
    <MatchingMock key="matching" m={mock.matching} />,
    <SuiviMock key="suivi" m={mock.suivi} />,
  ];

  return (
    <section id="how" aria-labelledby="how-title" className="how-section">
      <HowScroller
        head={<SectionHead id="how-title" label={c.label} title={c.title} dark />}
        steps={c.steps.map((s, i) => ({ title: s.title, text: s.text, ui: <StepUi index={i} ui={s.ui} /> }))}
        panels={panels}
        stepLabel={c.stepLabel}
        footnote={illustrative}
      />
    </section>
  );
}
