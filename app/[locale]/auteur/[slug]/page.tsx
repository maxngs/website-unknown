import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import TopBar from "@/app/components/hiry/TopBar";
import Nav from "@/app/components/hiry/Nav";
import Link from "@/app/components/hiry/Link";
import MagBreadcrumb from "@/app/components/hiry/mag/MagBreadcrumb";
import { formatMeta, SILO_TONE } from "@/app/components/hiry/mag/data";
import { SITE_URL } from "@/app/components/hiry/seo";
import { AUTHORS, getAuthor } from "@/lib/authors";
import { getPostsByAuthor } from "@/lib/blog";
import { SILOS } from "@/lib/silos";

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ locale: "fr", slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};
  return {
    title: author.name,
    description: author.bio.slice(0, 160),
    alternates: {
      canonical: `/${locale}/auteur/${slug}`,
      languages: { fr: `/fr/auteur/${slug}` },
    },
  };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const author = getAuthor(slug);
  if (!author) notFound();

  const t = await getTranslations("mag.authors");
  const magT = await getTranslations("mag");
  const posts = getPostsByAuthor(slug);
  const url = `${SITE_URL}/${locale}/auteur/${slug}`;

  // ProfilePage + Person (E-E-A-T)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": url,
        url,
        name: author.name,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${url}#person` },
        inLanguage: "fr-FR",
      },
      {
        "@type": "Person",
        "@id": `${url}#person`,
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
        url,
        worksFor: { "@id": `${SITE_URL}/#organization` },
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
        ...(author.education
          ? {
              alumniOf: author.education.map((e) => ({
                "@type": "EducationalOrganization",
                name: e,
              })),
            }
          : {}),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar active="/mag" />
      <Nav
        links={[
          { href: "/mag", label: magT("navArticles") },
          { href: "/mag/tag", label: magT("tags.label") },
        ]}
      />
      <main>
        <header style={{ padding: "44px 44px 0", maxWidth: 1400, margin: "0 auto" }}>
          <div data-r="bleed" className="mag-rule" />
          <div
            data-r="g"
            className="rv-up"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,300px) minmax(0,1fr)",
              gap: "clamp(28px,4vw,60px)",
              padding: "40px 0",
              alignItems: "start",
            }}
          >
            <div>
              <MagBreadcrumb
                locale={locale}
                items={[
                  { label: "Hiry", href: "/" },
                  { label: magT("masthead.title"), href: "/mag" },
                  { label: author.name },
                ]}
              />
              <span
                aria-hidden
                style={{
                  width: 92,
                  height: 92,
                  borderRadius: "50%",
                  background: "var(--color-cyan)",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                  fontSize: 34,
                }}
              >
                {author.name.charAt(0)}
              </span>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".18em",
                  color: "rgba(15,14,12,.45)",
                  marginBottom: 14,
                }}
              >
                {t("label")}
              </div>
              <h1
                className="serif"
                style={{
                  fontStyle: "normal",
                  fontWeight: 400,
                  fontSize: "clamp(34px,4.2vw,58px)",
                  lineHeight: 1.04,
                  letterSpacing: "-.02em",
                  margin: "0 0 8px",
                }}
              >
                {author.name}
              </h1>
              <div
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-blue)",
                  marginBottom: 18,
                }}
              >
                {author.role}
              </div>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.7,
                  color: "rgba(15,14,12,.72)",
                  margin: "0 0 20px",
                  maxWidth: 660,
                }}
              >
                {author.bio}
              </p>
              {author.education && (
                <div
                  style={{
                    fontSize: 13.5,
                    color: "rgba(15,14,12,.55)",
                    marginBottom: 14,
                  }}
                >
                  {author.education.join(" · ")}
                </div>
              )}
              {author.linkedin && (
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13, fontWeight: 700, color: "var(--color-blue)" }}
                >
                  LinkedIn →
                </a>
              )}
            </div>
          </div>
          <div data-r="bleed" className="mag-rule" />
        </header>

        <section style={{ padding: "40px 44px 90px", maxWidth: 1400, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: ".18em",
              color: "rgba(15,14,12,.45)",
              marginBottom: 20,
            }}
          >
            {t("articlesBy").toUpperCase()}
          </div>
          {posts.length === 0 ? (
            <p style={{ fontSize: 16, color: "rgba(15,14,12,.6)" }}>
              {t("noArticles")}
            </p>
          ) : (
            posts.map((post, i) => (
              <Link
                key={post.href}
                href={post.href}
                data-r="g"
                className="rv-up mag-item"
                style={{
                  display: "grid",
                  gridTemplateColumns: "110px 1fr auto",
                  gap: 24,
                  alignItems: "baseline",
                  padding: "22px 14px",
                  margin: "0 -14px",
                  borderBottom:
                    i === posts.length - 1 ? undefined : "1px solid rgba(15,14,12,.15)",
                  borderRadius: 10,
                  animationRange: `entry ${i * 5}% entry ${26 + i * 5}%`,
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: SILO_TONE[post.silo],
                  }}
                >
                  {SILOS[post.silo].shortName.toUpperCase()}
                </span>
                <span
                  className="serif"
                  style={{
                    fontStyle: "normal",
                    fontSize: "clamp(19px,2vw,25px)",
                    lineHeight: 1.2,
                  }}
                >
                  {post.title}
                </span>
                <span
                  style={{
                    fontSize: 12.5,
                    color: "rgba(15,14,12,.5)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatMeta(post, locale)}
                </span>
              </Link>
            ))
          )}
        </section>
      </main>
    </>
  );
}
