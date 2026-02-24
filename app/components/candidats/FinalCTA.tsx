"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { useLeadModal } from "../shared/Providers";

const FinalCTA = () => {
  const { open } = useLeadModal();

  return (
  <section className="relative z-10 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 p-10 md:p-16 lg:p-20 text-center">
      <div className="absolute top-0 left-1/4 w-60 h-60 bg-white/10 rounded-full blur-[80px]" /><div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-400/20 rounded-full blur-[60px]" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/20"><Zap size={28} className="text-white" /></motion.div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-5 leading-[1.1]">La bonne rencontre change tout.</h2>
        <p className="text-base md:text-lg text-indigo-200 font-medium mb-10 max-w-lg mx-auto">Rejoins des milliers de talents qui ont trouvé leur mission.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={open} className="group w-full sm:w-auto px-8 py-4 text-sm font-bold text-indigo-700 bg-white hover:bg-indigo-50 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">Révéler mon potentiel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></button>
          <button onClick={open} className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10 rounded-xl transition-all flex items-center justify-center">En savoir plus</button>
        </div>
      </div>
    </motion.div>
  </div></section>
  );
};


export default FinalCTA;
