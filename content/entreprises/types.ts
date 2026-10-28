// ============================================================
// Forme du contenu de la page Entreprises (et de /entreprises/demo).
// Un fichier par langue : content/entreprises/{fr,en}.ts.
//
// `Rich` : texte pouvant contenir UN groupe <em>…</em>, rendu en
// Instrument Serif italique (un seul par titre).
// ============================================================
import type {
  ChecklistKey,
  Problematique,
  ECHEANCES,
  FONCTIONS,
  OUTILS,
  RECRUTEMENTS,
  TAILLES,
  TYPES_POSTES,
} from "@/lib/leads/options";
import type { ErrorCode } from "@/lib/leads/schema";

export type Rich = string;

type Labels<T extends readonly string[]> = Record<T[number], string>;

export type ModuleKey = "matching" | "profil" | "offre" | "marque" | "suivi";

export interface SectionHead {
  label: string;
  title: Rich;
  subtitle?: string;
}

export interface EntreprisesContent {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    demoTitle: string;
    demoDescription: string;
    demoOgTitle: string;
    breadcrumbHome: string;
    breadcrumbPage: string;
    breadcrumbDemo: string;
    appDescription: string;
  };

  nav: {
    links: { href: string; label: string }[];
    cta: string;
  };

  /** Libellé commun « exemple illustratif » posé sur les mockups. */
  illustrative: string;

  hero: {
    eyebrow: string;
    title: Rich;
    subtitle: string;
    scope: string;
    ctaDemo: string;
    ctaVideo: string;
    reassurance: string[];
    visualLabel: string;
    card: {
      name: string;
      role: string;
      score: number;
      scoreLabel: string;
      whyTitle: string;
      reasons: string[];
      pills: { label: string; value: number }[];
    };
    column: {
      title: string;
      cards: { initials: string; name: string; meta: string; score: number }[];
      slot: string;
    };
  };

  trust: { label: string; list: string[] };

  constat: SectionHead & {
    relief: string;
    story: string;
    questions: string[];
    checklist: {
      title: string;
      hint: string;
      items: Record<ChecklistKey, string>;
      success: string;
      cta: string;
    };
    stat: { figure: string; text: string; source: string };
  };

  hiron: SectionHead & {
    input: string;
    inputLabel: string;
    steps: string[];
    result: string;
    replay: string;
    quote: string;
  };

  modules: SectionHead & {
    tablistLabel: string;
    pause: string;
    play: string;
    howPrefix: string;
    optionBadge: string;
    items: {
      key: ModuleKey;
      tab: string;
      label: string;
      title: string;
      text: string;
      how: string;
      optional?: boolean;
    }[];
    mock: {
      matching: {
        offer: string;
        summary: string;
        rows: { initials: string; name: string; meta: string; score: number }[];
        why: string;
      };
      profil: {
        badge: string;
        name: string;
        role: string;
        score: number;
        scoreLabel: string;
        axes: { label: string; value: number }[];
        tags: string[];
        noteLead: string;
        note: string;
        source: string;
      };
      offre: {
        needLabel: string;
        need: string;
        writing: string;
        draftTitle: string;
        draftText: string;
        chips: string[];
        diffusionTitle: string;
        channels: { name: string; status: string; optional?: boolean }[];
      };
      /** Éditeur du site carrières (option), d'après la maquette produit. */
      marque: {
        appLabel: string;
        company: string;
        steps: string[];
        activeStep: number;
        publish: string;
        url: string;
        dateline: string;
        issue: string;
        headline: string;
        headlineEm: string;
        blockTag: string;
        offersTitle: string;
        openCount: string;
        offers: { cat: string; t: string; m: string }[];
        poweredBy: string;
        panelTitle: string;
        panelPos: string;
        syncStrong: string;
        syncText: string;
        columnsLabel: string;
        switches: string[];
        bgLabel: string;
      };
      suivi: {
        columns: { title: string; cards: string[] }[];
        slotTitle: string;
        slot: string;
        reminder: string;
      };
    };
  };

  how: SectionHead & {
    /** `ui` : extrait d'interface illustrant l'étape (pastilles). */
    steps: { title: string; text: string; ui: string[] }[];
  };

  veille: SectionHead & {
    p1: string;
    p2: string;
    panel: string;
    role: string;
    status: string;
    since: string;
    rows: { initials: string; who: string; meta: string; when: string }[];
    toast: string;
    count: string;
    quota: string;
    quotaValue: string;
  };

  ats: SectionHead & {
    groups: {
      title: string;
      items: {
        title: string;
        text: string;
        optional?: boolean;
        /** Micro-interface affichée pour les apports AI-native. */
        key?: "profil" | "matching" | "offre" | "veille" | "dispo" | "vivier";
        ui?: string[];
      }[];
    }[];
  };

  beforeAfter: SectionHead & {
    caption: string;
    colCriterion: string;
    colWithout: string;
    colWith: string;
    toggleLabel: string;
    rows: { criterion: string; without: string; with: string }[];
  };

  humain: SectionHead & {
    pillars: { lead: string; text: string }[];
    note: string;
    ref: string;
    logTitle: string;
    log: { t: string; who: string; what: string; why: string }[];
  };

  forWhom: SectionHead & {
    cards: { key: string; title: string; text: string }[];
    volume: { title: string; text: string; cta: string };
    /** Preuves : chiffres + mentions activables une fois validées. */
    proofs: {
      label: string;
      stats: { value: number; prefix?: string; suffix?: string; label: string }[];
      jcdecaux: { enabled: boolean; text: string };
      media: { enabled: boolean; label: string; list: string[] };
      testimonials: {
        enabled: boolean;
        label: string;
        read: string;
        stories: { sector: string; title: string; href: string }[];
        quote: { text: string; author: string; role: string };
      };
    };
  };

  faq: SectionHead & {
    items: { q: string; a: string }[];
    more: string;
    moreCta: string;
    /** « Pour aller plus loin » : articles du Mag (français uniquement). */
    further: { label: string; slugs: string[] };
  };

  demo: SectionHead & {
    origin: string;
    asideTitle: string;
    points: string[];
    facts: string[];
    contact: string;
  };

  demoPage: { badge: string; title: Rich; subtitle: string };

  sticky: { cta: string };

  form: {
    progress: string;
    otherProblems: string;
    addMessage: string;
    selectedCount: string;
    stepContact: string;
    stepContext: string;
    next: string;
    back: string;
    modeLegend: string;
    modes: { demo: string; video: string };
    firstName: string;
    lastName: string;
    email: string;
    freeEmailWarning: string;
    phone: string;
    phoneHint: string;
    company: string;
    fonction: string;
    taille: string;
    recrutements: string;
    typesPostes: string;
    problematique: string;
    problematiqueAutre: string;
    autresProblematiques: string;
    outil: string;
    echeance: string;
    message: string;
    counter: string;
    optional: string;
    select: string;
    consent: string;
    consentLink: string;
    submitDemo: string;
    submitVideo: string;
    sending: string;
    options: {
      fonction: Labels<typeof FONCTIONS>;
      taille: Labels<typeof TAILLES>;
      recrutements: Labels<typeof RECRUTEMENTS>;
      typesPostes: Labels<typeof TYPES_POSTES>;
      problematique: Record<Problematique, string>;
      outil: Labels<typeof OUTILS>;
      echeance: Labels<typeof ECHEANCES>;
    };
    errors: Record<ErrorCode, string> & {
      summary: string;
      server: string;
      rateLimited: string;
    };
    success: {
      demoTitle: string;
      demoText: string;
      demoBook: string;
      demoFallback: string;
      videoTitle: string;
      videoText: string;
      videoAlso: string;
    };
  };

  contactNudge: { title: string; link: string };
}
