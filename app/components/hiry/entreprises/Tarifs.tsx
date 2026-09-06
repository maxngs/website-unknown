import { getTranslations } from "next-intl/server";
import { Label } from "../ui";
import Link from "../Link";
import { APP, CONTACT } from "../links";

/** `soon` : numéros de bullets pas encore disponibles (badge « Bientôt »). */
const PLANS = [
  { key: "solo", bullets: 3, featured: false, href: APP.signup, soon: [] },
  { key: "starter", bullets: 4, featured: true, href: CONTACT, soon: [] },
  { key: "growth", bullets: 3, featured: false, href: CONTACT, soon: [2] },
] as const;

export default async function Tarifs() {
  const t = await getTranslations("companies.pricing");

  return (
    <section
      id="tarifs"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <Label>{t("label")}</Label>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 44,
            flexWrap: "wrap",
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
              fontSize: 14,
              color: "rgba(15,14,12,.55)",
              margin: "0 0 8px",
              maxWidth: 320,
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {PLANS.map((p, i) => {
            const dark = p.featured;
            return (
              <div
                key={p.key}
                className="rv-scale"
                style={{
                  background: dark ? "var(--color-ink)" : "#fff",
                  color: dark ? "var(--color-bg)" : undefined,
                  border: dark ? undefined : "1px solid rgba(15,14,12,.1)",
                  borderRadius: 20,
                  padding: 34,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  position: "relative",
                  animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
                }}
              >
                {dark && (
                  <span
                    style={{
                      position: "absolute",
                      top: -12,
                      right: 22,
                      background: "var(--color-cyan)",
                      color: "var(--color-ink)",
                      fontSize: 11.5,
                      fontWeight: 700,
                      padding: "6px 13px",
                      borderRadius: 999,
                    }}
                  >
                    {t("starter.badge")}
                  </span>
                )}

                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: ".08em",
                    color: dark
                      ? "rgba(247,243,236,.6)"
                      : "rgba(15,14,12,.5)",
                  }}
                >
                  {t(`${p.key}.name`)}
                </div>

                <div>
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: 42,
                      letterSpacing: "-.03em",
                    }}
                  >
                    {t(`${p.key}.price`)}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: dark
                        ? "rgba(247,243,236,.55)"
                        : "rgba(15,14,12,.55)",
                    }}
                  >
                    {" "}
                    {t(`${p.key}.unit`)}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: dark
                      ? "rgba(247,243,236,.65)"
                      : "rgba(15,14,12,.65)",
                    margin: 0,
                  }}
                >
                  {t(`${p.key}.desc`)}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "grid",
                    gap: 10,
                    fontSize: 14,
                    color: dark
                      ? "rgba(247,243,236,.85)"
                      : "rgba(15,14,12,.8)",
                    flex: 1,
                  }}
                >
                  {Array.from({ length: p.bullets }, (_, n) => {
                    const bientot = (p.soon as readonly number[]).includes(
                      n + 1
                    );
                    return (
                      <li
                        key={n}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "baseline",
                          flexWrap: "wrap",
                          opacity: bientot ? 0.75 : undefined,
                        }}
                      >
                        <span
                          style={{
                            color: bientot
                              ? "rgba(15,14,12,.35)"
                              : dark
                                ? "var(--color-cyan)"
                                : "var(--color-blue)",
                            fontWeight: 700,
                          }}
                        >
                          {bientot ? "·" : "✓"}
                        </span>
                        {t(`${p.key}.b${n + 1}`)}
                        {bientot && (
                          <span
                            className={`soon-badge${dark ? " soon-badge-dark" : ""}`}
                          >
                            {t("soon")}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>

                <Link
                  href={p.href}
                  className={dark ? "btn" : "btn btn-outline"}
                  style={{
                    textAlign: "center",
                    padding: "13px 22px",
                    fontSize: 14,
                    borderWidth: dark ? undefined : 1.5,
                    background: dark ? "var(--color-cyan)" : undefined,
                    color: dark ? "var(--color-ink)" : undefined,
                  }}
                >
                  {t(`${p.key}.cta`)}
                </Link>
              </div>
            );
          })}
        </div>

        <p
          style={{
            fontSize: 13,
            color: "rgba(15,14,12,.5)",
            margin: "22px 0 0",
            textAlign: "center",
          }}
        >
          {t("note")}
        </p>
      </div>
    </section>
  );
}
