// app/components/shared/JsonLd.tsx
// Données structurées pour les résultats enrichis Google (Organization + WebSite + Services)
export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hiry.fr/#organization",
        name: "Hiry",
        url: "https://hiry.fr",
        logo: {
          "@type": "ImageObject",
          url: "https://hiry.fr/logo.png",
        },
        description:
          "Plateforme de recrutement propulsée par l'IA qui connecte Étudiants, PME et Écoles grâce au matching intelligent.",
        foundingDate: "2024",
        sameAs: [
          "https://www.linkedin.com/company/hiry-recrutement",
          "https://www.instagram.com/hiry.fr/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@hiry.fr",
          contactType: "customer service",
          availableLanguage: "French",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://hiry.fr/#website",
        url: "https://hiry.fr",
        name: "Hiry",
        publisher: { "@id": "https://hiry.fr/#organization" },
        inLanguage: "fr-FR",
      },
      {
        "@type": "WebPage",
        "@id": "https://hiry.fr/#webpage",
        url: "https://hiry.fr",
        name: "Hiry — Le recrutement réinventé | Candidats, Entreprises & Écoles",
        isPartOf: { "@id": "https://hiry.fr/#website" },
        about: { "@id": "https://hiry.fr/#organization" },
        description:
          "La première plateforme qui utilise l'IA pour révéler le potentiel des talents et simplifier la mise en relation avec les entreprises.",
        inLanguage: "fr-FR",
      },
      {
        "@type": "Service",
        name: "Hiry pour les candidats",
        description:
          "Révélez votre vrai potentiel grâce à l'IA. Cartographie de profil, matching intelligent par soft skills et suivi de candidatures.",
        provider: { "@id": "https://hiry.fr/#organization" },
        url: "https://hiry.fr/candidats",
        audience: {
          "@type": "Audience",
          audienceType: "Étudiants et candidats en recherche d'emploi, stage ou alternance",
        },
      },
      {
        "@type": "Service",
        name: "Hiry pour les entreprises",
        description:
          "Accédez à un vivier de talents pré-qualifiés par l'IA. Pipeline de recrutement intelligent et matching par culture d'entreprise.",
        provider: { "@id": "https://hiry.fr/#organization" },
        url: "https://hiry.fr/entreprises",
        audience: {
          "@type": "Audience",
          audienceType: "PME, startups et recruteurs",
        },
      },
      {
        "@type": "Service",
        name: "Hiry pour les écoles",
        description:
          "Pilotez l'insertion professionnelle de vos promotions avec des données en temps réel et des relations entreprises facilitées.",
        provider: { "@id": "https://hiry.fr/#organization" },
        url: "https://hiry.fr/ecoles",
        audience: {
          "@type": "Audience",
          audienceType: "Universités et grandes écoles",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
