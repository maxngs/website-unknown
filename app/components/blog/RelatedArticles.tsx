// app/components/blog/RelatedArticles.tsx
// Bloc "Sur le même sujet" — affiche 2-3 articles du MÊME silo (jamais inter-silo).
import type { BlogPostMeta } from "@/lib/blog";
import { BentoArticleCard } from "./BentoArticleCard";

interface RelatedArticlesProps {
  posts: BlogPostMeta[];
  title?: string;
}

export function RelatedArticles({
  posts,
  title = "Sur le même sujet",
}: RelatedArticlesProps) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-16">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {posts.map((post) => (
          <BentoArticleCard key={post.slug} post={post} variant="compact" />
        ))}
      </div>
    </section>
  );
}
