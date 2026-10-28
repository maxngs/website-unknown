import type { EntreprisesContent } from "@/content/entreprises";
import SectionHead, { SECTION } from "./SectionHead";

/**
 * 06 · Un ATS complet : matrice « ATS classique / Hiry ». Deux groupes de
 * lignes : l'essentiel d'un ATS (coché des deux côtés), puis ce qu'un ATS
 * classique ne fait pas (tiret côté ATS, coché côté Hiry). La colonne Hiry
 * est teintée pour que la différence se lise d'un coup d'œil.
 */
export default function AtsComplet({
  c,
  optionBadge,
}: {
  c: EntreprisesContent["ats"];
  optionBadge: string;
}) {
  return (
    <section id="ats" aria-labelledby="ats-title" className="ent-screen" style={SECTION}>
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "minmax(0,.75fr) minmax(0,1.25fr)", gap: "clamp(28px,4vw,72px)", alignItems: "center" }}>
        <SectionHead id="ats-title" label={c.label} title={c.title} subtitle={c.subtitle} />

        <div className="rv-up ats-card">
          <table className="ats-matrix">
            <caption className="sr-only">{c.title.replace(/<\/?em>/g, "")}</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">{c.colFeature}</span>
                </th>
                <th scope="col" className="ats-col">{c.colClassic}</th>
                <th scope="col" className="ats-col ats-hiry">{c.colHiry}</th>
              </tr>
            </thead>
            {c.groups.map((g, gi) => (
              <tbody key={g.title}>
                <tr className="ats-group">
                  <th scope="colgroup" colSpan={2}>{g.title}</th>
                  <td className="ats-hiry" aria-hidden />
                </tr>
                {g.items.map((it) => (
                  <tr key={it.title}>
                    <th scope="row">
                      <strong>{it.title}</strong> <span>{it.text}</span>
                    </th>
                    <td className="ats-col">
                      {gi === 0 ? (
                        <span className="ats-yes ats-muted" title={c.yes}>
                          <span aria-hidden>✓</span>
                          <span className="sr-only">{c.yes}</span>
                        </span>
                      ) : (
                        <span className="ats-no" title={c.no}>
                          <span aria-hidden>—</span>
                          <span className="sr-only">{c.no}</span>
                        </span>
                      )}
                    </td>
                    <td className="ats-col ats-hiry">
                      {it.optional ? (
                        <span className="opt-badge">{optionBadge}</span>
                      ) : (
                        <span className="ats-yes" title={c.yes}>
                          <span aria-hidden>✓</span>
                          <span className="sr-only">{c.yes}</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
