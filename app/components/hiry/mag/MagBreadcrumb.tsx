import Link from "../Link";
import { SITE_URL } from "../seo";

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Fil d'Ariane visible + BreadcrumbList JSON-LD.
 * Les `href` sont des chemins internes SANS préfixe de locale ; celui-ci est
 * ajouté par <Link> pour l'affichage et par `locale` pour le JSON-LD, afin que
 * les deux désignent exactement la même URL.
 */
export default function MagBreadcrumb({
  items,
  locale,
}: {
  items: Crumb[];
  locale: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href
        ? { item: `${SITE_URL}/${locale}${item.href === "/" ? "" : item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Fil d'Ariane"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 8,
          fontSize: 11.5,
          fontWeight: 600,
          letterSpacing: ".04em",
          color: "rgba(15,14,12,.45)",
          marginBottom: 22,
        }}
      >
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <span
              key={`${item.label}-${i}`}
              style={{ display: "flex", alignItems: "center", gap: 8 }}
            >
              {item.href && !last ? (
                <Link href={item.href} className="mag-link">
                  {item.label}
                </Link>
              ) : (
                <span
                  style={last ? { color: "rgba(15,14,12,.75)" } : undefined}
                  aria-current={last ? "page" : undefined}
                >
                  {item.label}
                </span>
              )}
              {!last && <span aria-hidden>›</span>}
            </span>
          );
        })}
      </nav>
    </>
  );
}
