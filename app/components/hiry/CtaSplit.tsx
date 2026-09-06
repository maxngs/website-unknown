import { getTranslations } from "next-intl/server";
import Link from "./Link";

/**
 * Bandeau CTA en deux colonnes : titre + 2 boutons à gauche,
 * lignes de réassurance à droite. Utilisé par Entreprises et Écoles.
 */
export default async function CtaSplit({
  namespace,
  bg = "var(--color-cyan)",
  primaryHref,
  secondaryHref,
  rawPrimary,
  rawSecondary,
  reassuranceKeys = ["r1", "r2", "r3"],
}: {
  namespace: string;
  bg?: string;
  primaryHref: string;
  secondaryHref: string;
  rawPrimary?: boolean;
  rawSecondary?: boolean;
  reassuranceKeys?: string[];
}) {
  const t = await getTranslations(namespace);

  return (
    <section
      id="cta"
      style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-scale"
        style={{
          background: bg,
          borderRadius: 28,
          padding: "clamp(44px,5vw,76px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 56,
          alignItems: "center",
          animationRange: "entry 0% entry 40%",
        }}
      >
        <div>
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(38px,4.4vw,62px)",
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
              lineHeight: 1.55,
              color: "rgba(15,14,12,.7)",
              maxWidth: 460,
              margin: "0 0 30px",
            }}
          >
            {t("subtitle")}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href={primaryHref}
              raw={rawPrimary}
              className="btn btn-ink"
              style={{ fontSize: 14.5, padding: "14px 26px" }}
            >
              {t("primary")}
            </Link>
            <Link
              href={secondaryHref}
              raw={rawSecondary}
              className="btn btn-white"
              style={{ fontSize: 14.5, padding: "14px 26px" }}
            >
              {t("secondary")}
            </Link>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
            alignContent: "center",
            minWidth: 250,
          }}
        >
          {reassuranceKeys.map((k) => (
            <div
              key={k}
              style={{
                background: "rgba(255,255,255,.65)",
                backdropFilter: "blur(4px)",
                borderRadius: 14,
                padding: "14px 18px",
                fontSize: 13.5,
                fontWeight: 500,
              }}
            >
              {t(k)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
