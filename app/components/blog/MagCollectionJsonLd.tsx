// app/components/blog/MagCollectionJsonLd.tsx
// JSON-LD CollectionPage pour le hub /mag et les index silo /mag/<silo>.
// Liste les articles publiés via ItemList pour signaler à Google et aux LLMs
// la nature éditoriale de la page.
import type { BlogPostMeta } from "@/lib/blog";

const SITE_URL = "https://hiry.fr";

interface MagCollectionJsonLdProps {
  /** Titre affiché de la collection (ex: "Le Mag Hiry"). */
  name: string;
  /** Description de la collection (positionnement éditorial). */
  description: string;
  /** URL canonique de la page de collection. */
  url: string;
  /** Articles publiés à lister (déjà triés desc par date). */
  posts: BlogPostMeta[];
  /** Nom de la section éditoriale (ex: "Entreprises & Recruteurs"). Optionnel. */
  articleSection?: string;
}

export function MagCollectionJsonLd({
  name,
  description,
  url,
  posts,
  articleSection,
}: MagCollectionJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "fr-FR",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}${post.href}`,
        name: post.title,
      })),
    },
    ...(articleSection ? { about: articleSection } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
