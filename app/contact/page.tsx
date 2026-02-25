// app/contact/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import {
  Send, Mail, Linkedin, MapPin,
  CheckCircle2, AlertCircle, Loader2, ChevronLeft,
} from "lucide-react";
import Link from "next/link";

type FormState = "idle" | "loading" | "success" | "error";

const subjects = [
  "Je suis un candidat / étudiant",
  "Je représente une entreprise",
  "Je représente une école",
  "Partenariat / Presse",
  "Autre",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.subject || !form.message) return;

    setState("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: "",
          profile: `[Contact] ${form.subject}`,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Erreur serveur");
      setState("success");
    } catch {
      setState("error");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-24 pb-16 lg:pt-28 lg:pb-20 min-h-[calc(100vh-80px)]">
        {/* Back link */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-indigo-600 transition-colors font-medium mb-4"
          >
            <ChevronLeft size={14} />
            Retour
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* Left — Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-2"
          >
            {state === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl border border-emerald-100 p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 size={28} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-2">Message envoyé !</h3>
                <p className="text-sm text-slate-500 font-medium mb-6 max-w-xs">
                  Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-sm font-medium"
                >
                  <ChevronLeft size={14} />
                  Retour à l&apos;accueil
                </Link>
              </motion.div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 md:p-8">
                {/* Title inside card */}
                <div className="mb-6">
                  <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                    Contactez-nous
                  </h1>
                  <p className="text-sm text-slate-500 font-medium">
                    Une question, une démo ou un partenariat ? On vous répond sous 24h.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold text-slate-600 mb-1">
                        Prénom <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={form.firstName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
                        placeholder="Jean"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold text-slate-600 mb-1">
                        Nom <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={form.lastName}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
                        placeholder="Dupont"
                      />
                    </div>
                  </div>

                  {/* Email + Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-slate-600 mb-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
                        placeholder="jean@exemple.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-600 mb-1">
                        Objet <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all appearance-none"
                      >
                        <option value="" disabled>Choisissez un objet</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-slate-600 mb-1">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 font-medium placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all resize-none"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  {/* Error */}
                  {state === "error" && (
                    <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                      <AlertCircle size={14} />
                      Une erreur est survenue. Veuillez réessayer.
                    </div>
                  )}

                  {/* Submit row */}
                  <div className="flex items-center justify-between gap-4 pt-1">
                    <button
                      type="submit"
                      disabled={state === "loading"}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-xl shadow-md shadow-indigo-200/50 hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {state === "loading" ? (
                        <>
                          <Loader2 size={14} className="animate-spin" />
                          Envoi...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Envoyer
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 font-medium text-right">
                      En soumettant, vous acceptez notre{" "}
                      <Link href="/politique-confidentialite" className="text-indigo-500 hover:underline">
                        politique de confidentialité
                      </Link>.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </motion.div>

          {/* Right — Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="lg:col-span-1 space-y-4"
          >
            {/* Email */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-indigo-50 rounded-xl flex items-center justify-center">
                  <Mail size={16} className="text-indigo-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Email</h3>
              </div>
              <a
                href="mailto:contact@hiry.fr"
                className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
              >
                contact@hiry.fr
              </a>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center">
                  <MapPin size={16} className="text-emerald-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Localisation</h3>
              </div>
              <p className="text-sm text-slate-500 font-medium">Paris, France</p>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 bg-purple-50 rounded-xl flex items-center justify-center">
                  <Linkedin size={16} className="text-purple-600" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Réseaux</h3>
              </div>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/company/hiry-recrutement" className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-slate-100 transition-all">
                  LinkedIn
                </a>
                <a href="https://www.instagram.com/hiry.fr/" className="px-3 py-1.5 text-xs font-bold text-slate-600 bg-slate-50 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg border border-slate-100 transition-all">
                  Instagram
                </a>
              </div>
            </div>

            {/* Response time */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100 p-5">
              <p className="text-sm font-bold text-slate-900 mb-1">⚡ Temps de réponse</p>
              <p className="text-xs text-slate-500 font-medium">
                Notre équipe vous répond généralement sous 24 heures ouvrées.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
