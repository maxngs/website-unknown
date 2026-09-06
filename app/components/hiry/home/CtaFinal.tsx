import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { APP, CONTACT } from "../links";

type Card = { icon: string; title: string; desc: string };

export default async function CtaFinal() {
  const t = await getTranslations("cta");
  const cards = t.raw("cards") as Card[];

  return (
    <section
      id="cta"
      style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-scale"
        style={{
          background: "var(--color-cyan)",
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
              fontSize: "clamp(40px,4.6vw,68px)",
              lineHeight: 1.02,
              letterSpacing: "-.035em",
              margin: "0 0 20px",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
              br: () => <br />,
            })}
          </h2>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.55,
              color: "rgba(15,14,12,.7)",
              maxWidth: 440,
              margin: "0 0 30px",
            }}
          >
            {t("reassurance")}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href={APP.signup}
              className="btn btn-ink-alt"
              style={{ fontSize: 14.5, padding: "14px 26px" }}
            >
              {t("candidate")}
            </Link>
            <Link
              href={CONTACT}
              className="btn btn-white"
              style={{ fontSize: 14.5, padding: "14px 26px" }}
            >
              {t("company")}
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
          {cards.map((c) => (
            <div
              key={c.title}
              style={{
                background: "rgba(255,255,255,.65)",
                backdropFilter: "blur(4px)",
                borderRadius: 14,
                padding: "14px 18px",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                aria-hidden
                style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-.02em" }}
              >
                {c.icon}
              </span>
              <div style={{ fontSize: 13.5, lineHeight: 1.35 }}>
                <strong>{c.title}</strong>
                <br />
                <span style={{ color: "rgba(15,14,12,.6)" }}>{c.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
