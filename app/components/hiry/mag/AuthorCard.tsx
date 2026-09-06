import { getTranslations } from "next-intl/server";
import { getAuthor } from "@/lib/authors";

/**
 * Bloc auteur de fin d'article. Enrichi quand l'article porte un `authorSlug`
 * (entité Person déjà déclarée dans le JSON-LD par ArticleJsonLd).
 */
export default async function AuthorCard({
  author,
  authorSlug,
}: {
  author: string;
  authorSlug?: string;
}) {
  const t = await getTranslations("article");
  const person = authorSlug ? getAuthor(authorSlug) : null;
  const name = person?.name ?? author;

  return (
    <div
      style={{
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
        background: "var(--color-card-warm)",
        border: "1px solid rgba(15,14,12,.08)",
        borderRadius: 18,
        padding: 26,
        marginTop: "2.6em",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 52,
          height: 52,
          flex: "none",
          borderRadius: "50%",
          background: "var(--color-blue)",
          color: "#fff",
          display: "grid",
          placeItems: "center",
          fontWeight: 700,
          fontSize: 20,
        }}
      >
        {name.charAt(0)}
      </span>
      <div style={{ minWidth: 0 }}>
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            letterSpacing: ".16em",
            color: "rgba(15,14,12,.45)",
            marginBottom: 6,
          }}
        >
          {t("writtenBy")}
        </div>
        <div style={{ fontWeight: 700, fontSize: 16 }}>{name}</div>
        {person?.role && (
          <div
            style={{
              fontSize: 13,
              color: "rgba(15,14,12,.55)",
              marginBottom: 8,
            }}
          >
            {person.role}
          </div>
        )}
        {person?.bio && (
          <p
            style={{
              fontSize: 13.5,
              lineHeight: 1.6,
              color: "rgba(15,14,12,.7)",
              margin: "0 0 10px",
            }}
          >
            {person.bio}
          </p>
        )}
        {person?.linkedin && (
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12.5,
              fontWeight: 600,
              color: "var(--color-blue)",
            }}
          >
            LinkedIn →
          </a>
        )}
      </div>
    </div>
  );
}
