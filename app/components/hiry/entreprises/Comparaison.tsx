import { getLocale, getTranslations } from "next-intl/server";

const YES = "✓";
const NO = "·";

/**
 * [clé de libellé, Essentiel, Croissance, Entreprise]
 * « @clé » → chaîne traduite ; « €n » → montant HT mis en forme par locale.
 * ⚠️ Montants et quotas alignés sur Tarifs.tsx et les CGV.
 */
const ROWS: [string, string, string, string][] = [
  ["priceMonthly", "€49", "€149", "€399"],
  ["priceYearly", "€470", "€1430", "€3830"],
  ["offers", "1", "5", "@unlimited"],
  ["postingDuration", "@noLimit", "@noLimit", "@noLimit"],
  ["users", "1", "3", "10"],
  ["readOnly", "@unlimited", "@unlimited", "@unlimited"],
  ["watches", "1", "2", "@unlimited"],
  ["aiInterview", YES, YES, YES],
  ["matching", YES, YES, YES],
  ["pipeline", YES, YES, YES],
  ["noCommitment", YES, YES, YES],
];

export default async function Comparaison() {
  const t = await getTranslations("companies.comparison");
  const locale = await getLocale();

  const eur = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const val = (v: string) =>
    v.startsWith("@")
      ? t(v.slice(1))
      : v.startsWith("€")
        ? `${eur(Number(v.slice(1)))} ${t("exclVat")}`
        : v;

  const cell = (v: string, highlight: boolean) => {
    const text = val(v);
    const isYes = text === YES;
    const isNo = text === NO;
    return {
      text,
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
                  { l: t("essential"), hl: false },
                  { l: t("growth"), hl: true },
                  { l: t("enterprise"), hl: false },
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
                      {x.text}
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
