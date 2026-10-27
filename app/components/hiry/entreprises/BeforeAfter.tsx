import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";

/**
 * 07 · Avant / après : un vrai <table> (accessible, indexable).
 * Sous 900px, chaque ligne devient une carte (CSS .ba-table, data-label).
 */
export default function BeforeAfter({ c }: { c: EntreprisesContent["beforeAfter"] }) {
  return (
    <section id="avant-apres" aria-labelledby="ba-title" style={SECTION}>
      <SectionHead id="ba-title" label={c.label} title={c.title} />
      <div className="rv-up">
        <table className="ba-table">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col">{c.colCriterion}</th>
              <th scope="col">{c.colWithout}</th>
              <th scope="col">{c.colWith}</th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r.criterion}>
                <th scope="row">{r.criterion}</th>
                <td data-label={c.colWithout}>{r.without}</td>
                <td data-label={c.colWith}>{r.with}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
