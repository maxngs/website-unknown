// app/components/blog/BentoArticleCard.tsx
// Carte article bento — sobre, blanc, accent silo en survol.
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSilo, siloTheme } from "@/lib/silos";
import type { BlogPostMeta } from "@/lib/blog";

interface BentoArticleCardProps {
  post: BlogPostMeta;
  /** "featured" → grande carte horizontale ; "default" → carte standard ; "compact" → mini. */
  variant?: "featured" | "default" | "compact";
  className?: string;
}

export function BentoArticleCard({
  post,
  variant = "default",
  className,
}: BentoArticleCardProps) {
  const theme = siloTheme(post.silo);
  const meta = getSilo(post.silo);
  const dateFr = new Date(post.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <Link
        href={post.href}
        className={cn(
          "group relative flex flex-col md:flex-row rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-500 overflow-hidden",
          className,
        )}
      >
        {/* Bloc visuel coloré côté gauche */}
        <div
          className={cn(
            "relative md:w-[42%] min-h-[180px] md:min-h-[320px] bg-gradient-to-br p-7 md:p-9 flex flex-col justify-between text-white overflow-hidden",
            theme.gradient,
          )}
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 bg-white/15 rounded-full blur-[60px] pointer-events-none" />
          <span className="relative inline-flex w-fit items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-white/15 backdrop-blur-sm border border-white/20">
            À lire · {meta.shortName}
          </span>
          <span className="relative text-[10px] font-semibold uppercase tracking-wider text-white/80">
            {post.readingTimeMin} min · {dateFr}
          </span>
        </div>

        {/* Contenu */}
        <div className="flex-1 p-7 md:p-10 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 group-hover:text-slate-700 transition-colors">
            {post.title}
          </h3>
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed line-clamp-3 mb-6 flex-1">
            {post.description}
          </p>
          <div className="flex items-center justify-between">
            <span
              className={cn(
                "text-sm font-bold inline-flex items-center gap-1.5",
                theme.text,
              )}
            >
              Lire l&apos;article
              <ArrowUpRight
                size={16}
                className="group-hover:rotate-12 group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        href={post.href}
        className={cn(
          "group flex flex-col gap-2 p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all min-h-[140px]",
          className,
        )}
      >
        <span
          className={cn(
            "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider",
            theme.text,
          )}
        >
          <span className={cn("w-1 h-1 rounded-full", theme.dot)} />
          {meta.shortName}
        </span>
        <h3 className="text-sm font-extrabold text-slate-900 tracking-tight leading-snug line-clamp-3 flex-1 group-hover:text-slate-700 transition-colors">
          {post.title}
        </h3>
        <span className="text-[10px] text-slate-400 font-medium">
          {post.readingTimeMin} min · {dateFr}
        </span>
      </Link>
    );
  }

  // default
  return (
    <Link
      href={post.href}
      className={cn(
        "group relative flex flex-col p-6 md:p-7 rounded-3xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 min-h-[260px]",
        className,
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={cn(
            "inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md border",
            theme.text,
            theme.bgSoft,
            theme.border,
          )}
        >
          <span className={cn("w-1 h-1 rounded-full", theme.dot)} />
          {meta.shortName}
        </span>
        <ArrowUpRight
          size={16}
          className="text-slate-300 group-hover:text-slate-700 group-hover:rotate-12 transition-all"
        />
      </div>

      <h3 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2 group-hover:text-slate-700 transition-colors">
        {post.title}
      </h3>
      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2 mb-5 flex-1">
        {post.description}
      </p>

      <div className="mt-auto flex items-center gap-3 text-[11px] text-slate-400 font-medium">
        <span>{dateFr}</span>
        <span className="w-1 h-1 rounded-full bg-slate-300" />
        <span className="flex items-center gap-1">
          <Clock size={11} />
          {post.readingTimeMin} min
        </span>
      </div>
    </Link>
  );
}
