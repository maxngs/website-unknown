// app/components/blog/ArticleJsonLd.tsx
// JSON-LD Schema.org pour un article de blog : Article + FAQPage (si FAQ présente).
// Si l'article a un `authorSlug`, l'author est une Person (E-E-A-T) ; sinon Organization.
import type { BlogPost } from "@/lib/blog";
import { getSilo } from "@/lib/silos";
import { getAuthor } from "@/lib/authors";

const SITE_URL = "https://hiry.fr";

interface ArticleJsonLdProps {
  post: BlogPost;
}

export function ArticleJsonLd({ post }: ArticleJsonLdProps) {
  const silo = getSilo(post.silo);
  const url = `${SITE_URL}${post.href}`;
  const author = post.authorSlug ? getAuthor(post.authorSlug) : null;

  const authorNode = author
    ? {
        "@type": "Person",
        name: author.name,
        jobTitle: author.role,
        url: `${SITE_URL}${author.url ?? "/a-propos"}`,
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
        worksFor: { "@id": `${SITE_URL}/#organization` },
      }
    : {
        "@type": "Organization",
        name: "Hiry",
        url: SITE_URL,
      };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: authorNode,
    publisher: {
      "@type": "Organization",
      name: "Hiry",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-hiry-black.svg`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    articleSection: silo.name,
    keywords: post.tags.join(", "),
    ...(post.image && {
      image: post.image.startsWith("http")
        ? post.image
        : `${SITE_URL}${post.image}`,
    }),
  };

  const faqJsonLd =
    post.faq && post.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faq.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
