"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Concrètement, c'est quoi Hiry ? Encore un job board ?",
    a: "Non, Hiry n'est pas un job board. C'est une plateforme de matching intelligent qui connecte les entreprises aux jeunes talents en analysant la compatibilité culturelle, les soft skills et le potentiel – bien au-delà d'un simple CV.",
  },
  {
    q: "En quoi Hiry est différent des autres plateformes ?",
    a: "Contrairement aux plateformes classiques qui trient par mots-clés, Hiry analyse l'ADN culturel de votre entreprise et le compare au profil complet des candidats. Vous recevez uniquement des profils véritablement alignés avec votre culture.",
  },
  {
    q: "Comment pouvez-vous vraiment évaluer ma \"culture\" d'entreprise ?",
    a: "Notre IA Hiron vous pose des questions simples et conversationnelles sur vos valeurs, votre style de management et l'ambiance de votre équipe. Pas de jargon RH : en 5 minutes, nous créons votre carte d'identité culturelle unique.",
  },
  {
    q: "Je suis une TPE de 8 personnes, est-ce fait pour moi ?",
    a: "Absolument ! Hiry est conçu spécifiquement pour les TPE/PME. Plus votre équipe est petite, plus chaque recrutement compte. Notre solution vous fait gagner un temps précieux et réduit drastiquement le risque d'erreur.",
  },
  {
    q: "Le CV n'est donc plus utile ?",
    a: "Le CV reste un document de référence, mais il ne raconte qu'une partie de l'histoire. Hiry va plus loin en analysant ce que le CV ne montre pas : la personnalité, les aspirations, les soft skills et la compatibilité culturelle.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left title */}
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-5 shadow-sm">
                <HelpCircle size={14} />
                <span>FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Vous avez des questions ?{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Nous avons les réponses.
                </span>
              </h2>
            </motion.div>
          </div>

          {/* Right accordion */}
          <div className="lg:col-span-8 space-y-3">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06 }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    openIdx === i
                      ? "bg-white border-indigo-200 shadow-lg shadow-indigo-100/30"
                      : "bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">{item.q}</h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        openIdx === i ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      {openIdx === i ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mt-4 pt-4 border-t border-slate-100">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
