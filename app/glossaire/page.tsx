// app/glossaire/page.tsx — Server Component
// Index du glossaire en bento : tuile manifesto noire + grille des termes.
// Pont inter-silos (cf. blueprint § 8).
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Breadcrumb } from "../components/blog/Breadcrumb";
import { getAllGlossaryEntries } from "@/lib/glossaire";

const SITE_URL = "https://hiry.fr";

export const metadata: Metadata = {
  title: "Glossaire du recrutement IA — définitions clés",
  description:
    "Soft skills, culture fit, ATS, matching IA, RNCP… toutes les définitions clés du recrutement intelligent et de l'insertion professionnelle.",
  alternates: { canonical: "/glossaire" },
  openGraph: {
    type: "website",
    title: "Glossaire du recrutement IA — Hiry",
    description:
      "Soft skills, culture fit, ATS, matching IA, RNCP… toutes les définitions clés du recrutement intelligent.",
    url: `${SITE_URL}/glossaire`,
  },
};

export default function GlossaireIndexPage() {
  const entries = getAllGlossaryEntries();

  // JSON-LD CollectionPage + DefinedTermSet — déclare le glossaire comme
  // référentiel de termes pour Google et les LLMs (cite-ability).
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/glossaire`,
        url: `${SITE_URL}/glossaire`,
        name: "Glossaire du recrutement IA — Hiry",
        description:
          "Définitions claires des concepts clés du recrutement intelligent et de l'insertion professionnelle.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${SITE_URL}/glossaire#termset`,
        name: "Glossaire du recrutement IA — Hiry",
        description:
          "Référentiel de définitions sur le recrutement par IA, les soft skills, la psychométrie et l'insertion professionnelle.",
        url: `${SITE_URL}/glossaire`,
        inLanguage: "fr-FR",
        publisher: { "@id": `${SITE_URL}/#organization` },
        hasDefinedTerm: entries.map((e) => ({
          "@type": "DefinedTerm",
          "@id": `${SITE_URL}${e.href}`,
          name: e.term,
          description: e.shortDefinition,
          url: `${SITE_URL}${e.href}`,
          inDefinedTermSet: { "@id": `${SITE_URL}/glossaire#termset` },
        })),
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

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Glossaire" },
            ]}
          />
        </div>

        {/* Hero éditorial */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-slate-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Le vocabulaire
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-6">
            Glossaire du{" "}
            <span className="text-slate-400">recrutement IA.</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl leading-relaxed">
            Définitions claires des concepts clés — soft skills, culture fit,
            matching IA, ATS, RNCP — avec liens vers nos articles approfondis.
          </p>
        </header>

        {/* Grille bento */}
        {entries.length === 0 ? (
          <div className="rounded-3xl bg-white border border-slate-100 p-10 md:p-14 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 rounded-2xl mb-5">
              <BookOpen size={24} className="text-slate-300" />
            </div>
            <p className="text-slate-700 font-bold text-lg mb-2">
              Le glossaire arrive bientôt
            </p>
            <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
              Les premières définitions sont en cours de rédaction.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* Tuile manifesto noire (col-span-2 row-span-2 sur lg) */}
            <div className="lg:col-span-2 lg:row-span-2 relative flex flex-col justify-between rounded-3xl bg-slate-900 text-white p-7 md:p-9 overflow-hidden min-h-[300px]">
              <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-white/10 backdrop-blur-sm border border-white/15">
                  <BookOpen size={11} />
                  Manifesto
                </span>
                <span className="text-xs font-medium text-white/60">
                  {entries.length} entrées
                </span>
              </div>
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-tight mb-4">
                  Le bon mot.
                  <br />
                  <span className="text-white/60">Au bon endroit.</span>
                </h2>
                <p className="text-sm text-white/70 font-medium leading-relaxed max-w-md">
                  Le recrutement intelligent a son vocabulaire. On le décode
                  ici, simplement, avec des renvois vers les articles qui
                  vont plus loin.
                </p>
              </div>
            </div>

            {/* Tuiles termes */}
            {entries.map((entry) => (
              <Link
                key={entry.slug}
                href={entry.href}
                className="group relative flex flex-col justify-between p-6 md:p-7 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 min-h-[180px]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
                    Définition
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-300 group-hover:text-slate-700 group-hover:rotate-12 transition-all"
                  />
                </div>
                <div>
                  <p className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-slate-700 transition-colors">
                    {entry.term}
                  </p>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {entry.shortDefinition}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
