import { getTranslations } from "next-intl/server";
import Link from "../Link";
import { GLOSSARY } from "../links";
import type { MagData } from "./data";

export default async function Glossaire({
  entries,
}: {
  entries: MagData["glossary"];
}) {
  const t = await getTranslations("mag.glossary");

  return (
    <section
      id="glossaire"
      style={{ padding: "44px 44px 60px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-up"
        style={{ display: "grid", gridTemplateColumns: ".8fr 1.5fr", gap: 0 }}
      >
        <div
          style={{
            paddingRight: 44,
            borderRight: "1px solid rgba(15,14,12,.2)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.45)",
              marginBottom: 18,
            }}
          >
            {t("label")}
          </div>
          <h2
            className="serif"
            style={{
              fontStyle: "normal",
              fontSize: "clamp(28px,3vw,42px)",
              lineHeight: 1.08,
              letterSpacing: "-.015em",
              margin: "0 0 14px",
            }}
          >
            {t("title")}
          </h2>
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.6)",
              margin: "0 0 18px",
            }}
          >
            {t("subtitle")}
          </p>
          <Link
            href={GLOSSARY}
            className="mag-link"
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".08em",
            }}
          >
            {t("seeAll")}
          </Link>
        </div>

        <dl style={{ paddingLeft: 44, margin: 0 }}>
          {entries.map((entry, i) => {
            const last = i === entries.length - 1;
            return (
              <div
                key={entry.slug}
                style={{
                  borderBottom: last ? undefined : "1px solid rgba(15,14,12,.15)",
                  paddingBottom: last ? undefined : 18,
                  marginBottom: last ? undefined : 18,
                }}
              >
                <dt
                  className="serif"
                  style={{ fontStyle: "normal", fontSize: 21, marginBottom: 6 }}
                >
                  <Link
                    href={`${GLOSSARY}/${entry.slug}`}
                    className="mag-link"
                  >
                    {entry.term}
                  </Link>
                </dt>
                <dd
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    color: "rgba(15,14,12,.65)",
                    margin: 0,
                  }}
                >
                  {entry.shortDefinition}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
