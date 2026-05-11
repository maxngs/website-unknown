// app/glossaire/[slug]/page.tsx — Server Component
// Page d'une entrée du glossaire : définition courte + contenu MDX + JSON-LD DefinedTerm.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { Breadcrumb } from "../../components/blog/Breadcrumb";
import {
  getAllGlossarySlugs,
  getAllGlossaryEntries,
  getGlossaryEntry,
} from "@/lib/glossaire";

const SITE_URL = "https://hiry.fr";

export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) return {};

  return {
    title: `${entry.term} — Définition`,
    description: entry.description,
    alternates: { canonical: entry.href },
    openGraph: {
      type: "article",
      title: `${entry.term} — Définition | Hiry`,
      description: entry.description,
      url: `${SITE_URL}${entry.href}`,
    },
  };
}

export default async function GlossaireEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();

  // Pages "Voir aussi"
  const allEntries = getAllGlossaryEntries();
  const seeAlsoEntries = entry.seeAlso
    .map((s) => allEntries.find((e) => e.slug === s))
    .filter((e): e is NonNullable<typeof e> => e !== undefined);

  const { content } = await compileMDX({
    source: entry.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: entry.term,
    description: entry.shortDefinition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossaire du Recrutement IA — Hiry",
      url: `${SITE_URL}/glossaire`,
    },
    url: `${SITE_URL}${entry.href}`,
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 pt-32 md:pt-40 pb-24">
        <div className="mb-8">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Glossaire", href: "/glossaire" },
              { label: entry.term },
            ]}
          />
        </div>

        <header className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase tracking-wider mb-5">
            <BookOpen size={12} />
            Définition
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
            {entry.term}
          </h1>
          <p className="text-base md:text-lg text-slate-700 font-semibold leading-relaxed border-l-4 border-slate-900 pl-5 py-1">
            {entry.shortDefinition}
          </p>
        </header>

        <article className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
          <div className="prose prose-slate max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-3 prose-p:leading-relaxed prose-p:text-slate-600 prose-p:font-medium prose-a:text-slate-900 prose-a:font-semibold prose-strong:text-slate-900 prose-li:text-slate-600 prose-li:font-medium">
            {content}
          </div>
        </article>

        {/* Voir aussi */}
        {seeAlsoEntries.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Voir aussi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {seeAlsoEntries.map((e) => (
                <Link
                  key={e.slug}
                  href={e.href}
                  className="group flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 hover:border-slate-200 transition-all"
                >
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 mb-0.5 group-hover:text-slate-700 transition-colors">
                      {e.term}
                    </p>
                    <p className="text-xs text-slate-500 font-medium line-clamp-1">
                      {e.shortDefinition}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 mt-0.5 text-slate-300 group-hover:text-slate-700 group-hover:rotate-12 transition-all"
                  />
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}
