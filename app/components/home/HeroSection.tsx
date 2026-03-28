// app/components/home/HeroSection.tsx — Server Component
// Le texte (h1, description, CTA) est rendu côté serveur = visible sans JS, indexable par les crawlers.
// Les animations (FadeIn) et le mockup (HeroAppPreview) sont des Client Components.

import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";
import { FadeIn } from "../shared/FadeIn";
import { HeroAppPreview } from "./HeroAppPreview";

export const HeroSection = () => {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 md:pt-48 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
      <div className="flex-1 text-center lg:text-left">
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>L&apos;IA au service de votre carrière</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Le recrutement <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">qui a du sens.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
            La <span className="font-bold">première plateforme</span> qui utilise l&apos;IA pour comprendre le profil et révéler le potentiel des talents pour simplifier, optimiser et améliorer la mise en relation avec les entreprises.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <Link href="/candidats" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg shadow-indigo-200 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
              Je suis candidat <ArrowRight size={18} />
            </Link>
            <Link href="/entreprises" className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-700 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-xl shadow-sm hover:shadow-md transition-all flex items-center justify-center">
              Je recrute
            </Link>
          </div>
        </FadeIn>
      </div>

      <HeroAppPreview />
    </div>
  );
};
