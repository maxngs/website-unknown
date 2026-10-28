import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";

type Item = EntreprisesContent["ats"]["groups"][number]["items"][number];

const GREEN = "color-mix(in srgb, var(--color-green) 55%, #fff)";

/** Micro-interface d'un apport AI-native, sur fond encre. */
function Micro({ item }: { item: Item }) {
  const ui = item.ui ?? [];
  switch (item.key) {
    case "profil":
      return (
        <div style={{ display: "grid", gap: 5 }}>
          {ui.map((label, i) => (
            <div key={label} style={{ display: "grid", gridTemplateColumns: "76px 1fr", alignItems: "center", gap: 8, fontSize: 11 }}>
              <span style={{ color: "rgba(247,243,236,.65)" }}>{label}</span>
              <span style={{ height: 4, borderRadius: 2, background: "rgba(247,243,236,.12)" }}>
                <span style={{ display: "block", height: "100%", width: `${[91, 88, 82][i]}%`, borderRadius: 2, background: "var(--color-cyan)" }} />
              </span>
            </div>
          ))}
        </div>
      );
    case "matching":
      return (
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: "-.03em", color: "var(--color-cyan)" }}>{ui[0]}</span>
          <span style={{ fontSize: 12, color: "rgba(247,243,236,.65)" }}>{ui[1]}</span>
        </div>
      );
    case "offre":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5 }}>
          <span style={{ padding: "4px 9px", borderRadius: 7, border: "1px dashed rgba(247,243,236,.35)" }}>{ui[0]}</span>
          <span aria-hidden style={{ color: "var(--color-cyan)" }}>→</span>
          <span style={{ padding: "4px 9px", borderRadius: 7, background: "rgba(196,248,255,.14)", color: "var(--color-cyan)", fontWeight: 600 }}>{ui[1]}</span>
        </div>
      );
    case "veille":
      return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11.5, padding: "5px 10px", borderRadius: 999, background: "rgba(247,243,236,.08)" }}>
          <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-cyan)", animation: "blinkDot 1.6s infinite" }} />
          {ui[0]}
        </span>
      );
    case "dispo":
      return (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11.5 }}>
          <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: GREEN }} />
          <strong style={{ color: GREEN }}>{ui[0]}</strong>
          <span style={{ color: "rgba(247,243,236,.55)" }}>· {ui[1]}</span>
        </span>
      );
    case "vivier":
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span aria-hidden style={{ display: "flex" }}>
            {["var(--color-cyan)", "var(--color-blue-p)", "var(--color-green-p)", "#F2F8FC"].map((bg, i) => (
              <span key={bg} style={{ width: 22, height: 22, borderRadius: "50%", background: bg, border: "2px solid var(--color-ink)", marginLeft: i ? -7 : 0 }} />
            ))}
          </span>
          <span style={{ fontSize: 12 }}>
            <strong style={{ color: "var(--color-cyan)" }}>{ui[0]}</strong> <span style={{ color: "rgba(247,243,236,.65)" }}>{ui[1]}</span>
          </span>
        </div>
      );
    default:
      return null;
  }
}

/**
 * 06 · Un ATS complet. À gauche, la base attendue d'un logiciel de
 * recrutement, volontairement sobre ; à droite, sur fond encre, ce que seul
 * un ATS AI-native apporte, chaque apport montré par un fragment d'écran.
 */
export default function AtsComplet({
  c,
  optionBadge,
}: {
  c: EntreprisesContent["ats"];
  optionBadge: string;
}) {
  const [base, native] = c.groups;
  return (
    <section id="ats" aria-labelledby="ats-title" className="ent-screen" style={SECTION}>
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,.85fr) minmax(0,1.15fr)", gap: "clamp(24px,4vw,64px)", alignItems: "center" }}>
        <div>
          <SectionHead id="ats-title" label={c.label} title={c.title} subtitle={c.subtitle} />
          <h3 className="ats-kicker">{base.title}</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {base.items.map((it) => (
              <li key={it.title} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 8, padding: "8px 0", borderTop: "1px solid rgba(15,14,12,.1)", fontSize: 14 }}>
                <span aria-hidden style={{ color: "rgba(15,14,12,.45)", fontSize: 13 }}>✓</span>
                <div>
                  <strong style={{ fontWeight: 600 }}>{it.title}</strong>{" "}
                  <span style={{ color: "rgba(15,14,12,.62)" }}>{it.text}</span>
                  {it.optional && <span className="opt-badge" style={{ marginLeft: 8 }}>{optionBadge}</span>}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rv-up" style={{ background: "var(--color-ink)", color: "var(--color-bg)", borderRadius: 24, padding: "clamp(22px,2.6vw,34px)" }}>
          <h3 className="ats-kicker" style={{ color: "var(--color-cyan)" }}>{native.title}</h3>
          <ul data-r="g" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(247,243,236,.1)", borderRadius: 16, overflow: "hidden" }}>
            {native.items.map((it) => (
              <li key={it.title} style={{ background: "var(--color-ink)", padding: "16px 18px 18px", display: "grid", gap: 12, alignContent: "space-between", minHeight: 128 }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15.5 }}>{it.title}</div>
                  <p style={{ fontSize: 13, lineHeight: 1.5, color: "rgba(247,243,236,.65)", margin: "4px 0 0" }}>{it.text}</p>
                </div>
                <div aria-hidden>
                  <Micro item={it} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
