import { getTranslations } from "next-intl/server";

type Card = { figure: string; label: string };

export default async function Probleme() {
  const t = await getTranslations("problem");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="probleme"
      style={{
        padding: "110px 44px 90px",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      <div className="rv-up">
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(15,14,12,.4)",
            marginBottom: 20,
          }}
        >
          {t("label")}
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr .7fr",
            gap: 48,
            alignItems: "end",
            marginBottom: 52,
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(38px,4.2vw,60px)",
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
            {t("intro")}
          </p>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.figure}
              className="rv-scale"
              style={{
                background: "var(--color-ink)",
                color: "var(--color-bg)",
                borderRadius: 18,
                padding: "34px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 56,
                animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 38,
                  letterSpacing: "-.02em",
                }}
              >
                {card.figure}
              </div>
              <div
                style={{ fontSize: 13.5, color: "rgba(247,243,236,.7)" }}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
