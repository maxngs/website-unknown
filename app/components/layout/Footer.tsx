"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Instagram } from "lucide-react";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const footerLinks = {
  Plateforme: [
    { label: "Candidats", href: "/candidats" },
    { label: "Entreprises", href: "/entreprises" },
    { label: "Écoles", href: "/ecoles" },
    { label: "Tarifs", href: "/tarifs" },
  ],
  Ressources: [
    { label: "Blog", href: "/blog" },
    //* { label: "Guide du recrutement IA", href: "/guide" },
    { label: "FAQ", href: "/faq" },
    //* { label: "API Documentation", href: "/docs" },
  ],
  Entreprise: [
    //* { label: "À propos", href: "/about" },
    //* { label: "Carrières", href: "/carrieres" },
    { label: "Contact", href: "/contact" },
    { label: "Presse", href: "/presse" },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-8">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <Image
                src="/logo-hiry-black.svg"
                alt="Hiry"
                width={58}
                height={31}
                className="h-7 w-auto"
              />
            </Link>
            <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-xs mb-6">
              L&apos;intelligence artificielle au service d&apos;un recrutement plus juste, plus rapide et plus humain.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "#" },
                { icon: TikTokIcon, href: "#" },
                { icon: Mail, href: "mailto:contact@hiry.ai" },
              ].map(({ icon: Icon, href }, i) => (
                <a key={i} href={href} className="w-10 h-10 bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-500 rounded-xl flex items-center justify-center transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-500 hover:text-indigo-600 font-medium transition-colors">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400 font-medium">© {new Date().getFullYear()} Hiry. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">Politique de confidentialité</Link>
            <Link href="/terms" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">CGU</Link>
            <Link href="/legal" className="text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
