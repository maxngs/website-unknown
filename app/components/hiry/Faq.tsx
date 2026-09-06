import { getTranslations } from "next-intl/server";

/**
 * FAQ en <details> natifs : ouverture animée via ::details-content
 * (progressive enhancement, aucun JS). Styles dans hiry.css.
 */
export default async function Faq({
  namespace,
  count,
  maxWidth = 900,
  padding = "40px 44px 90px",
}: {
  namespace: string;
  count: number;
  maxWidth?: number;
  padding?: string;
}) {
  const t = await getTranslations(namespace);
  const items = Array.from({ length: count }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }));

  return (
    <section id="faq" style={{ padding, maxWidth, margin: "0 auto" }}>
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
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(32px,3.6vw,48px)",
            letterSpacing: "-.035em",
            margin: "0 0 36px",
          }}
        >
          {t.rich("title", {
            em: (chunks) => <em className="serif">{chunks}</em>,
          })}
        </h2>

        <div className="faq" style={{ display: "grid", gap: 12 }}>
          {items.map((item) => (
            <details
              key={item.q}
              style={{
                background: "#fff",
                border: "1px solid rgba(15,14,12,.1)",
                borderRadius: 16,
                padding: "0 24px",
              }}
            >
              <summary
                style={{
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 16,
                  padding: "20px 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                {item.q}
                <span
                  aria-hidden
                  style={{
                    fontSize: 20,
                    color: "var(--color-blue)",
                    flex: "none",
                  }}
                >
                  +
                </span>
              </summary>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "rgba(15,14,12,.65)",
                  margin: 0,
                  padding: "0 0 20px",
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
