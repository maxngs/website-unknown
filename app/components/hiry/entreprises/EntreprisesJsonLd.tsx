import type { EntreprisesContent } from "@/content/entreprises";
import { FORMULES } from "@/content/entreprises/pricing";
import { SITE_URL } from "../seo";

/**
 * Données structurées de la page : SoftwareApplication (offres = grille
 * publique, aucune note inventée), FAQPage (même source que l'accordéon),
 * BreadcrumbList. L'Organization est déclarée par le layout.
 */
export default function EntreprisesJsonLd({
  c,
  locale,
  page,
}: {
  c: EntreprisesContent;
  locale: string;
  page: "entreprises" | "demo";
}) {
  const base = `${SITE_URL}/${locale}/entreprises`;
  const url = page === "demo" ? `${base}/demo` : base;
  const plans = c.pricing.plans;

  const graph: Record<string, unknown>[] = [
    {
      "@type": "SoftwareApplication",
      "@id": `${base}#software`,
      name: "Hiry",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Applicant Tracking System",
      operatingSystem: "Web",
      url: base,
      description: c.meta.appDescription,
      inLanguage: locale === "en" ? "en" : "fr-FR",
      publisher: { "@id": `${SITE_URL}/#organization` },
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: FORMULES[p.key].mois,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: FORMULES[p.key].mois,
          priceCurrency: "EUR",
          unitCode: "MON",
          valueAddedTaxIncluded: false,
        },
        url: `${base}#tarifs`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: c.meta.breadcrumbHome, item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: c.meta.breadcrumbPage, item: base },
        ...(page === "demo"
          ? [{ "@type": "ListItem", position: 3, name: c.meta.breadcrumbDemo, item: url }]
          : []),
      ],
    },
  ];

  if (page === "entreprises") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${base}#faq`,
      mainEntity: c.faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c"),
      }}
    />
  );
}
