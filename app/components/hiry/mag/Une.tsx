import { getLocale, getTranslations } from "next-intl/server";
import Link from "../Link";
import { formatByline, SILO_TONE, type MagData } from "./data";
import { SILOS } from "@/lib/silos";

/** Article à la une + colonne « les chiffres ». */
export default async function Une({ post }: { post: MagData["featured"] }) {
  const t = await getTranslations("mag.une");
  const locale = await getLocale();

  const figures = [
    { v: t("f1"), l: t("f1Label"), last: false },
    { v: t("f2"), l: t("f2Label"), last: false },
    { v: t("f3"), l: t("f3Label"), last: true },
  ];

  return (
    <section
      id="une"
      style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-up"
        style={{ display: "grid", gridTemplateColumns: "1.5fr .8fr", gap: 0 }}
      >
        <article
          style={{
            padding: "0 44px 44px 0",
            borderRight: "1px solid rgba(15,14,12,.2)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: SILO_TONE[post.silo],
              marginBottom: 18,
            }}
          >
            {t("label")} · {SILOS[post.silo].shortName.toUpperCase()}
          </div>
          <Link href={post.href} className="mag-link">
            <h2
              className="serif"
              style={{
                fontStyle: "normal",
                fontSize: "clamp(30px,3.6vw,50px)",
                lineHeight: 1.06,
                letterSpacing: "-.015em",
                margin: "0 0 20px",
                textWrap: "balance",
              }}
            >
              {post.title}
            </h2>
          </Link>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.7,
              color: "rgba(15,14,12,.7)",
              margin: "0 0 18px",
              maxWidth: 560,
            }}
          >
            {post.description}
          </p>
          <div style={{ fontSize: 12.5, color: "rgba(15,14,12,.5)" }}>
            {formatByline(post, locale, t("by"), t("reading"))}
          </div>
        </article>

        <aside style={{ padding: "0 0 44px 44px" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.45)",
              marginBottom: 22,
            }}
          >
            {t("figures")}
          </div>
          {figures.map((f, i) => (
            <div
              key={f.v}
              className="rv-up"
              style={{
                borderBottom: f.last ? undefined : "1px solid rgba(15,14,12,.2)",
                paddingBottom: f.last ? undefined : 20,
                marginBottom: f.last ? undefined : 20,
                animationRange: `entry ${6 + i * 8}% entry ${36 + i * 8}%`,
              }}
            >
              <div
                className="serif"
                style={{ fontStyle: "normal", fontSize: 52, lineHeight: 1 }}
              >
                {f.v}
              </div>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.55,
                  color: "rgba(15,14,12,.6)",
                  margin: "8px 0 0",
                }}
              >
                {f.l}
              </p>
            </div>
          ))}
        </aside>
      </div>
      <div data-r="bleed" className="mag-rule" />
    </section>
  );
}
