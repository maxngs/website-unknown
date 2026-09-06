import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import { mdxComponents } from "@/app/components/hiry/mag/mdx";
import { APP } from "@/app/components/hiry/links";
import { SITE_URL } from "@/app/components/hiry/seo";
import {
  getAllGlossarySlugs,
  getGlossaryEntry,
  getAllGlossaryEntries,
} from "@/lib/glossaire";

/** Glossaire publié en français uniquement. */
export function generateStaticParams() {
  return getAllGlossarySlugs().map((slug) => ({ locale: "fr", slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const entry = getGlossaryEntry(slug);
  if (!entry) return {};
  return {
    title: entry.term,
    description: entry.description || entry.shortDefinition,
    alternates: {
      canonical: `/${locale}/glossaire/${slug}`,
      languages: { fr: `/fr/glossaire/${slug}` },
    },
  };
}

export default async function GlossaryEntryPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const entry = getGlossaryEntry(slug);
  if (!entry) notFound();

  const t = await getTranslations("glossary");
  const nav = await getTranslations("nav");
  const base = `${SITE_URL}/${locale}/glossaire`;

  const { content } = await compileMDX({
    source: entry.content,
    components: mdxComponents,
    options: {
      parseFrontmatter: false,
      mdxOptions: { remarkPlugins: [remarkGfm] },
    },
  });

  const all = getAllGlossaryEntries();
  const related = (entry.seeAlso ?? [])
    .map((s) => all.find((e) => e.slug === s))
    .filter((e): e is (typeof all)[number] => Boolean(e));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${base}/${slug}`,
    name: entry.term,
    description: entry.shortDefinition,
    url: `${base}/${slug}`,
    inLanguage: "fr-FR",
    inDefinedTermSet: { "@id": `${base}#termset` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Nav
        links={[
          { href: "/glossaire", label: t("label") },
          { href: "/mag", label: nav("mag") },
        ]}
      />

      <main>
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "40px 0", maxWidth: 780 }}>
            <MagBreadcrumb
              locale={locale}
              items={[
                { label: "Hiry", href: "/" },
                { label: t("label"), href: "/glossaire" },
                { label: entry.term },
              ]}
            />
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(34px,4.4vw,62px)",
                lineHeight: 1.04,
                letterSpacing: "-.02em",
                margin: "0 0 20px",
                textWrap: "balance",
              }}
            >
              {entry.term}
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(15,14,12,.72)",
                margin: 0,
              }}
            >
              {entry.shortDefinition}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "44px 44px 60px",
          }}
        >
          <article className="mag-prose">{content}</article>

          {related.length > 0 && (
            <div style={{ marginTop: "2.6em" }}>
              <div
                style={{
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  color: "rgba(15,14,12,.45)",
                  marginBottom: 12,
                }}
              >
                {t("seeAlso")}
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/glossaire/${r.slug}`}
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      background: "var(--color-card-warm)",
                      border: "1px solid rgba(15,14,12,.1)",
                      borderRadius: 999,
                      padding: "8px 16px",
                      color: "rgba(15,14,12,.75)",
                    }}
                  >
                    {r.term}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </section>

        <section
          style={{ padding: "0 44px 90px", maxWidth: 1400, margin: "0 auto" }}
        >
          <div
            data-r="g"
            className="rv-scale"
            style={{
              background: "var(--color-cyan)",
              borderRadius: 28,
              padding: "clamp(36px,4vw,60px)",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 40,
              alignItems: "center",
              animationRange: "entry 0% entry 40%",
            }}
          >
            <h2
              style={{
                fontWeight: 700,
                fontSize: "clamp(26px,2.8vw,40px)",
                lineHeight: 1.08,
                letterSpacing: "-.03em",
                margin: 0,
                maxWidth: 620,
              }}
            >
              {t("ctaTitle")}
            </h2>
            <Link
              href={APP.signup}
              className="btn btn-ink-alt"
              style={{ fontSize: 15, padding: "16px 30px" }}
            >
              {t("ctaLabel")}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
