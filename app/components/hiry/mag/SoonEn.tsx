import { getTranslations } from "next-intl/server";
import Link from "../Link";

/**
 * /en/mag — les 20 articles n'existent qu'en français. Plutôt que de servir
 * une liste française sous un habillage anglais, on annonce l'échéance et on
 * renvoie vers la version FR.
 */
export default async function SoonEn({ count }: { count: number }) {
  const t = await getTranslations("mag");

  return (
    <section
      style={{ padding: "80px 44px 120px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ maxWidth: 620 }}>
        <h2
          className="serif"
          style={{
            fontStyle: "normal",
            fontSize: "clamp(34px,4vw,58px)",
            lineHeight: 1.06,
            letterSpacing: "-.015em",
            margin: "0 0 18px",
          }}
        >
          {t("soonTitle")}
        </h2>
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.7,
            color: "rgba(15,14,12,.7)",
            margin: "0 0 30px",
          }}
        >
          {t("soonText", { count })}
        </p>
        <Link
          href="/mag"
          locale="fr"
          className="btn btn-ink"
          style={{ fontSize: 14.5, padding: "14px 28px" }}
        >
          {t("soonCta")}
        </Link>
      </div>
      <div data-r="bleed" className="mag-rule" style={{ marginTop: 60 }} />
    </section>
  );
}
