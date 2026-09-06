import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Link from "./Link";

/**
 * Hero en deux colonnes des pages Candidats / Entreprises / Écoles :
 * bloc pastel (badge, titre, sous-titre, 2 CTA, preuve sociale)
 * + visuel avec carte flottante.
 */
export default async function HeroSplit({
  namespace,
  tint,
  image,
  primaryCtaKey,
  primaryHref = "#cta",
  secondaryCtaKey,
  secondaryHref = "#how",
  cardKeys,
  cardDeltaKey,
  dotColor = "var(--color-blue)",
  stats,
}: {
  namespace: string;
  tint: string;
  image: string;
  primaryCtaKey: string;
  primaryHref?: string;
  secondaryCtaKey: string;
  secondaryHref?: string;
  /** clés des 3 lignes de la carte flottante : intitulé, chiffre, légende */
  cardKeys: [string, string, string];
  /** delta affiché à côté du chiffre de la carte (ex. « +12% ») */
  cardDeltaKey?: string;
  dotColor?: string;
  /** Bandeau de chiffres sous les CTA (1 à 3 entrées). */
  stats?: { valueKey: string; labelKey: string }[];
}) {
  const t = await getTranslations(namespace);

  return (
    <header
      data-r="g"
      style={{
        padding: "20px 44px 0",
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
        gap: 20,
        alignItems: "stretch",
      }}
    >
      <div
        style={{
          background: tint,
          borderRadius: 24,
          padding: "clamp(32px,4vw,60px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 26,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            background: "rgba(255,255,255,.6)",
            borderRadius: 999,
            padding: "8px 16px",
            fontSize: 13,
            fontWeight: 500,
            width: "max-content",
          }}
          className="hero-badge"
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: dotColor,
            }}
          />
          {t("badge")}
        </div>

        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(40px,4.4vw,68px)",
            lineHeight: 1.02,
            letterSpacing: "-.035em",
            margin: 0,
            textWrap: "balance",
          }}
          className="hero-title"
        >
          {t.rich("title", {
            em: (chunks) => <em className="serif">{chunks}</em>,
          })}
        </h1>

        <p
          style={{
            fontSize: 17,
            lineHeight: 1.55,
            color: "rgba(15,14,12,.72)",
            maxWidth: 490,
            margin: 0,
          }}
          className="hero-sub"
        >
          {t("subtitle")}
        </p>

        <div
          className="hero-cta"
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          {/* une ancre reste un <a> ; un chemin passe par <Link> pour la locale */}
          {[
            { href: primaryHref, label: t(primaryCtaKey), cls: "btn btn-ink-alt" },
            { href: secondaryHref, label: t(secondaryCtaKey), cls: "btn btn-white" },
          ].map((cta) =>
            cta.href.startsWith("#") ? (
              <a
                key={cta.label}
                href={cta.href}
                className={cta.cls}
                style={{ fontSize: 15, padding: "15px 26px" }}
              >
                {cta.label}
              </a>
            ) : (
              <Link
                key={cta.label}
                href={cta.href}
                className={cta.cls}
                style={{ fontSize: 15, padding: "15px 26px" }}
              >
                {cta.label}
              </Link>
            )
          )}
        </div>

        {stats && (
          <div
            data-r="wrap"
            style={{
              display: "flex",
              gap: "clamp(24px,3.4vw,54px)",
              borderTop: "1px solid rgba(15,14,12,.15)",
              paddingTop: 24,
            }}
          >
            {stats.map((s, i) => (
              <div key={s.labelKey} className={`hero-stat-${i + 1}`}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: "-.02em",
                  }}
                >
                  {t(s.valueKey)}
                </div>
                <div
                  style={{ fontSize: 13, color: "rgba(15,14,12,.55)" }}
                >
                  {t(s.labelKey)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        data-r="img"
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          minHeight: 520,
          background: tint,
        }}
        className="hero-img"
      >
        <Image
          src={image}
          alt={t("imageAlt")}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 40vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            background: "#fff",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "0 12px 34px rgba(15,14,12,.18)",
            pointerEvents: "none",
            maxWidth: 250,
          }}
          className="hero-float-2"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontSize: 12.5,
              fontWeight: 500,
              color: "rgba(15,14,12,.6)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--color-blue)",
              }}
            />
            {t(cardKeys[0])}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-.02em",
              margin: "4px 0 2px",
            }}
          >
            {t(cardKeys[1])}
            {cardDeltaKey && (
              <span style={{ fontSize: 14, color: "var(--color-green)" }}>
                {" "}
                {t(cardDeltaKey)}
              </span>
            )}
          </div>
          <div
            style={{
              fontSize: 12.5,
              lineHeight: 1.4,
              color: "rgba(15,14,12,.55)",
            }}
          >
            {t(cardKeys[2])}
          </div>
        </div>
      </div>
    </header>
  );
}
