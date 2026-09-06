import { getLocale, getTranslations } from "next-intl/server";
import type { BlogPostMeta } from "@/lib/blog";
import { SILOS } from "@/lib/silos";
import Link from "../Link";
import { formatMeta, SILO_TONE } from "./data";

export default async function RelatedPosts({
  posts,
}: {
  posts: BlogPostMeta[];
}) {
  if (posts.length === 0) return null;
  const t = await getTranslations("article");
  const locale = await getLocale();

  return (
    <section
      style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(15,14,12,.45)",
            marginBottom: 24,
          }}
        >
          {t("related")}
        </div>
        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(posts.length, 3)},minmax(0,1fr))`,
            gap: 18,
          }}
        >
          {posts.slice(0, 3).map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className="rv-scale mag-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                background: "var(--color-card-warm)",
                border: "1px solid rgba(15,14,12,.08)",
                borderRadius: 18,
                padding: 26,
                animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  color: SILO_TONE[p.silo],
                }}
              >
                {SILOS[p.silo].shortName.toUpperCase()}
              </span>
              <span
                className="serif"
                style={{
                  fontStyle: "normal",
                  fontSize: 21,
                  lineHeight: 1.22,
                  flex: 1,
                }}
              >
                {p.title}
              </span>
              <span style={{ fontSize: 12.5, color: "rgba(15,14,12,.5)" }}>
                {formatMeta(p, locale)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
