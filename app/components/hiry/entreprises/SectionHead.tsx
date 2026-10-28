import { Rich } from "./rich";

/**
 * En-tête de section : label numéroté, titre (h2, un mot en serif),
 * sous-titre court. `id` sert d'ancre au `aria-labelledby` de la section.
 */
export default function SectionHead({
  id,
  label,
  title,
  subtitle,
  dark = false,
  align = "left",
  maxWidth = 820,
}: {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  align?: "left" | "center";
  maxWidth?: number;
}) {
  return (
    <div
      className="rv-up"
      style={{
        maxWidth,
        margin: align === "center" ? "0 auto 48px" : "0 0 48px",
        textAlign: align,
      }}
    >
      <div
        style={{
          fontSize: 11.5,
          fontWeight: 700,
          letterSpacing: ".18em",
          color: dark ? "rgba(247,243,236,.55)" : "rgba(15,14,12,.6)",
          marginBottom: 20,
        }}
      >
        {label.toUpperCase()}
      </div>
      <h2
        id={id}
        style={{
          fontWeight: 700,
          fontSize: "clamp(32px,3.8vw,54px)",
          lineHeight: 1.05,
          letterSpacing: "-.035em",
          margin: 0,
          textWrap: "balance",
        }}
      >
        <Rich text={title} />
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 16.5,
            lineHeight: 1.6,
            color: dark ? "rgba(247,243,236,.72)" : "rgba(15,14,12,.65)",
            margin: "18px 0 0",
            maxWidth: 620,
            marginInline: align === "center" ? "auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Style commun des sections. Pleine largeur (fond de bord à bord), contenu
 * centré sur 1400px max par un padding latéral calculé. Sous 900px, hiry.css le ramène à 20px.
 */
const GUTTER = "max(44px, calc((100% - 1400px) / 2))";
export const SECTION = {
  paddingTop: 88,
  paddingBottom: 88,
  paddingLeft: GUTTER,
  paddingRight: GUTTER,
} as const;

/**
 * Section pleine largeur sur fond teinté : le padding reste sur <section>
 * (la règle responsive de hiry.css le ramène à 20px sur mobile), le
 * contenu est centré par INNER.
 */
export const BAND = { padding: "88px 44px" } as const;
export const INNER = { width: "100%", maxWidth: 1400, margin: "0 auto" } as const;
