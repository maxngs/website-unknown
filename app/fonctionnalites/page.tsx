// app/fonctionnalites/page.tsx — Server Component
// Page produit GEO : Hiron, Big Five, Jung, profil culturel, scoring,
// conformité EU AI Act, triptyque candidats/entreprises/écoles.
// JSON-LD WebPage + SoftwareApplication (entité produit).
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ScanFace,
  ShieldCheck,
  Cpu,
  GraduationCap,
  Building2,
  UserCheck,
  AlertTriangle,
  EyeOff,
  Coins,
  Search,
  Compass,
  ListChecks,
  Settings2,
  Filter,
  Bell,
  Handshake,
  BarChart3,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FadeIn } from "../components/shared/FadeIn";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "Fonctionnalités — Hiron, l'algorithme qui révèle le potentiel",
  description:
    "Hiron analyse chaque candidat sur 4 grandes familles de compatibilité (métier, comportementale & culturelle, formation, pratique) pour livrer un score d'affinité 0-100 expliqué. Sans biais, hébergé en Europe, conforme EU AI Act.",
  alternates: { canonical: "/fonctionnalites" },
  openGraph: {
    type: "website",
    title: "Fonctionnalités Hiry — L'algorithme Hiron",
    description:
      "4 grandes familles de compatibilité analysées par candidat, score d'affinité 0-100 expliqué. Sans biais, hébergé en Europe, conforme EU AI Act.",
    url: `${SITE_URL}/fonctionnalites`,
  },
};

// Les 4 familles de compatibilité analysées par Hiron — formulation publique
// officielle (cf. memory/feedback_hiron_protection.md). NE PAS afficher de
// nombre exact de dimensions, de pondérations ou de noms techniques internes.
interface MatchingFamily {
  emoji: string;
  icon: typeof Brain;
  title: string;
  tagline: string;
  body: string;
  color: "indigo" | "violet" | "amber" | "emerald";
}

const MATCHING_FAMILIES: MatchingFamily[] = [
  {
    emoji: "🧠",
    icon: Brain,
    title: "Compatibilité métier",
    tagline: "Ce que le candidat sait faire",
    body:
      "Hiron décompose les besoins en compétences techniques essentielles, puis identifie les profils qui les maîtrisent — y compris ceux qui ne l'écrivent pas explicitement sur leur CV. Les soft skills priorisées pour le poste sont également évaluées.",
    color: "indigo",
  },
  {
    emoji: "🎯",
    icon: Compass,
    title: "Compatibilité comportementale & culturelle",
    tagline: "Comment le candidat fonctionne au quotidien",
    body:
      "C'est ici que Hiron fait la différence avec un job board classique. Nous croisons les archétypes de personnalité recherchés, les motivations profondes du candidat et l'alignement culturel avec l'entreprise. Un excellent profil technique mais incompatible culturellement sera signalé comme tel.",
    color: "violet",
  },
  {
    emoji: "🎓",
    icon: GraduationCap,
    title: "Compatibilité formation",
    tagline: "Le bagage académique en contexte",
    body:
      "Niveau d'études et domaine de formation analysés en cohérence avec le secteur de l'entreprise — pas comme un simple filtre binaire. Un autodidacte au profil rare peut sortir devant un diplômé générique si son expérience le justifie.",
    color: "amber",
  },
  {
    emoji: "📍",
    icon: ListChecks,
    title: "Compatibilité pratique",
    tagline: "Les conditions qui rendent le recrutement possible",
    body:
      "Localisation, modalités de télétravail, type de contrat, langues requises. Ces critères ne définissent pas un bon candidat, mais ils déterminent si la collaboration est réaliste. Hiron les intègre sans les laisser éclipser le potentiel d'un profil.",
    color: "emerald",
  },
];

const FAMILY_COLOR_CLASSES: Record<
  MatchingFamily["color"],
  { bg: string; text: string; border: string }
> = {
  indigo: { bg: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-100" },
  violet: { bg: "bg-violet-100", text: "text-violet-700", border: "border-violet-100" },
  amber: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-100" },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-100" },
};

const COMPLIANCE_POINTS = [
  {
    title: "Privacy by Design",
    body:
      "Les données comportementales ne portent sur aucun critère protégé (origine, genre, âge, handicap). Conformité RGPD native.",
  },
  {
    title: "Scoring explicable",
    body:
      "Chaque score Hiron est documenté : on voit pourquoi un profil est suggéré, sur quels traits, avec quel écart. Aucune boîte noire.",
  },
  {
    title: "Supervision humaine",
    body:
      "L'IA recommande, le recruteur décide. Aucune décision automatisée sans validation humaine — exigence centrale de l'EU AI Act.",
  },
];

const ECOSYSTEM_PROBLEMS = [
  {
    icon: EyeOff,
    label: "Candidats",
    title: "L'épuisement du modèle passif",
    body:
      "L'étudiant s'épuise sur des annuaires inadaptés, subit le rejet automatisé de son CV et le silence décourageant d'un marché déshumanisé.",
    color: "violet",
  },
  {
    icon: Coins,
    label: "Entreprises",
    title: "Le coût de l'inefficacité RH",
    body:
      "Invisibles face aux grands groupes, les PME s'épuisent dans des recrutements chronophages qui se soldent souvent par des erreurs d'embauche coûteuses. 36 % des apprentis rompent leur contrat la 1ère année.",
    color: "blue",
  },
  {
    icon: AlertTriangle,
    label: "Écoles",
    title: "Le pilotage à l'aveugle",
    body:
      "Privées de visibilité sur les placements réels, les écoles subissent le « Dark Funnel » : l'incapacité de tracer les contrats trouvés hors plateforme. Un déficit qui menace directement leur certification Qualiopi.",
    color: "emerald",
  },
];

const MARKET_STATS = [
  { value: "61 %", label: "des recrutements jugés difficiles" },
  { value: "76 %", label: "à cause du décalage offre / demande" },
  { value: "+1 M", label: "d'étudiants en alternance en France" },
  { value: "20-200 k€", label: "le coût d'un recrutement raté" },
];

interface AudienceFeature {
  icon: typeof UserCheck;
  title: string;
  body: string;
}

interface Audience {
  icon: typeof UserCheck;
  label: string;
  tagline: string;
  intro: string;
  color: "violet" | "blue" | "emerald";
  features: AudienceFeature[];
  cta: { label: string; href: string };
}

const AUDIENCES: Audience[] = [
  {
    icon: UserCheck,
    label: "Candidats",
    tagline: "La fin du parcours du combattant",
    intro:
      "On remplace un processus brisé par une expérience simple, intelligente et humaine. Chaque fonctionnalité est pensée pour redonner le contrôle au candidat.",
    color: "violet",
    features: [
      {
        icon: Brain,
        title: "Un profil, pas un CV",
        body:
          "Personnalité, soft skills, aspirations : Hiron pose les bonnes questions, construit un profil bien plus riche qu'un CV et définit un potentiel réel.",
      },
      {
        icon: Search,
        title: "Finis les jobboards, l'offre vient à toi",
        body:
          "Hiron croise le potentiel du candidat avec les besoins et l'ADN des entreprises. Pour chaque match, on explique pourquoi le candidat est compatible. Zéro candidature à l'aveugle, taux de compatibilité supérieur à 70 %.",
      },
      {
        icon: Compass,
        title: "Un copilote carrière",
        body:
          "Contact direct avec les recruteurs, dashboard centralisé pour suivre ses candidatures. Plus de ghosting : transparence totale sur le statut de chaque offre.",
      },
    ],
    cta: { label: "Créer mon profil", href: "/candidats" },
  },
  {
    icon: Building2,
    label: "Entreprises",
    tagline: "Et si chaque recrutement était une évidence ?",
    intro:
      "On décode les attentes de la nouvelle génération pour connecter l'entreprise aux talents qui partagent vraiment sa culture et ses ambitions.",
    color: "blue",
    features: [
      {
        icon: Settings2,
        title: "Le Copilote RH",
        body:
          "Hiron centralise et gère l'intégralité du processus pour les TPE/PME sans service RH dédié. Cartographie de l'identité d'entreprise + création assistée d'offres attractives qui parlent aux candidats.",
      },
      {
        icon: Filter,
        title: "Fini l'avalanche de CV inadaptés",
        body:
          "Le recruteur reçoit uniquement une sélection restreinte de talents avec un score de compatibilité transparent. De 70 CV à 5 profils qualifiés en 2 minutes — un gain de temps considérable.",
      },
      {
        icon: ListChecks,
        title: "L'outil pensé pour les dirigeants",
        body:
          "Processus conçu pour une prise en main immédiate par les dirigeantes et dirigeants de TPE/PME. Pas de jargon, aucune complexité. Zéro friction, zéro erreur, 100 % d'adoption.",
      },
    ],
    cta: { label: "Voir les tarifs", href: "/tarifs" },
  },
  {
    icon: GraduationCap,
    label: "Écoles",
    tagline: "Garantir l'insertion de 100 % des talents",
    intro:
      "Une tour de contrôle propulsée par l'IA pour offrir un suivi et une gestion chirurgicale des étudiants ainsi que des relations entreprises pour améliorer l'expérience et l'insertion.",
    color: "emerald",
    features: [
      {
        icon: Bell,
        title: "Supervision intelligente des promotions",
        body:
          "Notre dashboard détecte automatiquement les signaux faibles et alerte sur les profils nécessitant un accompagnement : alertes proactives (baisse d'engagement), prédiction du taux d'insertion par IA, push de profil en un clic vers les partenaires.",
      },
      {
        icon: Handshake,
        title: "Relations entreprises et événements pilotés",
        body:
          "Centralisation des partenariats, organisation des événements carrière et mesure de leurs retombées réelles. Chaque interaction est tracée, chaque résultat est quantifié — vos étudiants connectés aux bonnes entreprises instantanément.",
      },
      {
        icon: BarChart3,
        title: "Statistiques claires pour piloter",
        body:
          "Visualisation des entonnoirs de recrutement en temps réel pour prouver la valeur de l'établissement aux futures recrues. Rapports exportables pour les accréditations Qualiopi.",
      },
    ],
    cta: { label: "Demander une démo", href: "/contact" },
  },
];

export default function FonctionnalitesPage() {
  // JSON-LD WebPage + SoftwareApplication (l'entité produit Hiron / Hiry)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/fonctionnalites`,
        url: `${SITE_URL}/fonctionnalites`,
        name: "Fonctionnalités Hiry — L'algorithme Hiron",
        description:
          "L'algorithme Hiron utilise les modèles psychométriques Big Five et Jung pour analyser la personnalité des candidats et calculer un score de compatibilité culturelle avec les entreprises.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/fonctionnalites#hiron`,
        name: "Hiron — algorithme de matching Hiry",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description:
          "Algorithme de matching prédictif qui analyse chaque candidat sur 4 grandes familles de compatibilité (métier, comportementale & culturelle, formation, pratique) et livre un score d'affinité 0-100 expliqué. Sans biais discriminant, hébergé en Europe.",
        publisher: { "@id": `${SITE_URL}/#organization` },
        url: `${SITE_URL}/fonctionnalites`,
        featureList: [
          "Compatibilité métier (compétences techniques + soft skills)",
          "Compatibilité comportementale et culturelle",
          "Compatibilité formation analysée en contexte",
          "Compatibilité pratique (localisation, télétravail, contrat)",
          "Score d'affinité 0-100 expliqué",
          "Sans biais discriminant — RGPD natif",
          "Hébergement Europe, conformité EU AI Act",
          "Matching tripartite candidats / PME / écoles",
        ],
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: "290",
          highPrice: "2900",
          offerCount: "3",
          url: `${SITE_URL}/tarifs`,
        },
      },
    ],
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Hero */}
        <FadeIn>
          <header className="mb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
              <Cpu size={14} />
              <span>L&apos;ère du recrutement Zéro Friction</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-7">
              Hiry, le recrutement{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                réinventé.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-semibold leading-snug max-w-3xl mb-5">
              L&apos;intelligence de Hiry, baptisé Hiron, utilise les modèles
              psychométriques Big Five et Jung pour analyser la personnalité
              des candidats et calculer un score de compatibilité culturelle
              avec les entreprises.
            </p>
            <p className="text-base md:text-lg text-slate-500 font-medium max-w-3xl leading-relaxed">
              Notre mission : réinventer les codes du recrutement pour
              sécuriser et propulser l&apos;insertion des jeunes au sein des
              entreprises (TPE, PME, ETI, Grands Groupes). Pas de boîte noire. Juste de la
              science psychométrique au service du recrutement.
            </p>
          </header>
        </FadeIn>

        {/* Écosystème en rupture */}
        <FadeIn delay={0.05}>
          <section className="mb-20">
            <div className="mb-8 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Pourquoi Hiry existe
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Un écosystème en rupture.
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Sur le marché de l&apos;insertion, chaque acteur subit une
                version différente du même problème : un système conçu pour
                d&apos;autres époques.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {ECOSYSTEM_PROBLEMS.map((p) => {
                const palette = {
                  violet: "bg-violet-50 text-violet-700 border-violet-100",
                  blue: "bg-blue-50 text-blue-700 border-blue-100",
                  emerald: "bg-emerald-50 text-emerald-700 border-emerald-100",
                }[p.color];
                const iconBg = {
                  violet: "bg-violet-100 text-violet-700",
                  blue: "bg-blue-100 text-blue-700",
                  emerald: "bg-emerald-100 text-emerald-700",
                }[p.color];

                return (
                  <div
                    key={p.title}
                    className="rounded-3xl bg-white border border-slate-100 p-7"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
                        <p.icon size={18} />
                      </div>
                      <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${palette}`}>
                        {p.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Stats marché */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {MARKET_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-slate-900 text-white p-5"
                >
                  <p className="text-2xl md:text-3xl font-black tracking-tight leading-none mb-2">
                    {s.value}
                  </p>
                  <p className="text-xs text-white/75 font-semibold leading-snug">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
              Sources : BMO 2024 (France Travail), DARES, CCI Paris, Qualiopi 2025
            </p>
          </section>
        </FadeIn>

        {/* Hiron pillar — Big Five + Jung */}
        <FadeIn delay={0.1}>
          <section className="mb-20">
            {/* Intro 4 familles */}
            <div className="mb-10 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Comment Hiron analyse les candidats
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                L&apos;humain au-delà du CV.
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                Hiron ne se contente pas de lire un CV. Notre moteur de
                matching analyse chaque candidat sur{" "}
                <strong className="text-slate-900">4 grandes familles
                de compatibilité</strong>, pour livrer aux entreprises
                non pas les profils les plus diplômés, mais ceux qui vont
                vraiment s&apos;épanouir chez elles.
              </p>
            </div>

            {/* Grid 4 familles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              {MATCHING_FAMILIES.map((family) => {
                const colors = FAMILY_COLOR_CLASSES[family.color];
                return (
                  <div
                    key={family.title}
                    className="rounded-3xl bg-white border border-slate-100 p-7 md:p-8"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div
                        className={`shrink-0 w-12 h-12 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center text-2xl`}
                        aria-hidden
                      >
                        {family.emoji}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-extrabold text-slate-900 tracking-tight leading-snug">
                          {family.title}
                        </h3>
                        <p className={`text-xs font-bold uppercase tracking-wider mt-0.5 ${colors.text}`}>
                          {family.tagline}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {family.body}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bloc "Score d'affinité expliqué" */}
            <div className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 md:p-12 text-white relative overflow-hidden mb-6">
              <div className="absolute -top-16 -right-16 w-72 h-72 bg-white/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/80 mb-3 block">
                    La sortie côté recruteur
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                    Un score d&apos;affinité 0-100,{" "}
                    <span className="text-white/80">expliqué.</span>
                  </h3>
                  <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-xl">
                    Pour chaque candidat, Hiron livre un score de matching
                    global avec son détail. Le recruteur voit instantanément
                    si un 87/100 est tiré par les compétences techniques, par
                    la culture, ou par les deux. Pas de boîte noire : le
                    recruteur comprend pourquoi un profil lui est recommandé.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6">
                    <div className="text-center mb-5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-white/70 mb-2">
                        Exemple de match
                      </p>
                      <p className="text-6xl font-black tracking-tight">87</p>
                      <p className="text-xs text-white/70 font-semibold mt-1">
                        / 100 de compatibilité
                      </p>
                    </div>
                    <div className="space-y-2 text-xs">
                      {[
                        ["Compatibilité métier (forte)", "+28"],
                        ["Compatibilité culturelle (forte)", "+24"],
                        ["Compatibilité formation", "+18"],
                        ["Compatibilité pratique", "+17"],
                      ].map(([label, score]) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-3 px-3 py-2 rounded-lg bg-white/10"
                        >
                          <span className="text-white/85 font-medium truncate">
                            {label}
                          </span>
                          <span className="font-bold text-white shrink-0">
                            {score}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Réassurance — sans biais + hébergé France */}
            <div className="rounded-2xl bg-white border border-slate-100 px-5 py-4 md:px-6">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-slate-600 font-semibold">
                <span className="inline-flex items-start gap-2 max-w-md">
                  <span aria-hidden className="shrink-0">⚖️</span>
                  <span>
                    <strong className="text-slate-900">Sans biais discriminant</strong> —
                    Hiron n&apos;analyse ni l&apos;âge, ni le genre, ni
                    l&apos;origine. Seules les variables professionnelles,
                    comportementales et logistiques renseignées sont prises
                    en compte.
                  </span>
                </span>
                <span className="hidden md:block w-px h-12 bg-slate-200" />
                <span className="inline-flex items-start gap-2 max-w-md">
                  <span aria-hidden className="shrink-0">🇪🇺</span>
                  <span>
                    <strong className="text-slate-900">Hébergé en Europe</strong> —
                    Données candidates traitées sur Google Cloud (région
                    europe-west), conformément au RGPD et aux exigences de
                    l&apos;EU AI Act.
                  </span>
                </span>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Profil culturel */}
        <FadeIn delay={0.15}>
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="rounded-3xl bg-white border border-slate-100 p-7 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Les 5 dimensions formalisées
                  </p>
                  <ul className="space-y-3">
                    {[
                      ["Rapport à l'autonomie", "Libre vs cadré"],
                      ["Style de management", "Directif · Participatif · Délégatif"],
                      ["Rapport au feedback", "Transparence radicale vs diplomatie"],
                      ["Rythme et intensité", "Hypercroissance vs stabilité"],
                      ["Valeurs non négociables", "3 à 5 principes pivots"],
                    ].map(([k, v]) => (
                      <li key={k} className="flex items-start gap-3">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                        <div>
                          <p className="text-sm font-bold text-slate-900">{k}</p>
                          <p className="text-xs text-slate-500 font-medium">{v}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                  Côté entreprise · Profil culturel
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                  L&apos;ADN de l&apos;entreprise, décrypté.
                </h2>
                <p className="text-base text-slate-600 font-medium leading-relaxed">
                  Chaque entreprise inscrite remplit un profil culturel
                  structuré — pas un exercice marketing, un référentiel précis
                  qui devient le socle objectif du matching. Plus de débat
                  subjectif sur le « bon feeling ».
                </p>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Conformité */}
        <FadeIn delay={0.25}>
          <section className="mb-20">
            <div className="mb-8 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Conformité réglementaire
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Conçu pour l&apos;EU AI Act, dès la première ligne de code.
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                L&apos;EU AI Act classe les systèmes d&apos;IA en recrutement
                comme « haut risque » (Annexe III). Hiry intègre ces exigences
                par conception — Privacy by Design, Ethics by Design.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {COMPLIANCE_POINTS.map((p, i) => {
                const icons = [ShieldCheck, ScanFace, Brain];
                const Icon = icons[i];
                return (
                  <div
                    key={p.title}
                    className="rounded-3xl bg-white border border-slate-100 p-7"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mt-6 text-xs text-slate-500 font-medium">
              Voir l&apos;analyse complète :{" "}
              <Link
                href="/mag/entreprises/eu-ai-act-conformite-recrutement-2026"
                className="text-slate-900 font-semibold underline decoration-2 decoration-slate-300 hover:decoration-slate-700"
              >
                EU AI Act et recrutement — guide conformité 2026
              </Link>
              .
            </p>
          </section>
        </FadeIn>

        {/* Triptyque détaillé — 3 sections audience avec 3 features chacune */}
        <FadeIn delay={0.3}>
          <section className="mb-20">
            <div className="mb-10 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Triptyque unique
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                Une plateforme, trois audiences connectées.
              </h2>
              <p className="text-base text-slate-600 font-medium leading-relaxed">
                Là où les outils classiques opèrent en bilatéral, Hiry connecte
                simultanément candidats, entreprises et écoles dans un même
                écosystème — chaque silo nourrit les deux autres.
              </p>
            </div>

            <div className="space-y-12">
              {AUDIENCES.map((a) => {
                const palette = {
                  violet: {
                    iconBg: "bg-violet-100 text-violet-700",
                    badge: "bg-violet-50 text-violet-700 border-violet-100",
                    cta: "bg-violet-600 hover:bg-violet-700",
                    accent: "text-violet-700",
                  },
                  blue: {
                    iconBg: "bg-blue-100 text-blue-700",
                    badge: "bg-blue-50 text-blue-700 border-blue-100",
                    cta: "bg-blue-600 hover:bg-blue-700",
                    accent: "text-blue-700",
                  },
                  emerald: {
                    iconBg: "bg-emerald-100 text-emerald-700",
                    badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
                    cta: "bg-emerald-600 hover:bg-emerald-700",
                    accent: "text-emerald-700",
                  },
                }[a.color];

                return (
                  <div key={a.label}>
                    {/* En-tête audience */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6 items-end">
                      <div className="lg:col-span-8">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${palette.badge} mb-3`}
                        >
                          <a.icon size={12} />
                          Pour les {a.label.toLowerCase()}
                        </span>
                        <h3 className={`text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-2 ${palette.accent}`}>
                          {a.tagline}
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 font-medium leading-relaxed max-w-2xl">
                          {a.intro}
                        </p>
                      </div>
                      <div className="lg:col-span-4 flex lg:justify-end">
                        <Link
                          href={a.cta.href}
                          className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white rounded-xl transition-all ${palette.cta}`}
                        >
                          {a.cta.label}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>

                    {/* 3 features */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                      {a.features.map((f) => (
                        <div
                          key={f.title}
                          className="rounded-3xl bg-white border border-slate-100 p-6 md:p-7"
                        >
                          <div className={`w-11 h-11 rounded-xl ${palette.iconBg} flex items-center justify-center mb-4`}>
                            <f.icon size={20} />
                          </div>
                          <h4 className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
                            {f.title}
                          </h4>
                          <p className="text-sm text-slate-600 font-medium leading-relaxed">
                            {f.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </FadeIn>

        {/* CTA */}
        <FadeIn delay={0.35}>
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Link
                href="/tarifs"
                className="group flex items-center justify-between rounded-3xl bg-slate-900 text-white p-7 md:p-8 hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mb-2">
                    Pour les entreprises
                  </p>
                  <p className="text-xl md:text-2xl font-extrabold">
                    Voir les tarifs
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-white/70 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </Link>
              <a
                href="https://app.hiry.fr/auth/signup"
                className="group flex items-center justify-between rounded-3xl bg-white border border-slate-200 p-7 md:p-8 hover:border-slate-300 hover:-translate-y-0.5 transition-all"
              >
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Pour les candidats
                  </p>
                  <p className="text-xl md:text-2xl font-extrabold text-slate-900">
                    Créer mon profil
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all"
                />
              </a>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
