import type { EntreprisesContent } from "@/content/entreprises";
import { FORMULES, prixUneFois } from "@/content/entreprises/pricing";
import Link from "../Link";
import { LEGAL } from "../links";
import SectionHead, { SECTION } from "./SectionHead";
import DemoLink from "./DemoLink";

const muted = (dark: boolean) => (dark ? "rgba(247,243,236,.65)" : "rgba(15,14,12,.6)");

function Bullets({ items, dark }: { items: string[]; dark: boolean }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 9, fontSize: 14, flex: 1 }}>
      {items.map((b) => (
        <li key={b} style={{ display: "flex", gap: 9 }}>
          <span aria-hidden style={{ color: dark ? "var(--color-cyan)" : "var(--color-green)", fontWeight: 700 }}>✓</span>
          {b}
        </li>
      ))}
    </ul>
  );
}

/**
 * 11 · Tarifs (option A) : les 3 formules de lancement, affichées pour la
 * transparence, + une carte « Sur mesure ». Aucun lien vers l'app : chaque
 * bouton mène au formulaire de démo et transmet la formule cliquée.
 * Montants : content/entreprises/pricing.ts (source unique).
 */
export default function Tarifs({
  c,
  locale,
}: {
  c: EntreprisesContent["pricing"];
  locale: string;
}) {
  const eur = (n: number) =>
    new Intl.NumberFormat(locale === "en" ? "en-GB" : "fr-FR", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(n);

  const cardStyle = (dark: boolean) => ({
    background: dark ? "var(--color-ink)" : "#fff",
    color: dark ? "var(--color-bg)" : "var(--color-ink)",
    borderRadius: 22,
    padding: 28,
    display: "flex",
    flexDirection: "column" as const,
    gap: 16,
    boxShadow: "0 8px 24px rgba(15,14,12,.05)",
    border: dark ? undefined : "1px solid rgba(15,14,12,.07)",
  });

  return (
    <section id="tarifs" aria-labelledby="tarifs-title" style={SECTION}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap" }}>
        <SectionHead id="tarifs-title" label={c.label} title={c.title} subtitle={c.subtitle} />
        <span className="opt-badge rv-up" style={{ marginBottom: 52, fontSize: 12.5, padding: "7px 14px" }}>
          {c.launchBadge}
        </span>
      </div>

      <div data-r="g" style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 14 }}>
        {c.plans.map((plan, i) => {
          const dark = plan.key === "horizon";
          const once = prixUneFois(plan.key);
          return (
            <article key={plan.key} className={`rv-up${i ? ` rv-d${i}` : ""}`} style={cardStyle(dark)}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-.02em", margin: "0 0 4px" }}>{plan.name}</h3>
                <p style={{ fontSize: 13.5, color: muted(dark), margin: 0 }}>{plan.tagline}</p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                  <span style={{ fontWeight: 700, fontSize: 42, letterSpacing: "-.04em" }}>{eur(FORMULES[plan.key].mois)}</span>
                  <span style={{ fontSize: 13, color: muted(dark) }}>{c.perMonth}</span>
                </div>
                <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4 }}>{plan.terms}</div>
                {once && (
                  <div style={{ fontSize: 12.5, color: muted(dark), marginTop: 4 }}>
                    {c.orOnce.replace("{amount}", eur(once))}
                    {plan.onceBadge && (
                      <span style={{ display: "block", color: dark ? "var(--color-cyan)" : "var(--color-green)", fontWeight: 700, marginTop: 2 }}>
                        {plan.onceBadge}
                      </span>
                    )}
                  </div>
                )}
              </div>
              <Bullets items={c.bullets} dark={dark} />
              <DemoLink
                className={dark ? "btn btn-white" : "btn btn-ink"}
                style={{ fontSize: 14.5, padding: "13px 20px" }}
                prefill={{ mode: "demo", formule: plan.key }}
              >
                {c.cta}
              </DemoLink>
            </article>
          );
        })}

        <article className="rv-up rv-d3" style={{ ...cardStyle(false), background: "var(--color-blue-p)", border: undefined }}>
          <div>
            <h3 style={{ fontWeight: 700, fontSize: 22, letterSpacing: "-.02em", margin: "0 0 4px" }}>{c.custom.name}</h3>
            <p style={{ fontSize: 13.5, color: muted(false), margin: 0 }}>{c.custom.tagline}</p>
          </div>
          <div style={{ fontWeight: 700, fontSize: 32, letterSpacing: "-.03em" }}>{c.custom.price}</div>
          <Bullets items={c.custom.bullets} dark={false} />
          <DemoLink
            className="btn btn-ink-alt"
            style={{ fontSize: 14.5, padding: "13px 20px" }}
            prefill={{ mode: "demo", formule: "sur_mesure" }}
          >
            {c.custom.cta}
          </DemoLink>
        </article>
      </div>

      <p style={{ fontSize: 12.5, lineHeight: 1.6, color: "rgba(15,14,12,.62)", margin: "22px 0 0", maxWidth: 760 }}>
        {c.note}{" "}
        <Link href={LEGAL.sales} style={{ textDecoration: "underline", textUnderlineOffset: 3 }}>
          {c.cgvLabel}
        </Link>
        .
      </p>
    </section>
  );
}
