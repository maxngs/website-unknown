// lib/authors.ts
// Source de vérité des auteurs personnes physiques publiés sur Le Mag
// + équipe dirigeante affichée sur /a-propos.

export type AuthorSlug = "maxime-nogues" | "stephanie-nogues";

export interface Author {
  slug: AuthorSlug;
  /** Nom complet affiché. */
  name: string;
  /** Rôle / titre professionnel court (ex: "Fondateur, CTO"). */
  role: string;
  /** Bio courte (2-3 phrases) — sidebar article + carte fondateur. */
  bio: string;
  /** Avatar carré (path public/...). Fallback initiale dans le code si absent. */
  avatar?: string;
  /** Profil LinkedIn (utilisé dans Person.sameAs et CTA). */
  linkedin?: string;
  /** Email pro pour contact direct. */
  email?: string;
  /** URL canonique du profil sur le site. */
  url?: string;
  /** Formations / écoles d'origine (alumni). */
  education?: string[];
  /** Entreprises notables précédentes. */
  worksHistory?: string[];
}

export const AUTHORS: Record<AuthorSlug, Author> = {
  "maxime-nogues": {
    slug: "maxime-nogues",
    name: "Maxime Noguès",
    role: "Fondateur & CTO",
    bio: "Né d'une frustration personnelle, Maxime a fondé Hiry dans le but de transformer totalement l'expérience du recrutement. Son constat : malgré la multiplication des solutions, trouver un job — comme recruter la bonne personne — reste un parcours cassé, barbant, chronophage et à risque. Sa mission : faire de ce moment anxiogène une expérience fluide, intuitive, fun et ultra simple. Aujourd'hui CTO, il code la plateforme et porte la vision produit aux côtés de sa mère Stéphanie.",
    avatar: "/avatars/maxime-nogues.jpg",
    linkedin: "https://www.linkedin.com/in/maximenogues/",
    email: "maxime.nogues@hiry.fr",
    url: "/auteur/maxime-nogues",
    education: ["Le Wagon", "Master Paris School of Business (PSB)"],
  },
  "stephanie-nogues": {
    slug: "stephanie-nogues",
    name: "Stéphanie Noguès",
    role: "Co-fondatrice & COO",
    bio: "Stéphanie Noguès apporte 17 ans d'expertise B2B et institutionnelle dans les grands groupes tech. Diplômée de l'ESCP, elle a piloté des partenariats stratégiques avec les GAFAM chez Worldline. Elle structure l'opérationnel et les relations partenaires de Hiry.",
    avatar: "/avatars/stephanie-nogues.jpg",
    linkedin: "https://www.linkedin.com/in/stephanienogues/",
    email: "stephanie.nogues@hiry.fr",
    url: "/auteur/stephanie-nogues",
    education: ["ESCP Business School"],
    worksHistory: ["Worldline", "Partenariats GAFAM"],
  },
};

export function getAuthor(slug: string): Author | null {
  if (slug in AUTHORS) return AUTHORS[slug as AuthorSlug];
  return null;
}
