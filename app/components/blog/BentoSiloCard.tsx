// app/components/blog/BentoSiloCard.tsx
// Tuile bento XXL pour un silo — couleur plein bord, numéro 01/02/03/04, nom, count.
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSilo, siloTheme, type SiloSlug } from "@/lib/silos";

interface BentoSiloCardProps {
  silo: SiloSlug;
  /** Numéro affiché en watermark (ex: "01"). */
  index: number;
  /** Nombre d'articles publiés dans le silo. */
  count: number;
  /** Variante de taille — détermine col-span/row-span Tailwind. */
  size?: "lg" | "md" | "sm";
  className?: string;
}

export function BentoSiloCard({
  silo,
  index,
  count,
  size = "md",
  className,
}: BentoSiloCardProps) {
  const meta = getSilo(silo);
  const theme = siloTheme(silo);

  const sizeClasses = {
    lg: "min-h-[320px] md:min-h-[440px] p-7 md:p-9",
    md: "min-h-[180px] md:min-h-[200px] p-6 md:p-8",
    sm: "min-h-[160px] md:min-h-[180px] p-5 md:p-6",
  }[size];

  const titleClasses = {
    lg: "text-3xl md:text-5xl",
    md: "text-2xl md:text-[1.75rem]",
    sm: "text-xl md:text-2xl",
  }[size];

  const numberClasses = {
    lg: "text-[8rem] md:text-[12rem]",
    md: "text-[6rem] md:text-[7rem]",
    sm: "text-[5rem] md:text-[6rem]",
  }[size];

  return (
    <Link
      href={`/mag/${silo}`}
      className={cn(
        "group relative flex flex-col rounded-3xl bg-gradient-to-br text-white overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500",
        theme.gradient,
        sizeClasses,
        className,
      )}
    >
      {/* Watermark numéro */}
      <span
        aria-hidden
        className={cn(
          "absolute -bottom-8 -right-4 font-black leading-none text-white/10 select-none pointer-events-none",
          numberClasses,
        )}
      >
        {String(index).padStart(2, "0")}
      </span>

      {/* Halo lumineux */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/15 rounded-full blur-[60px] pointer-events-none" />

      {/* Contenu */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.15em] rounded-md bg-white/15 backdrop-blur-sm border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {String(index).padStart(2, "0")} · {meta.shortName}
          </span>
          <ArrowUpRight
            size={size === "lg" ? 24 : 18}
            className="text-white/70 group-hover:text-white group-hover:rotate-12 transition-all duration-300"
          />
        </div>

        <h3
          className={cn(
            "font-extrabold tracking-tight leading-[1.05] mb-3",
            titleClasses,
          )}
        >
          {meta.name}
        </h3>

        <p
          className={cn(
            "text-white/85 font-medium leading-relaxed",
            size === "lg" ? "text-base md:text-lg max-w-md" : "text-sm flex-1",
          )}
        >
          {size === "lg" ? meta.longDescription : meta.description}
        </p>

        {/* Bloc "Au programme" — uniquement sur la tuile XXL pour remplir la vitrine. */}
        {size === "lg" && meta.highlights.length > 0 && (
          <div className="mt-7 mb-2 flex-1 flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60 mb-3">
              Au programme
            </span>
            <ul className="space-y-2.5">
              {meta.highlights.map((topic) => (
                <li
                  key={topic}
                  className="flex items-start gap-2.5 text-sm font-semibold text-white/95 leading-snug"
                >
                  <span
                    aria-hidden
                    className="mt-1.5 shrink-0 w-3 h-px bg-white/60"
                  />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between gap-3 text-xs font-semibold">
          <span className="shrink-0 whitespace-nowrap px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm border border-white/20">
            {count > 0
              ? `${count} article${count > 1 ? "s" : ""}`
              : "Bientôt en ligne"}
          </span>
          {size !== "sm" && (
            <span className="text-white/70 hidden md:inline text-right truncate">
              {meta.audience}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
