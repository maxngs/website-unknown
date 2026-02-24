"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, MessageSquare } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

export const FinalCTA = () => {
  const { open } = useLeadModal();

  return (
    <section className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 rounded-[2rem] md:rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-400/20 rounded-full blur-[100px]" />

          {/* Floating elements */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 left-10 md:top-16 md:left-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center hidden md:flex"
          >
            <Sparkles size={28} className="text-white/60" />
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 md:bottom-16 md:right-16 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl items-center justify-center hidden md:flex"
          >
            <Zap size={28} className="text-white/60" />
          </motion.div>

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Prêt à recruter
                <br />
                <span className="text-indigo-200">avec intelligence ?</span>
              </h2>
              <p className="text-indigo-100 font-medium text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Rejoignez les milliers de talents, entreprises et écoles qui ont déjà transformé leur approche du recrutement.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={open}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-xl shadow-indigo-900/20 hover:shadow-2xl hover:-translate-y-0.5 transition-all"
                >
                  Commencer gratuitement
                  <ArrowRight size={20} />
                </button>
                <button
                  onClick={open}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all"
                >
                  <MessageSquare size={18} />
                  Demander une démo
                </button>
              </div>

              <p className="text-indigo-200/60 text-sm font-medium mt-6">
                Gratuit pour les candidats · Sans engagement · Résultats en 48h
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
