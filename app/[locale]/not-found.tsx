import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LupoVideo from "@/app/components/hiry/LupoVideo";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main
      style={{
        minHeight: "calc(100vh - 70px)",
        display: "grid",
        placeItems: "center",
        padding: "60px 44px",
      }}
    >
      <div
        data-r="g"
        className="rv"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0,340px) minmax(0,1fr)",
          gap: "clamp(36px,5vw,72px)",
          alignItems: "center",
          maxWidth: 980,
        }}
      >
        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            aspectRatio: "1",
            position: "relative",
          }}
        >
          <LupoVideo />
        </div>

        <div>
          <div
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.4)",
              marginBottom: 18,
            }}
          >
            {t("label")}
          </div>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "clamp(44px,6vw,84px)",
              lineHeight: 0.98,
              letterSpacing: "-.035em",
              margin: "0 0 20px",
            }}
          >
            {t.rich("title", {
              em: (chunks) => <em className="serif">{chunks}</em>,
            })}
          </h1>
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.65)",
              margin: "0 0 32px",
              maxWidth: 440,
            }}
          >
            {t("text")}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/"
              className="btn btn-ink"
              style={{ fontSize: 14.5, padding: "14px 28px" }}
            >
              {t("home")}
            </Link>
            <Link
              href="/candidats"
              className="btn btn-outline"
              style={{
                fontSize: 14.5,
                padding: "12.5px 28px",
                borderWidth: 1.5,
                background: "transparent",
              }}
            >
              {t("find")}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
