import { getTranslations } from "next-intl/server";

const YES = "✓";
const NO = "·";
/** Fonctionnalité annoncée mais pas encore livrée. */
const SOON = "@soon";

/** [clé de libellé, Solo, Pack Démarrage, Pack Croissance] */
const ROWS: [string, string, string, string][] = [
  ["price", "290 € HT", "1 230 € HT", "2 990 € HT/an"],
  ["hiresIncluded", "1", "5", "15 / an"],
  ["pricePerHire", "290 €", "246 €", "199 €"],
  ["postingDuration", "@days", "@days", "@days"],
  ["creditExpiry", NO, "@yearly", "@annualRenewal"],
  ["renewal", "145 € HT", "@renewalVal", "@renewalVal"],
  ["overage", NO, NO, "@overageVal"],
  ["card", YES, YES, YES],
  ["sepa", NO, NO, YES],
  ["integrations", NO, NO, SOON],
  ["fullAccess", YES, YES, YES],
  ["multiUser", YES, YES, YES],
  ["supportStd", YES, YES, NO],
  ["supportPrio", NO, NO, YES],
];

export default async function Comparaison() {
  const t = await getTranslations("companies.comparison");

  /** « @clé » renvoie vers une chaîne traduite, sinon valeur littérale. */
  const val = (v: string) => (v.startsWith("@") ? t(v.slice(1)) : v);

  const cell = (v: string, highlight: boolean) => {
    const text = val(v);
    const isYes = text === YES;
    const isNo = text === NO;
    const isSoon = v === SOON;
    return {
      text,
      isSoon,
      style: {
        textAlign: "center" as const,
        padding: "13px 20px",
        background: highlight ? "#EAF6FB" : undefined,
        fontWeight: (highlight && !isYes && !isNo) || isYes ? 700 : undefined,
        color: isYes
          ? "var(--color-blue)"
          : isNo
            ? "rgba(15,14,12,.35)"
            : undefined,
      },
    };
  };

  return (
    <section
      id="comparaison"
      style={{ padding: "30px 44px 70px", maxWidth: 1100, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.4)",
              marginBottom: 16,
            }}
          >
            {t("label")}
          </div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(30px,3.4vw,48px)",
              lineHeight: 1.06,
              letterSpacing: "-.035em",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
        </div>

        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
              background: "#fff",
              borderRadius: 18,
              overflow: "hidden",
              minWidth: 640,
            }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(15,14,12,.12)" }}>
                <th
                  scope="col"
                  style={{
                    textAlign: "left",
                    padding: "16px 20px",
                    fontWeight: 500,
                    color: "rgba(15,14,12,.5)",
                  }}
                >
                  {t("feature")}
                </th>
                {[
                  { l: t("solo"), hl: false },
                  { l: t("starter"), hl: true },
                  { l: t("growth"), hl: false },
                ].map((c) => (
                  <th
                    key={c.l}
                    scope="col"
                    style={{
                      textAlign: "center",
                      padding: "16px 20px",
                      fontWeight: 700,
                      background: c.hl ? "#EAF6FB" : undefined,
                    }}
                  >
                    {c.l}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([key, a, b, c], i) => (
                <tr
                  key={key}
                  style={
                    i < ROWS.length - 1
                      ? { borderBottom: "1px solid rgba(15,14,12,.07)" }
                      : undefined
                  }
                >
                  <th
                    scope="row"
                    style={{
                      textAlign: "left",
                      fontWeight: 400,
                      padding: "13px 20px",
                      color: "rgba(15,14,12,.65)",
                    }}
                  >
                    {t(key)}
                  </th>
                  {[
                    cell(a, false),
                    cell(b, true),
                    cell(c, false),
                  ].map((x, j) => (
                    <td key={j} style={x.style}>
                      {x.isSoon ? (
                        <span className="soon-badge">{x.text}</span>
                      ) : (
                        x.text
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
