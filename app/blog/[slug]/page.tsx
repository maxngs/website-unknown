// app/blog/[slug]/page.tsx — Server Component
// Page article individuelle avec SEO complet + JSON-LD Article
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { ChevronLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";

// ── SSG : pré-génère toutes les pages articles au build ──
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ── Metadata dynamique par article ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://hiry.fr/blog/${slug}`,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
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

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min de lecture`;
}

// ── Page article ──
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  // JSON-LD Article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Hiry",
      url: "https://hiry.fr",
      logo: { "@type": "ImageObject", url: "https://hiry.fr/logo.png" },
    },
    mainEntityOfPage: `https://hiry.fr/blog/${slug}`,
    ...(post.image && { image: `https://hiry.fr${post.image}` }),
  };

  const readTime = estimateReadTime(post.content);

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero Header */}
      <div className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/80 via-purple-50/30 to-[#fafafa] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-purple-200/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 pt-32 md:pt-40 pb-12 md:pb-16">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-indigo-600 transition-colors font-medium mb-8 group"
          >
            <ChevronLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Tous les articles
          </Link>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[10px] font-bold text-indigo-600 bg-white/80 backdrop-blur-sm border border-indigo-100 rounded-full uppercase tracking-wide shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed mb-8 max-w-2xl">
            {post.description}
          </p>

          {/* Author bar */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200/50">
                <span className="text-white font-bold text-sm">
                  {post.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{post.author}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {new Date(post.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 pb-20">
        {/* Content card */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8 md:p-12 lg:p-14">
          <div className="prose prose-slate prose-lg max-w-none prose-headings:font-extrabold prose-headings:tracking-tight prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:text-slate-600 prose-p:font-medium prose-a:text-indigo-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-blockquote:border-indigo-300 prose-blockquote:bg-indigo-50/50 prose-blockquote:rounded-r-xl prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-slate-600 prose-blockquote:font-medium prose-li:text-slate-600 prose-li:font-medium prose-img:rounded-2xl prose-hr:border-slate-200">
            {content}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-[2rem] p-8 md:p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3">
              Envie de découvrir Hiry ?
            </h3>
            <p className="text-indigo-100 font-medium text-sm md:text-base mb-6 max-w-md mx-auto">
              Rejoignez la plateforme qui réinvente le recrutement grâce à
              l&apos;IA et aux soft skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/candidats"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-lg shadow-indigo-900/20 transition-all hover:-translate-y-0.5"
              >
                Je suis candidat
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/entreprises"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
              >
                Je recrute
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
