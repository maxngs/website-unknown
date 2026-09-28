import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

/**
 * Ce que le candidat pilote lui-même : rejoindre un vivier (consentement
 * explicite) et déclarer sa disponibilité (sortir des recherches).
 *
 * ⚠️ Ne pas parler ici des veilles entreprises : le candidat n'en est pas
 * prévenu et ne peut pas s'y soustraire, hors déclaration d'indisponibilité.
 */

/** Les quatre états déclarés par le candidat ; `on` = celui coché. */
const STATES = [
  { key: "s1", status: "visible", on: false },
  { key: "s2", status: "visibleDate", on: false },
  { key: "s3", status: "hidden", on: false },
  { key: "s4", status: "hidden", on: true },
] as const;

function Block({
  dark = false,
  index,
  visual,
  title,
  children,
}: {
  dark?: boolean;
  index: number;
  visual: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="rv-scale"
      style={{
        background: dark ? "var(--color-ink)" : "#fff",
        color: dark ? "var(--color-bg)" : undefined,
        border: dark ? undefined : "1px solid rgba(15,14,12,.08)",
        borderRadius: 24,
        padding: "clamp(24px,3vw,36px)",
        display: "flex",
        flexDirection: "column",
        gap: 28,
        animationRange: `entry ${index * 8}% entry ${30 + index * 8}%`,
      }}
    >
      {visual}
      <div>
        <h3
          style={{
            fontSize: "clamp(21px,2vw,26px)",
            fontWeight: 700,
            letterSpacing: "-.025em",
            lineHeight: 1.15,
            margin: "0 0 14px",
            textWrap: "balance",
          }}
        >
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}

export default async function Controle() {
  const t = await getTranslations("candidates.control");

  const p = (dark: boolean, strong = false) => ({
    fontSize: strong ? 15.5 : 14.5,
    lineHeight: 1.6,
    margin: "0 0 10px",
    color: strong
      ? undefined
      : dark
        ? "rgba(247,243,236,.62)"
        : "rgba(15,14,12,.62)",
  });

  return (
    <section
      id="controle"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <Label>{t("label")}</Label>
        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .7fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 44,
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: 0,
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

      <div
        data-r="g"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,minmax(0,1fr))",
          gap: 18,
        }}
      >
        {/* Vivier : une fiche entreprise, sans offre, avec le consentement */}
        <Block
          index={0}
          title={t("pool.title")}
          visual={
            <div
              style={{
                background: "var(--color-cyan)",
                borderRadius: 18,
                padding: "clamp(18px,2.4vw,28px)",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  padding: 18,
                  boxShadow: "0 18px 40px -26px rgba(15,14,12,.4)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 16,
                  }}
                >
                  <span
                    className="serif"
                    style={{
                      width: 42,
                      height: 42,
                      flex: "none",
                      borderRadius: 11,
                      background: "var(--color-ink)",
                      color: "var(--color-bg)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 20,
                    }}
                  >
                    N
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 15 }}>
                      {t("pool.company")}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(15,14,12,.5)" }}>
                      {t("pool.meta")}
                    </div>
                  </div>
                  <span
                    data-r="hide"
                    style={{
                      fontSize: 10.5,
                      fontWeight: 700,
                      borderRadius: 999,
                      padding: "4px 10px",
                      background: "var(--color-bg)",
                      color: "rgba(15,14,12,.55)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t("pool.noOffer")}
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 10,
                    fontSize: 12.5,
                    lineHeight: 1.4,
                    padding: "12px 0",
                    borderTop: "1px solid rgba(15,14,12,.08)",
                  }}
                >
                  <span
                    aria-hidden
                    style={{
                      width: 18,
                      height: 18,
                      flex: "none",
                      borderRadius: 5,
                      background: "var(--color-blue)",
                      color: "#fff",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 11,
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {t("pool.consent")}
                </div>

                <div
                  style={{
                    background: "var(--color-ink)",
                    color: "var(--color-bg)",
                    borderRadius: 999,
                    textAlign: "center",
                    padding: "12px 18px",
                    fontSize: 13.5,
                    fontWeight: 700,
                  }}
                >
                  {t("pool.button")}
                </div>
              </div>
            </div>
          }
        >
          <p style={p(false, true)}>{t("pool.p1")}</p>
          <p style={{ ...p(false), margin: 0 }}>{t("pool.p2")}</p>
        </Block>

        {/* Disponibilité : les quatre états, « J'ai trouvé » coché */}
        <Block
          dark
          index={1}
          title={t("availability.title")}
          visual={
            <div
              style={{
                background: "var(--color-dark-card)",
                borderRadius: 18,
                padding: "clamp(18px,2.4vw,24px)",
              }}
            >
              <div
                className="serif"
                style={{ fontSize: 20, marginBottom: 14 }}
              >
                {t("availability.question")}
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                {STATES.map((s) => (
                  <div
                    key={s.key}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 11,
                      borderRadius: 12,
                      padding: "10px 12px",
                      fontSize: 13,
                      fontWeight: s.on ? 700 : 500,
                      background: s.on ? "rgba(196,248,255,.1)" : undefined,
                      border: s.on
                        ? "1px solid rgba(196,248,255,.45)"
                        : "1px solid transparent",
                    }}
                  >
                    <span
                      aria-hidden
                      style={{
                        width: 16,
                        height: 16,
                        flex: "none",
                        borderRadius: "50%",
                        border: `2px solid ${s.on ? "var(--color-cyan)" : "rgba(247,243,236,.3)"}`,
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      {s.on && (
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--color-cyan)",
                          }}
                        />
                      )}
                    </span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      {t(`availability.${s.key}`)}
                    </span>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                        color:
                          s.status === "hidden"
                            ? "rgba(247,243,236,.45)"
                            : "var(--color-cyan)",
                      }}
                    >
                      {t(`availability.${s.status}`)}
                    </span>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 14,
                  paddingTop: 12,
                  borderTop: "1px dashed rgba(247,243,236,.15)",
                  fontSize: 12.5,
                  color: "var(--color-cyan)",
                }}
              >
                ↳ {t("availability.foot")}
              </div>
            </div>
          }
        >
          <p style={p(true, true)}>{t("availability.p1")}</p>
          <p style={{ ...p(true), margin: 0 }}>{t("availability.p2")}</p>
        </Block>
      </div>
    </section>
  );
}
