import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import ArticleAside from "@/app/components/hiry/mag/ArticleAside";
import ArticleCta from "@/app/components/hiry/mag/ArticleCta";
import RelatedPosts from "@/app/components/hiry/mag/RelatedPosts";
import { extractHeadings, mdxComponents } from "@/app/components/hiry/mag/mdx";
import { SILO_TONE } from "@/app/components/hiry/mag/data";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import AuthorCard from "@/app/components/hiry/mag/AuthorCard";
import { ArticleJsonLd } from "@/app/components/blog/ArticleJsonLd";
import { SITE_URL } from "@/app/components/hiry/seo";
import { getAllPostParams, getPost, getRelatedPosts } from "@/lib/blog";
import { isSiloSlug, SILOS, type SiloSlug } from "@/lib/silos";

/** Articles en français uniquement : pas de variante /en (cf. /[locale]/mag). */
export function generateStaticParams() {
  return getAllPostParams().map((p) => ({ locale: "fr", ...p }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; silo: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, silo, slug } = await params;
  if (!isSiloSlug(silo)) return {};
  const post = getPost(silo, slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/${locale}/mag/${silo}/${slug}`,
      // contenu publié en français uniquement : pas d'alternative EN
      languages: { fr: `/fr/mag/${silo}/${slug}` },
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      authors: [post.author],
      tags: post.tags,
      section: SILOS[silo].name,
      // `images` volontairement absent : la convention opengraph-image.tsx
      // génère une PNG par article et Next la renseigne toute seule.
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ locale: string; silo: string; slug: string }>;
}) {
  const { locale, silo, slug } = await params;
  setRequestLocale(locale);
  if (!isSiloSlug(silo)) notFound();

  const siloSlug = silo as SiloSlug;
  const post = getPost(siloSlug, slug);
  if (!post) notFound();

  const t = await getTranslations("article");
  const magT = await getTranslations("mag");
  const activeLocale = await getLocale();

  const { content } = await compileMDX({
    source: post.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts({ silo: siloSlug, slug });
  const shareUrl = `${SITE_URL}/${locale}${post.href}`;
  const fmt = (iso: string) =>
    new Intl.DateTimeFormat(activeLocale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));

  return (
    <>
      <ArticleJsonLd post={post} urlOverride={shareUrl} />
      <TopBar active="/mag" />
      <Nav
        links={[
          { href: "/mag", label: magT("navArticles") },
          { href: `/mag/${siloSlug}`, label: SILOS[siloSlug].shortName },
        ]}
      />

      <main>
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />

          <div className="rv-up" style={{ maxWidth: 880, padding: "40px 0 0" }}>
            <MagBreadcrumb
              locale={locale}
              items={[
                { label: "Hiry", href: "/" },
                { label: magT("masthead.title"), href: "/mag" },
                { label: SILOS[siloSlug].shortName, href: `/mag/${siloSlug}` },
                { label: post.title },
              ]}
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 20,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
              }}
            >
              <Link
                href={`/mag/${siloSlug}`}
                className="mag-link"
                style={{ color: SILO_TONE[siloSlug] }}
              >
                {SILOS[siloSlug].shortName.toUpperCase()}
              </Link>
              <span style={{ color: "rgba(15,14,12,.3)" }}>·</span>
              <span style={{ color: "rgba(15,14,12,.45)" }}>
                {fmt(post.date)}
              </span>
              <span style={{ color: "rgba(15,14,12,.3)" }}>·</span>
              <span style={{ color: "rgba(15,14,12,.45)" }}>
                {post.readingTimeMin} MIN
              </span>
            </div>

            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(34px,4.6vw,64px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: "0 0 22px",
                textWrap: "balance",
              }}
            >
              {post.title}
            </h1>

            <p
              style={{
                fontSize: 17.5,
                lineHeight: 1.6,
                color: "rgba(15,14,12,.7)",
                margin: "0 0 24px",
                maxWidth: 700,
              }}
            >
              {post.description}
            </p>

            <div style={{ fontSize: 12.5, color: "rgba(15,14,12,.5)" }}>
              {t("by")} {post.author}
              {post.dateModified !== post.date && (
                <> · {t("updated")} {fmt(post.dateModified)}</>
              )}
            </div>
          </div>

          <div
            data-r="bleed"
            className="mag-rule"
            style={{ marginTop: 40 }}
          />
        </header>

        <div
          data-r="g"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
            gap: "clamp(32px,5vw,72px)",
            maxWidth: 1100,
            margin: "0 auto",
            padding: "48px 44px 70px",
            alignItems: "start",
          }}
        >
          <ArticleAside
            headings={headings}
            shareUrl={shareUrl}
            title={post.title}
          />

          <article className="mag-prose" style={{ maxWidth: 680 }}>
            {content}

            {post.faq && post.faq.length > 0 && (
              <>
                <h2 id="faq" style={{ marginTop: "2.4em" }}>
                  {t("faqTitle")}
                </h2>
                <div className="faq" style={{ display: "grid", gap: 12 }}>
                  {post.faq.map((item) => (
                    <details
                      key={item.question}
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(15,14,12,.1)",
                        borderRadius: 16,
                        padding: "0 22px",
                      }}
                    >
                      <summary
                        style={{
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: 15.5,
                          padding: "18px 0",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 16,
                          color: "var(--color-ink)",
                        }}
                      >
                        {item.question}
                        <span
                          aria-hidden
                          style={{
                            fontSize: 20,
                            color: "var(--color-blue)",
                            flex: "none",
                          }}
                        >
                          +
                        </span>
                      </summary>
                      <p
                        style={{
                          fontSize: 14.5,
                          lineHeight: 1.65,
                          color: "rgba(15,14,12,.65)",
                          margin: 0,
                          padding: "0 0 18px",
                        }}
                      >
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </>
            )}
            {post.tags.length > 0 && (
              <div style={{ marginTop: "2.4em" }}>
                <div
                  style={{
                    fontSize: 10.5,
                    fontWeight: 700,
                    letterSpacing: ".16em",
                    color: "rgba(15,14,12,.45)",
                    marginBottom: 12,
                  }}
                >
                  {t("tags")}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 12.5,
                        fontWeight: 600,
                        background: "var(--color-card-warm)",
                        border: "1px solid rgba(15,14,12,.1)",
                        borderRadius: 999,
                        padding: "6px 14px",
                        color: "rgba(15,14,12,.7)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <AuthorCard author={post.author} authorSlug={post.authorSlug} />
          </article>
        </div>

        <ArticleCta silo={siloSlug} title={t("ctaTitle")} />
        <RelatedPosts posts={related} />
      </main>
    </>
  );
}
