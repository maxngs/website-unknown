// ============================================================
// app/mentions-legales/content.tsx
// Contenu des Mentions Légales — 25/05/2026
// ============================================================
"use client";

import { Scale } from "lucide-react";
import LegalContent, { LegalSection } from "../components/shared/LegalContent";

const sections: LegalSection[] = [
  {
    title: "Éditeur du site",
    content: `Le site https://www.hiry.fr (le « Site internet ») est édité par la société Hiry SAS.

Hiry SAS, 104 764 493 R.C.S. Nanterre, dont le siège social est 36-40 rue Raspail – L'Escalator, 92 300 Levallois Perret.

En cas de problème lié à l'utilisation du site, notre équipe est joignable à contact@hiry.fr.`,
  },
  {
    title: "Directeur de la publication",
    content: `Maxime NOGUES`,
  },
  {
    title: "Hébergement",
    content: `Les données du Site internet sont hébergées auprès de Vercel Inc, dont le siège social est 440 N Barranca Ave #4133 Covina, CA 91723.`,
  },
];

export default function MentionsLegalesContent() {
  return (
    <LegalContent
      icon={<Scale size={22} className="text-indigo-600" />}
      title="Mentions légales"
      lastUpdated="25 mai 2026"
      sections={sections}
      contactEmail="contact@hiry.fr"
    />
  );
}
