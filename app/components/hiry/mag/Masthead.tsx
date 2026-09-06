import { getTranslations } from "next-intl/server";

/** Bandeau de titre « journal » : filets pleine largeur, ticker, wordmark serif. */
export default async function Masthead({ total }: { total: number }) {
  const t = await getTranslations("mag");
  const ticker = (t.raw("ticker") as string[]).map((item) =>
    // la 2ᵉ accroche annonce le nombre d'articles : on le prend du contenu réel
    /^\d+\s/.test(item) ? item.replace(/^\d+/, String(total)) : item
  );

  return (
    <header style={{ padding: "24px 44px 0", maxWidth: 1400, margin: "0 auto" }}>
      <div
        style={{
          borderTop: "3px solid var(--color-ink)",
          borderBottom: "1px solid var(--color-ink)",
          margin: "0 calc(50% - 50vw)",
          padding: "10px max(44px,calc(50vw - 700px))",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>{t("masthead.edition")}</span>
        <span>{t("masthead.tagline")}</span>
        <span>{t("masthead.place")}</span>
      </div>

      <div
        data-r="bleed"
        style={{
          borderBottom: "1px solid rgba(15,14,12,.25)",
          margin: "0 calc(50% - 50vw)",
          overflow: "hidden",
        }}
      >
        <div
          className="serif"
          style={{
            display: "flex",
            gap: 48,
            width: "max-content",
            animation: "tick 32s linear infinite",
            padding: "9px 0",
            fontSize: 15,
            color: "rgba(15,14,12,.65)",
            whiteSpace: "nowrap",
            alignItems: "center",
          }}
        >
          {[...ticker, ...ticker].map((item, i) => (
            <span key={`${item}-${i}`}>⁂ {item}</span>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", padding: "30px 0 26px" }}>
        <div
          style={{ overflow: "hidden", paddingBottom: ".18em", marginBottom: "-.18em" }}
        >
          <h1
            className="serif"
            style={{
              fontStyle: "normal",
              fontSize: "clamp(72px,12vw,170px)",
              lineHeight: 1,
              letterSpacing: "-.03em",
              margin: 0,
              animation: "maskUp 1.1s cubic-bezier(.2,.7,.2,1) both",
            }}
          >
            {t("masthead.title")}
            <span
              style={{
                color: "var(--color-blue)",
                display: "inline-block",
                animation: "inkDot 3s ease-in-out infinite",
              }}
            >
              .
            </span>
          </h1>
        </div>
        <p
          className="serif"
          style={{
            fontSize: 19,
            color: "rgba(15,14,12,.6)",
            margin: "16px auto 0",
            maxWidth: 480,
          }}
        >
          {t("masthead.subtitle")}
        </p>
      </div>

      <div data-r="bleed" className="mag-rule" />
    </header>
  );
}
