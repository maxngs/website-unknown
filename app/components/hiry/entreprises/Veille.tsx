import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

/** Profils remontés par la veille, du plus récent au plus ancien. */
const ROWS = [
  { key: "r1", initials: "KB", tone: "var(--color-cyan)" },
  { key: "r2", initials: "ML", tone: "var(--color-green-p)" },
  { key: "r3", initials: "TR", tone: "var(--color-blue-p)" },
] as const;

/**
 * La veille : un besoin permanent qui remonte des profils sans offre publiée.
 * Visuel : le fil d'une veille active, avec le compteur d'offres à zéro.
 */
export default async function Veille() {
  const t = await getTranslations("companies.watch");

  return (
    <section
      id="veille"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(40px,6vw,96px)",
          alignItems: "center",
        }}
      >
        <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
          <Label>{t("label")}</Label>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(36px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: "0 0 28px",
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              margin: "0 0 16px",
              maxWidth: 540,
            }}
          >
            {t("p1")}
          </p>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.62)",
              margin: 0,
              maxWidth: 540,
            }}
          >
            {t("p2")}
          </p>
        </div>

        {/* Fil de la veille */}
        <div
          className="rv-scale"
          style={{ position: "relative", animationRange: "entry 0% entry 40%" }}
        >
          <div
            style={{
              background: "#fff",
              border: "1px solid rgba(15,14,12,.1)",
              borderRadius: 22,
              padding: "26px 26px 22px",
              boxShadow: "0 30px 60px -40px rgba(15,14,12,.35)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
                paddingBottom: 18,
                marginBottom: 16,
                borderBottom: "2px solid var(--color-ink)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    color: "rgba(15,14,12,.45)",
                    marginBottom: 6,
                  }}
                >
                  {t("panel")}
                </div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 20,
                    letterSpacing: "-.02em",
                  }}
                >
                  {t("role")}
                </div>
              </div>
              <div style={{ textAlign: "right", flex: "none" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    fontSize: 11.5,
                    fontWeight: 700,
                    color: "var(--color-green)",
                    background: "var(--color-green-p)",
                    borderRadius: 999,
                    padding: "5px 11px",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-green)",
                      animation: "blinkDot 1.6s infinite",
                    }}
                  />
                  {t("status")}
                </span>
                <div
                  style={{
                    fontSize: 11.5,
                    color: "rgba(15,14,12,.45)",
                    marginTop: 6,
                  }}
                >
                  {t("since")}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gap: 8 }}>
              {ROWS.map((r, i) => (
                <div
                  key={r.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "11px 12px",
                    borderRadius: 12,
                    background: i === 0 ? "#F2F8FC" : undefined,
                    animation: i === 0 ? "popIn 7s ease infinite" : undefined,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      flex: "none",
                      borderRadius: "50%",
                      background: r.tone,
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 11.5,
                    }}
                  >
                    {r.initials}
                  </span>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 13.5 }}>
                      {t(`${r.key}.who`)}
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(15,14,12,.5)" }}>
                      {t(`${r.key}.meta`)}
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: 11.5,
                      color: "rgba(15,14,12,.45)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {t(`${r.key}.when`)}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: 16,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px dashed rgba(15,14,12,.18)",
                flexWrap: "wrap",
              }}
            >
              <span style={{ fontSize: 13 }}>
                <strong style={{ fontSize: 22, letterSpacing: "-.02em" }}>
                  23
                </strong>{" "}
                <span style={{ color: "rgba(15,14,12,.55)" }}>{t("count")}</span>
              </span>
              <span style={{ fontSize: 12.5, color: "rgba(15,14,12,.55)" }}>
                {t("quota")}{" "}
                <strong
                  className="serif"
                  style={{
                    fontSize: 22,
                    color: "var(--color-blue)",
                    fontWeight: 400,
                  }}
                >
                  0
                </strong>
              </span>
            </div>
          </div>

          {/* Notification, posée en débord du panneau */}
          <div
            data-r="hide"
            style={{
              position: "absolute",
              top: -18,
              left: -28,
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              borderRadius: 14,
              padding: "11px 16px",
              fontSize: 12.5,
              fontWeight: 600,
              boxShadow: "0 18px 40px -18px rgba(15,14,12,.55)",
              animation: "float 5s ease-in-out infinite",
            }}
          >
            <span
              aria-hidden
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-cyan)",
                animation: "inkDot 1.8s ease-in-out infinite",
              }}
            />
            {t("toast")}
          </div>
        </div>
      </div>
    </section>
  );
}
