import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Link from "../Link";

export default async function Hero() {
  const t = await getTranslations("hero");

  const stats = [
    { value: t("stat1"), label: t("stat1Label") },
    { value: t("stat2"), label: t("stat2Label") },
    { value: t("stat3"), label: t("stat3Label") },
  ];

  return (
    <header
      id="hero"
      style={{
        padding: "20px 44px 0",
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
        gap: 20,
        alignItems: "stretch",
      }}
      data-r="g"
    >
      <div
        style={{
          background: "var(--color-cyan)",
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
            fontWeight: 600,
            width: "max-content",
          }}
          className="hero-badge"
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-blue)",
            }}
          />
          {t("badge")}
        </div>

        <h1
          style={{
            fontWeight: 700,
            fontSize: "clamp(44px,4.8vw,78px)",
            lineHeight: 1,
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
            maxWidth: 460,
            margin: 0,
          }}
          className="hero-sub"
        >
          {t("subtitle")}
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
          className="hero-cta"
        >
          <Link
            href="/candidats"
            className="btn btn-ink-alt"
            style={{ fontSize: 15, padding: "15px 26px" }}
          >
            {t("ctaCandidate")}
          </Link>
          <Link
            href="/entreprises"
            className="btn btn-white"
            style={{ fontSize: 15, padding: "15px 26px" }}
          >
            {t("ctaCompany")}
          </Link>
        </div>

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
            <div key={s.label} className={`hero-stat-${i + 1}`}>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 26,
                  letterSpacing: "-.02em",
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 13, color: "rgba(15,14,12,.55)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        data-r="img"
        style={{
          position: "relative",
          borderRadius: 24,
          overflow: "hidden",
          minHeight: 560,
          background: "#EFEAE1",
        }}
        className="hero-img"
      >
        <Image
          src="/images/hero-home.png"
          alt={t("imageAlt")}
          fill
          priority
          sizes="(max-width: 900px) 100vw, 40vw"
          style={{ objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "#fff",
            borderRadius: 999,
            padding: "9px 16px",
            fontSize: 13,
            fontWeight: 600,
            boxShadow: "0 10px 30px -6px rgba(15,14,12,.18)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
          className="hero-float-1"
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "var(--color-blue)",
            }}
          />
          {t("proof")}
        </div>

        <div
          style={{
            position: "absolute",
            right: 20,
            bottom: 20,
            background: "#fff",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "0 18px 44px -10px rgba(15,14,12,.28)",
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
              fontWeight: 600,
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
            {t("matchBadge")}
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: 24,
              letterSpacing: "-.02em",
              margin: "4px 0 2px",
            }}
          >
            {t("matchScore")}
          </div>
          <div
            style={{
              fontSize: 12.5,
              lineHeight: 1.4,
              color: "rgba(15,14,12,.55)",
            }}
          >
            {t("matchDetail")}
          </div>
        </div>
      </div>
    </header>
  );
}
