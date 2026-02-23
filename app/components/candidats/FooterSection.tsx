"use client";

import { Zap, Mail, Linkedin, Twitter } from "lucide-react";

const FooterSection = () => {
  const footerLinks = {
    Plateforme: [
      { label: "Candidats", href: "/candidats" },
      { label: "Entreprises", href: "/entreprises" },
      { label: "Écoles", href: "/ecoles" },
      { label: "Tarifs", href: "/tarifs" },
    ],
    Ressources: [
      { label: "Blog", href: "/blog" },
      { label: "Guide du recrutement IA", href: "/guide" },
      { label: "FAQ", href: "/faq" },
      { label: "API Documentation", href: "/docs" },
    ],
    Entreprise: [
      { label: "À propos", href: "/about" },
      { label: "Carrières", href: "/carrieres" },
      { label: "Contact", href: "/contact" },
      { label: "Presse", href: "/presse" },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200/50"><Zap size={18} className="text-white" /></div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900">Hiry<span className="text-indigo-600">.</span></span>
            </a>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mb-6">L&apos;intelligence artificielle au service d&apos;un recrutement plus juste, plus rapide et plus humain.</p>
            <div className="flex items-center gap-3">
              {[Mail, Linkedin, Twitter].map((Icon, i) => (<a key={i} href="#" className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 flex items-center justify-center text-slate-400 transition-all"><Icon size={16} /></a>))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">{title}</h4>
              <ul className="space-y-2.5">{items.map((item) => (<li key={item.label}><a href={item.href} className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors">{item.label}</a></li>))}</ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-slate-100 text-center"><p className="text-xs text-slate-400 font-medium">&copy; 2025 Hiry. Tous droits réservés.</p></div>
      </div>
    </footer>
  );
};


export default FooterSection;
