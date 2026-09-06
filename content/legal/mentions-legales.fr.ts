// ============================================================
// Texte juridique — mentions-legales (français, version de référence).
// Source unique : lu par l'ancien site (app/<page>/content.tsx) et
// par la refonte (app/[locale]/<page>/page.tsx).
// ============================================================

import type { LegalSection } from "@/app/components/shared/LegalContent";

export const sections: LegalSection[] = [
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
