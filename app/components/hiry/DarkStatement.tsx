import { getTranslations } from "next-intl/server";
import Link from "./Link";

/**
 * Carte encre pleine largeur : label, gros titre avec accent serif teinté,
 * deux paragraphes, bandeau mission + CTA.
 * Utilisée par le manifeste (Candidats) et la vision (Écoles).
 */
export default async function DarkStatement({
  namespace,
  id,
  accent = "var(--color-cyan)",
  ctaHref,
}: {
  namespace: string;
  id: string;
  accent?: string;
  ctaHref: string;
}) {
  const t = await getTranslations(namespace);

  return (
    <section
      id={id}
      style={{ padding: "70px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        className="rv-scale"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-bg)",
          borderRadius: 24,
          padding: "clamp(44px,5vw,76px)",
          animationRange: "entry 0% entry 35%",
        }}
      >
        <div
          style={{
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(247,243,236,.5)",
            marginBottom: 26,
          }}
        >
          {t("label")}
        </div>

        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(28px,3vw,44px)",
            lineHeight: 1.15,
            letterSpacing: "-.03em",
            margin: "0 0 26px",
            maxWidth: 1000,
            textWrap: "balance",
          }}
        >
          {t.rich("title", {
            em: (chunks) => (
              <em className="serif" style={{ color: accent }}>
                {chunks}
              </em>
            ),
          })}
        </h2>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
            marginBottom: 30,
          }}
        >
          {[t("p1"), t("p2")].map((p) => (
            <p
              key={p.slice(0, 24)}
              style={{
                fontSize: 14.5,
                lineHeight: 1.65,
                color: "rgba(247,243,236,.7)",
                margin: 0,
              }}
            >
              {p}
            </p>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            borderTop: "1px solid rgba(247,243,236,.15)",
            paddingTop: 26,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 700,
              background: "rgba(247,243,236,.1)",
              border: "1px solid rgba(247,243,236,.2)",
              borderRadius: 999,
              padding: "9px 16px",
            }}
          >
            {t("mission")}
          </span>
          <Link
            href={ctaHref}
            className="btn"
            style={{
              marginLeft: "auto",
              background: accent,
              color: "var(--color-ink)",
              fontSize: 14,
              padding: "13px 24px",
            }}
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
