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

function Eyebrow({ children }: { children: ReactNode }) {
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

export function HeroVisual({ c }: { c: EntreprisesContent["hero"] }) {
  return (
    <div style={{ display: "grid", gap: 14, width: "100%", maxWidth: 440 }}>
      <Screen className="hero-float-1">
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <Avatar initials="IB" size={42} />
          <div style={{ flex: "1 1 140px", minWidth: 0 }}>
            <div style={{ fontWeight: 700, fontSize: 15 }}>{c.card.name}</div>
            <div style={{ fontSize: 12.5, color: "rgba(15,14,12,.62)" }}>{c.card.role}</div>
          </div>
          <ScorePill value={c.card.score} suffix={c.card.scoreLabel} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 14 }}>
          {c.card.pills.map((p) => (
            <div key={p.label} style={{ background: "#F2F8FC", borderRadius: 10, padding: "9px 6px", textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: "var(--color-blue)" }}>{p.value}</div>
              <div style={{ fontSize: 11, color: "rgba(15,14,12,.62)" }}>{p.label}</div>
            </div>
          ))}
        </div>
        <Eyebrow>{c.card.whyTitle}</Eyebrow>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 7, fontSize: 13 }}>
          {c.card.reasons.map((r) => (
            <li key={r} style={{ display: "flex", gap: 8 }}>
              <span aria-hidden style={{ color: "var(--color-green)", fontWeight: 700 }}>✓</span>
              {r}
            </li>
          ))}
        </ul>
      </Screen>

      <Screen className="hero-float-2" style={{ padding: 16, marginLeft: "clamp(0px,6%,40px)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <Eyebrow>{c.column.title}</Eyebrow>
          <span style={{ fontSize: 11.5, color: "rgba(15,14,12,.6)" }}>{c.column.cards.length}</span>
        </div>
        {c.column.cards.map((card, i) => (
          <MatchLine key={card.name} {...card} tone={i + 1} highlight={i === 0} />
        ))}
        <div style={{ fontSize: 12, color: "var(--color-blue)", fontWeight: 600, marginTop: 8, paddingLeft: 12 }}>
          {c.column.slot}
        </div>
      </Screen>
    </div>
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

export function MarqueMock({ m }: { m: Mock["marque"] }) {
  return (
    <Screen style={{ padding: 0, overflow: "hidden" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", borderBottom: "1px solid rgba(15,14,12,.06)", background: "#FBFAF7" }}>
        {[0, 1, 2].map((i) => (
          <span key={i} aria-hidden style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(15,14,12,.12)" }} />
        ))}
        <span style={{ fontSize: 11.5, color: "rgba(15,14,12,.6)", marginLeft: 8 }}>{m.layoutsLabel} :</span>
        {m.layouts.map((l, i) => (
          <span
            key={l}
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              borderRadius: 999,
              padding: "3px 9px",
              background: i === 0 ? "var(--color-ink)" : "transparent",
              color: i === 0 ? "#fff" : "rgba(15,14,12,.62)",
            }}
          >
            {l}
          </span>
        ))}
      </div>
      <div style={{ background: "var(--color-blue)", color: "#fff", padding: "26px 22px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".14em", opacity: 0.7, marginBottom: 10 }}>
          {m.company.toUpperCase()}
        </div>
        <div className="serif" style={{ fontSize: 26, lineHeight: 1.1 }}>
          {m.headline}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14 }}>
          {m.chips.map((ch) => (
            <span key={ch} style={{ fontSize: 11.5, background: "rgba(255,255,255,.14)", borderRadius: 999, padding: "4px 10px" }}>
              {ch}
            </span>
          ))}
        </div>
      </div>
      <div style={{ padding: "16px 22px 20px" }}>
        <Eyebrow>{m.offersTitle}</Eyebrow>
        {m.offers.map((o) => (
          <div key={o} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, padding: "8px 0", borderTop: "1px solid rgba(15,14,12,.06)" }}>
            <span>{o}</span>
            <span aria-hidden style={{ color: "var(--color-blue)" }}>→</span>
          </div>
        ))}
      </div>
    </Screen>
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
