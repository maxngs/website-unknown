import { getTranslations } from "next-intl/server";
import Link from "../Link";

const AUDIENCES = [
  {
    key: "talents",
    href: "/candidats",
    bg: "var(--color-cyan)",
    eyebrowColor: "var(--color-blue)",
    motion: "/motion/talents.html",
    ctaClass: "btn-eco-talents",
  },
  {
    key: "companies",
    href: "/entreprises",
    bg: "var(--color-blue-p)",
    eyebrowColor: "var(--color-blue-2)",
    motion: "/motion/entreprises.html",
    ctaClass: "btn-eco-companies",
  },
  {
    key: "schools",
    href: "/ecoles",
    bg: "var(--color-green-p)",
    eyebrowColor: "var(--color-green)",
    motion: "/motion/ecoles.html",
    ctaClass: "btn-eco-schools",
  },
] as const;

export default async function Ecosysteme() {
  const t = await getTranslations("ecosystem");

  return (
    <section
      id="eco"
      style={{ padding: "60px 44px 110px", maxWidth: 1400, margin: "0 auto" }}
    >
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

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 32,
            marginBottom: 44,
            flexWrap: "wrap",
          }}
        >
          <h2
            style={{
              fontWeight: 700,
              fontSize: "clamp(38px,4.2vw,60px)",
              lineHeight: 1.05,
              letterSpacing: "-.035em",
              margin: 0,
              maxWidth: 720,
              textWrap: "balance",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h2>
          <a
            href="#moteur"
            className="btn btn-outline"
            style={{ padding: "13px 24px", fontSize: 14.5, fontWeight: 600 }}
          >
            {t("cta")}
          </a>
        </div>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,minmax(0,1fr))",
            gap: 18,
          }}
        >
          {AUDIENCES.map((a, i) => (
            <div
              key={a.key}
              className="rv-scale"
              style={{
                background: a.bg,
                borderRadius: 20,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  color: a.eyebrowColor,
                }}
              >
                {t(`${a.key}.eyebrow`)}
              </div>
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-.02em",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                {t(`${a.key}.title`)}
              </h3>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  color: "rgba(15,14,12,.65)",
                  margin: 0,
                  flex: 1,
                }}
              >
                {t(`${a.key}.desc`)}
              </p>

              <div
                className="eco-motion"
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  height: 300,
                  position: "relative",
                  background: a.bg,
                }}
              >
                <iframe
                  src={a.motion}
                  scrolling="no"
                  loading="lazy"
                  title={t(`${a.key}.motionTitle`)}
                  style={{
                    position: "absolute",
                    top: "-20%",
                    left: "-20%",
                    width: "140%",
                    height: "140%",
                    border: 0,
                    pointerEvents: "none",
                  }}
                />
              </div>

              <Link
                href={a.href}
                className={`btn btn-eco ${a.ctaClass}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 22px",
                  fontSize: 14,
                }}
              >
                {t(`${a.key}.cta`)}
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
