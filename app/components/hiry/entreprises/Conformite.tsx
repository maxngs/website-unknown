import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

const COMMITMENTS = ["c1", "c2", "c3"] as const;
const LOG = ["log1", "log2", "log3"] as const;
const NUMERALS = ["i", "ii", "iii"];

/**
 * Conformité AI Act : dernière section lue avant la FAQ.
 * Visuel : un extrait du journal d'une candidature (traçabilité).
 */
export default async function Conformite() {
  const t = await getTranslations("companies.compliance");

  return (
    <section
      id="conformite"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        style={{
          display: "grid",
          gridTemplateColumns: ".9fr 1.1fr",
          gap: "clamp(40px,6vw,96px)",
          alignItems: "start",
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
              margin: "0 0 24px",
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              margin: "0 0 10px",
              maxWidth: 480,
            }}
          >
            {t("intro")}
          </p>
          <div
            className="serif"
            style={{ fontSize: 14, color: "rgba(15,14,12,.45)", marginBottom: 32 }}
          >
            {t("ref")}
          </div>

          {/* Extrait de journal */}
          <div
            style={{
              background: "var(--color-ink)",
              color: "var(--color-bg)",
              borderRadius: 18,
              padding: "20px 22px",
              maxWidth: 480,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontSize: 10.5,
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "rgba(247,243,236,.5)",
                paddingBottom: 12,
                marginBottom: 4,
                borderBottom: "1px solid rgba(247,243,236,.12)",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "var(--color-cyan)",
                }}
              />
              {t("logTitle")}
            </div>
            {LOG.map((k, i) => (
              <div
                key={k}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 12,
                  padding: "11px 0",
                  borderTop: i ? "1px dashed rgba(247,243,236,.1)" : undefined,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                <span style={{ fontSize: 12, color: "rgba(247,243,236,.45)" }}>
                  {t(`${k}.t`)}
                </span>
                <div style={{ fontSize: 13, lineHeight: 1.45 }}>
                  <strong>{t(`${k}.who`)}</strong>
                  <span style={{ color: "rgba(247,243,236,.4)" }}> · </span>
                  {t(`${k}.what`)}
                  <div style={{ fontSize: 12, color: "var(--color-cyan)", opacity: 0.8 }}>
                    ↳ {t(`${k}.why`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagements */}
        <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid" }}>
          {COMMITMENTS.map((k, i) => (
            <li
              key={k}
              className="rv-up"
              style={{
                display: "grid",
                gridTemplateColumns: "56px 1fr",
                gap: 12,
                borderTop: "2px solid var(--color-ink)",
                padding: "28px 0 36px",
                animationRange: `entry ${i * 6}% entry ${30 + i * 6}%`,
              }}
            >
              <span
                className="serif"
                style={{
                  fontSize: 30,
                  lineHeight: 1,
                  color: "var(--color-blue)",
                }}
              >
                {NUMERALS[i]}.
              </span>
              <div>
                <h3
                  style={{
                    fontSize: "clamp(20px,1.8vw,24px)",
                    fontWeight: 700,
                    letterSpacing: "-.02em",
                    margin: "0 0 10px",
                  }}
                >
                  {t(`${k}.lead`)}
                </h3>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "rgba(15,14,12,.65)",
                    margin: 0,
                    maxWidth: 560,
                  }}
                >
                  {t(`${k}.text`)}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
