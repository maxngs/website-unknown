"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Gift } from "lucide-react";

const features = [
  "Créez votre profil et définissez l'ADN de votre entreprise.",
  "Publiez votre offre en - de 3 min (assisté par Hiron, notre IA).",
  "Accédez à tous les profils compatibles et leur score de compatibilité.",
  "Manifestez votre intérêt pour les meilleurs talents.",
  "Contactez-les directement via la messagerie intégrée.",
];

const PricingSection = () => (
  <section className="relative z-10 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold mb-5 shadow-sm">
          <Gift size={14} />
          <span>Offre de lancement</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 leading-[1.1]">
          Commencez{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">gratuitement</span>.
          <br />
          Sans engagement.
        </h2>
      </motion.div>

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto"
      >
        <div className="group relative rounded-[2.5rem] overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-indigo-400 rounded-[2.5rem] opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-transparent overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-indigo-100/40 rounded-full blur-3xl -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100/30 rounded-full blur-3xl -ml-16 -mb-16" />

            <div className="relative z-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                Plan &quot;Accès Total&quot;
              </p>

              <div className="mb-1">
                <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  OFFERT
                </span>
              </div>
              <p className="text-sm text-slate-400 font-medium mb-8">
                Jusqu&apos;au 31 décembre 2025
              </p>

              <div className="space-y-4 mb-8">
                {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={12} className="text-indigo-600" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <a
                  href="#"
                  className="group/btn w-full flex items-center justify-center gap-2 py-4 px-8 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Je publie mon offre
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
