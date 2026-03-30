// app/politique-confidentialite/page.tsx
import type { Metadata } from "next";
import PolitiqueConfidentialiteContent from "./content";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de Confidentialité du Service Hiry — Version 1.0. Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.",
  alternates: { canonical: "/politique-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return <PolitiqueConfidentialiteContent />;
}
