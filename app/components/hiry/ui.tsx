import type { CSSProperties, ReactNode } from "react";

/** Eyebrow « 01 · LE PROBLÈME » */
export function Label({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontSize: 11.5,
        fontWeight: 700,
        letterSpacing: ".18em",
        color: "rgba(15,14,12,.4)",
        marginBottom: 20,
      }}
    >
      {children}
    </div>
  );
}

/** Barre de progression animée (keyframe growX, boucle infinie) */
export function Bar({
  label,
  value,
  color,
  delay = 0,
  track = "#fff",
  height = 6,
  fontSize = 12,
}: {
  label: string;
  value: number;
  color: string;
  delay?: number;
  track?: string;
  height?: number;
  fontSize?: number;
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize,
          fontWeight: 500,
          marginBottom: height > 6 ? 5 : 4,
        }}
      >
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>
      <div
        style={{ height, borderRadius: height / 2, background: track }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            borderRadius: height / 2,
            background: color,
            transformOrigin: "left",
            animation: `growX 6s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

/** Pastille clignotante « Analyse IA en cours… » */
export function LiveDot({ size = 7 }: { size?: number }) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: "var(--color-blue)",
        animation: "blinkDot 1.6s infinite",
        flex: "none",
      }}
    />
  );
}

/** Ligne de « match » avec pastille, libellé et score */
export function MatchRow({
  initials,
  tone,
  title,
  subtitle,
  score,
  delay = 0,
  compact = false,
}: {
  initials: string;
  tone: string;
  title: string;
  subtitle: string;
  score: string;
  delay?: number;
  compact?: boolean;
}) {
  const s = compact ? 30 : 32;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: compact ? 10 : 11,
        background: "#F2F8FC",
        borderRadius: 12,
        padding: compact ? "11px 13px" : "12px 14px",
        animation: "popIn 7s ease infinite",
        animationDelay: `${delay}s`,
      }}
    >
      <span
        style={{
          width: s,
          height: s,
          flex: "none",
          borderRadius: "50%",
          background: tone,
          display: "grid",
          placeItems: "center",
          fontWeight: 700,
          fontSize: 12,
        }}
      >
        {initials}
      </span>
      <div style={{ fontSize: compact ? 12.5 : 13, minWidth: 0 }}>
        <div style={{ fontWeight: 700 }}>{title}</div>
        <div style={{ color: "rgba(15,14,12,.5)" }}>{subtitle}</div>
      </div>
      <span
        style={{
          marginLeft: "auto",
          fontWeight: 700,
          fontSize: compact ? 15 : 16,
          color: "var(--color-blue)",
        }}
      >
        {score}
      </span>
    </div>
  );
}

/** Carte blanche de la grille « fonctionnalités » */
export function FeatureCard({
  title,
  desc,
  children,
  index = 0,
  style,
}: {
  title: string;
  desc: string;
  children?: ReactNode;
  index?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className="rv-scale"
      style={{
        background: "#fff",
        border: "1px solid rgba(15,14,12,.08)",
        borderRadius: 18,
        padding: 28,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        animationRange: `entry ${(index % 3) * 8}% entry ${
          30 + (index % 3) * 8
        }%`,
        ...style,
      }}
    >
      <div style={{ fontWeight: 700, fontSize: 17 }}>{title}</div>
      <p
        style={{
          fontSize: 14,
          lineHeight: 1.55,
          color: "rgba(15,14,12,.65)",
          margin: 0,
          flex: 1,
        }}
      >
        {desc}
      </p>
      {children}
    </div>
  );
}

export const PANEL: CSSProperties = {
  background: "#F2F8FC",
  borderRadius: 12,
  padding: "14px 15px",
};

export const TONES = {
  cyan: "#C4F8FF",
  blue: "#CFE4F2",
  green: "#D6F2E8",
} as const;
