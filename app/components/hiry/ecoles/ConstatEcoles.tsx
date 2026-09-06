import { getTranslations } from "next-intl/server";
import { Label } from "../ui";

const CARDS = ["c1", "c2", "c3", "c4"] as const;

export default async function ConstatEcoles() {
  const t = await getTranslations("schools.problem");

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
            gridTemplateColumns: "repeat(2,minmax(0,1fr))",
            gap: 18,
          }}
        >
          {CARDS.map((k, i) => (
            <div
              key={k}
              className="rv-scale"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-bg)",
                borderRadius: 18,
                padding: "32px 30px",
                animationRange: `entry ${i * 6}% entry ${30 + i * 6}%`,
              }}
            >
              <div
                style={{ fontWeight: 700, fontSize: 18, marginBottom: 10 }}
              >
                {t(`${k}.title`)}
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.55,
                  color: "rgba(247,243,236,.7)",
                  margin: 0,
                }}
              >
                {t(`${k}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
