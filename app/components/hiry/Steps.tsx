import { getTranslations } from "next-intl/server";
import { Label } from "./ui";

/**
 * Rangée d'étapes numérotées (filet supérieur encre, numéro serif, durée).
 * Partagée par Entreprises (3 étapes) et Écoles (4 étapes).
 */
export default async function Steps({
  namespace,
  steps,
  tint = "var(--color-blue-p)",
  tintColor = "var(--color-blue)",
  titleSize = 19,
  subtitleMaxWidth = 320,
}: {
  namespace: string;
  /** clés des étapes, dans l'ordre ; `time: false` masque la pastille de durée */
  steps: { key: string; time: boolean }[];
  tint?: string;
  tintColor?: string;
  titleSize?: number;
  subtitleMaxWidth?: number;
}) {
  const t = await getTranslations(namespace);

  return (
    <section
      id="how"
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
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
              maxWidth: 720,
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
              maxWidth: subtitleMaxWidth,
            }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${steps.length},minmax(0,1fr))`,
            gap: 18,
          }}
        >
          {steps.map((s, i) => (
            <div
              key={s.key}
              className="rv-up"
              style={{
                borderTop: "2px solid var(--color-ink)",
                paddingTop: 24,
                animationRange: `entry ${i * 6}% entry ${30 + i * 6}%`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  marginBottom: 12,
                  minHeight: 24,
                }}
              >
                <span
                  className="serif"
                  style={{ fontSize: 20, color: "rgba(15,14,12,.4)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.time && (
                  <span
                    style={{
                      fontSize: 11.5,
                      fontWeight: 700,
                      background: tint,
                      color: tintColor,
                      padding: "4px 10px",
                      borderRadius: 999,
                    }}
                  >
                    {t(`${s.key}.time`)}
                  </span>
                )}
              </div>
              <h3
                style={{
                  fontSize: titleSize,
                  fontWeight: 700,
                  margin: "0 0 8px",
                }}
              >
                {t(`${s.key}.title`)}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(15,14,12,.65)",
                  margin: 0,
                }}
              >
                {t(`${s.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
