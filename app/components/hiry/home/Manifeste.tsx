import { getTranslations } from "next-intl/server";
import LupoVideo from "../LupoVideo";

export default async function Manifeste() {
  const t = await getTranslations("manifesto");

  return (
    <section
      id="manifeste"
      style={{ padding: "130px 44px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div
        data-r="g"
        className="rv-up"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,380px) minmax(0,1fr)",
          gap: "clamp(40px,5vw,80px)",
          alignItems: "center",
        }}
      >
        <div
          className="rv-left"
          style={{
            borderRadius: 28,
            overflow: "hidden",
            width: "100%",
            aspectRatio: "1",
            position: "relative",
          }}
        >
          <LupoVideo ariaLabel={t("videoAlt")} />
        </div>

        <div className="rv-right" style={{ display: "grid", gap: 24 }}>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.4)",
            }}
          >
            {t("label")}
          </div>
          <p
            style={{
              fontSize: "clamp(28px,3vw,44px)",
              lineHeight: 1.28,
              letterSpacing: "-.015em",
              margin: 0,
              fontWeight: 400,
              textWrap: "pretty",
            }}
          >
            {t.rich("text", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </p>
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.55)",
              maxWidth: 560,
              margin: 0,
            }}
          >
            {t("signed")}
          </p>
        </div>
      </div>
    </section>
  );
}
