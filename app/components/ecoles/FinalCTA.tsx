"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, CheckCircle2, Sparkles, Zap } from "lucide-react";

const FinalCTA = () => (
  <section className="relative z-10 py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800"
      >
        {/* Decorative blurs */}
        <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-teal-400/20 rounded-full blur-[60px]" />

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

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20"
            >
              <GraduationCap size={24} className="text-white" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
              Faites de l&apos;insertion votre meilleur argument.
            </h2>
            <p className="text-base md:text-lg text-emerald-200 font-medium max-w-md">
              Rejoignez les écoles qui pilotent l&apos;employabilité de leurs promotions avec l&apos;IA.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-5">
            <div className="space-y-3">
              {[
                "Mise en place en moins d'une semaine",
                "Accompagnement personnalisé par notre équipe",
                "Données d'insertion exploitables immédiatement",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={18} className="text-emerald-300 shrink-0" />
                  <span className="text-sm font-medium text-emerald-100">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#"
                className="group flex-1 px-8 py-4 text-sm font-bold text-emerald-700 bg-white hover:bg-emerald-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                Planifier une démo <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
