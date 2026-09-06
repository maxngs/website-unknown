import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { CONTACT } from "../links";

export default async function SurMesure() {
  const t = await getTranslations("companies.custom");

  return (
    <section
      id="surmesure"
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
          gap: 48,
          alignItems: "center",
          animationRange: "entry 0% entry 40%",
        }}
      >
        <div>
          <div
            className="eyebrow-pill"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "1px solid rgba(247,243,236,.25)",
              borderRadius: 999,
              padding: "7px 14px",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".14em",
              marginBottom: 20,
            }}
          >
            {t("badge")}
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
                <em className="serif" style={{ color: "var(--color-cyan)" }}>
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

        <div style={{ display: "grid", gap: 10, justifyItems: "center" }}>
          <Link
            href={CONTACT}
            className="btn btn-white"
            style={{ fontSize: 15, padding: "16px 30px" }}
          >
            {t("cta")}
          </Link>
          <span
            style={{ fontSize: 12.5, color: "rgba(247,243,236,.55)" }}
          >
            {t("or")}
          </span>
        </div>
      </div>
    </section>
  );
}
