// app/components/entreprises/FinalCTA.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useLeadModal } from "../shared/Providers";

const FinalCTA = () => {
  const { open } = useLeadModal();

  return (
    <section className="relative z-10 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700"
        >
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-[60px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 p-10 md:p-16 lg:p-20 items-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/20"
              >
                <Zap size={24} className="text-white" />
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">
                La bonne rencontre change tout.
              </h2>
              <p className="text-base md:text-lg text-indigo-200 font-medium max-w-md">
                Rejoignez les entreprises qui recrutent autrement. Trouvez les talents qui partagent votre vision.
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                {[
                  "Recrutez pour votre culture",
                  "Découvrez ce qu'un CV ne dit pas",
                  "Support dédié pour votre onboarding",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 size={18} className="text-indigo-300 shrink-0" />
                    <span className="text-sm font-medium text-indigo-100">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={open}
                  className="group flex-1 px-8 py-4 text-sm font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                >
                  Je publie mon offre <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contact"
                  className="px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
