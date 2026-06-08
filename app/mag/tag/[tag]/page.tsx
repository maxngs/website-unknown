// app/mag/tag/[tag]/page.tsx — Server Component
// Page d'agrégation par tag — articles de tous silos partageant ce thème.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Tag, ArrowRight } from "lucide-react";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { Breadcrumb } from "../../../components/blog/Breadcrumb";
import { BentoArticleCard } from "../../../components/blog/BentoArticleCard";
import { MagCollectionJsonLd } from "../../../components/blog/MagCollectionJsonLd";
import { getAllTags, getPostsByTag, getTagLabel } from "@/lib/blog";

const SITE_URL = "https://hiry.fr";

// SSG : pré-génère une page par tag détecté dans les MDX.
export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  const label = getTagLabel(tag);
  if (!label) return {};

  const count = getPostsByTag(tag).length;
  return {
    title: `${label} — ${count} article${count > 1 ? "s" : ""} | Le Mag Hiry`,
    description: `Tous les articles du Mag Hiry sur le sujet « ${label} » — décryptages, guides et données issus des 4 univers (entreprises, candidats, écoles, études).`,
    alternates: { canonical: `/mag/tag/${tag}` },
    openGraph: {
      type: "website",
      title: `${label} — articles du Mag Hiry`,
      description: `Tous les articles du Mag sur ${label}.`,
      url: `${SITE_URL}/mag/tag/${tag}`,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const label = getTagLabel(tag);
  if (!label) notFound();

  const posts = getPostsByTag(tag);

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <MagCollectionJsonLd
        name={`${label} — Le Mag Hiry`}
        description={`Tous les articles du Mag Hiry sur le sujet « ${label} ».`}
        url={`${SITE_URL}/mag/tag/${tag}`}
        posts={posts}
      />
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Le Mag", href: "/mag" },
              { label: "Tags", href: "/mag/tag" },
              { label },
            ]}
          />
        </div>

        <header className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold mb-6 shadow-sm">
            <Tag size={14} />
            <span>Tag transversal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-[-0.04em] leading-[1] mb-5">
            {label}
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed">
            {posts.length} article{posts.length > 1 ? "s" : ""} sur ce sujet,
            tous silos confondus.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-12">
            {posts.map((post) => (
              <BentoArticleCard
                key={`${post.silo}-${post.slug}`}
                post={post}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-slate-100 p-10 text-center mb-12">
            <p className="text-sm text-slate-500 font-medium">
              Aucun article tagué « {label} » pour l&apos;instant.
            </p>
          </div>
        )}

        <Link
          href="/mag/tag"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
        >
          Voir tous les tags
          <ArrowRight size={14} />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
