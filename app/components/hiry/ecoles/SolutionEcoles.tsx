import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

const GREEN = "var(--color-green)";

function Row({
  eyebrow,
  title,
  desc,
  bullets,
  panel,
  reverse = false,
  marginBottom = 80,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  panel: ReactNode;
  reverse?: boolean;
  marginBottom?: number;
}) {
  const copy = (
    <div className={reverse ? "rv-right" : "rv-left"}>
      <div
        style={{
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".16em",
          color: GREEN,
          marginBottom: 16,
        }}
      >
        {eyebrow}
      </div>
      <h3
        style={{
          fontWeight: 700,
          fontSize: "clamp(26px,2.6vw,38px)",
          letterSpacing: "-.03em",
          lineHeight: 1.1,
          margin: "0 0 16px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: 15.5,
          lineHeight: 1.6,
          color: "rgba(15,14,12,.65)",
          margin: "0 0 22px",
        }}
      >
        {desc}
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "grid",
          gap: 11,
          fontSize: 14.5,
          color: "rgba(15,14,12,.8)",
        }}
      >
        {bullets.map((b) => (
          <li key={b} style={{ display: "flex", gap: 10 }}>
            <span style={{ color: GREEN, fontWeight: 700 }}>✓</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );

  const visual = (
    <div
      className={reverse ? "rv-left" : "rv-right"}
      style={{
        background: "var(--color-green-p)",
        borderRadius: 22,
        padding: 34,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: 24,
          boxShadow: "0 14px 40px rgba(15,14,12,.1)",
        }}
      >
        {panel}
      </div>
    </div>
  );

  return (
    <div
      data-r="g"
      // L'ordre du DOM est toujours texte puis visuel : sur mobile la grille
      // passe à une colonne et c'est cet ordre qui s'applique. L'alternance
      // du bureau est faite en CSS (`.feature-swap`), sinon deux visuels se
      // retrouvaient collés l'un à l'autre.
      className={reverse ? "feature-swap" : undefined}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 56,
        alignItems: "center",
        marginBottom,
      }}
    >
      {copy}
      {visual}
    </div>
  );
}

function PanelHead({
  title,
  badge,
  badgeBg = "var(--color-green-p)",
  badgeColor = GREEN,
  marginBottom = 16,
}: {
  title: string;
  badge: string;
  badgeBg?: string;
  badgeColor?: string;
  marginBottom?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom,
        gap: 12,
      }}
    >
      <span style={{ fontWeight: 700, fontSize: 15 }}>{title}</span>
      <span
        style={{
          fontSize: 11.5,
          fontWeight: 700,
          background: badgeBg,
          color: badgeColor,
          padding: "5px 11px",
          borderRadius: 999,
          whiteSpace: "nowrap",
        }}
      >
        {badge}
      </span>
    </div>
  );
}

function FunnelBar({
  label,
  value,
  width,
  color,
}: {
  label: string;
  value: string;
  width: number;
  color: string;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 13,
          fontWeight: 500,
          marginBottom: 5,
        }}
      >
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: "#F2FAF6" }}>
        <div
          style={{
            width: `${width}%`,
            height: "100%",
            borderRadius: 4,
            background: color,
          }}
        />
      </div>
    </div>
  );
}

export default async function SolutionEcoles() {
  const t = await getTranslations("schools.solution");

  return (
    <section
      id="solution"
      style={{ padding: "70px 44px 30px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ marginBottom: 64 }}>
        <Label>{t("label")}</Label>
        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .7fr",
            gap: 48,
            alignItems: "end",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.65)",
              margin: "0 0 6px",
            }}
          >
            {t("subtitle")}
          </p>
        </div>
      </div>

      {/* 01 · Relations entreprises */}
      <Row
        eyebrow={t("f1.label")}
        title={t("f1.title")}
        desc={t("f1.desc")}
        bullets={[t("f1.b1"), t("f1.b2"), t("f1.b3")]}
        panel={
          <>
            <PanelHead
              title={t("f1.panelTitle")}
              badge={t("f1.panelBadge")}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 8,
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              {[
                ["34", t("f1.kCompanies")],
                ["187", t("f1.kInterviews")],
                ["23", t("f1.kOffers")],
                ["12%", t("f1.kConversion")],
              ].map(([v, l]) => (
                <div
                  key={l}
                  style={{
                    background: "#F2FAF6",
                    borderRadius: 10,
                    padding: "12px 4px",
                  }}
                >
                  <div
                    style={{ fontWeight: 700, fontSize: 19, color: GREEN }}
                  >
                    {v}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(15,14,12,.55)" }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
              {[
                { l: t("f1.event1"), s: t("f1.event1Status"), c: GREEN },
                {
                  l: t("f1.event2"),
                  s: t("f1.event2Status"),
                  c: "rgba(15,14,12,.45)",
                },
              ].map((e) => (
                <div
                  key={e.l}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "var(--color-bg)",
                    borderRadius: 10,
                    padding: "10px 13px",
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{e.l}</span>
                  <span
                    style={{ fontSize: 11.5, fontWeight: 700, color: e.c }}
                  >
                    {e.s}
                  </span>
                </div>
              ))}
            </div>
          </>
        }
      />

      {/* 02 · Supervision (visuel à gauche) */}
      <Row
        reverse
        eyebrow={t("f2.label")}
        title={t("f2.title")}
        desc={t("f2.desc")}
        bullets={[t("f2.b1"), t("f2.b2"), t("f2.b3")]}
        panel={
          <>
            <PanelHead
              title={t("f2.panelTitle")}
              badge={t("f2.atRisk")}
              badgeBg="#FBE9E4"
              badgeColor="#B4472B"
            />
            <div style={{ display: "grid", gap: 8 }}>
              {[
                {
                  initials: "L",
                  tone: "var(--color-green-p)",
                  name: `Lucas D. · ${t("f2.prog1")}`,
                  status: t("f2.inProcess"),
                  score: "92%",
                  risk: false,
                },
                {
                  initials: "E",
                  tone: "var(--color-blue-p)",
                  name: `Emma T. · ${t("f2.prog2")}`,
                  status: t("f2.signed"),
                  score: "85%",
                  risk: false,
                },
                {
                  initials: "S",
                  tone: "#fff",
                  name: `Sophie M. · ${t("f2.prog3")}`,
                  status: t("f2.risk"),
                  score: "45%",
                  risk: true,
                },
              ].map((s) => (
                <div
                  key={s.initials}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 11,
                    background: s.risk ? "#FBE9E4" : "var(--color-bg)",
                    borderRadius: 12,
                    padding: "11px 13px",
                  }}
                >
                  <span
                    style={{
                      width: 32,
                      height: 32,
                      flex: "none",
                      borderRadius: "50%",
                      background: s.tone,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {s.initials}
                  </span>
                  <div style={{ fontSize: 13, minWidth: 0 }}>
                    <div style={{ fontWeight: 700 }}>{s.name}</div>
                    <div
                      style={
                        s.risk
                          ? { color: "#B4472B", fontWeight: 500 }
                          : { color: "rgba(15,14,12,.5)" }
                      }
                    >
                      {s.status}
                    </div>
                  </div>
                  <span
                    style={{
                      marginLeft: "auto",
                      fontWeight: 700,
                      fontSize: 14,
                      color: s.risk ? "#B4472B" : GREEN,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t("f2.scoreLabel")} {s.score}
                  </span>
                </div>
              ))}
            </div>
          </>
        }
      />

      {/* 03 · Pilotage */}
      <Row
        eyebrow={t("f3.label")}
        title={t("f3.title")}
        desc={t("f3.desc")}
        bullets={[t("f3.b1"), t("f3.b2"), t("f3.b3")]}
        panel={
          <>
            <PanelHead
              title={t("f3.funnel")}
              badge={t("f3.panelBadge")}
              marginBottom={18}
            />
            <div style={{ display: "grid", gap: 12 }}>
              <FunnelBar label={t("f3.enrolled")} value="245" width={100} color={GREEN} />
              <FunnelBar label={t("f3.completed")} value="230 · 94%" width={94} color={GREEN} />
              <FunnelBar label={t("f3.searching")} value="180 · 78%" width={78} color="#2E9077" />
              <FunnelBar label={t("f3.interviewing")} value="145 · 80%" width={80} color="#2E9077" />
              <FunnelBar label={t("f3.hired")} value="110 · 75%" width={75} color="var(--color-ink)" />
            </div>
          </>
        }
      />

      {/* 04 · Réseau partenaires (visuel à gauche) */}
      <Row
        reverse
        marginBottom={40}
        eyebrow={t("f4.label")}
        title={t("f4.title")}
        desc={t("f4.desc")}
        bullets={[t("f4.b1"), t("f4.b2"), t("f4.b3")]}
        panel={
          <>
            <PanelHead
              title={t("f4.panelTitle")}
              badge={t("f4.matches")}
            />
            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {[
                { i: "N", tone: "#CFE4F2", name: "Nextera", sector: t("f4.sector1"), n: 12 },
                { i: "G", tone: "#D6F2E8", name: "GreenCo", sector: t("f4.sector2"), n: 8 },
                { i: "F", tone: "#C4F8FF", name: "FinUp", sector: t("f4.sector3"), n: 15 },
                { i: "M", tone: "#DCEFF7", name: "MedTech", sector: t("f4.sector4"), n: 6 },
              ].map((p) => (
                <div
                  key={p.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--color-bg)",
                    borderRadius: 12,
                    padding: "12px 13px",
                  }}
                >
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      flex: "none",
                      borderRadius: "50%",
                      background: p.tone,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 12,
                    }}
                  >
                    {p.i}
                  </span>
                  <div style={{ fontSize: 12.5, minWidth: 0 }}>
                    <div style={{ fontWeight: 700 }}>{p.name}</div>
                    <div style={{ color: "rgba(15,14,12,.5)" }}>
                      {p.sector} · {p.n} {t("f4.matchesUnit")}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        }
      />
    </section>
  );
}
