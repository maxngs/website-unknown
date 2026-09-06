import { getTranslations } from "next-intl/server";
import Link from "./Link";

/**
 * Bandeau CTA centré sur fond pastel — partagé par Candidats, Entreprises
 * et Écoles (mêmes proportions, teinte et destinations variables).
 */
export default async function CtaBand({
  namespace,
  bg = "var(--color-cyan)",
  primaryHref,
  secondaryHref,
  rawPrimary,
  rawSecondary,
}: {
  namespace: string;
  bg?: string;
  primaryHref: string;
  secondaryHref: string;
  rawPrimary?: boolean;
  rawSecondary?: boolean;
}) {
  const t = await getTranslations(namespace);

  return (
    <section
      id="cta"
      style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        className="rv-scale"
        style={{
          background: bg,
          borderRadius: 28,
          padding: "clamp(44px,5vw,76px)",
          textAlign: "center",
          animationRange: "entry 0% entry 40%",
        }}
      >
        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(38px,4.4vw,64px)",
            lineHeight: 1.02,
            letterSpacing: "-.035em",
            margin: "0 0 18px",
          }}
        >
          {t.rich("title", {
            em: (chunks) => <em className="serif">{chunks}</em>,
          })}
        </h2>
        <p
          style={{
            fontSize: 15.5,
            color: "rgba(15,14,12,.7)",
            margin: "0 0 30px",
          }}
        >
          {t("subtitle")}
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href={primaryHref}
            raw={rawPrimary}
            className="btn btn-ink"
            style={{ fontSize: 15, padding: "16px 32px" }}
          >
            {t("primary")}
          </Link>
          <Link
            href={secondaryHref}
            raw={rawSecondary}
            className="btn btn-white"
            style={{ fontSize: 15, padding: "16px 32px" }}
          >
            {t("secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
