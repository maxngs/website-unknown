// app/components/blog/BentoStatCard.tsx
// Petit "sticker" stat — chiffre XXL + label + source optionnelle.
import { cn } from "@/lib/utils";
import { siloTheme, type SiloSlug } from "@/lib/silos";

interface BentoStatCardProps {
  /** Chiffre principal affiché en gros (ex: "8 740€", "43%", "+300"). */
  value: string;
  /** Description courte (1 phrase). */
  label: string;
  /** Source affichée en mini en bas (optionnelle). */
  source?: string;
  /** Si fourni, la carte prend la couleur du silo (filled). Sinon : neutre. */
  silo?: SiloSlug;
  /** Layout : "square" pour 1x1, "wide" pour 2x1. */
  layout?: "square" | "wide";
  className?: string;
}

export function BentoStatCard({
  value,
  label,
  source,
  silo,
  layout = "square",
  className,
}: BentoStatCardProps) {
  const theme = silo ? siloTheme(silo) : null;

  if (theme) {
    // Variant filled : fond couleur silo, texte blanc.
    return (
      <div
        className={cn(
          "relative flex flex-col justify-between rounded-3xl bg-gradient-to-br text-white overflow-hidden p-6 md:p-7",
          theme.gradient,
          layout === "square" ? "min-h-[180px]" : "min-h-[160px] md:min-h-[180px]",
          className,
        )}
      >
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-white/15 rounded-full blur-[50px] pointer-events-none" />
        <span className="relative text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
          Chiffre clé
        </span>
        <div className="relative">
          <p className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-2">
            {value}
          </p>
          <p className="text-sm font-semibold leading-snug text-white/90">
            {label}
          </p>
          {source && (
            <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-white/60">
              {source}
            </p>
          )}
        </div>
      </div>
    );
  }

  // Variant neutre : carte blanche, chiffre en noir, accent silo si fourni
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between rounded-3xl bg-white border border-slate-100 p-6 md:p-7",
        layout === "square" ? "min-h-[180px]" : "min-h-[160px] md:min-h-[180px]",
        className,
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">
        Chiffre clé
      </span>
      <div>
        <p className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-2">
          {value}
        </p>
        <p className="text-sm font-semibold text-slate-600 leading-snug">
          {label}
        </p>
        {source && (
          <p className="mt-3 text-[10px] font-medium uppercase tracking-wider text-slate-400">
            {source}
          </p>
        )}
      </div>
    </div>
  );
}
