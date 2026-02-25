// app/components/shared/JsonLd.tsx
// Données structurées pour les résultats enrichis Google
export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hiry",
    url: "https://hiry.fr",
    logo: "https://hiry.fr/logo.png",
    description:
      "Plateforme de recrutement propulsée par l'IA qui connecte Étudiants, PME et Écoles grâce au matching intelligent.",
    foundingDate: "2024",
    sameAs: [
      "https://www.linkedin.com/company/hiry",
      // Ajoute tes réseaux sociaux ici
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@hiry.fr",
      contactType: "customer service",
      availableLanguage: "French",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
