// app/blog/page.tsx — Server Component
// Hub du blog Hiry — bento mosaic asymétrique : 4 silos colorés, featured XXL,
// stats stickers, articles récents, tuiles glossaire.
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Sparkles } from "lucide-react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Breadcrumb } from "../components/blog/Breadcrumb";
import { BentoSiloCard } from "../components/blog/BentoSiloCard";
import { BentoArticleCard } from "../components/blog/BentoArticleCard";
import { BentoStatCard } from "../components/blog/BentoStatCard";
import { MagCollectionJsonLd } from "../components/blog/MagCollectionJsonLd";
import { getAllPosts, getPostsBySilo } from "@/lib/blog";
import { getAllGlossaryEntries } from "@/lib/glossaire";
import { SILO_SLUGS } from "@/lib/silos";

export const metadata: Metadata = {
  title: "Le Mag Hiry — Recrutement, IA, Soft Skills et Insertion",
  description:
    "Le Mag Hiry : décryptages, guides et données sur le recrutement, l'alternance et l'insertion. Pour les entreprises, candidats et écoles.",
  alternates: { canonical: "/mag" },
  openGraph: {
    type: "website",
    title: "Le Mag Hiry — Recrutement, IA, Soft Skills et Insertion",
    description:
      "Le Mag Hiry : décryptages, guides et données sur le recrutement, l'alternance et l'insertion.",
    url: "https://hiry.fr/mag",
  },
};

export default function BlogIndexPage() {
  const allPosts = getAllPosts();
  const featured = allPosts[0];
  const recent = allPosts.slice(1, 7);

  const counts = SILO_SLUGS.map((slug) => ({
    slug,
    count: getPostsBySilo(slug).length,
  }));

  const glossaryHighlights = getAllGlossaryEntries().slice(0, 4);

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <MagCollectionJsonLd
        name="Le Mag Hiry — Recrutement, IA, Soft Skills et Insertion"
        description="Décryptages, guides et données sur le recrutement, l'alternance et l'insertion — par Hiry."
        url="https://hiry.fr/mag"
        posts={allPosts}
      />
      <Navbar />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Le Mag" },
            ]}
          />
        </div>

        {/* Hero éditorial — branding "Le Mag" + sous-titre de positionnement */}
        <header className="mb-14 md:mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="h-px w-10 bg-slate-300" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Le Mag · n°01
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold text-slate-900 tracking-[-0.04em] leading-[0.95] mb-5">
            Recrutement, IA et insertion.{" "}
            <span className="text-slate-400">Décodés.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 font-semibold max-w-2xl leading-snug mb-4">
            Décryptages, guides et données sur le recrutement, l&apos;alternance
            et l&apos;insertion — par Hiry.
          </p>
          <p className="text-base text-slate-500 font-medium max-w-2xl leading-relaxed">
            Quatre univers — entreprises qui recrutent, candidats qui se
            cherchent, écoles qui pilotent l&apos;insertion, données qui parlent.
            Choisissez le vôtre.
          </p>
        </header>

        {/* BENTO 1 — les 4 silos asymétriques */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Quatre univers
            </h2>
            <span className="text-xs font-medium text-slate-400">
              {counts.reduce((a, c) => a + c.count, 0)} articles publiés
            </span>
          </div>
          {/* Layout 50/50 : Entreprises XXL à gauche, 3 tuiles empilées à droite (mi-page chacune). */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:auto-rows-[minmax(200px,1fr)]">
            {/* Entreprises : XXL plein bord (col 1, row-span-3) */}
            <div className="lg:row-span-3">
              <BentoSiloCard
                silo="entreprises"
                index={1}
                count={counts.find((c) => c.slug === "entreprises")?.count ?? 0}
                size="lg"
                className="h-full"
              />
            </div>
            {/* Candidats : col 2, row 1 */}
            <BentoSiloCard
              silo="candidats"
              index={2}
              count={counts.find((c) => c.slug === "candidats")?.count ?? 0}
              size="md"
              className="h-full"
            />
            {/* Écoles : col 2, row 2 */}
            <BentoSiloCard
              silo="ecoles"
              index={3}
              count={counts.find((c) => c.slug === "ecoles")?.count ?? 0}
              size="md"
              className="h-full"
            />
            {/* Études : col 2, row 3 */}
            <BentoSiloCard
              silo="etudes"
              index={4}
              count={counts.find((c) => c.slug === "etudes")?.count ?? 0}
              size="md"
              className="h-full"
            />
          </div>
        </section>

        {/* BENTO 2 — À la une + stats stickers */}
        {featured && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                À la une
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 md:gap-5">
              <div className="lg:col-span-4">
                <BentoArticleCard post={featured} variant="featured" />
              </div>
              <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-5">
                <BentoStatCard
                  value="8 740€"
                  label="Coût moyen d'un recrutement raté en PME"
                  source="École du Recrutement"
                  silo="entreprises"
                />
                <BentoStatCard
                  value="43%"
                  label="Des contrats d'alternance rompus avant la fin"
                  source="Min. Travail"
                />
              </div>
            </div>
          </section>
        )}

        {/* BENTO 3 — Articles récents */}
        {recent.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Derniers articles
              </h2>
              <span className="text-xs font-medium text-slate-400">
                {recent.length} récent{recent.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {recent.map((post) => (
                <BentoArticleCard
                  key={`${post.silo}-${post.slug}`}
                  post={post}
                />
              ))}
            </div>
          </section>
        )}

        {/* État vide quand aucun article publié */}
        {!featured && (
          <section className="mb-16 md:mb-24">
            <div className="rounded-3xl bg-white border border-slate-100 p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 rounded-2xl mb-5">
                <Sparkles size={24} className="text-slate-300" />
              </div>
              <p className="text-slate-700 font-bold text-lg mb-2">
                Le contenu arrive bientôt
              </p>
              <p className="text-sm text-slate-500 font-medium max-w-md mx-auto">
                Les premiers articles sont en rédaction — repassez très vite.
                En attendant, explorez les univers ci-dessus.
              </p>
            </div>
          </section>
        )}

        {/* BENTO 4 — Glossaire en tuiles */}
        <section>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Le vocabulaire
            </h2>
            <Link
              href="/glossaire"
              className="text-xs font-bold text-slate-700 hover:text-slate-900 inline-flex items-center gap-1 transition-colors"
            >
              Voir tout le glossaire
              <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {/* Tuile principale */}
            <Link
              href="/glossaire"
              className="group lg:col-span-2 lg:row-span-2 relative flex flex-col justify-between rounded-3xl bg-slate-900 text-white p-7 md:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500 min-h-[260px]"
            >
              <div className="absolute -bottom-20 -right-10 w-72 h-72 bg-white/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-white/10 backdrop-blur-sm border border-white/15">
                  <BookOpen size={11} />
                  Glossaire
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white/60 group-hover:text-white group-hover:rotate-12 transition-all"
                />
              </div>
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mb-3">
                  Soft skills, ATS, matching IA, RNCP…
                </h3>
                <p className="text-sm text-white/75 font-medium leading-relaxed max-w-md">
                  Les définitions claires des termes-clés du recrutement
                  intelligent — avec liens vers nos articles.
                </p>
              </div>
            </Link>

            {/* Tuiles termes (ou placeholder si pas d'entrée) */}
            {glossaryHighlights.length > 0 ? (
              glossaryHighlights.map((entry) => (
                <Link
                  key={entry.slug}
                  href={entry.href}
                  className="group flex flex-col justify-between p-5 md:p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all min-h-[120px]"
                >
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Définition
                  </span>
                  <div>
                    <p className="text-base md:text-lg font-extrabold text-slate-900 tracking-tight mb-0.5 group-hover:text-slate-700 transition-colors">
                      {entry.term}
                    </p>
                    <p className="text-xs text-slate-500 font-medium line-clamp-2">
                      {entry.shortDefinition}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div className="lg:col-span-3 flex items-center justify-center p-7 rounded-2xl border border-dashed border-slate-200 text-center">
                <p className="text-sm text-slate-400 font-medium">
                  Les définitions du glossaire arrivent prochainement
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
