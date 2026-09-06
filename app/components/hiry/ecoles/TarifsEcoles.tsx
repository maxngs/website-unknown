import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { CONTACT } from "../links";

/** Bandeau tarifs « sur devis » — une seule offre, un seul CTA. */
export default async function TarifsEcoles() {
  const t = await getTranslations("schools.pricing");

  return (
    <section
      id="tarifs"
      style={{ padding: "0 44px 70px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-scale"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-bg)",
          borderRadius: 24,
          padding: "clamp(36px,4vw,56px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 40,
          alignItems: "center",
          animationRange: "entry 0% entry 40%",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(247,243,236,.5)",
              marginBottom: 16,
            }}
          >
            {t("label")}
          </div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(26px,2.8vw,40px)",
              lineHeight: 1.1,
              letterSpacing: "-.03em",
              margin: "0 0 14px",
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => (
                <em
                  className="serif"
                  style={{ color: "var(--color-green-p)" }}
                >
                  {chunks}
                </em>
              ),
            })}
          </h2>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              color: "rgba(247,243,236,.65)",
              margin: 0,
              maxWidth: 560,
            }}
          >
            {t("desc")}
          </p>
        </div>

        <Link
          href={CONTACT}
          className="btn"
          style={{
            background: "var(--color-green-p)",
            color: "var(--color-ink)",
            fontSize: 15,
            padding: "16px 30px",
          }}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
