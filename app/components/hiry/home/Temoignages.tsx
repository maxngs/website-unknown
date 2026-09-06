import { getTranslations } from "next-intl/server";

type Item = {
  quote: string;
  author: string;
  role: string;
  /** Public représenté — pilote le titre de la section. */
  audience?: "candidate" | "company" | "school";
};

export default async function Temoignages() {
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Item[];

  // Rien à montrer tant qu'aucun témoignage réel n'est fourni : on masque la
  // section plutôt que d'afficher des citations inventées.
  if (items.length === 0) return null;

  // Le titre ne promet que les publics réellement représentés : annoncer
  // « des écoles » sans témoignage d'école serait trompeur.
  const publics = new Set(items.map((i) => i.audience ?? "candidate"));
  const titleKey = publics.has("school")
    ? "title"
    : publics.has("company")
      ? "titleTwo"
      : "titleCandidates";

  // 4 témoignages tiennent mieux en 2×2 qu'en 3 + 1 orphelin.
  const colonnes = items.length === 4 ? 2 : Math.min(items.length, 3);

  return (
    <section
      id="temoignages"
      style={{ padding: "0 44px 110px", maxWidth: 1400, margin: "0 auto" }}
    >
      <div className="rv-up">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 14,
            marginBottom: 20,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: 11.5,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.4)",
            }}
          >
            {t("label")}
          </span>
          <span
            className="serif"
            style={{ fontSize: 14, color: "rgba(15,14,12,.45)" }}
          >
            {t("note")}
          </span>
        </div>

        <h2
          style={{
            fontWeight: 700,
            fontSize: "clamp(34px,3.8vw,54px)",
            lineHeight: 1.1,
            letterSpacing: "-.035em",
            margin: "0 0 44px",
          }}
        >
          {t.rich(titleKey, {
            em: (chunks) => <em className="serif">{chunks}</em>,
            br: () => <br />,
          })}
        </h2>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${colonnes},minmax(0,1fr))`,
            gap: 18,
          }}
        >
          {items.map((item, i) => (
            <figure
              key={item.author}
              className="rv-scale"
              style={{
                background: "var(--color-card-warm)",
                border: "1px solid rgba(15,14,12,.08)",
                borderRadius: 18,
                padding: 30,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: 44,
                animationRange: `entry ${i * 8}% entry ${30 + i * 8}%`,
              }}
            >
              <blockquote
                style={{
                  fontSize: 15.5,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {item.quote}
              </blockquote>
              <figcaption>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {item.author}
                </div>
                <div
                  style={{ fontSize: 12.5, color: "rgba(15,14,12,.5)" }}
                >
                  {item.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
