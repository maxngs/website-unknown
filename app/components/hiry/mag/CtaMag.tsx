import { getTranslations } from "next-intl/server";
import Link from "../Link";

/** Encart « publicité maison » en bas du Mag. */
export default async function CtaMag() {
  const t = await getTranslations("mag.cta");

  return (
    <section
      id="cta"
      style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        className="rv-up"
        style={{
          borderTop: "3px solid var(--color-ink)",
          borderBottom: "1px solid var(--color-ink)",
          margin: "0 calc(50% - 50vw)",
          padding: "44px max(44px,calc(50vw - 700px))",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(15,14,12,.45)",
            marginBottom: 18,
          }}
        >
          {t("label")}
        </div>
        <h2
          className="serif"
          style={{
            fontStyle: "normal",
            fontSize: "clamp(30px,3.6vw,52px)",
            lineHeight: 1.06,
            letterSpacing: "-.015em",
            margin: "0 0 24px",
            textWrap: "balance",
          }}
        >
          {t.rich("title", {
            em: (chunks) => (
              <em style={{ color: "var(--color-blue)" }}>{chunks}</em>
            ),
          })}
        </h2>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/candidats"
            className="btn btn-ink"
            style={{ fontSize: 14.5, padding: "15px 30px" }}
          >
            {t("candidate")}
          </Link>
          <Link
            href="/entreprises"
            className="btn btn-white"
            style={{
              fontSize: 14.5,
              padding: "15px 30px",
              border: "1px solid rgba(15,14,12,.2)",
            }}
          >
            {t("company")}
          </Link>
        </div>
      </div>
    </section>
  );
}
