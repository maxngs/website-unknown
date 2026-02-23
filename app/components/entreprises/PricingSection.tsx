"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Check, ArrowRight, Sparkles, Zap, Crown,
  Rocket, Building2, Gift, X, HelpCircle,
  CreditCard, CalendarRange, Shield,
} from "lucide-react";

/* ───────────────────────────────────────────────
   Types
   ─────────────────────────────────────────────── */
interface PackFeature {
  text: string;
  included: boolean;
}

/* ───────────────────────────────────────────────
   Data — Offer Packs
   ─────────────────────────────────────────────── */
const offerPacks = [
  {
    name: "Starter",
    icon: Zap,
    desc: "Pour un recrutement ponctuel",
    price: "49€",
    per: "/ offre",
    iconBg: "bg-slate-100 text-slate-600",
    cta: "Poster une offre",
    features: [
      { text: "1 offre publiée · 30 jours", included: true },
      { text: "Matching IA (10 profils)", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Support email", included: true },
      { text: "Rapport d'analyse détaillé", included: false },
      { text: "Profils en priorité", included: false },
    ],
  },
  {
    name: "Growth",
    icon: Rocket,
    desc: "Le meilleur rapport qualité-prix",
    price: "129€",
    per: "/ 3 offres",
    iconBg: "bg-indigo-50 text-indigo-600",
    popular: true,
    cta: "Choisir Growth",
    features: [
      { text: "3 offres publiées · 45 jours", included: true },
      { text: "Matching IA illimité", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Support prioritaire", included: true },
      { text: "Rapport d'analyse détaillé", included: true },
      { text: "Profils en priorité", included: false },
    ],
  },
  {
    name: "Enterprise",
    icon: Building2,
    desc: "Recrutement à grande échelle",
    price: "Sur mesure",
    per: "",
    iconBg: "bg-slate-100 text-slate-600",
    cta: "Nous contacter",
    features: [
      { text: "Offres illimitées", included: true },
      { text: "Matching IA illimité", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Account manager dédié", included: true },
      { text: "Rapport d'analyse détaillé", included: true },
      { text: "Profils en priorité", included: true },
    ],
  },
];

/* ───────────────────────────────────────────────
   Data — Subscription Plans
   ─────────────────────────────────────────────── */
const subPlans = [
  {
    name: "Essentiel",
    icon: Zap,
    desc: "Pour commencer à recruter autrement",
    monthlyPrice: 79,
    yearlyPrice: 59,
    offersIncluded: "2 offres / mois",
    iconBg: "bg-slate-100 text-slate-600",
    cta: "Démarrer l'essai",
    features: [
      { text: "2 offres actives simultanées", included: true },
      { text: "Matching IA (30 profils/mois)", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Tableau de bord analytics", included: true },
      { text: "Intégrations ATS", included: false },
      { text: "API & webhooks", included: false },
    ],
  },
  {
    name: "Business",
    icon: Crown,
    desc: "L'offre complète pour les PME ambitieuses",
    monthlyPrice: 199,
    yearlyPrice: 149,
    offersIncluded: "10 offres / mois",
    iconBg: "bg-indigo-50 text-indigo-600",
    popular: true,
    cta: "Choisir Business",
    features: [
      { text: "10 offres actives simultanées", included: true },
      { text: "Matching IA illimité", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Analytics avancé", included: true },
      { text: "Intégrations ATS", included: true },
      { text: "API & webhooks", included: false },
    ],
  },
  {
    name: "Scale",
    icon: Building2,
    desc: "Pour les grandes équipes RH",
    monthlyPrice: 399,
    yearlyPrice: 299,
    offersIncluded: "Illimité",
    iconBg: "bg-slate-100 text-slate-600",
    cta: "Nous contacter",
    features: [
      { text: "Offres illimitées", included: true },
      { text: "Matching IA illimité", included: true },
      { text: "Score compatibilité culture", included: true },
      { text: "Messagerie intégrée", included: true },
      { text: "Analytics + reporting custom", included: true },
      { text: "Intégrations ATS", included: true },
      { text: "API & webhooks", included: true },
    ],
  },
];

/* ───────────────────────────────────────────────
   Compact Pricing Card
   ─────────────────────────────────────────────── */
const PricingCard = ({
  name, icon: Icon, desc, priceDisplay, perDisplay,
  features, cta, popular, iconBg, badge, delay = 0,
}: {
  name: string;
  icon: React.ElementType;
  desc: string;
  priceDisplay: React.ReactNode;
  perDisplay: string;
  features: PackFeature[];
  cta: string;
  popular?: boolean;
  iconBg: string;
  badge?: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="relative h-full"
  >
    {popular && (
      <>
        <div className="absolute -inset-[1.5px] bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-[1.6rem] opacity-60 blur-[0.5px]" />
        <div className="absolute -inset-5 bg-gradient-to-br from-indigo-200/25 via-purple-200/15 to-transparent rounded-[2.5rem] blur-2xl pointer-events-none" />
      </>
    )}

    <div className={`relative h-full bg-white rounded-[1.5rem] ${
      popular
        ? "border-transparent shadow-2xl shadow-indigo-200/40"
        : "border border-slate-200 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:border-slate-300"
    } overflow-hidden flex flex-col transition-all duration-300`}>

      {/* Popular banner */}
      {popular && (
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-center py-1.5">
          <span className="text-[10px] font-bold text-white uppercase tracking-[0.15em] flex items-center justify-center gap-1.5">
            <Sparkles size={11} /> Le plus populaire
          </span>
        </div>
      )}

      <div className="px-6 py-5 lg:px-7 lg:py-6 flex flex-col flex-1">
        {/* Header — name + icon on one line */}
        <div className="flex items-center gap-3 mb-1.5">
          <div className={`w-9 h-9 ${iconBg} rounded-xl flex items-center justify-center shrink-0`}>
            <Icon size={17} />
          </div>
          <div className="flex items-center gap-2.5">
            <h3 className="text-lg font-extrabold text-slate-900">{name}</h3>
            {badge && (
              <span className="text-[9px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-1.5 py-0.5 rounded-md whitespace-nowrap">
                {badge}
              </span>
            )}
          </div>
        </div>
        <p className="text-[13px] text-slate-400 font-medium mb-4">{desc}</p>

        {/* Price */}
        <div className="mb-4 pb-4 border-b border-slate-100">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-[38px] font-extrabold leading-none tracking-tight ${
              popular
                ? "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                : "text-slate-900"
            }`}>
              {priceDisplay}
            </span>
            {perDisplay && (
              <span className="text-[14px] text-slate-400 font-medium">{perDisplay}</span>
            )}
          </div>
        </div>

        {/* Features — compact */}
        <div className="space-y-2 mb-6 flex-1">
          {features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2.5">
              {feat.included ? (
                <div className={`w-[18px] h-[18px] rounded-md flex items-center justify-center shrink-0 ${
                  popular
                    ? "bg-indigo-50 border border-indigo-100"
                    : "bg-emerald-50 border border-emerald-100"
                }`}>
                  <Check size={10} className={popular ? "text-indigo-600" : "text-emerald-600"} strokeWidth={3} />
                </div>
              ) : (
                <div className="w-[18px] h-[18px] rounded-md bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0">
                  <X size={9} className="text-slate-300" strokeWidth={3} />
                </div>
              )}
              <span className={`text-[13px] font-medium leading-tight ${
                feat.included ? "text-slate-600" : "text-slate-400"
              }`}>
                {feat.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#"
          className={`group w-full flex items-center justify-center gap-2 py-3 px-6 text-[14px] font-bold rounded-xl transition-all ${
            popular
              ? "text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-0.5"
              : "text-slate-700 bg-slate-50 border-2 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
          }`}
        >
          {cta}
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </motion.div>
);

/* ───────────────────────────────────────────────
   Pricing Section — Viewport-fit
   ─────────────────────────────────────────────── */
const PricingSection = () => {
  const [mode, setMode] = useState<"offers" | "subscription">("offers");
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-indigo-100/30 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Header — tight ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold shadow-sm mb-4">
            <Sparkles size={14} />
            <span>Tarifs transparents</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight text-slate-900 mb-3">
            Un plan pour chaque{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">besoin</span>
          </h2>
          <p className="text-sm md:text-[15px] text-slate-500 font-medium leading-relaxed">
            Payez à l&apos;offre ou abonnez-vous pour recruter en continu à prix réduit.
          </p>
        </motion.div>

        {/* ── Mode Switcher + Toggle — single row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="inline-flex items-center bg-slate-100 rounded-xl p-1">
            {[
              { key: "offers" as const, label: "À l'offre", icon: CreditCard },
              { key: "subscription" as const, label: "Abonnement", icon: CalendarRange },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setMode(tab.key)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-lg text-[13px] font-bold transition-all ${
                  mode === tab.key ? "text-slate-900" : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {mode === tab.key && (
                  <motion.div
                    layoutId="modeBg"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <tab.icon size={15} className="relative z-10" />
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Toggle inline */}
          <AnimatePresence>
            {mode === "subscription" && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-center gap-3 overflow-hidden"
              >
                <div className="w-px h-6 bg-slate-200 hidden sm:block" />
                <span className={`text-[13px] font-bold transition-colors ${!yearly ? "text-slate-900" : "text-slate-400"}`}>Mensuel</span>
                <button
                  onClick={() => setYearly(!yearly)}
                  className="relative w-12 h-6 rounded-full p-0.5 transition-colors duration-300 shrink-0"
                  style={{ backgroundColor: yearly ? "#6366f1" : "#e2e8f0" }}
                >
                  <motion.div
                    animate={{ x: yearly ? 24 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-5 h-5 bg-white rounded-full shadow-md"
                  />
                </button>
                <span className={`text-[13px] font-bold transition-colors ${yearly ? "text-slate-900" : "text-slate-400"}`}>Annuel</span>
                {yearly && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md whitespace-nowrap"
                  >
                    -25%
                  </motion.span>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Cards Grid ── */}
        <AnimatePresence mode="wait">
          {mode === "offers" ? (
            <motion.div
              key="offers"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1080px] mx-auto items-start"
            >
              {offerPacks.map((pack, i) => (
                <PricingCard
                  key={pack.name}
                  name={pack.name}
                  icon={pack.icon}
                  desc={pack.desc}
                  priceDisplay={pack.price}
                  perDisplay={pack.per}
                  features={pack.features}
                  cta={pack.cta}
                  popular={pack.popular}
                  iconBg={pack.iconBg}
                  delay={i * 0.08}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="subscription"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 max-w-[1080px] mx-auto items-start"
            >
              {subPlans.map((plan, i) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  icon={plan.icon}
                  desc={plan.desc}
                  priceDisplay={
                    <motion.span
                      key={yearly ? "y" : "m"}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}€
                    </motion.span>
                  }
                  perDisplay="/ mois"
                  features={plan.features}
                  cta={plan.cta}
                  popular={plan.popular}
                  iconBg={plan.iconBg}
                  badge={plan.offersIncluded}
                  delay={i * 0.08}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Reassurance — compact row ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { icon: Gift, text: "14 jours d'essai gratuit" },
            { icon: Shield, text: "Sans engagement" },
            { icon: HelpCircle, text: "Support humain sous 2h" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon size={15} className="text-slate-400" />
              <span className="text-[13px] text-slate-500 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
