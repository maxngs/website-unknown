"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const PainPointSection = () => (
  <section className="relative z-10 pt-20 pb-0 md:pt-28 md:pb-0"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-500 text-xs font-bold mb-6"><Shield size={14} /><span>Le recrutement ne devrait pas être une épreuve</span></div>
      <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">La fin du parcours{" "}<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">du combattant</span></h2>
      <p className="text-base md:text-lg text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">Nous remplaçons un processus brisé par une expérience simple, intelligente et humaine. Chaque fonctionnalité est pensée pour te redonner le contrôle.</p>
    </motion.div>
  </div></section>
);

export default PainPointSection;
