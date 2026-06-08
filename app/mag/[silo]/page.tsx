// app/mag/[silo]/page.tsx — Server Component
// Index d'un silo en bento : hero éditorial coloré, featured XXL, grille articles, CTA.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/blog/Breadcrumb";
import { BentoArticleCard } from "../../components/blog/BentoArticleCard";
import { BlogCTA } from "../../components/blog/BlogCTA";
import { MagCollectionJsonLd } from "../../components/blog/MagCollectionJsonLd";
import { getPostsBySilo } from "@/lib/blog";
import {
  SILO_SLUGS,
  getSilo,
  isSiloSlug,
  siloTheme,
  type SiloSlug,
} from "@/lib/silos";
import { cn } from "@/lib/utils";

const SITE_URL = "https://hiry.fr";

const SILO_INDEX: Record<SiloSlug, number> = {
  entreprises: 1,
  candidats: 2,
  ecoles: 3,
  etudes: 4,
};

export function generateStaticParams() {
  return SILO_SLUGS.map((silo) => ({ silo }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ silo: string }>;
}): Promise<Metadata> {
  const { silo } = await params;
  if (!isSiloSlug(silo)) return {};

  const meta = getSilo(silo);
  return {
    title: `${meta.name} — Le Mag Hiry`,
    description: meta.longDescription,
    alternates: { canonical: `/mag/${silo}` },
    openGraph: {
      type: "website",
      title: `${meta.name} — Le Mag Hiry`,
      description: meta.longDescription,
      url: `${SITE_URL}/mag/${silo}`,
    },
  };
}

export default async function SiloIndexPage({
  params,
}: {
  params: Promise<{ silo: string }>;
}) {
  const { silo } = await params;
  if (!isSiloSlug(silo)) notFound();

  const siloSlug = silo as SiloSlug;
  const meta = getSilo(siloSlug);
  const theme = siloTheme(siloSlug);
  const posts = getPostsBySilo(siloSlug);
  const featured = posts[0];
  const rest = posts.slice(1);
  const number = SILO_INDEX[siloSlug];

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <MagCollectionJsonLd
        name={`${meta.name} — Le Mag Hiry`}
        description={meta.longDescription}
        url={`${SITE_URL}/mag/${siloSlug}`}
        posts={posts}
        articleSection={meta.name}
      />
      <Navbar />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Le Mag", href: "/mag" },
              { label: meta.shortName },
            ]}
          />
        </div>

        {/* Hero éditorial — bandeau coloré sur la gauche, contenu à droite */}
        <header className="mb-14 md:mb-20">
          <div
            className={cn(
              "relative grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 rounded-3xl overflow-hidden bg-gradient-to-br p-7 md:p-10 lg:p-14 text-white",
              theme.gradient,
            )}
          >
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Watermark numéro */}
            <span
              aria-hidden
              className="absolute -bottom-12 -right-4 text-[18rem] md:text-[24rem] font-black leading-none text-white/10 select-none pointer-events-none"
            >
              {String(number).padStart(2, "0")}
            </span>

            <div className="relative lg:col-span-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-white/40" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85">
                  Univers n°{String(number).padStart(2, "0")}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-[-0.03em] leading-[0.95] mb-5">
                {meta.name}
              </h1>
              <p className="text-base md:text-xl text-white/90 font-medium leading-relaxed max-w-2xl">
                {meta.longDescription}
              </p>
            </div>

            <div className="relative lg:col-span-4 flex flex-col gap-3 lg:items-end justify-end">
              <div className="inline-flex flex-col gap-1 px-4 py-3 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/70">
                  Pour
                </span>
                <span className="text-sm font-semibold text-white">
                  {meta.audience}
                </span>
              </div>
              <Link
                href={meta.landingHref}
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-2xl shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"
              >
                Découvrir Hiry pour {meta.shortName.toLowerCase()}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </header>

        {/* État vide */}
        {posts.length === 0 && (
          <section className="mb-16">
            <div className="rounded-3xl bg-white border border-slate-100 p-10 md:p-14 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-50 rounded-2xl mb-5">
                <Sparkles size={24} className="text-slate-300" />
              </div>
              <p className="text-slate-700 font-bold text-lg mb-2">
                Cette catégorie est en préparation
              </p>
              <p className="text-sm text-slate-500 font-medium max-w-md mx-auto mb-6">
                Les premiers articles arrivent. En attendant, explorez les
                autres univers ou la landing dédiée à {meta.shortName.toLowerCase()}.
              </p>
              <Link
                href="/mag"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Retour au hub
                <ArrowRight size={14} />
              </Link>
            </div>
          </section>
        )}

        {/* Featured */}
        {featured && (
          <section className="mb-12 md:mb-16">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                À la une
              </h2>
            </div>
            <BentoArticleCard post={featured} variant="featured" />
          </section>
        )}

        {/* Grille articles */}
        {rest.length > 0 && (
          <section className="mb-16 md:mb-24">
            <div className="flex items-end justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                Tous les articles
              </h2>
              <span className="text-xs font-medium text-slate-400">
                {rest.length} article{rest.length > 1 ? "s" : ""}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {rest.map((post) => (
                <BentoArticleCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        )}

        {/* CTA silo */}
        <BlogCTA silo={siloSlug} />
      </div>

      <Footer />
    </div>
  );
}
