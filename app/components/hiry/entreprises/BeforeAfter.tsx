import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";

/**
 * 07 · Avant / après Hiry : vrai <table> à deux colonnes visibles côte à
 * côte. « Sans Hiry » sur fond blanc, texte atténué ; « Avec Hiry » en
 * bloc bleu continu, chaque en-tête porte le chiffre qui résume le
 * changement. Sous 900px, chaque ligne devient une carte.
 */
export default function BeforeAfter({ c }: { c: EntreprisesContent["beforeAfter"] }) {
  return (
    <section id="avant-apres" aria-labelledby="ba-title" className="ent-screen" style={SECTION}>
      <div className="ba-head">
        <SectionHead id="ba-title" label={c.label} title={c.title} />
        {c.subtitle && <p className="ba-sub rv-up">{c.subtitle}</p>}
      </div>
      <div className="rv-up">
        <table className="ba-compare">
          <caption className="sr-only">{c.caption}</caption>
          <thead>
            <tr>
              <th scope="col">
                <span className="sr-only">{c.colCriterion}</span>
              </th>
              <th scope="col" className="ba-sans">
                <span className="ba-col">{c.colWithout}</span>
                <span className="ba-figure">{c.sansHead}</span>
              </th>
              <th scope="col" className="ba-avec">
                <span className="ba-col">{c.colWith}</span>
                <span className="ba-figure">{c.avecHead}</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={r.criterion}>
                <th scope="row">{r.criterion}</th>
                <td className="ba-sans" data-label={c.colWithout}>
                  <span aria-hidden className="ba-mark">✕</span>
                  {r.without}
                </td>
                <td className="ba-avec" data-label={c.colWith}>
                  <span aria-hidden className="ba-mark">✓</span>
                  {r.with}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
