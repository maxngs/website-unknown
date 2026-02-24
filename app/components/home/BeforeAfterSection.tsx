"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

const BeforeAfterSection = () => {
  const { open } = useLeadModal();

  return (
    <section className="relative z-10 py-20 md:py-32 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-indigo-50/30 to-white pointer-events-none" />
      <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl -ml-48 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-purple-100/20 rounded-full blur-3xl -mr-40 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Row 1 — Logo left + Badge & Title right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-16">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight">hiry</span>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold shadow-sm">
                <Sparkles size={14} /><span>Notre manifeste</span>
              </div>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="text-3xl md:text-[2.65rem] lg:text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-900">
              Face à un{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">système obsolète</span>{" "}
              qui juge sur le{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">passé</span>
              , nous créons un{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">futur</span>
                <motion.span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-indigo-200/50 to-purple-200/50 rounded-full -z-10" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.6 }} style={{ originX: 0 }} />
              </span>{" "}
              où le recrutement est enfin basé sur le{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">potentiel, l&apos;humain et l&apos;intelligence</span>.
            </motion.h2>
          </div>
        </div>

        {/* Row 2 — Empty left + Texts right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-10">
          <div className="lg:col-span-4" />
          {/* Two text columns */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
              className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              Le système actuel est en crise. Il échoue pour tout le monde. Les entreprises sont inondées de profils inadéquats et les candidats, jugés sur un CV qui ne reflète pas leur vrai potentiel, sont traités comme une ressource interchangeable. Ce paradoxe coûte des milliards et génère une frustration immense. Nous refusons ce statu quo. Hiry a été créé sur une conviction simple : le recrutement ne devrait pas être une sélection basée sur le passé, mais une rencontre basée sur le potentiel futur.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
              className="text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
              En remplaçant les mots-clés par une compréhension profonde des compétences, de la culture et des aspirations, nous créons des connexions authentiques qui permettent aux talents de s&apos;épanouir et aux entreprises de grandir.
            </motion.p>
          </div>
        </div>

        {/* Row 3 — Mission left + CTA right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight leading-none mb-3">1 Mission</h3>
              <p className="text-base text-slate-500 font-medium">Rendre le recrutement plus juste et humain</p>
            </motion.div>
          </div>
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}>
              <button
                onClick={open}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5 text-sm font-bold transition-all duration-300"
              >
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
