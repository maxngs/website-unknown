// ============================================================
// Registre des documents légaux.
// Le français fait foi ; les traductions sont fournies à titre informatif.
// ============================================================
import type { LegalSection } from "@/app/components/shared/LegalContent";
import { sections as cguFr } from "./cgu.fr";
import { sections as cguEn } from "./cgu.en";
import { sections as mentionsFr } from "./mentions-legales.fr";
import { sections as mentionsEn } from "./mentions-legales.en";
import { sections as privacyFr } from "./politique-confidentialite.fr";
import { sections as privacyEn } from "./politique-confidentialite.en";

export type LegalDocSlug = "cgu" | "mentions-legales" | "politique-confidentialite";

export interface LegalDoc {
  slug: LegalDocSlug;
  /** Date ISO — mise en forme longue à l'affichage, par locale. */
  updated: string;
  /** Numéro de version du document, affiché à côté de la date. */
  version?: string;
  title: Record<string, string>;
  /** Chapô affiché sous le titre (repris du site en production). */
  intro?: Record<string, string>;
  /** Ligne de contact fermant le document. */
  outro?: Record<string, string>;
  sections: Record<string, LegalSection[]>;
}

export const LEGAL_DOCS: Record<LegalDocSlug, LegalDoc> = {
  cgu: {
    slug: "cgu",
    updated: "2026-06-08",
    version: "2.1",
    title: {
      fr: "Conditions Générales d'Utilisation",
      en: "Terms of Use",
    },
    intro: {
      fr: "Nous vous invitons à lire attentivement les présentes Conditions Générales d'Utilisation, dont l'acceptation et le respect sont nécessaires afin que vous puissiez utiliser les fonctionnalités que nous vous proposons.",
      en: "We invite you to read these Terms of Use carefully; accepting and complying with them is necessary for you to use the features we provide.",
    },
    outro: {
      fr: "Pour toute question concernant les présentes CGU, contactez-nous à legal@hiry.fr",
      en: "For any question regarding these Terms of Use, contact us at legal@hiry.fr",
    },
    sections: { fr: cguFr, en: cguEn },
  },
  "mentions-legales": {
    slug: "mentions-legales",
    updated: "2026-05-25",
    title: { fr: "Mentions légales", en: "Legal notice" },
    outro: {
      fr: "Pour toute question concernant ce document, contactez-nous à contact@hiry.fr",
      en: "For any question regarding this document, contact us at contact@hiry.fr",
    },
    sections: { fr: mentionsFr, en: mentionsEn },
  },
  "politique-confidentialite": {
    slug: "politique-confidentialite",
    updated: "2026-06-08",
    version: "2.1",
    title: { fr: "Politique de confidentialité", en: "Privacy policy" },
    intro: {
      fr: "Nous souhaitons répondre aux questions que vous pourriez vous poser concernant la gestion de vos données personnelles et vous présenter les mesures mises en place au sein de Hiry afin de vous assurer le meilleur niveau de protection de ces données.",
      en: "We want to answer the questions you may have about how your personal data is handled, and set out the measures Hiry has put in place to give that data the best possible level of protection.",
    },
    outro: {
      fr: "Pour toute question concernant cette politique de confidentialité ou vos données personnelles, contactez-nous à dataprotection@hiry.fr",
      en: "For any question regarding this privacy policy or your personal data, contact us at dataprotection@hiry.fr",
    },
    sections: { fr: privacyFr, en: privacyEn },
  },
};

/** Sections dans la locale demandée ; repli sur le français. */
export function getLegalSections(slug: LegalDocSlug, locale: string) {
  const doc = LEGAL_DOCS[slug];
  return {
    title: doc.title[locale] ?? doc.title.fr,
    updated: doc.updated,
    version: doc.version,
    intro: doc.intro?.[locale] ?? doc.intro?.fr,
    outro: doc.outro?.[locale] ?? doc.outro?.fr,
    sections: doc.sections[locale] ?? doc.sections.fr,
    /** true quand on sert le français faute de traduction. */
    fallback: !doc.sections[locale] && locale !== "fr",
  };
}
