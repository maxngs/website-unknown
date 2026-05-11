// app/mag/[silo]/[slug]/page.tsx — Server Component
// Page article : hero éditorial avec accent silo, MDX, JSON-LD Article/FAQPage,
// FAQ visible, CTA silo, articles liés intra-silo.
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { Calendar, Clock } from "lucide-react";
import { Navbar } from "../../../components/layout/Navbar";
import { Footer } from "../../../components/layout/Footer";
import { Breadcrumb } from "../../../components/blog/Breadcrumb";
import { RelatedArticles } from "../../../components/blog/RelatedArticles";
import { BlogCTA } from "../../../components/blog/BlogCTA";
import { ArticleJsonLd } from "../../../components/blog/ArticleJsonLd";
import { getAllPostParams, getPost, getRelatedPosts } from "@/lib/blog";
import { getSilo, isSiloSlug, siloTheme, type SiloSlug } from "@/lib/silos";
import { getAuthor } from "@/lib/authors";
import { cn } from "@/lib/utils";
import { Linkedin } from "lucide-react";

const SITE_URL = "https://hiry.fr";

const SILO_INDEX: Record<SiloSlug, number> = {
  entreprises: 1,
  candidats: 2,
  ecoles: 3,
  etudes: 4,
};

export function generateStaticParams() {
  return getAllPostParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ silo: string; slug: string }>;
}): Promise<Metadata> {
  const { silo, slug } = await params;
  if (!isSiloSlug(silo)) return {};

  const post = getPost(silo as SiloSlug, slug);
  if (!post) return {};

  const url = `${SITE_URL}${post.href}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: post.href },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      section: getSilo(silo as SiloSlug).name,
      ...(post.image && {
        images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.image && { images: [post.image] }),
    },
  };
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ silo: string; slug: string }>;
}) {
  const { silo, slug } = await params;
  if (!isSiloSlug(silo)) notFound();

  const siloSlug = silo as SiloSlug;
  const post = getPost(siloSlug, slug);
  if (!post) notFound();

  const meta = getSilo(siloSlug);
  const theme = siloTheme(siloSlug);
  const number = SILO_INDEX[siloSlug];
  const related = getRelatedPosts({ silo: siloSlug, slug });

  const { content } = await compileMDX({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const dateFr = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <ArticleJsonLd post={post} />
      <Navbar />

      {/* Bandeau silo coloré (mince, full bleed) */}
      <div className={cn("h-1 w-full bg-gradient-to-r", theme.gradient)} aria-hidden />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-28 md:pt-36 pb-24">
        {/* Breadcrumb */}
        <div className="mb-10">
          <Breadcrumb
            items={[
              { label: "Hiry", href: "/" },
              { label: "Le Mag", href: "/mag" },
              { label: meta.shortName, href: `/mag/${siloSlug}` },
              { label: post.title },
            ]}
          />
        </div>

        {/* Hero éditorial : grid 12 cols, watermark numéro silo, titre XXL */}
        <header className="mb-14 md:mb-20 max-w-5xl">
          <div className="flex items-center gap-3 mb-6">
            <span className={cn("h-px w-10", theme.bgStrong)} />
            <span className={cn("text-[11px] font-bold uppercase tracking-[0.2em]", theme.text)}>
              Univers n°{String(number).padStart(2, "0")} · {meta.shortName}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-extrabold text-slate-900 tracking-[-0.03em] leading-[1.02] mb-6">
            {post.title}
          </h1>

          <p className="text-base md:text-xl text-slate-500 font-medium leading-relaxed mb-8 max-w-3xl">
            {post.description}
          </p>

          {/* Bandeau meta (auteur, date, temps de lecture) */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2.5">
              <div
                className={cn(
                  "w-9 h-9 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-sm",
                  theme.gradient,
                )}
              >
                {post.author.charAt(0)}
              </div>
              <div className="text-xs">
                <p className="font-bold text-slate-900">{post.author}</p>
                <p className="text-slate-400 font-medium">L&apos;équipe éditoriale</p>
              </div>
            </div>
            <span className="hidden md:block w-px h-8 bg-slate-200" />
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Calendar size={12} />
              {dateFr}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <Clock size={12} />
              {post.readingTimeMin} min de lecture
            </span>
            {post.tags.length > 0 && (
              <>
                <span className="hidden md:block w-px h-8 bg-slate-200" />
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-slate-100 text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {/* Layout article : prose + sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Contenu MDX */}
          <article className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12 lg:p-14">
              <div className="prose prose-slate prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-slate-600 prose-p:font-medium prose-a:text-slate-900 prose-a:font-semibold prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 prose-a:decoration-slate-300 hover:prose-a:decoration-slate-700 prose-strong:text-slate-900 prose-blockquote:border-l-4 prose-blockquote:bg-slate-50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-700 prose-blockquote:font-medium prose-li:text-slate-600 prose-li:font-medium prose-img:rounded-2xl prose-hr:border-slate-200 prose-table:text-sm prose-table:border prose-table:border-slate-200 prose-table:rounded-2xl prose-table:overflow-hidden prose-table:border-separate prose-table:border-spacing-0 prose-th:bg-slate-50 prose-th:font-bold prose-th:text-slate-900 prose-th:text-left prose-th:px-4 prose-th:py-3 prose-th:border-b prose-th:border-slate-200 prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-100 prose-td:text-slate-600 prose-td:align-top">
                {content}
              </div>
            </div>

            {/* FAQ */}
            {post.faq && post.faq.length > 0 && (
              <section className="mt-8 bg-white rounded-3xl border border-slate-100 shadow-sm p-8 md:p-12">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                  Questions fréquentes
                </h2>
                <div className="space-y-4">
                  {post.faq.map((q) => (
                    <details
                      key={q.question}
                      className="group rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors overflow-hidden"
                    >
                      <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between text-base font-bold text-slate-900">
                        {q.question}
                        <span className="text-slate-400 text-2xl group-open:rotate-45 transition-transform leading-none">
                          +
                        </span>
                      </summary>
                      <p className="px-5 pb-5 text-sm text-slate-600 font-medium leading-relaxed">
                        {q.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>

          {/* Sidebar sticky (desktop only) — sommaire + CTA mini */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-5">
              {/* Mini-CTA silo */}
              <div
                className={cn(
                  "relative rounded-3xl bg-gradient-to-br p-7 text-white overflow-hidden",
                  theme.gradient,
                )}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/15 rounded-full blur-[60px] pointer-events-none" />
                <span className="relative inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-white/15 backdrop-blur-sm border border-white/20 mb-4">
                  Hiry pour {meta.shortName.toLowerCase()}
                </span>
                <p className="relative text-base font-extrabold leading-snug mb-4">
                  {meta.cta.label}
                </p>
                <a
                  href={meta.cta.href}
                  className="relative inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl transition-all"
                >
                  Commencer
                </a>
              </div>

              {/* Bloc auteur — enrichi si l'article a un authorSlug Person */}
              {(() => {
                const author = post.authorSlug ? getAuthor(post.authorSlug) : null;
                if (author) {
                  return (
                    <div className="rounded-3xl bg-white border border-slate-100 p-6">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">
                        Publié par
                      </p>
                      <div className="flex items-start gap-3 mb-4">
                        <div
                          className={cn(
                            "shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-base",
                            theme.gradient,
                          )}
                          aria-hidden
                        >
                          {author.name.charAt(0)}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-slate-900 leading-tight">
                            {author.name}
                          </p>
                          <p className="text-xs text-slate-500 font-medium leading-tight mt-0.5">
                            {author.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">
                        {author.bio}
                      </p>
                      {author.linkedin && (
                        <a
                          href={author.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors"
                        >
                          <Linkedin size={12} />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  );
                }
                return (
                  <div className="rounded-3xl bg-white border border-slate-100 p-6">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Publié par
                    </p>
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center text-white font-bold",
                          theme.gradient,
                        )}
                        aria-hidden
                      >
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{post.author}</p>
                        <p className="text-xs text-slate-500 font-medium">
                          L&apos;équipe éditoriale Hiry
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </aside>
        </div>

        {/* CTA silo XXL */}
        <BlogCTA silo={siloSlug} />

        {/* Articles liés (intra-silo uniquement) */}
        <RelatedArticles posts={related} />
      </div>

      <Footer />
    </div>
  );
}
