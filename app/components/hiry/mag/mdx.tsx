import type { ReactNode } from "react";
import Link from "../Link";

/** « Qu'est-ce que le culture fit ? » → « qu-est-ce-que-le-culture-fit » */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function text(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(text).join("");
  if (node && typeof node === "object" && "props" in node)
    return text((node as { props: { children?: ReactNode } }).props.children);
  return "";
}

/**
 * Composants injectés dans le MDX : ancres sur les titres (pour le sommaire),
 * tableaux dans un conteneur qui défile, et liens internes localisés.
 */
export const mdxComponents = {
  /**
   * Les articles écrivent leurs liens en absolu (« /mag/… », « /glossaire/… »).
   * Sans ce rendu, ils sortiraient de l'arborescence /[locale] : on les passe
   * par <Link>, qui applique le préfixe de locale. Ancres, liens externes et
   * mailto sont laissés tels quels.
   */
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (!href || !href.startsWith("/"))
      return (
        <a
          href={href}
          {...(href?.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    return <Link href={href}>{children}</Link>;
  },
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 id={slugify(text(children))}>{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 id={slugify(text(children))}>{children}</h3>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="mag-table-wrap">
      <table>{children}</table>
    </div>
  ),
};

/** Titres de niveau 2 du MDX brut, pour construire le sommaire. */
export function extractHeadings(source: string): { id: string; label: string }[] {
  return [...source.matchAll(/^##\s+(.+)$/gm)].map((m) => {
    const label = m[1].replace(/[*_`]/g, "").trim();
    return { id: slugify(label), label };
  });
}
