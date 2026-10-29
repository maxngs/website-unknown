import type { CSSProperties, ReactNode } from "react";
import type { EntreprisesContent } from "@/content/entreprises";

/**
 * Mockups d'interface de la page Entreprises, codés en HTML/CSS.
 * Mêmes briques partout (carte candidat, ligne de match, colonne de suivi)
 * pour que les visuels forment une seule interface. Données fictives.
 */

type Mock = EntreprisesContent["modules"]["mock"];

export const SHADOW = "0 8px 24px rgba(15,14,12,.05)";

/** Vert de marque assombri : texte sur fond menthe, contraste AA. */
const GREEN_TEXT = "color-mix(in srgb, var(--color-green) 82%, #000)";

const TONES = ["var(--color-blue-p)", "var(--color-green-p)", "var(--color-cyan)", "#F2F8FC"];

/** Carte blanche d'interface. */
export function Screen({
  children,
  style,
  className,
}: {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={className}
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: 22,
        boxShadow: SHADOW,
        border: "1px solid rgba(15,14,12,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Petit libellé « Exemple illustratif ». */
export function Illustrative({ label }: { label: string }) {
  return (
    <div
      style={{
        fontSize: 11,
        color: "rgba(15,14,12,.6)",
        marginTop: 12,
        textAlign: "right",
      }}
    >
      {label}
    </div>
  );
}

export function Avatar({ initials, tone = 0, size = 34 }: { initials: string; tone?: number; size?: number }) {
  return (
    <span
      aria-hidden
      style={{
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: TONES[tone % TONES.length],
        display: "grid",
        placeItems: "center",
        fontWeight: 700,
        fontSize: size > 36 ? 14 : 11.5,
      }}
    >
      {initials}
    </span>
  );
}

export function ScorePill({ value, suffix }: { value: number; suffix?: string }) {
  return (
    <span
      style={{
        fontWeight: 700,
        fontSize: 14,
        color: GREEN_TEXT,
        background: "var(--color-green-p)",
        borderRadius: 999,
        padding: "4px 10px",
        whiteSpace: "nowrap",
      }}
    >
      {value}{"\u00a0"}%{suffix ? ` ${suffix}` : ""}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "rgba(15,14,12,.6)",
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );
}

/** Ligne de candidature : avatar, nom, contexte, score. */
export function MatchLine({
  initials,
  name,
  meta,
  score,
  tone,
  highlight,
}: {
  initials: string;
  name: string;
  meta: string;
  score: number;
  tone: number;
  highlight?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "10px 12px",
        borderRadius: 12,
        background: highlight ? "#F2F8FC" : undefined,
      }}
    >
      <Avatar initials={initials} tone={tone} />
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontWeight: 700, fontSize: 13.5 }}>{name}</div>
        <div style={{ fontSize: 12, color: "rgba(15,14,12,.62)" }}>{meta}</div>
      </div>
      <ScorePill value={score} />
    </div>
  );
}

function Bar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 5 }}>
        <span>{label}</span>
        <strong style={{ color: "var(--color-blue)" }}>{value}</strong>
      </div>
      <div style={{ height: 6, borderRadius: 3, background: "#EFF5FA" }}>
        <div style={{ width: `${value}%`, height: "100%", borderRadius: 3, background: "var(--color-blue)" }} />
      </div>
    </div>
  );
}

/* ── Hero : carte candidat + colonne du suivi ─────────────────────── */

/** Carte candidat du hero : score, détail, raisons du score. */
export function HeroCard({ c }: { c: EntreprisesContent["hero"] }) {
  return (
    <Screen style={{ padding: 18 }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <Avatar initials="IB" size={38} />
        <div style={{ flex: "1 1 120px", minWidth: 0 }}>
          <div style={{ fontWeight: 700, fontSize: 14 }}>{c.card.name}</div>
          <div style={{ fontSize: 12, color: "rgba(15,14,12,.62)" }}>{c.card.role}</div>
        </div>
        <ScorePill value={c.card.score} suffix={c.card.scoreLabel} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, marginBottom: 12 }}>
        {c.card.pills.map((p) => (
          <div key={p.label} style={{ background: "#F2F8FC", borderRadius: 9, padding: "7px 4px", textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: 15, color: "var(--color-blue)" }}>{p.value}</div>
            <div style={{ fontSize: 10.5, color: "rgba(15,14,12,.62)" }}>{p.label}</div>
          </div>
        ))}
      </div>
      <Eyebrow>{c.card.whyTitle}</Eyebrow>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 5, fontSize: 12.5 }}>
        {c.card.reasons.map((r) => (
          <li key={r} style={{ display: "flex", gap: 7 }}>
            <span aria-hidden style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
            {r}
          </li>
        ))}
      </ul>
    </Screen>
  );
}

/* ── Modules ───────────────────────────────────────────────────────── */

export function MatchingMock({ m }: { m: Mock["matching"] }) {
  return (
    <Screen>
      <Eyebrow>{m.offer}</Eyebrow>
      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 12 }}>{m.summary}</div>
      <div style={{ display: "grid", gap: 4 }}>
        {m.rows.map((r, i) => (
          <MatchLine key={r.name} {...r} tone={i} highlight={i === 0} />
        ))}
      </div>
      <div style={{ background: "#F2F8FC", borderRadius: 12, padding: "12px 14px", fontSize: 13, lineHeight: 1.5, marginTop: 12 }}>
        <strong style={{ color: "var(--color-blue)" }}>↳ </strong>
        {m.why}
      </div>
    </Screen>
  );
}

export function ProfilMock({ m }: { m: Mock["profil"] }) {
  return (
    <Screen>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        <span style={{ fontSize: 11.5, fontWeight: 700, background: "var(--color-blue-p)", color: "var(--color-blue)", padding: "5px 11px", borderRadius: 999 }}>
          {m.badge}
        </span>
        <ScorePill value={m.score} suffix={m.scoreLabel} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
        <Avatar initials="LM" size={42} tone={1} />
        <div>
          <div style={{ fontWeight: 700, fontSize: 15 }}>{m.name}</div>
          <div style={{ fontSize: 12.5, color: "rgba(15,14,12,.62)" }}>{m.role}</div>
        </div>
      </div>
      <div style={{ display: "grid", gap: 11, marginBottom: 16 }}>
        {m.axes.map((a) => (
          <Bar key={a.label} {...a} />
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
        {m.tags.map((t) => (
          <span key={t} style={{ fontSize: 12, fontWeight: 500, background: "var(--color-bg)", borderRadius: 999, padding: "5px 11px" }}>
            {t}
          </span>
        ))}
      </div>
      <div style={{ background: "#F2F8FC", borderRadius: 12, padding: "12px 14px", fontSize: 13, lineHeight: 1.5 }}>
        <strong style={{ color: "var(--color-blue)" }}>{m.noteLead}</strong> {m.note}
        <div style={{ fontSize: 11.5, color: "rgba(15,14,12,.62)", marginTop: 6 }}>{m.source}</div>
      </div>
    </Screen>
  );
}

export function OffreMock({ m }: { m: Mock["offre"] }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Screen>
        <Eyebrow>{m.needLabel}</Eyebrow>
        <div style={{ background: "var(--color-bg)", borderRadius: 12, padding: "11px 14px", fontSize: 13.5, marginBottom: 14 }}>
          {m.need}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, fontWeight: 700, letterSpacing: ".1em", color: "var(--color-blue)", marginBottom: 8 }}>
          <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-blue)", animation: "blinkDot 1.6s infinite" }} />
          {m.writing.toUpperCase()}
        </div>
        <div style={{ fontWeight: 700, fontSize: 14.5, marginBottom: 6 }}>{m.draftTitle}</div>
        <p style={{ fontSize: 13, lineHeight: 1.55, color: "rgba(15,14,12,.65)", margin: "0 0 12px" }}>{m.draftText}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {m.chips.map((ch) => (
            <span key={ch} style={{ fontSize: 11, fontWeight: 700, background: "var(--color-green-p)", color: GREEN_TEXT, borderRadius: 999, padding: "4px 10px" }}>
              {ch}
            </span>
          ))}
        </div>
      </Screen>
      <Screen style={{ padding: 16 }}>
        <Eyebrow>{m.diffusionTitle}</Eyebrow>
        <div style={{ display: "grid", gap: 8 }}>
          {m.channels.map((ch) => (
            <div key={ch.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
              <span>{ch.name}</span>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  borderRadius: 999,
                  padding: "3px 10px",
                  background: ch.optional ? "var(--color-bg)" : "var(--color-green-p)",
                  color: ch.optional ? "rgba(15,14,12,.62)" : GREEN_TEXT,
                }}
              >
                {ch.status}
              </span>
            </div>
          ))}
        </div>
      </Screen>
    </div>
  );
}

/**
 * Éditeur du site carrières (option), d'après la maquette produit
 * « Éditeur 2 · Contenu » : barre d'étapes, aperçu de la page (modèle
 * éditorial), bloc Offres sélectionné et synchronisé, panneau de réglages.
 * Couleurs propres à l'interface de l'app (#EEF2F5, #0B2233…) et au
 * modèle « papier » du site généré.
 */
const ED = {
  bg: "#EEF2F5",
  ink: "#0B2233",
  muted: "#4D5F6D",
  line: "#E2E8EE",
  field: "#D5DEE5",
  paper: "#F7F6F2",
  print: "#151515",
  olive: "#4E5E45",
  rule: "#CFCDC5",
} as const;

function Switch() {
  return (
    <span aria-hidden style={{ width: 26, height: 15, borderRadius: 999, background: "var(--color-blue)", position: "relative", flex: "none" }}>
      <span style={{ position: "absolute", top: 2, left: 13, width: 11, height: 11, borderRadius: "50%", background: "#fff" }} />
    </span>
  );
}

export function MarqueMock({ m }: { m: Mock["marque"] }) {
  const serif = "var(--font-hiry-accent)";
  return (
    <div className="ed-mock" style={{ background: ED.bg, color: ED.ink, borderRadius: 16, overflow: "hidden", boxShadow: SHADOW, border: `1px solid ${ED.line}` }}>
      {/* Barre supérieure de l'app */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "9px 12px", background: "#fff", borderBottom: `1px solid ${ED.line}` }}>
        <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: 0 }}>
          <span aria-hidden style={{ width: 20, height: 20, borderRadius: 6, background: "var(--color-blue)", color: "#fff", display: "grid", placeItems: "center", fontWeight: 700, fontSize: 11 }}>h</span>
          <span style={{ fontWeight: 600, fontSize: 11.5, whiteSpace: "nowrap" }}>{m.appLabel}</span>
          <span style={{ padding: "2px 7px", borderRadius: 999, background: "#EEF3F6", fontSize: 10, color: "#33475A" }}>{m.company}</span>
        </div>
        <ol className="ed-steps" style={{ listStyle: "none", margin: 0, padding: 3, display: "flex", gap: 2, borderRadius: 999, background: "#F2F6F8", fontSize: 10.5 }}>
          {m.steps.map((step, i) => {
            const done = i < m.activeStep;
            const active = i === m.activeStep;
            return (
              <li key={step} style={{ display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", borderRadius: 999, background: active ? "var(--color-cyan)" : undefined, color: active || done ? "var(--color-blue)" : ED.muted, fontWeight: active ? 700 : 500 }}>
                <span aria-hidden style={{ width: 13, height: 13, borderRadius: "50%", display: "grid", placeItems: "center", fontSize: 8, background: active || done ? "var(--color-blue)" : undefined, color: "#fff", border: active || done ? undefined : `1px solid #9AABB8`, boxSizing: "border-box" }}>
                  {done ? "✓" : active ? i + 1 : ""}
                </span>
                {step}
              </li>
            );
          })}
        </ol>
        <span style={{ padding: "5px 10px", borderRadius: 7, background: "var(--color-blue)", color: "#fff", fontWeight: 600, fontSize: 10.5 }}>{m.publish}</span>
      </div>

      <div className="ed-body" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 168px" }}>
        {/* Aperçu de la page */}
        <div style={{ padding: 14 }}>
          <div style={{ borderRadius: 8, background: ED.paper, boxShadow: "0 1px 2px rgba(11,34,51,.08), 0 10px 24px rgba(11,34,51,.10)", overflow: "hidden", color: ED.print }}>
            <div style={{ display: "flex", justifyContent: "center", padding: "4px 0", background: "#fff", borderBottom: `1px solid ${ED.line}` }}>
              <span style={{ padding: "1px 9px", borderRadius: 999, background: "#F2F6F8", fontSize: 8.5, color: ED.muted }}>{m.url}</span>
            </div>
            <div style={{ padding: "11px 14px 9px", borderBottom: `1px solid ${ED.print}` }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 7, letterSpacing: ".12em", textTransform: "uppercase", paddingBottom: 4, borderBottom: `1px solid ${ED.print}` }}>
                <span>{m.dateline}</span>
                <span>{m.issue}</span>
              </div>
              <div style={{ fontFamily: serif, fontSize: 40, lineHeight: 0.95, margin: "5px 0 4px" }}>{m.company}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 10, paddingTop: 7, borderTop: `2px solid ${ED.print}` }}>
                <div style={{ fontFamily: serif, fontSize: 17, lineHeight: 1.05 }}>
                  {m.headline} <em style={{ color: ED.olive }}>{m.headlineEm}</em>
                </div>
                <div aria-hidden style={{ minHeight: 52, background: "linear-gradient(135deg,#2A2A28,#4A4A44)", borderRadius: 2 }} />
              </div>
            </div>

            {/* Bloc Offres, sélectionné */}
            <div style={{ position: "relative", padding: "16px 14px 10px", outline: "2px solid var(--color-blue)", outlineOffset: -2 }}>
              <span style={{ position: "absolute", top: 0, left: 0, padding: "2px 7px", borderRadius: "0 0 6px 0", background: "var(--color-blue)", color: "#fff", fontSize: 8.5, fontWeight: 600 }}>
                {m.blockTag}
              </span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8, margin: "4px 0 6px" }}>
                <span style={{ fontFamily: serif, fontSize: 20 }}>{m.offersTitle}</span>
                <span style={{ fontSize: 8, color: "#55554F" }}>{m.openCount}</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 12px", borderTop: `2px solid ${ED.print}` }}>
                {m.offers.map((o) => (
                  <div key={o.t} style={{ padding: "6px 0", borderBottom: `1px solid ${ED.rule}` }}>
                    <span style={{ display: "block", fontSize: 6.5, letterSpacing: ".1em", textTransform: "uppercase", color: ED.olive }}>{o.cat}</span>
                    <span style={{ display: "block", fontFamily: serif, fontSize: 13, lineHeight: 1.1 }}>{o.t}</span>
                    <span style={{ display: "block", fontSize: 7.5, color: "#55554F" }}>{o.m}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 14px", background: ED.print, color: "#EDEDE8" }}>
              <span style={{ fontFamily: serif, fontSize: 16 }}>{m.company}</span>
              <span style={{ padding: "1px 6px", border: "1px solid #55554F", borderRadius: 999, fontSize: 7, color: "#C4C4BC" }}>{m.poweredBy}</span>
            </div>
          </div>
        </div>

        {/* Réglages du bloc sélectionné */}
        <div className="ed-panel" style={{ background: "#fff", borderLeft: `1px solid ${ED.line}`, padding: 12, display: "grid", alignContent: "start", gap: 11, fontSize: 10.5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span aria-hidden style={{ width: 24, height: 24, borderRadius: 7, background: "var(--color-cyan)", display: "grid", placeItems: "center", color: "var(--color-blue)", fontWeight: 700, fontSize: 11 }}>≡</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 12 }}>{m.panelTitle}</div>
              <div style={{ fontSize: 9, color: ED.muted }}>{m.panelPos}</div>
            </div>
          </div>
          <div style={{ padding: "8px 9px", borderRadius: 8, background: "#EAF9FB", lineHeight: 1.35 }}>
            <strong style={{ color: "var(--color-blue)" }}>{m.syncStrong}</strong> {m.syncText}
          </div>
          <div>
            <div style={{ fontWeight: 600, marginBottom: 5 }}>{m.columnsLabel}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", padding: 2, borderRadius: 7, background: "#F2F6F8" }}>
              {[1, 2, 3].map((n) => (
                <span key={n} style={{ textAlign: "center", padding: "3px 0", borderRadius: 5, fontWeight: 600, background: n === 2 ? "#fff" : undefined, boxShadow: n === 2 ? "0 1px 3px rgba(11,34,51,.15)" : undefined }}>
                  {n}
                </span>
              ))}
            </div>
          </div>
          {m.switches.map((label) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
              <span style={{ lineHeight: 1.3 }}>{label}</span>
              <Switch />
            </div>
          ))}
          <div>
            <div style={{ fontWeight: 600, marginBottom: 5 }}>{m.bgLabel}</div>
            <div style={{ display: "flex", gap: 5 }}>
              {[ED.paper, "#FFFFFF", "#DDE4D4", "#E9E8E3"].map((hex, i) => (
                <span key={hex} aria-hidden style={{ width: 22, height: 22, borderRadius: 6, border: `1px solid ${ED.field}`, background: hex, boxShadow: i === 0 ? "0 0 0 2px #fff, 0 0 0 3.5px var(--color-blue)" : undefined }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SuiviMock({ m }: { m: Mock["suivi"] }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Screen style={{ padding: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 8 }}>
          {m.columns.map((col, ci) => (
            <div key={col.title} style={{ background: "var(--color-bg)", borderRadius: 12, padding: 10, minHeight: 150 }}>
              <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".12em", color: "rgba(15,14,12,.62)", marginBottom: 8 }}>
                {col.title.toUpperCase()} · {col.cards.length}
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {col.cards.map((name, i) => (
                  <div key={name} style={{ background: "#fff", borderRadius: 9, padding: "8px 9px", display: "flex", alignItems: "center", gap: 7, fontSize: 12, fontWeight: 600, boxShadow: SHADOW }}>
                    <Avatar initials={name.slice(0, 2).toUpperCase()} tone={ci + i} size={22} />
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Screen>
      <Screen style={{ padding: 16, display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ background: "var(--color-ink)", color: "#fff", borderRadius: 12, padding: "8px 12px", textAlign: "center", flex: "none" }}>
          <div style={{ fontSize: 10, fontWeight: 700, opacity: 0.6 }}>JEU</div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>12</div>
        </div>
        <div style={{ fontSize: 13 }}>
          <div style={{ fontWeight: 700 }}>{m.slotTitle}</div>
          <div style={{ color: "rgba(15,14,12,.6)" }}>{m.slot}</div>
          <div style={{ color: "var(--color-green)", fontSize: 12, marginTop: 3 }}>✓ {m.reminder}</div>
        </div>
      </Screen>
    </div>
  );
}

/* ── Journal d'une candidature (traçabilité) ───────────────────────── */

export function JournalMock({
  title,
  log,
}: {
  title: string;
  log: EntreprisesContent["humain"]["log"];
}) {
  return (
    <div style={{ background: "var(--color-dark-card)", color: "var(--color-bg)", borderRadius: 18, padding: "20px 22px", border: "1px solid rgba(247,243,236,.08)" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontSize: 10.5,
          fontWeight: 700,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          color: "rgba(247,243,236,.55)",
          paddingBottom: 12,
          marginBottom: 4,
          borderBottom: "1px solid rgba(247,243,236,.12)",
        }}
      >
        <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-cyan)" }} />
        {title}
      </div>
      {log.map((row, i) => (
        <div
          key={row.t + row.who}
          style={{
            display: "grid",
            gridTemplateColumns: "44px 1fr",
            gap: 12,
            padding: "11px 0",
            borderTop: i ? "1px dashed rgba(247,243,236,.1)" : undefined,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          <span style={{ fontSize: 12, color: "rgba(247,243,236,.55)" }}>{row.t}</span>
          <div style={{ fontSize: 13, lineHeight: 1.45 }}>
            <strong>{row.who}</strong>
            <span style={{ color: "rgba(247,243,236,.45)" }}> · </span>
            {row.what}
            <div style={{ fontSize: 12, color: "var(--color-cyan)" }}>↳ {row.why}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
