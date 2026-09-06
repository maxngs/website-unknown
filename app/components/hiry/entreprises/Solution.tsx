import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

/** Bloc « fonctionnalité clé » : texte + panneau, alternant gauche/droite. */
function FeatureRow({
  eyebrow,
  title,
  desc,
  bullets,
  more,
  panel,
  reverse = false,
  marginBottom = 80,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  bullets: string[];
  more: string;
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
          color: "var(--color-blue-2)",
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
          margin: "0 0 26px",
          padding: 0,
          display: "grid",
          gap: 11,
          fontSize: 14.5,
          color: "rgba(15,14,12,.8)",
        }}
      >
        {bullets.map((b) => (
          <li key={b} style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "var(--color-blue)", fontWeight: 700 }}>
              ✓
            </span>
            {b}
          </li>
        ))}
      </ul>
      <a
        href="#cta"
        className="btn btn-outline"
        style={{ padding: "12px 24px", fontSize: 14, borderWidth: 1.5 }}
      >
        {more}
      </a>
    </div>
  );

  const visual = (
    <div
      className={reverse ? "rv-left" : "rv-right"}
      style={{
        background: "var(--color-blue-p)",
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

function StaticBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
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
        <span style={{ color: "var(--color-blue)", fontWeight: 700 }}>
          {value}%
        </span>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: "#EFF5FA" }}>
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            borderRadius: 4,
            background: color,
          }}
        />
      </div>
    </div>
  );
}

function HironNote({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        background: "#F2F8FC",
        borderRadius: 12,
        padding: "13px 15px",
        fontSize: 13,
        lineHeight: 1.5,
        color: "rgba(15,14,12,.75)",
      }}
    >
      {children}
    </div>
  );
}

export default async function Solution() {
  const t = await getTranslations("companies.solution");

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

      {/* 01 · Culture */}
      <FeatureRow
        eyebrow={t("f1.label")}
        title={t("f1.title")}
        desc={t("f1.desc")}
        bullets={[t("f1.b1"), t("f1.b2"), t("f1.b3")]}
        more={t("f1.more")}
        panel={
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 18,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 15 }}>
                {t("f1.dna")}
              </span>
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  background: "var(--color-green-p)",
                  color: "var(--color-green)",
                  padding: "5px 11px",
                  borderRadius: 999,
                }}
              >
                {t("f1.analyzed")}
              </span>
            </div>
            <div style={{ display: "grid", gap: 12, marginBottom: 18 }}>
              <StaticBar label={t("f1.axis1")} value={92} color="#0F4B70" />
              <StaticBar label={t("f1.axis2")} value={88} color="#14608C" />
              <StaticBar label={t("f1.axis3")} value={95} color="#0F4B70" />
              <StaticBar label={t("f1.axis4")} value={85} color="#14608C" />
            </div>
            <HironNote>
              <strong style={{ color: "var(--color-blue)" }}>
                {t("f1.hiron")}
              </strong>{" "}
              {t("f1.hironMsg")}
            </HironNote>
          </>
        }
      />

      {/* 02 · Temps (visuel à gauche) */}
      <FeatureRow
        reverse
        eyebrow={t("f2.label")}
        title={t("f2.title")}
        desc={t("f2.desc")}
        bullets={[t("f2.b1"), t("f2.b2"), t("f2.b3")]}
        more={t("f1.more")}
        panel={
          <>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 18 }}>
              {t("f2.panelTitle")}
            </div>
            <div
              data-r="g"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <div
                style={{
                  background: "var(--color-bg)",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "rgba(15,14,12,.45)",
                    marginBottom: 10,
                  }}
                >
                  {t("f2.before")}
                </div>
                <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
                  {[
                    [t("f2.beforeCv"), "70+"],
                    [t("f2.beforeDays"), "21j"],
                    [t("f2.beforeRel"), "12%"],
                  ].map(([l, v]) => (
                    <div
                      key={l}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "rgba(15,14,12,.6)" }}>{l}</span>
                      <strong>{v}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background: "var(--color-ink)",
                  color: "var(--color-bg)",
                  borderRadius: 12,
                  padding: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    letterSpacing: ".1em",
                    color: "var(--color-cyan)",
                    marginBottom: 10,
                  }}
                >
                  {t("f2.after")}
                </div>
                <div style={{ display: "grid", gap: 8, fontSize: 13 }}>
                  {[
                    [t("f2.afterProfiles"), "5", false],
                    [t("f2.afterTime"), "2 min", false],
                    [t("f2.afterRel"), "94%", true],
                  ].map(([l, v, hl]) => (
                    <div
                      key={l as string}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ color: "rgba(247,243,236,.6)" }}>{l}</span>
                      <strong
                        style={
                          hl ? { color: "var(--color-cyan)" } : undefined
                        }
                      >
                        {v}
                      </strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        }
      />

      {/* 03 · Au-delà du CV */}
      <FeatureRow
        marginBottom={40}
        eyebrow={t("f3.label")}
        title={t("f3.title")}
        desc={t("f3.desc")}
        bullets={[t("f3.b1"), t("f3.b2"), t("f3.b3")]}
        more={t("f1.more")}
        panel={
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 11.5,
                  fontWeight: 700,
                  background: "#FFF3D6",
                  color: "#8A6410",
                  padding: "5px 11px",
                  borderRadius: 999,
                }}
              >
                {t("f3.topMatch")}
              </span>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 22,
                  color: "var(--color-blue)",
                }}
              >
                96%
                <span style={{ fontSize: 12, color: "rgba(15,14,12,.5)" }}>
                  {" "}
                  {t("f3.match")}
                </span>
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 42,
                  height: 42,
                  flex: "none",
                  borderRadius: "50%",
                  background: "var(--color-blue-p)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                LM
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15 }}>Léa Martin</div>
                <div
                  style={{ fontSize: 12.5, color: "rgba(15,14,12,.55)" }}
                >
                  {t("f3.role")}
                </div>
              </div>
            </div>

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
                [t("f3.axCulture"), 98],
                [t("f3.axSkills"), 94],
                [t("f3.axSoft"), 96],
                [t("f3.axAmbition"), 91],
              ].map(([label, v]) => (
                <div
                  key={label as string}
                  style={{
                    background: "#F2F8FC",
                    borderRadius: 10,
                    padding: "10px 4px",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 17,
                      color: "var(--color-blue)",
                    }}
                  >
                    {v}
                  </div>
                  <div
                    style={{ fontSize: 11, color: "rgba(15,14,12,.55)" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 6,
                marginBottom: 16,
              }}
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    background: "var(--color-bg)",
                    borderRadius: 999,
                    padding: "5px 11px",
                  }}
                >
                  {t(`f3.tag${n}`)}
                </span>
              ))}
            </div>

            <HironNote>
              <strong style={{ color: "var(--color-blue)" }}>
                {t("f1.hiron")}
              </strong>{" "}
              {t("f3.hironMsg")}
            </HironNote>
          </>
        }
      />
    </section>
  );
}
