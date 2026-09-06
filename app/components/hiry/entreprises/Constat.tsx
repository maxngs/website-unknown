import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

const FIGURES = ["8 740 €", "83,6%", "76,5%"];
const KEYS = ["cost", "time", "profile"] as const;

export default async function Constat() {
  const t = await getTranslations("companies.problem");

  return (
    <section
      id="constat"
      style={{ padding: "100px 44px 40px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
        <Label>{t("label")}</Label>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .7fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 48,
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

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 18,
          }}
        >
          {KEYS.map((k, i) => (
            <div
              key={k}
              className="rv-scale"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-bg)",
                borderRadius: 18,
                padding: "34px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 38,
                  letterSpacing: "-.02em",
                  color: "var(--color-cyan)",
                }}
              >
                {FIGURES[i]}
              </div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>
                {t(`${k}.title`)}
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(247,243,236,.7)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {t(`${k}.desc`)}
              </p>
              <div
                style={{ fontSize: 11.5, color: "rgba(247,243,236,.45)" }}
              >
                {t(`${k}.source`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
