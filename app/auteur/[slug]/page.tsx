// app/auteur/[slug]/page.tsx — Server Component
// Author archive : page Person dédiée listant tous les articles d'un auteur.
// Renforce E-E-A-T (Experience, Expertise, Authority, Trust) pour Google et les LLMs.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail, GraduationCap } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/blog/Breadcrumb";
import { BentoArticleCard } from "../../components/blog/BentoArticleCard";
import { AUTHORS, getAuthor, type AuthorSlug } from "@/lib/authors";
import { getPostsByAuthor } from "@/lib/blog";

const SITE_URL = "https://hiry.fr";

// SSG : pré-génère la page de chaque auteur déclaré.
export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return {
    title: `${author.name} — ${author.role} chez Hiry`,
    description: author.bio,
    alternates: { canonical: `/auteur/${slug}` },
    openGraph: {
      type: "profile",
      title: `${author.name} — ${author.role} chez Hiry`,
      description: author.bio,
      url: `${SITE_URL}/auteur/${slug}`,
    },
  };
}

export default async function AuteurPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const posts = getPostsByAuthor(author.slug);

  // JSON-LD Person + ProfilePage
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/auteur/${slug}`,
        url: `${SITE_URL}/auteur/${slug}`,
        name: `${author.name} — ${author.role}`,
        description: author.bio,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/auteur/${slug}#person` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/auteur/${slug}#person`,
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
        url: `${SITE_URL}/auteur/${slug}`,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        ...(author.email ? { email: author.email } : {}),
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
        ...(author.education && author.education.length > 0
          ? {
              alumniOf: author.education.map((e) => ({
                "@type": "EducationalOrganization",
                name: e,
              })),
            }
          : {}),
        ...(posts.length > 0
          ? {
              mainEntityOfPage: posts.map((p) => ({
                "@type": "Article",
                "@id": `${SITE_URL}${p.href}`,
                headline: p.title,
                url: `${SITE_URL}${p.href}`,
                datePublished: p.date,
              })),
            }
          : {}),
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

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Auteurs" },
              { label: author.name },
            ]}
          />
        </div>

        {/* Profile hero */}
        <header className="mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-3">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-extrabold text-5xl lg:text-6xl">
                {author.name.charAt(0)}
              </div>
            </div>
            <div className="lg:col-span-9">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 block">
                Auteur Hiry
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.05] mb-3">
                {author.name}
              </h1>
              <p className="text-lg md:text-xl text-indigo-600 font-bold mb-5">
                {author.role}
              </p>
              <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed mb-6 max-w-3xl">
                {author.bio}
              </p>

              {/* Education chips */}
              {author.education && author.education.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {author.education.map((e) => (
                    <span
                      key={e}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md bg-slate-100 text-slate-700"
                    >
                      <GraduationCap size={12} />
                      {e}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs contact */}
              <div className="flex flex-wrap gap-3">
                {author.linkedin && (
                  <a
                    href={author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors"
                  >
                    <Linkedin size={14} />
                    LinkedIn
                  </a>
                )}
                {author.email && (
                  <a
                    href={`mailto:${author.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-slate-900 bg-white border border-slate-200 hover:border-slate-300 rounded-xl transition-colors"
                  >
                    <Mail size={14} />
                    {author.email}
                  </a>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Articles signés */}
        <section className="mb-14">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              {posts.length > 0
                ? `${posts.length} article${posts.length > 1 ? "s" : ""} signé${posts.length > 1 ? "s" : ""}`
                : "Aucun article publié"}
            </h2>
          </div>
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {posts.map((post) => (
                <BentoArticleCard
                  key={`${post.silo}-${post.slug}`}
                  post={post}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl bg-white border border-slate-100 p-10 text-center">
              <p className="text-sm text-slate-500 font-medium">
                {author.name} n&apos;a pas encore d&apos;article publié.
              </p>
            </div>
          )}
        </section>

        {/* Lien retour Mag */}
        <section>
          <Link
            href="/mag"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-slate-900 transition-colors"
          >
            Voir tout Le Mag
            <ArrowRight size={14} />
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
