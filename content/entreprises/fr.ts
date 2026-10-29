// ============================================================
// Page Entreprises — contenu français.
// Retouches de copy : ici uniquement, sans toucher au JSX.
// Espaces ordinaires partout : la typographie française (insécables)
// est appliquée à l'export par withFrenchTypo.
//
// [À VALIDER] = chiffre ou mention à confirmer avant mise en ligne.
// ============================================================
import type { EntreprisesContent } from "./types";
import { withFrenchTypo } from "./typo";

const fr: EntreprisesContent = {
  meta: {
    title: "ATS IA pour PME et ETI | Hiry, le recrutement zéro friction",
    description:
      "Recevez 5 à 10 candidatures compatibles à plus de 70 % au lieu de 100 CV. Multidiffusion, suivi intégré, site carrières. Réservez votre démo.",
    ogTitle: "L'ATS AI-native qui vous envoie les bons candidats",
    demoTitle: "Réserver une démo de Hiry, l'ATS AI-native | Hiry",
    demoDescription:
      "Découvrez Hiry en 30 minutes ou recevez la vidéo de démo : matching prédictif, profil candidat à 360°, multidiffusion et suivi intégré.",
    demoOgTitle: "Découvrez Hiry en 30 minutes",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Entreprises",
    breadcrumbDemo: "Réserver une démo",
    appDescription:
      "Hiry est un ATS AI-native : l'entreprise publie son offre, reçoit directement des candidats au profil compatible grâce au matching prédictif et au profil candidat à 360°, et gère tout son recrutement au même endroit (multidiffusion, suivi kanban, entretiens, site carrières en option).",
  },

  nav: {
    links: [
      { href: "/entreprises#constat", label: "Le constat" },
      { href: "/entreprises#modules", label: "Fonctionnalités" },
      { href: "/entreprises#how", label: "Comment ça marche" },
      { href: "/entreprises#faq", label: "FAQ" },
    ],
    cta: "Réserver une démo",
  },

  illustrative: "Exemple illustratif",

  hero: {
    eyebrow: "ATS AI-native pour TPE, PME, ETI et grands comptes",
    title: "Arrêtez de trier. Commencez à <em>choisir</em>.",
    subtitle:
      "5 à 10 candidatures compatibles à plus de 70 %, au lieu de 100 CV. Et tout votre recrutement au même endroit.",
    scope:
      "Stages, alternance, premiers emplois et profils de 3 à 15 ans d'expérience.",
    ctaDemo: "Réserver une démo de 30 min →",
    ctaVideo: "Recevoir la vidéo de démo",
    // [À VALIDER] délai de réponse
    reassurance: ["30 minutes", "Sans engagement", "Réponse sous 24 h ouvrées"],
    imageAlt: "Une recruteuse consulte sur sa tablette les candidatures que Hiry lui présente.",
    visualLabel:
      "Aperçu de l'interface Hiry : une candidature compatible à 87 %, son score expliqué et la colonne Entretien du suivi.",
    card: {
      name: "Inès Bertrand",
      role: "Chargée de communication · Alternance",
      score: 87,
      scoreLabel: "compatible",
      whyTitle: "Pourquoi ce score",
      reasons: [
        "Crée déjà des contenus pour 2 associations",
        "Veut une PME pour toucher à tout",
        "Se décrit comme autonome et à l'aise à l'oral",
      ],
      pills: [
        { label: "Compétences", value: 91 },
        { label: "Motivation", value: 88 },
        { label: "Personnalité", value: 82 },
      ],
    },
    column: {
      title: "Entretien",
      cards: [
        { initials: "KB", name: "Karim B.", meta: "Technicien · 6 ans d'exp.", score: 84 },
        { initials: "LM", name: "Lucie M.", meta: "Stage marketing", score: 79 },
      ],
      slot: "Jeu. 14:00 · Google Meet",
    },
  },

  trust: {
    label: "Ils nous soutiennent",
    // [À VALIDER] Viva Technology et Paris School of Business
    list: [
      "L’Escalator",
      "Google for Startups",
      "Lab RH",
      "Viva Technology",
      "Paris School of Business",
    ],
  },

  constat: {
    label: "01 · Le constat",
    title:
      "Votre problème n'est pas de trouver des candidats. C'est de trouver <em>les bons</em>.",
    relief:
      "Le tri des CV prenait des heures. Maintenant, vous choisissez parmi 5 à 10 profils.",
    story:
      "Vous connaissez la scène. Une offre publiée le lundi, une boîte mail pleine le vendredi. Vous ouvrez les premiers CV, ils se ressemblent tous. Le bon profil était peut-être dans le lot. Vous ne le saurez jamais.",
    questions: [
      "Combien d'heures a pris votre dernier recrutement ?",
      "Sur 100 CV reçus, combien méritaient un appel ?",
      "Votre dernière recrue ressemblait-elle à son CV ?",
    ],
    checklist: {
      title: "Cochez ce qui vous ressemble",
      hint: "Vos réponses pré-remplissent le formulaire de démo.",
      items: {
        volume: "Vous recevez plus de 100 candidatures par offre",
        hors_sujet: "La plupart ne correspondent pas au poste",
        cv_similaires: "Vous peinez à départager des CV qui se ressemblent tous",
        grands_groupes: "Votre offre se perd face à celles des grands groupes",
      },
      success: "Une case cochée ? Hiry est fait pour vous.",
      cta: "Parlons-en en 30 minutes →",
    },
    stat: {
      figure: "83,6 %",
      text: "des recruteurs qui anticipent des difficultés citent d'abord l'inadéquation des profils.",
      source: "Source : enquête BMO 2026, France Travail",
    },
  },

  hiron: {
    label: "02 · Hiron en action",
    title: "Vous décrivez. Hiron s'occupe du <em>reste</em>.",
    subtitle:
      "Hiron, l'IA de Hiry, transforme quelques phrases en offre complète, la diffuse et vous présente les profils compatibles.",
    inputLabel: "Votre besoin",
    input: "Alternant chargé de communication, Levallois, rentrée 2027",
    steps: [
      "Hiron rédige l'offre…",
      "Diffusion sur les sites partenaires…",
      "Matching prédictif…",
    ],
    result: "7 profils compatibles à plus de 70 %",
    replay: "Rejouer l'exemple",
    quote:
      "L'IA ne remplace pas le recruteur. Elle lui rend le temps de rencontrer.",
  },

  modules: {
    label: "03 · Ce que Hiry change",
    title: "Moins de CV à trier, plus d'humains à <em>rencontrer</em>.",
    subtitle:
      "Cinq bénéfices concrets, une seule plateforme.",
    tablistLabel: "Modules de Hiry",
    pause: "Mettre en pause le défilement",
    play: "Reprendre le défilement",
    howPrefix: "Comment :",
    optionBadge: "En option",
    items: [
      {
        key: "matching",
        tab: "Matching",
        label: "Temps gagné",
        title: "Vous ne triez plus, vous choisissez",
        text: "Au lieu de 100 CV, vous recevez 5 à 10 candidatures compatibles à plus de 70 %. Chaque score est expliqué : vous savez pourquoi ce candidat est devant vous. Ce sont des heures rendues chaque semaine.",
        how: "le matching prédictif. Sémantique, NLP, contexte et personnalité, pas de simples mots-clés.",
      },
      {
        key: "profil",
        tab: "Profil 360°",
        label: "Qualité des recrutements",
        title: "Vous recrutez la bonne personne, pas le bon CV",
        text: "Chaque candidat a échangé 10 minutes avec Hiron, l'IA de Hiry. Il en ressort un profil à 360° : compétences, motivation, personnalité. Moins d'erreurs de casting, des recrutements qui tiennent.",
        how: "le profil candidat à 360°.",
      },
      {
        key: "offre",
        tab: "Offre & multidiffusion",
        label: "Visibilité de l'offre",
        title: "Votre offre est vue partout, publiée une seule fois",
        text: "Décrivez votre besoin en quelques phrases : Hiron vous aide à rédiger l'offre en 10 minutes. Elle est ensuite diffusée automatiquement sur Hiry et sur un réseau de sites d'emploi partenaires en expansion continue. Plus de visibilité, aucune ressaisie.",
        how: "la rédaction assistée et la multidiffusion.",
      },
      {
        key: "marque",
        tab: "Marque employeur & site carrières",
        label: "Image employeur",
        title: "Vous jouez à armes égales avec les grands groupes",
        text: "Votre profil employeur met en valeur votre culture et ce qui rend votre entreprise unique. En option, vous créez aussi votre propre site carrières en quelques clics, sans compétence technique, avec plusieurs mises en page vraiment différentes au choix.",
        how: "le profil employeur, et le site carrières no-code en option.",
        optional: true,
      },
      {
        key: "suivi",
        tab: "Suivi & entretiens",
        label: "Simplicité",
        title: "Tout votre recrutement au même endroit",
        text: "De la publication à l'embauche, sans jongler entre les outils ni les tableurs : un tableau de suivi qui montre où en est chaque candidat, l'organisation des entretiens, le partage de documents. Simple à prendre en main dès le premier jour.",
        how: "le suivi intégré de un ou plusieurs process de recrutement.",
      },
    ],
    mock: {
      matching: {
        offer: "Développeur back-end · CDI · Nantes",
        summary: "4 candidatures compatibles à plus de 70 %",
        rows: [
          { initials: "SA", name: "Sami A.", meta: "5 ans d'exp. · Nantes", score: 92 },
          { initials: "CL", name: "Chloé L.", meta: "Alternance · Rennes", score: 86 },
          { initials: "YD", name: "Yanis D.", meta: "8 ans d'exp. · Angers", score: 81 },
          { initials: "EM", name: "Emma M.", meta: "Premier emploi · Nantes", score: 74 },
        ],
        why: "Sami : API et cloud au quotidien, cherche une équipe produit, très autonome.",
      },
      profil: {
        badge: "Profil à 360°",
        name: "Léa Martin",
        role: "Responsable marketing · 7 ans d'expérience",
        score: 89,
        scoreLabel: "compatible",
        axes: [
          { label: "Compétences", value: 92 },
          { label: "Motivation", value: 90 },
          { label: "Personnalité", value: 86 },
        ],
        tags: ["Esprit d'équipe", "Rigueur", "Créativité", "Curiosité", "Leadership"],
        noteLead: "Hiron :",
        note: "Léa veut piloter une marque de A à Z. Elle se décrit comme méthodique et à l'aise pour fédérer une équipe.",
        source: "Personnalité décrite à partir de ce que Léa a exprimé pendant son échange.",
      },
      offre: {
        needLabel: "Votre besoin",
        need: "Commercial terrain B2B, Lyon, CDI, 3 ans d'expérience",
        writing: "Hiron rédige…",
        draftTitle: "Commercial terrain B2B (H/F) · CDI · Lyon",
        draftText:
          "Vous rejoignez une équipe de 8 personnes et développez un portefeuille de clients industriels en Auvergne-Rhône-Alpes…",
        chips: ["Missions ✓", "Profil ✓", "Avantages ✓"],
        diffusionTitle: "Diffusion",
        channels: [
          { name: "Hiry", status: "En ligne" },
          { name: "Sites d'emploi partenaires", status: "En ligne" },
          { name: "Votre site carrières", status: "Option", optional: true },
        ],
      },
      marque: {
        appLabel: "Site carrières",
        company: "Kadran",
        steps: ["Modèle", "Contenu", "Marque", "Publication"],
        activeStep: 1,
        publish: "Publier",
        url: "kadran.hiry.fr",
        dateline: "Paris, octobre 2026",
        issue: "N° 07",
        headline: "Nous construisons les outils de ceux qui",
        headlineEm: "construisent.",
        blockTag: "Offres · synchronisées",
        offersTitle: "Petites annonces",
        openCount: "7 postes ouverts",
        offers: [
          { cat: "Produit & tech", t: "Développeur full-stack", m: "CDI · Paris 11e · Hybride" },
          { cat: "Marketing", t: "Marketing de contenu", m: "Alternance · Paris 11e" },
          { cat: "Clients", t: "Customer success manager", m: "CDI · 5 ans d'exp." },
          { cat: "Data", t: "Data analyst", m: "Stage · Paris 11e · Hybride" },
        ],
        poweredBy: "Propulsé par Hiry",
        panelTitle: "Offres",
        panelPos: "Bloc 4 sur 6",
        syncStrong: "7 offres synchronisées",
        syncText: "depuis Hiry. Rien à ressaisir.",
        columnsLabel: "Colonnes",
        switches: ["Filtres par contrat", "Bouton « Échanger avec Hiron »"],
        bgLabel: "Fond du bloc",
      },
      suivi: {
        columns: [
          { title: "Reçu", cards: ["Nadia", "Hugo"] },
          { title: "Entretien", cards: ["Karim"] },
          { title: "Offre", cards: ["Inès"] },
        ],
        slotTitle: "Entretien planifié",
        slot: "Jeu. 12 · 14:00 · Google Meet",
        reminder: "Rappel J-1 envoyé au candidat",
      },
    },
  },

  how: {
    label: "04 · Comment ça marche",
    stepLabel: "Étape",
    title: "De l'offre à l'embauche, en <em>4 étapes</em>",
    steps: [
      {
        title: "Décrivez votre besoin",
        text: "Quelques phrases suffisent : Hiron rédige l'offre avec vous.",
        ui: ["Commercial terrain B2B, Lyon, CDI", "Hiron rédige…"],
      },
      {
        title: "Publiez une seule fois",
        text: "L'offre part sur Hiry et sur un réseau de sites d'emploi partenaires.",
        ui: ["Hiry", "Sites partenaires"],
      },
      {
        title: "Recevez les bons profils",
        text: "Chaque candidat échange 10 minutes avec Hiron. Vous recevez ceux qui sont compatibles à plus de 70 %, score expliqué.",
        ui: ["87 % compatible", "Pourquoi ce score"],
      },
      {
        title: "Choisissez",
        text: "Entretiens et suivi au même endroit. La décision vous appartient.",
        ui: ["Jeu. 14:00 · Entretien", "Rappel J-1 envoyé"],
      },
    ],
  },

  veille: {
    label: "05 · La veille de profils",
    title: "Recrutez <em>avant</em> d'avoir un poste à pourvoir",
    p1: "Une veille n'est pas une offre. Vous décrivez un métier que vous recruterez tôt ou tard, développeur back-end, chargé de clientèle ou technicien de maintenance, et Hiry vous présente en continu les profils qui correspondent.",
    p2: "Elle tourne en arrière-plan et vous prévient quand un profil intéressant arrive. Le jour où le poste s'ouvre, vous avez déjà une liste.",
    panel: "Veille",
    role: "Technicien de maintenance",
    status: "Active",
    since: "depuis 41 jours",
    rows: [
      { initials: "KB", who: "Profil électromécanique", meta: "6 ans d'expérience · Villeurbanne", when: "il y a 2 h" },
      { initials: "ML", who: "Profil maintenance industrielle", meta: "BTS MS · Vénissieux", when: "hier" },
      { initials: "TR", who: "Profil automatisme", meta: "4 ans d'expérience · Bron", when: "lundi" },
    ],
    toast: "Nouveau profil correspondant",
    count: "profils en liste",
    quota: "Offre publiée :",
    quotaValue: "aucune",
  },

  ats: {
    label: "06 · Un ATS complet",
    colFeature: "Fonctionnalité",
    colClassic: "ATS classique",
    colHiry: "Hiry",
    yes: "Inclus",
    no: "Non inclus",
    title: "Ce que fait un ATS. Et ce qu'il ne fait <em>pas</em>.",
    subtitle:
      "Hiry couvre tout ce qu'on attend d'un logiciel de recrutement. Puis il va là où un ATS classique s'arrête.",
    groups: [
      {
        title: "Tout ce qu'un ATS fait",
        items: [
          { title: "Pipeline kanban et vue liste", text: "Notes partagées avec l'équipe." },
          { title: "Messagerie et templates", text: "Modèles d'emails prêts à l'emploi." },
          { title: "Entretiens", text: "Calendrier, lien Google Meet automatique, rappel J-1." },
          { title: "Équipe et rôles", text: "Permissions, plusieurs process en parallèle." },
          { title: "Tableau de bord", text: "Indicateurs clés de chaque recrutement." },
          { title: "Multidiffusion", text: "Un réseau de sites d'emploi partenaires." },
          { title: "Site carrières", text: "À votre image, sans compétence technique.", optional: true },
        ],
      },
      {
        title: "Ce qu'un ATS classique ne fait pas",
        items: [
          { title: "Profil candidat à 360°", text: "Compétences, motivation, personnalité : ce qu'un CV ne dit pas." },
          { title: "Matching prédictif", text: "Un score de 0 à 100, toujours expliqué." },
          { title: "Offre rédigée avec Hiron", text: "En 10 minutes, ou importée depuis un PDF." },
          { title: "Veille de profils", text: "Des profils remontés avant même d'ouvrir un poste." },
          { title: "Disponibilité à jour", text: "Les candidats confirment s'ils cherchent encore." },
          { title: "Vivier de talents", text: "Les candidats intéressés par votre entreprise, avant toute offre." },
        ],
      },
    ],
  },

  beforeAfter: {
    label: "07 · Avant / après",
    title: "Votre recrutement, avant et après <em>Hiry</em>",
    caption: "Comparaison d'un recrutement sans Hiry et avec Hiry",
    colCriterion: "Critère",
    colWithout: "Sans Hiry",
    colWith: "Avec Hiry",
    subtitle: "Le même recrutement, vécu de deux façons.",
    sansHead: "Plus de 100 CV par offre",
    avecHead: "5 à 10 profils compatibles",
    rows: [
      { criterion: "Temps de tri", without: "Des heures passées à lire des CV", with: "Le temps de parcourir 5 à 10 profils expliqués" },
      { criterion: "Matching", without: "Mots-clés, critères simples (diplôme, expérience)", with: "Matching prédictif sémantique : NLP, contexte, personnalité" },
      { criterion: "Candidatures reçues", without: "Plus de 100, dont 95 % hors sujet", with: "5 à 10, compatibles à plus de 70 %" },
      { criterion: "Qualité des profils", without: "Un CV et une lettre de motivation standardisés", with: "Un profil à 360° : compétences, motivation, personnalité" },
      { criterion: "Création de l'offre", without: "Plusieurs heures pour rédiger le contenu", with: "10 minutes pour une offre attractive et complète" },
      { criterion: "Visibilité de l'offre", without: "Une annonce à publier site par site", with: "Une seule publication, diffusée sur Hiry et un réseau de sites partenaires" },
      { criterion: "Image employeur", without: "Noyée face aux grandes marques", with: "Un profil employeur à votre image, et votre site carrières en option" },
      { criterion: "Outils utilisés", without: "Boîte mail, tableurs, jobboards", with: "Une seule plateforme, de l'offre à l'embauche" },
    ],
  },

  humain: {
    label: "08 · L'humain au cœur",
    title:
      "L'IA met les bonnes personnes en avant. C'est toujours <em>vous</em> qui choisissez.",
    subtitle:
      "Hiry est conçu pour l'AI Act dès le premier jour : des scores expliqués, des décisions tracées, une décision toujours humaine.",
    pillars: [
      {
        lead: "Chaque score est expliqué.",
        text: "Vous voyez pourquoi un candidat vous est présenté : compétences, motivation, personnalité, critères de l'offre. Aucune boîte noire.",
      },
      {
        lead: "La décision reste humaine.",
        text: "Hiron classe et explique, vous décidez. Chaque changement de statut est l'action d'un membre de votre équipe.",
      },
      {
        lead: "Tout est tracé, les données sont protégées.",
        text: "Chaque décision est journalisée. Les données sont hébergées en Europe et traitées conformément au RGPD. Le candidat sait qu'une IA intervient et garde la main sur ses données.",
      },
    ],
    note: "La personnalité est décrite à partir de ce que le candidat exprime pendant son échange avec Hiron. Hiron n'analyse ni la voix, ni le visage, ni les émotions.",
    ref: "Règlement (UE) 2024/1689 sur l'intelligence artificielle",
    logTitle: "Journal · Candidature n° 2 418",
    log: [
      { t: "14:02", who: "Sarah M.", what: "Reçue → Entretien", why: "compétences techniques" },
      { t: "09:47", who: "Julien D.", what: "Note ajoutée", why: "disponibilité confirmée" },
      { t: "lun.", who: "Hiron", what: "Score calculé", why: "critères de l'offre" },
    ],
  },

  forWhom: {
    label: "09 · Pour qui",
    title: "Pensé pour <em>votre</em> façon de recruter",
    cards: [
      {
        key: "pme",
        title: "TPE, PME et startups",
        text: "Recrutez vite et bien, sans y passer des heures. Une offre en 10 minutes, les bons profils directement dans votre suivi.",
      },
      {
        key: "eti",
        title: "ETI et grands comptes",
        text: "Volumes importants, campagnes d'alternance, plusieurs process en parallèle et plusieurs équipes : Hiry suit votre rythme, avec un accompagnement dédié.",
      },
    ],
    volume: {
      title: "Vous recrutez en volume ?",
      text: "Campagnes de stages ou d'alternance, dizaines de postes en parallèle, plusieurs entités : parlons de votre organisation.",
      cta: "Parler à notre équipe →",
    },
    proofs: {
      label: "Hiry en chiffres",
      stats: [
        // [À VALIDER] chiffres au jour de la mise en ligne
        { value: 3000, prefix: "+", label: "candidats inscrits, 100 % en organique" },
        { value: 30, prefix: "~", label: "entreprises qui recrutent avec Hiry" },
        { value: 10, suffix: " min", label: "pour créer une offre complète" },
        { value: 70, prefix: "> ", suffix: " %", label: "de compatibilité par candidature présentée" },
      ],
      // [À VALIDER] usage du nom JCDecaux
      jcdecaux: {
        enabled: false,
        text: "Hiry a été l'opérateur de recrutement du stand JCDecaux à VivaTech.",
      },
      // [À VALIDER] mentions médias
      media: {
        enabled: false,
        label: "Vu dans :",
        list: [
          "Le live de Samuel Etienne à VivaTech",
          "Le podcast « 40 Nuances de Next »",
          "RF Entrepreneurs",
        ],
      },
      // Aucun témoignage réel pour l'instant : composant prêt, masqué.
      testimonials: {
        enabled: false,
        label: "Histoires clients",
        read: "Lire",
        stories: [],
        quote: { text: "", author: "", role: "" },
      },
    },
  },

  faq: {
    label: "10 · FAQ",
    title: "Vos questions, <em>nos réponses</em>",
    items: [
      {
        q: "Qu'est-ce qu'un ATS AI-native et en quoi Hiry est-il différent d'un ATS classique ?",
        a: "Un ATS classique stocke et organise les candidatures reçues : le tri reste à votre charge. Un ATS AI-native comme Hiry fait les deux. Il gère votre recrutement de la publication à l'embauche (multidiffusion, suivi kanban, entretiens) et utilise l'IA pour comprendre chaque candidat et vous présenter directement les profils compatibles, avec un score expliqué.",
      },
      {
        q: "Comment fonctionne le matching prédictif de Hiry ?",
        a: "Le matching de Hiry ne compare pas des mots-clés. Il analyse le sens de votre offre et du profil de chaque candidat (NLP, contexte, compétences, motivation, personnalité) pour estimer leur compatibilité. Vous recevez les candidatures compatibles à plus de 70 %, chacune avec un score expliqué. Hiry s'appuie sur les modèles d'IA de Google pour faire tourner sa méthode propre d'enrichissement du profil et de matching.",
      },
      {
        q: "Qu'est-ce que le profil candidat à 360° ?",
        a: "C'est le profil que Hiry construit pour chaque candidat après un échange de 10 minutes avec Hiron, l'IA de Hiry. Il réunit ses compétences, sa motivation et sa personnalité, décrite à partir de ce qu'il exprime pendant l'échange. Vous découvrez ainsi ce qu'un CV ne dit pas, avant même le premier entretien.",
      },
      {
        q: "Sur quels sites mon offre est-elle diffusée ?",
        a: "Sur Hiry et sur un réseau de sites d'emploi partenaires en expansion continue. Vous publiez une seule fois, la diffusion est automatique, et toutes les candidatures reviennent dans votre suivi Hiry. Nous vous présentons les sites partenaires actifs pendant la démo.",
      },
      {
        q: "Puis-je créer un site carrières avec Hiry ?",
        a: "Oui, en option. Vous créez votre propre site carrières en quelques clics, sans compétence technique, en choisissant parmi plusieurs mises en page vraiment différentes. Sans cette option, votre profil employeur sur Hiry met déjà en valeur votre culture et ce qui rend votre entreprise unique.",
      },
      {
        q: "Quels types de postes puis-je recruter avec Hiry ?",
        a: "Des stages, des contrats en alternance, des premiers emplois et des profils de 3 à 15 ans d'expérience. Hiry n'est pas réservé aux juniors : la même méthode s'applique à un alternant en communication comme à un technicien de maintenance avec 6 ans d'expérience.",
      },
      {
        q: "L'IA décide-t-elle à ma place ?",
        a: "Non. Hiron met en avant les profils compatibles et explique chaque score, mais c'est toujours vous qui choisissez qui rencontrer et qui recruter. Chaque changement de statut est l'action d'un membre de votre équipe, tracée dans le journal de la candidature.",
      },
      {
        q: "Hiry est-il conforme au RGPD et à l'AI Act ?",
        a: "Hiry est conçu pour l'AI Act dès le premier jour : scores expliqués, décisions tracées, décision toujours humaine. Hiron n'analyse ni la voix, ni le visage, ni les émotions des candidats. Les données sont hébergées en Europe et traitées conformément au RGPD. Chaque candidat sait qu'une IA intervient, accède à ses données et peut les supprimer.",
      },
      {
        q: "Combien coûte Hiry ?",
        a: "Hiry est proposé en abonnement, avec des offres d'emploi illimitées. Le tarif dépend de la taille de votre entreprise et de vos volumes de recrutement : nous vous le présentons pendant la démo, avec la formule adaptée à votre situation. Pour les ETI, les grands comptes et les groupes à plusieurs entités, nous construisons une offre sur mesure.",
      },
      {
        q: "Qu'est-ce qu'une veille de profils ?",
        a: "Une veille n'est pas une offre : vous décrivez un métier que vous recruterez tôt ou tard, sans date ni candidature, et Hiry vous présente en continu les profils qui y correspondent. Le jour où le poste s'ouvre, vous avez déjà une liste. L'abonnement inclut 2 veilles.",
      },
      {
        q: "Où sont hébergées mes données ?",
        a: "Hiry est hébergée en Europe, sur Google Cloud (région europe-west), et traite les données conformément au RGPD. Les données des candidats ne sont visibles que par les entreprises auxquelles ils sont présentés, et chaque candidat peut accéder à ses données ou les supprimer.",
      },
      {
        q: "Je suis partenaire d'une école ou d'un salon. Dois-je m'abonner ?",
        a: "Non. Les offres réservées à votre école ou à votre salon restent gratuites. Si vous souhaitez aussi publier des offres ouvertes à tous les candidats Hiry, ou utiliser Hiry pour vos autres recrutements, nous en parlons ensemble pendant la démo.",
      },
      {
        q: "Je vais devoir ressaisir toutes mes offres ?",
        a: "Non. Donnez-nous l'adresse de votre page carrières ou d'une offre, et nous la récupérons pour vous, une par une ou toutes d'un coup. Vous pouvez aussi importer une offre depuis un fichier PDF : Hiron la reprend et vous aide à la compléter.",
      },
      {
        q: "Combien de temps faut-il pour démarrer ?",
        a: "Comptez 10 minutes pour créer votre première offre avec Hiron. Votre profil employeur se complète au fil de l'eau, et si vous avez déjà des offres en ligne, nous les récupérons pour vous. Après la démo, nous vous accompagnons pour la mise en route.",
      },
    ],
    more: "Une autre question ? Posez-la pendant la démo.",
    moreCta: "Réserver une démo →",
    further: {
      label: "Pour aller plus loin",
      slugs: [
        "logiciel-recrutement-ia-pme-2026",
        "eu-ai-act-conformite-recrutement-2026",
        "cout-recrutement-rate-pme",
        "pourquoi-le-cv-ne-suffit-plus",
      ],
    },
  },

  demo: {
    origin:
      "Hiry est née d'un constat simple : les bons candidats existent, ils se perdent simplement dans les piles de CV.",
    label: "11 · Démo",
    title: "Prêt à gagner du temps sur vos <em>recrutements</em> ?",
    subtitle:
      "Découvrez Hiry en 30 minutes ou recevez notre vidéo de démonstration.",
    asideTitle: "Pendant la démo",
    points: [
      "Nous partons de vos recrutements en cours et de votre problématique.",
      "Nous vous montrons Hiry sur un cas concret : offre, matching, suivi.",
      "Vous repartez avec une recommandation claire, sans engagement.",
    ],
    facts: ["30 minutes", "Sans engagement", "Avec un membre de l'équipe Hiry"],
    contact: "Une question avant ? Écrivez-nous à",
  },

  demoPage: {
    badge: "Démo Hiry",
    title: "Découvrez Hiry en <em>30 minutes</em>",
    subtitle:
      "L'ATS AI-native qui vous envoie 5 à 10 candidatures compatibles à plus de 70 %, au lieu de 100 CV. Réservez votre démo ou recevez la vidéo.",
  },

  sticky: { cta: "Réserver une démo →" },

  form: {
    progress: "Étape {current} sur {total}",
    otherProblems: "Ajouter d'autres problématiques",
    addMessage: "Ajouter un message",
    selectedCount: "{count} sélectionnée(s)",
    stepContact: "Vos coordonnées",
    stepContext: "Votre contexte",
    next: "Continuer →",
    back: "← Retour",
    modeLegend: "Je souhaite",
    modes: {
      demo: "Réserver une démo de 30 min",
      video: "Recevoir la vidéo de démo",
    },
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email professionnel",
    freeEmailWarning:
      "Cette adresse semble personnelle. Une adresse professionnelle nous aide à préparer votre démo.",
    phone: "Téléphone",
    phoneHint: "Format français, par exemple 06 12 34 56 78.",
    company: "Entreprise",
    fonction: "Fonction",
    taille: "Taille de l'entreprise",
    recrutements: "Recrutements prévus sur 12 mois",
    typesPostes: "Types de postes",
    problematique: "Votre problématique principale",
    problematiqueAutre: "Précisez",
    autresProblematiques: "Autres problématiques",
    outil: "Outil utilisé aujourd'hui",
    echeance: "Prochain recrutement",
    message: "Message",
    counter: "{count} / {max}",
    optional: "facultatif",
    select: "Sélectionnez",
    consent:
      "J'accepte que Hiry utilise ces informations pour me recontacter au sujet de ma demande.",
    consentLink: "Politique de confidentialité",
    submitDemo: "Réserver ma démo →",
    submitVideo: "Recevoir la vidéo →",
    sending: "Envoi en cours…",
    options: {
      fonction: {
        dirigeant: "Dirigeant·e / fondateur·rice",
        rh: "DRH / responsable RH",
        recruteur: "Chargé·e de recrutement / talent acquisition",
        manager: "Manager opérationnel",
        autre: "Autre",
      },
      taille: {
        "1_10": "1 à 10 salariés",
        "11_49": "11 à 49 salariés",
        "50_249": "50 à 249 salariés",
        "250_999": "250 à 999 salariés",
        "1000_plus": "1 000 salariés et plus",
      },
      recrutements: {
        "1_5": "1 à 5",
        "6_15": "6 à 15",
        "16_50": "16 à 50",
        "50_plus": "Plus de 50",
      },
      typesPostes: {
        stage: "Stage",
        alternance: "Alternance",
        premier_emploi: "Premier emploi",
        experimente: "3 à 15 ans d'expérience",
      },
      problematique: {
        trop_candidatures: "Je reçois trop de candidatures qui ne correspondent pas au poste",
        tri_chronophage: "Le tri des CV me prend trop de temps",
        cv_insuffisant: "Le CV ne me suffit pas pour évaluer la motivation et la personnalité",
        erreurs_casting: "Mes recrutements ne tiennent pas (erreurs de casting, départs ou ruptures précoces)",
        redaction_offre: "Rédiger des offres attractives me prend trop de temps",
        visibilite_offre: "Mes offres manquent de visibilité, je publie site par site",
        marque_employeur: "Ma marque employeur ne fait pas le poids face aux grands groupes",
        site_carrieres: "Je n'ai pas de site carrières, ou il ne me ressemble pas",
        suivi_process: "Je jongle entre mails, tableurs et jobboards pour suivre mes candidats",
        ats_insatisfaisant: "Mon outil actuel ne m'aide pas à trier ni à choisir",
        campagnes_volume: "Je recrute en volume (campagnes de stages ou d'alternance, plusieurs postes en parallèle)",
        salons: "Je recrute sur des salons ou des job datings",
        autre: "Autre",
      },
      outil: {
        aucun: "Aucun, mails et tableurs",
        jobboards: "Jobboards uniquement",
        ats: "Un ATS",
        cabinet: "Un cabinet / prestataire",
        autre: "Autre",
      },
      echeance: {
        ce_mois: "Ce mois-ci",
        "1_3_mois": "Dans 1 à 3 mois",
        plus_tard: "Plus tard",
        renseigne: "Je me renseigne",
      },
    },
    errors: {
      required: "Ce champ est requis.",
      email: "Saisissez une adresse email valide.",
      phone: "Saisissez un numéro français valide, par exemple 06 12 34 56 78.",
      too_long: "Ce texte est trop long.",
      consent: "Votre accord est nécessaire pour que nous puissions vous recontacter.",
      summary: "Certains champs sont à corriger.",
      server:
        "L'envoi n'a pas abouti. Réessayez dans un instant ou écrivez-nous à contact@hiry.fr.",
      rateLimited:
        "Plusieurs demandes ont déjà été envoyées. Réessayez dans quelques minutes ou écrivez-nous à contact@hiry.fr.",
    },
    success: {
      demoTitle: "Merci, votre demande est bien reçue.",
      demoText: "Choisissez dès maintenant le créneau qui vous convient.",
      demoBook: "Choisir mon créneau →",
      demoFallback: "Nous vous recontactons sous 24 h ouvrées pour fixer un créneau.",
      videoTitle: "Votre vidéo arrive dans votre boîte mail.",
      videoText: "Pensez à vérifier vos courriers indésirables si vous ne la voyez pas d'ici quelques minutes.",
      videoAlso: "Vous préférez en parler de vive voix ? Réservez une démo de 30 min →",
    },
  },

  contactNudge: {
    title: "Vous souhaitez une démo ?",
    link: "Découvrez Hiry en 30 minutes →",
  },
};

export default withFrenchTypo(fr);
