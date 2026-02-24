"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Plus, Minus } from "lucide-react";

const faq = [
  {
    q: "Quel type d'établissement peut utiliser Hiry ?",
    a: "Universités, grandes écoles, écoles de commerce, écoles d'ingénieurs, CFA et organismes de formation. Toute structure qui forme des talents et souhaite piloter leur insertion professionnelle.",
  },
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "Moins d'une semaine. La création de l'espace école prend 10 minutes. L'invitation des étudiants se fait via un simple lien. Notre équipe vous accompagne pour le paramétrage initial.",
  },
  {
    q: "Comment les étudiants sont-ils matchés avec les entreprises ?",
    a: "Notre IA Hiron analyse le profil complet de chaque étudiant (compétences, soft skills, valeurs, aspirations) et le croise avec la culture et les besoins des entreprises partenaires. Le matching va bien au-delà du CV.",
  },
  {
    q: "Comment Hiry détecte les étudiants en difficulté ?",
    a: "L'IA analyse des signaux faibles : inactivité sur la plateforme, profil incomplet, absence de candidatures, refus successifs. Vous recevez des alertes proactives pour intervenir avant qu'il ne soit trop tard.",
  },
  {
    q: "Peut-on exporter les données pour nos accréditations ?",
    a: "Oui. Tous les KPIs d'insertion sont exportables en PDF et Excel : taux d'insertion, temps moyen de placement, répartition par secteur, etc. Parfait pour vos rapports AACSB, EQUIS ou CTI.",
  },
  {
    q: "Quel est le coût pour l'école ?",
    a: "Nous proposons un modèle adapté à la taille de votre établissement. Contactez-nous pour une offre personnalisée. Les étudiants accèdent à la plateforme gratuitement.",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left — Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-600 text-xs font-bold mb-5 shadow-sm">
              <MessageSquare size={14} />
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Vos questions ?{" "}
              <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Nos réponses.
              </span>
            </h2>
          </motion.div>

          {/* Right — Accordion */}
          <div className="lg:w-7/12 space-y-3">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 ${
                    openIdx === i
                      ? "bg-white border-emerald-200 shadow-lg shadow-emerald-100/30"
                      : "bg-white/60 border-slate-100 hover:border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-sm md:text-base font-bold text-slate-900">{item.q}</h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      openIdx === i ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-400"
                    }`}>
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
                        <p className="text-sm text-slate-500 font-medium leading-relaxed mt-4 pr-12">
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
