import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import ArticleCta from "@/app/components/hiry/mag/ArticleCta";
import { formatMeta, SILO_TONE } from "@/app/components/hiry/mag/data";
import { getPostsBySilo } from "@/lib/blog";
import { MagCollectionJsonLd } from "@/app/components/blog/MagCollectionJsonLd";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import { SITE_URL } from "@/app/components/hiry/seo";
import { isSiloSlug, SILO_SLUGS, SILOS, type SiloSlug } from "@/lib/silos";

export function generateStaticParams() {
  return SILO_SLUGS.map((silo) => ({ locale: "fr", silo }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; silo: string }>;
}): Promise<Metadata> {
  const { locale, silo } = await params;
  if (!isSiloSlug(silo)) return {};
  return {
    title: SILOS[silo].name,
    description: SILOS[silo].description,
    alternates: {
      canonical: `/${locale}/mag/${silo}`,
      languages: { fr: `/fr/mag/${silo}` },
    },
    openGraph: {
      type: "website",
      title: SILOS[silo].name,
      description: SILOS[silo].description,
      images: [`/og-mag-${silo}.png`],
    },
  };
}

export default async function SiloPage({
  params,
}: {
  params: Promise<{ locale: string; silo: string }>;
}) {
  const { locale, silo } = await params;
  setRequestLocale(locale);
  if (!isSiloSlug(silo)) notFound();

  const siloSlug = silo as SiloSlug;
  const meta = SILOS[siloSlug];
  const posts = getPostsBySilo(siloSlug);
  const t = await getTranslations("article");
  const magT = await getTranslations("mag");
  const activeLocale = await getLocale();

  return (
    <>
      <MagCollectionJsonLd
        name={meta.name}
        description={meta.longDescription}
        url={`${SITE_URL}/${locale}/mag/${siloSlug}`}
        posts={posts}
        articleSection={meta.name}
      />
      <TopBar active="/mag" />
      <Nav
        links={[
          { href: "/mag", label: magT("navUne") },
          { href: "/mag#rubriques", label: magT("navRubriques") },
        ]}
      />

      <main>
        <header
          style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}
        >
          <div data-r="bleed" className="mag-rule" />
          <div className="rv-up" style={{ padding: "44px 0 40px", maxWidth: 760 }}>
            <MagBreadcrumb
              locale={locale}
              items={[
                { label: "Hiry", href: "/" },
                { label: magT("masthead.title"), href: "/mag" },
                { label: meta.shortName },
              ]}
            />
            <Link
              href="/mag"
              className="mag-link"
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".18em",
                color: "rgba(15,14,12,.45)",
              }}
            >
              {t("backToMag")}
            </Link>
            <h1
              className="serif"
              style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "clamp(38px,5vw,72px)",
                lineHeight: 1.02,
                letterSpacing: "-.02em",
                margin: "18px 0 20px",
              }}
            >
              {meta.name}
              <span style={{ color: SILO_TONE[siloSlug] }}>.</span>
            </h1>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.65,
                color: "rgba(15,14,12,.7)",
                margin: 0,
              }}
            >
              {meta.longDescription}
            </p>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section
          style={{ padding: "10px 44px 60px", maxWidth: 1400, margin: "0 auto" }}
        >
          {posts.map((post, i) => (
            <Link
              key={post.href}
              href={post.href}
              data-r="g"
              className="rv-up mag-item"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: 24,
                alignItems: "baseline",
                padding: "26px 14px",
                margin: "0 -14px",
                borderBottom:
                  i === posts.length - 1
                    ? undefined
                    : "1px solid rgba(15,14,12,.15)",
                borderRadius: 10,
                animationRange: `entry ${i * 4}% entry ${26 + i * 4}%`,
              }}
            >
              <span>
                <span
                  className="serif"
                  style={{
                    fontStyle: "normal",
                    display: "block",
                    fontSize: "clamp(20px,2vw,27px)",
                    lineHeight: 1.2,
                    marginBottom: 8,
                  }}
                >
                  {post.title}
                </span>
                <span
                  style={{
                    fontSize: 14,
                    lineHeight: 1.55,
                    color: "rgba(15,14,12,.6)",
                    maxWidth: 720,
                    display: "block",
                  }}
                >
                  {post.description}
                </span>
              </span>
              <span
                style={{
                  fontSize: 12.5,
                  color: "rgba(15,14,12,.5)",
                  whiteSpace: "nowrap",
                }}
              >
                {formatMeta(post, activeLocale)}
              </span>
            </Link>
          ))}
        </section>

        <ArticleCta silo={siloSlug} title={t("ctaTitle")} />
      </main>
    </>
  );
}
