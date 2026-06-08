// app/components/shared/FaqJsonLd.tsx
// Composant utilitaire qui émet un script JSON-LD FAQPage Schema.org.
// Utilisé sur les landings (/candidats, /entreprises, /ecoles) et la page /tarifs
// — pour les articles du Mag, voir ArticleJsonLd qui combine Article + FAQPage.

interface FaqEntry {
  q: string;
  a: string;
}

interface FaqJsonLdProps {
  /** Liste des questions/réponses à exposer en données structurées. */
  faqs: FaqEntry[];
}

export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  if (faqs.length === 0) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
