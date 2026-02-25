// app/components/ecoles/BeforeAfterSection.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

const BeforeAfterSection = () => {
  const { open } = useLeadModal();

  return (
    <section className="relative z-10 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-emerald-50/30 to-white pointer-events-none" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl -ml-48 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-100/20 rounded-full blur-3xl -mr-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent tracking-tight">hiry</span>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-100 text-emerald-600 text-xs font-bold shadow-sm">
                <Sparkles size={14} /><span>Notre vision pour les écoles</span>
              </div>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-[2.65rem] lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900">
              L&apos;insertion professionnelle ne devrait pas être une{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">variable d&apos;ajustement</span>
              . Nous créons un{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">pont intelligent</span>
                <motion.span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 rounded-full -z-10" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} style={{ originX: 0 }} />
              </span>{" "}
              entre vos étudiants et le{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">monde professionnel</span>.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10">
          <div className="lg:col-span-4" />
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              Chaque étudiant que vous formez mérite d&apos;être accompagné jusqu&apos;à son premier emploi. Le problème n&apos;est pas le manque de talent ni le manque d&apos;offres — c&apos;est l&apos;absence d&apos;un outil qui connecte intelligemment les deux. Les Career Centers traditionnels sont des annuaires statiques que personne n&apos;utilise, et les données d&apos;insertion arrivent trop tard pour agir.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              En combinant l&apos;IA et une compréhension fine des profils et potentiels des étudiants, Hiry remplace la friction par le matching proactif. Vos étudiants n&apos;ont plus besoin de chercher : c&apos;est l&apos;offre qui vient à eux. Et vous, vous pilotez enfin l&apos;insertion avec des données réelles, en temps réel.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">1 Mission</h3>
              <p className="text-base text-slate-500 font-medium">Rendre chaque formation rentable en insertion</p>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              <button
                onClick={open}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:-translate-y-0.5 text-sm font-bold transition-all duration-300"
              >
                Découvrir la plateforme <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
