import { getTranslations } from "next-intl/server";

/** Sommaire collant + partage, en marge de la colonne de lecture. */
export default async function ArticleAside({
  headings,
  shareUrl,
  title,
}: {
  headings: { id: string; label: string }[];
  shareUrl: string;
  title: string;
}) {
  const t = await getTranslations("article");

  const share = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <aside data-r="hide" style={{ position: "relative" }}>
      <div style={{ position: "sticky", top: 110 }}>
        {headings.length > 0 && (
          <>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".16em",
                color: "rgba(15,14,12,.45)",
                marginBottom: 14,
              }}
            >
              {t("toc")}
            </div>
            <nav className="mag-toc" style={{ marginBottom: 30 }}>
              {headings.map((h) => (
                <a key={h.id} href={`#${h.id}`}>
                  {h.label}
                </a>
              ))}
            </nav>
          </>
        )}

        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: ".16em",
            color: "rgba(15,14,12,.45)",
            marginBottom: 12,
          }}
        >
          {t("share")}
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {share.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid rgba(15,14,12,.18)",
                borderRadius: 999,
                padding: "6px 13px",
                color: "rgba(15,14,12,.7)",
              }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
