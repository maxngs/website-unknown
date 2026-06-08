// app/components/blog/SiloBadge.tsx
// Pastille colorée par silo (cards, en-têtes d'article, breadcrumb).
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getSilo, siloTheme, type SiloSlug } from "@/lib/silos";

interface SiloBadgeProps {
  silo: SiloSlug;
  /** Affiche le nom court ("Entreprises") plutôt que le nom complet. */
  short?: boolean;
  /** Si true, le badge devient un lien vers la page index du silo. */
  asLink?: boolean;
  className?: string;
}

export function SiloBadge({
  silo,
  short = true,
  asLink = false,
  className,
}: SiloBadgeProps) {
  const meta = getSilo(silo);
  const theme = siloTheme(silo);
  const label = short ? meta.shortName : meta.name;

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border",
        theme.text,
        theme.bgSoft,
        theme.border,
        className,
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", theme.dot)} />
      {label}
    </span>
  );

  if (!asLink) return content;

  return (
    <Link
      href={`/mag/${silo}`}
      className="inline-flex transition-transform hover:scale-[1.02]"
    >
      {content}
    </Link>
  );
}
