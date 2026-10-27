import { getPost } from "@/lib/blog";
import type { EntreprisesContent } from "@/content/entreprises";
import Link from "../Link";
import SectionHead, { SECTION } from "./SectionHead";

/** « Pour aller plus loin » : maillage vers les articles du silo Entreprises. */
export default function FurtherReading({ c }: { c: EntreprisesContent["further"] }) {
  const posts = c.slugs
    .map((slug) => getPost("entreprises", slug))
    .filter((p): p is NonNullable<typeof p> => p !== null);
  if (posts.length === 0) return null;

  return (
    <section id="mag" aria-labelledby="mag-title" style={SECTION}>
      <SectionHead id="mag-title" label={c.label} title={c.title} />
      <div data-r="g" style={{ display: "grid", gridTemplateColumns: `repeat(${posts.length},minmax(0,1fr))`, gap: 16 }}>
        {posts.map((post, i) => (
          <Link key={post.slug} href={post.href} className={`lift-card rv-up${i ? ` rv-d${Math.min(i, 3)}` : ""}`} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <span style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>{post.title}</span>
            <span style={{ fontSize: 14, lineHeight: 1.5, color: "rgba(15,14,12,.6)", flex: 1 }}>{post.description}</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: "var(--color-blue)" }}>{c.read} →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
