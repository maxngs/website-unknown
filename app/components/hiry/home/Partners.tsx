import { getTranslations } from "next-intl/server";

/**
 * Bandeau partenaires défilant.
 * La home affiche « ils nous font confiance » (6 noms, graisse 600) ;
 * les pages publics affichent « ils nous supportent » (5 noms, graisse 500).
 */
export default async function Partners({
  variant = "trust",
}: {
  variant?: "trust" | "support";
} = {}) {
  const t = await getTranslations("partners");
  const support = variant === "support";
  const list = t.raw(support ? "supportList" : "list") as string[];

  return (
    <div
      data-r="pad"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 30,
        borderBottom: "1px solid rgba(15,14,12,.08)",
        padding: "22px 44px",
        marginTop: 26,
      }}
    >
      <span
        style={{
          flex: "none",
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".18em",
          color: "rgba(15,14,12,.45)",
        }}
      >
        {t(support ? "supportLabel" : "label")}
      </span>
      <div
        style={{
          overflow: "hidden",
          flex: 1,
          maskImage:
            "linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)",
        }}
      >
        <div
          className="marquee-track"
          style={{
            gap: 56,
            fontWeight: support ? 500 : 600,
            fontSize: 16,
            color: "rgba(15,14,12,.55)",
            whiteSpace: "nowrap",
            alignItems: "center",
          }}
        >
          {/* contenu dupliqué 2× : la keyframe translate de -50% */}
          {[...list, ...list].map((name, i) => (
            <span key={`${name}-${i}`}>{name}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
