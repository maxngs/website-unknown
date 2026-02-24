"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

const BeforeAfterSection = () => (
  <section className="relative z-10 py-20 md:py-28 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white pointer-events-none" />

    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
      {/* Row 1 — Big number + intro */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-xs font-bold mb-5">
              <GraduationCap size={14} />
              <span>Notre vision</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tight leading-none">
              87%
            </h2>
            <p className="text-base text-slate-500 font-medium mt-2">
              Le taux d&apos;insertion moyen des écoles partenaires Hiry, contre 68% en moyenne nationale.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-7 space-y-5">
          <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            L&apos;insertion professionnelle ne devrait pas être une <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">variable d&apos;ajustement.</span>
          </motion.h3>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
            Chaque étudiant que vous formez mérite d&apos;être accompagné jusqu&apos;à son premier emploi. Le problème n&apos;est pas le manque de talent ni le manque d&apos;offres — c&apos;est l&apos;absence d&apos;un pont intelligent entre les deux.
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
            En combinant l&apos;IA et une compréhension fine des soft skills, Hiry crée ce pont et vous donne les outils pour garantir que chaque promotion atteigne son plein potentiel.
          </motion.p>
        </div>
      </div>

      {/* Row 2 — Mission + CTA */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
        <div className="lg:col-span-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">1 Mission</h3>
            <p className="text-base text-slate-500 font-medium">Rendre chaque formation rentable en insertion</p>
          </motion.div>
        </div>
        <div className="lg:col-span-8">
          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
            <a href="#" className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-700 text-white rounded-xl shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:-translate-y-0.5 text-sm font-bold transition-all duration-300">
              Demander une démo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default BeforeAfterSection;
