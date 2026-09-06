import { getTranslations } from "next-intl/server";
import Link from "../Link";
import type { MagData } from "./data";

export default async function Rubriques({
  rubriques,
}: {
  rubriques: MagData["rubriques"];
}) {
  const t = await getTranslations("mag.rubriques");

  return (
    <section
      id="rubriques"
      style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".18em",
            color: "rgba(15,14,12,.45)",
            marginBottom: 28,
          }}
        >
          {t("label")}
        </div>
        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,minmax(0,1fr))",
            gap: 0,
          }}
        >
          {rubriques.map((r, i) => {
            const active = r.count > 0;
            const inner = (
              <>
                <div
                  className="serif"
                  style={{
                    fontStyle: "normal",
                    fontSize: 15,
                    color: "rgba(15,14,12,.45)",
                    marginBottom: 12,
                  }}
                >
                  N°{i + 1}
                </div>
                <div
                  className="serif"
                  style={{
                    fontStyle: "normal",
                    fontSize: 26,
                    lineHeight: 1.1,
                    marginBottom: 10,
                  }}
                >
                  {r.name}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    lineHeight: 1.55,
                    color: active
                      ? "rgba(15,14,12,.6)"
                      : "rgba(15,14,12,.55)",
                  }}
                >
                  {r.description}
                </div>
                <div
                  style={{
                    fontSize: 11.5,
                    fontWeight: 700,
                    marginTop: 14,
                    letterSpacing: ".08em",
                    fontStyle: active ? undefined : "italic",
                  }}
                >
                  {active
                    ? `${r.count} ${t("articles")} →`
                    : t("soon")}
                </div>
              </>
            );
            const style = {
              display: "block" as const,
              padding:
                i === 0
                  ? "0 28px 36px 0"
                  : i === rubriques.length - 1
                    ? "0 0 36px 28px"
                    : "0 28px 36px 28px",
              borderRight:
                i === rubriques.length - 1
                  ? undefined
                  : "1px solid rgba(15,14,12,.2)",
              color: active ? undefined : "rgba(15,14,12,.55)",
              animationRange: `entry ${i * 7}% entry ${28 + i * 7}%`,
            };
            return active ? (
              <Link
                key={r.slug}
                href={`/mag/${r.slug}`}
                className="rv-up mag-link"
                style={style}
              >
                {inner}
              </Link>
            ) : (
              <div key={r.slug} className="rv-up" style={style}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
      <div data-r="bleed" className="mag-rule" />
    </section>
  );
}
