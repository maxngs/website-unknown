import { getLocale, getTranslations } from "next-intl/server";
import Link from "../Link";
import { formatMeta, SILO_TONE, type MagData } from "./data";
import { SILOS } from "@/lib/silos";

export default async function Articles({
  posts,
}: {
  posts: MagData["latest"];
}) {
  const t = await getTranslations("mag.articles");
  const locale = await getLocale();
  const monthLabel = new Intl.DateTimeFormat(locale, {
    month: "long",
    year: "numeric",
  }).format(new Date(posts[0]?.date ?? Date.now()));

  return (
    <section
      id="articles"
      style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up" style={{ animationRange: "entry 0% entry 35%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 8,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.45)",
            }}
          >
            {t("label")}
          </div>
          <div
            className="serif"
            style={{ fontSize: 15, color: "rgba(15,14,12,.5)" }}
          >
            {monthLabel}
          </div>
        </div>

        <div>
          {posts.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              data-r="g"
              className="rv-up mag-item"
              style={{
                display: "grid",
                gridTemplateColumns: "110px 1fr auto",
                gap: 24,
                alignItems: "baseline",
                padding: "22px 14px",
                margin: "0 -14px",
                borderBottom:
                  i === posts.length - 1
                    ? undefined
                    : "1px solid rgba(15,14,12,.15)",
                borderRadius: 10,
                animationRange: `entry ${i * 5}% entry ${26 + i * 5}%`,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: SILO_TONE[post.silo],
                }}
              >
                {SILOS[post.silo].shortName.toUpperCase()}
              </span>
              <span
                className="serif"
                style={{
                  fontStyle: "normal",
                  fontSize: "clamp(19px,2vw,25px)",
                  lineHeight: 1.2,
                }}
              >
                {post.title}
              </span>
              <span
                style={{
                  fontSize: 12.5,
                  color: "rgba(15,14,12,.5)",
                  whiteSpace: "nowrap",
                }}
              >
                {formatMeta(post, locale)}
              </span>
            </Link>
          ))}
        </div>
      </div>
      <div data-r="bleed" className="mag-rule" />
    </section>
  );
}
