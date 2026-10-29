import { getPost } from "@/lib/blog";
import type { EntreprisesContent } from "@/content/entreprises";
import Link from "../Link";
import SectionHead, { SECTION } from "./SectionHead";
import DemoLink from "./DemoLink";

/**
 * 10 · FAQ éditoriale : titre, renvoi vers la démo et articles du Mag à
 * gauche ; questions en filets à droite (<details> natifs, sans JS).
 * Sur mobile, les articles passent sous les questions.
 * Les mêmes items alimentent le JSON-LD FAQPage.
 */
export default function FaqList({ c }: { c: EntreprisesContent["faq"] }) {
  const posts = c.further.slugs
    .map((slug) => getPost("entreprises", slug))
    .filter((p): p is NonNullable<typeof p> => p !== null);

  return (
    <section id="faq" aria-labelledby="faq-title" className="ent-screen" style={SECTION}>
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,.8fr) minmax(0,1.2fr)", gap: "clamp(32px,5vw,88px)", alignItems: "start" }}>
        <div className="sticky-desk faq-side">
          <div>
            <SectionHead id="faq-title" label={c.label} title={c.title} />
            <p style={{ fontSize: 15.5, color: "rgba(15,14,12,.7)", margin: "-24px 0 18px" }}>{c.more}</p>
            <DemoLink className="btn btn-ink" style={{ fontSize: 14.5, padding: "13px 24px" }}>
              {c.moreCta}
            </DemoLink>
          </div>

          {/* div et non <nav> : les <nav> reçoivent un padding sur mobile. */}
          {posts.length > 0 && (
            <div role="navigation" aria-label={c.further.label} className="faq-further">
              <h3 className="ats-kicker">{c.further.label}</h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {posts.map((post) => (
                  <li key={post.slug} style={{ borderTop: "1px solid rgba(15,14,12,.1)" }}>
                    <Link href={post.href} className="faq-read">
                      <span>{post.title}</span>
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="faq faq-ed">
          {c.items.map((item, i) => (
            <details key={item.q}>
              <summary>
                <span aria-hidden className="faq-num serif">{String(i + 1).padStart(2, "0")}</span>
                <h3>{item.q}</h3>
                <span aria-hidden className="faq-plus" />
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
