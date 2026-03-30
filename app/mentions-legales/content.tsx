// ============================================================
// app/mentions-legales/content.tsx
// Contenu des Mentions Légales — 30/03/2026
// ============================================================
"use client";

import { Scale } from "lucide-react";
import LegalContent, { LegalSection } from "../components/shared/LegalContent";

const sections: LegalSection[] = [
  {
    title: "Éditeur du site",
    content: `Le site https://www.hiry.fr (le « Site internet ») est édité par la société MNGS, agissant en qualité de société mère et garante dans l'attente de l'immatriculation de la société dédiée au projet Hiry.

MNGS SAS, 992 187 674 R.C.S. Versailles, dont le siège social est 06 Les Vergers de la Ranchère, 78860 Saint-Nom-La-Bretèche, numéro de TVA intracommunautaire FR82992187674.

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
      lastUpdated="30 mars 2026"
      sections={sections}
      contactEmail="contact@hiry.fr"
    />
  );
}
