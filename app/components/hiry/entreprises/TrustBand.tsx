import type { EntreprisesContent } from "@/content/entreprises";

/** « Ils nous soutiennent » : noms en monochrome, sans titre bavard. */
export default function TrustBand({ c }: { c: EntreprisesContent["trust"] }) {
  return (
    <section
      aria-label={c.label}
      data-r="pad"
      style={{
        maxWidth: 1400,
        margin: "0 auto",
        padding: "28px 44px",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "14px 44px",
        borderBottom: "1px solid rgba(15,14,12,.08)",
      }}
    >
      <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: ".18em", color: "rgba(15,14,12,.6)" }}>
        {c.label.toUpperCase()}
      </span>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexWrap: "wrap", gap: "10px 40px", fontSize: 16, fontWeight: 600, color: "rgba(15,14,12,.62)" }}>
        {c.list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
