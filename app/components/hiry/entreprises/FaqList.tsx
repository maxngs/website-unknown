import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead from "./SectionHead";

/**
 * 12 · FAQ en <details> natifs (accordéon accessible sans JS, styles .faq
 * partagés). Les mêmes items alimentent le JSON-LD FAQPage de la page.
 */
export default function FaqList({ c }: { c: EntreprisesContent["faq"] }) {
  return (
    <section id="faq" aria-labelledby="faq-title" style={{ padding: "88px 44px", maxWidth: 900, margin: "0 auto" }}>
      <SectionHead id="faq-title" label={c.label} title={c.title} />
      <div className="faq" style={{ display: "grid", gap: 12 }}>
        {c.items.map((item) => (
          <details key={item.q} style={{ background: "#fff", border: "1px solid rgba(15,14,12,.1)", borderRadius: 16, padding: "0 24px" }}>
            <summary style={{ fontWeight: 700, fontSize: 16, padding: "20px 0", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
              <h3 style={{ font: "inherit", margin: 0 }}>{item.q}</h3>
              <span aria-hidden style={{ fontSize: 20, color: "var(--color-blue)", flex: "none" }}>
                +
              </span>
            </summary>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "rgba(15,14,12,.68)", margin: 0, padding: "0 0 22px" }}>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
