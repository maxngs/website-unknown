// app/a-propos/page.tsx — Server Component
// Page d'entité GEO : qui est Hiry, mission, story, fondateur, valeurs.
// JSON-LD AboutPage + Person (Maxime Nogues).
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Linkedin,
  Target,
  Brain,
  ShieldCheck,
  Users,
  Rocket,
} from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FadeIn } from "../components/shared/FadeIn";
import { AUTHORS } from "@/lib/authors";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "À propos — Hiry, redéfinir le paradigme du recrutement",
  description:
    "La première plateforme qui utilise l'IA pour comprendre le profil et révéler le potentiel des étudiants — stage, alternance, premier emploi — afin d'optimiser la mise en relation avec les entreprises.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    type: "website",
    title: "À propos — Hiry, redéfinir le paradigme du recrutement",
    description:
      "La première plateforme qui utilise l'IA pour révéler le potentiel des étudiants (stage, alternance, premier emploi) et optimiser la mise en relation avec les entreprises.",
    url: `${SITE_URL}/a-propos`,
  },
};

const VALUES = [
  {
    icon: Brain,
    title: "Le potentiel avant le CV",
    body:
      "Un CV raconte un passé. Notre algorithme évalue ce que vous deviendrez, pas ce que vous avez été.",
  },
  {
    icon: ShieldCheck,
    title: "Transparence radicale",
    body:
      "Chaque score Hiron est explicable. Aucune boîte noire — Privacy by Design, conformité native EU AI Act.",
  },
  {
    icon: Users,
    title: "L'humain décide",
    body:
      "L'IA recommande, l'entreprise et le candidat décident. Aucune décision automatisée sans validation humaine.",
  },
  {
    icon: Target,
    title: "Compatibilité, pas conformité",
    body:
      "On ne cherche pas le \"meilleur\" candidat dans l'absolu. On cherche celui qui s'épanouira chez vous.",
  },
];

const PARTNERS = [
  { name: "Google for Startups", role: "Programme accelerator" },
  { name: "L'Escalator", role: "Incubation startup" },
];

export default function AProposPage() {
  const maxime = AUTHORS["maxime-nogues"];
  const stephanie = AUTHORS["stephanie-nogues"];

  // JSON-LD AboutPage + Person (E-E-A-T)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${SITE_URL}/a-propos`,
        url: `${SITE_URL}/a-propos`,
        name: "À propos de Hiry — redéfinir le paradigme du recrutement",
        description:
          "La première plateforme qui utilise l'IA pour comprendre le profil et révéler le potentiel des étudiants à la recherche de stage, alternance ou premier emploi, afin d'optimiser, simplifier et améliorer la mise en relation avec les entreprises.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/a-propos#maxime-nogues`,
        name: maxime.name,
        jobTitle: maxime.role,
        url: `${SITE_URL}${maxime.url ?? "/a-propos"}`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        alumniOf: maxime.education?.map((e) => ({ "@type": "EducationalOrganization", name: e })),
        ...(maxime.linkedin ? { sameAs: [maxime.linkedin] } : {}),
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/a-propos#stephanie-nogues`,
        name: stephanie.name,
        jobTitle: stephanie.role,
        url: `${SITE_URL}${stephanie.url ?? "/a-propos"}`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        alumniOf: stephanie.education?.map((e) => ({ "@type": "EducationalOrganization", name: e })),
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

      {/* Décor de fond */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full blur-[100px]" />
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-purple-300/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Hero */}
        <FadeIn>
          <header className="mb-20 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
              <Sparkles size={14} />
              <span>L&apos;ère du recrutement Zéro Friction</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-7">
              Redéfinir le{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                paradigme
              </span>{" "}
              du recrutement.
            </h1>
            <p className="text-lg md:text-xl text-slate-700 font-semibold leading-snug max-w-3xl mb-5">
              La première plateforme qui utilise l&apos;IA pour comprendre le
              profil et révéler le potentiel des étudiants à la recherche de
              stage, alternance ou premier emploi, afin d&apos;optimiser,
              simplifier et améliorer la mise en relation avec les entreprises.
            </p>
            <p className="text-base md:text-lg text-slate-500 font-medium max-w-3xl leading-relaxed">
              Fondée en France en 2026 par un duo fils-mère, Hiry est soutenue
              par Google for Startups et incubée à L&apos;Escalator. Notre
              mission : sécuriser et propulser l&apos;insertion professionnelle
              des jeunes.
            </p>
          </header>
        </FadeIn>

        {/* Mission */}
        <FadeIn delay={0.1}>
          <section className="mb-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Notre mission
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Révéler le potentiel humain que le CV ne capture pas.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                Le CV a été inventé pour un monde où les carrières étaient
                linéaires et les diplômes déterminants. En 2026, ce n&apos;est
                plus vrai — surtout pour un étudiant, un alternant ou un
                profil atypique.
              </p>
              <p>
                Hiry remplace le tri par mots-clés par une analyse multi-axes :
                Hiron, notre IA, évalue chaque candidat sur 4 grandes familles
                de compatibilité — métier, comportementale & culturelle,
                formation et pratique — pour produire un score d&apos;affinité
                expliqué. Les entreprises reçoivent uniquement des profils
                qualifiés au lieu de dizaines de CV. Les candidats sont enfin
                évalués pour ce qu&apos;ils valent vraiment.
              </p>
            </div>
          </section>
        </FadeIn>

        {/* Story / Founders supports */}
        <FadeIn delay={0.15}>
          <section className="mb-20">
            <div className="rounded-3xl bg-white border border-slate-100 p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                    Ils nous soutiennent
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                    Fondée en 2026.
                  </h2>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">
                    Reconnue et accompagnée par les programmes de référence de
                    l&apos;écosystème startup français.
                  </p>
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PARTNERS.map((p) => (
                    <div
                      key={p.name}
                      className="rounded-2xl bg-slate-50 border border-slate-100 p-5"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm mb-3">
                        <Rocket size={16} />
                      </div>
                      <p className="text-sm font-extrabold text-slate-900 leading-tight mb-1">
                        {p.name}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {p.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Founders — duo fils-mère */}
        <FadeIn delay={0.2}>
          <section className="mb-20">
            <div className="mb-8 max-w-3xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                L&apos;équipe dirigeante
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
                Un duo fils-mère qui crée le GPS du recrutement.
              </h2>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
                Hiry allie vision nouvelle génération et rigueur corporate :
                deux profils complémentaires pour un produit qui parle à la
                fois à la Gen Z et aux dirigeants de TPE/PME.
              </p>
            </div>

            {/* Carte unique : photo partagée à gauche, bios des 2 fondateurs à droite */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* PHOTO PARTAGÉE — Maxime & Stéphanie Noguès */}
                <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[560px] bg-slate-900 overflow-hidden">
                  <Image
                    src="/team/maxime-stephanie.jpeg"
                    alt="Maxime et Stéphanie Noguès, fondateurs de Hiry"
                    fill
                    className="object-cover object-[center_30%]"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    priority={false}
                  />

                  {/* Caption posée par-dessus la photo via gradient noir bas */}
                  <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent z-10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/85 mb-1">
                      L&apos;équipe dirigeante
                    </p>
                    <p className="text-sm font-bold text-white">
                      Le duo Hiry
                    </p>
                  </div>
                </div>

                {/* INFOS — Maxime + Stéphanie empilés */}
                <div className="lg:col-span-7 p-7 md:p-10 lg:p-12">
                  {/* Maxime */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                        {maxime.name}
                      </h3>
                      <span className="text-sm font-semibold text-indigo-300">
                        {maxime.role}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed mb-4">
                      {maxime.bio}
                    </p>
                    {maxime.education && maxime.education.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {maxime.education.map((e) => (
                          <span
                            key={e}
                            className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-white/85"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    )}
                    {maxime.linkedin && (
                      <a
                        href={maxime.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl transition-all"
                      >
                        <Linkedin size={12} />
                        LinkedIn
                      </a>
                    )}
                  </div>

                  {/* Séparateur */}
                  <div className="h-px bg-white/10 my-8" />

                  {/* Stéphanie */}
                  <div>
                    <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                        {stephanie.name}
                      </h3>
                      <span className="text-sm font-semibold text-pink-300">
                        {stephanie.role}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-white/85 font-medium leading-relaxed mb-4">
                      {stephanie.bio}
                    </p>
                    {stephanie.education && stephanie.education.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {stephanie.education.map((e) => (
                          <span
                            key={e}
                            className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-white/85"
                          >
                            {e}
                          </span>
                        ))}
                      </div>
                    )}
                    {stephanie.linkedin && (
                      <a
                        href={stephanie.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl transition-all"
                      >
                        <Linkedin size={12} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Values */}
        <FadeIn delay={0.25}>
          <section className="mb-20">
            <div className="mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Nos valeurs
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Ce qui guide chaque ligne de code et chaque décision produit.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl bg-white border border-slate-100 p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                    <v.icon size={20} />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Final CTA */}
        <FadeIn delay={0.3}>
          <section>
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-8 md:p-12 text-white overflow-hidden">
              <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3">
                    Découvrez Hiry sur le terrain.
                  </h2>
                  <p className="text-base md:text-lg text-indigo-100 font-medium max-w-2xl">
                    Que vous soyez candidat, dirigeant de PME, responsable RH
                    ou responsable career center — le matching par potentiel
                    commence ici.
                  </p>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-3">
                  <a
                    href="https://app.hiry.fr/auth/signup"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg transition-all"
                  >
                    Créer un compte
                    <ArrowRight size={16} />
                  </a>
                  <Link
                    href="/fonctionnalites"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
                  >
                    Voir les fonctionnalités
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      </main>

      <Footer />
    </div>
  );
}
