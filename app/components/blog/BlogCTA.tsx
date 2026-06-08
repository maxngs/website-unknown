// app/components/blog/BlogCTA.tsx
// Bloc CTA en fin d'article, adapté au silo (couleur + copy).
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getSilo, siloTheme, type SiloSlug } from "@/lib/silos";

interface BlogCTAProps {
  silo: SiloSlug;
  /** Override du libellé du CTA principal (sinon défaut du silo). */
  ctaLabel?: string;
  /** Override de la destination du CTA principal. */
  ctaHref?: string;
  /** Titre du bloc (sinon copy par défaut adapté au silo). */
  title?: string;
  /** Description (sinon copy par défaut). */
  description?: string;
}

const DEFAULT_COPY: Record<SiloSlug, { title: string; description: string }> = {
  entreprises: {
    title: "Recrutez le bon profil, dès le premier coup",
    description:
      "Hiry analyse les soft skills, la culture d'entreprise et le potentiel — vous recevez 5 profils qualifiés au lieu de 70 CV.",
  },
  candidats: {
    title: "Révèle ton potentiel et reçois des matchs en 48h",
    description:
      "Crée ton profil Hiry en 7 minutes : ton score Big Five + culture fit, et seules les offres qui te correspondent vraiment.",
  },
  ecoles: {
    title: "Pilotez l'insertion de vos promos avec la data",
    description:
      "Dashboard temps réel, données conformes France Compétences, matching IA pour vos étudiants — découvrez Hiry pour les écoles.",
  },
  etudes: {
    title: "Recevez nos prochaines études exclusives",
    description:
      "Baromètres soft skills, observatoires Gen Z, cartographies des métiers en tension — toutes nos données dans votre boîte mail.",
  },
};

export function BlogCTA({
  silo,
  ctaLabel,
  ctaHref,
  title,
  description,
}: BlogCTAProps) {
  const meta = getSilo(silo);
  const theme = siloTheme(silo);
  const copy = DEFAULT_COPY[silo];

  return (
    <aside
      className={cn(
        "relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br p-8 md:p-10 text-white",
        theme.gradient,
      )}
    >
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-2.5">
            {title ?? copy.title}
          </h3>
          <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed max-w-xl">
            {description ?? copy.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
          <a
            href={ctaHref ?? meta.cta.href}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5"
          >
            {ctaLabel ?? meta.cta.label}
            <ArrowRight size={16} />
          </a>
          <Link
            href={meta.landingHref}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white border border-white/30 hover:bg-white/10 hover:border-white/60 rounded-xl transition-all"
          >
            En savoir plus
          </Link>
        </div>
      </div>
    </aside>
  );
}
