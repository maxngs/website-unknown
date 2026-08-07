// app/components/home/PressStrip.tsx — Server Component
// Bande de preuve sociale « Vu dans » affichée sous les CTA du hero.
// Version compacte : petit label + logos/pochettes médias cliquables.
//
// Pour ajouter une retombée : complétez le tableau PRESS.
//  • keepColor : true = visuel riche (pochette/photo), garde ses couleurs.
//  • href      : lien vers l'article/épisode ("#" = non-cliquable).

import Image from "next/image";

type PressItem = {
  name: string;
  logo: string;
  href: string;
  keepColor?: boolean;
};

const PRESS: PressItem[] = [
  {
    name: "40 Nuances de Next — Feuille Blanche",
    logo: "/press/cover-40n.jpg",
    href: "https://www.youtube.com/watch?v=zKQgt3woKDg",
    keepColor: true,
  },
  {
    name: "Twitch",
    logo: "/press/twitch_logo.png",
    href: "https://www.youtube.com/watch?v=OkLo5rx3a5U&t=1990s",
    keepColor: true,
  },
  {
    name: "Revue Fiduciaire",
    logo: "/press/logo_revue_fiduciaire.webp",
    href: "#",
    keepColor: true,
  },
];

export const PressStrip = () => (
  <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-center gap-4 sm:gap-6 justify-center lg:justify-start">
    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 whitespace-nowrap">
      Vu dans
    </span>

    <div className="flex items-center gap-6">
      {PRESS.map((item, i) => {
        const isLink = item.href && item.href !== "#";
        const Tag = isLink ? "a" : "div";
        return (
          <Tag
            key={`${item.name}-${i}`}
            {...(isLink
              ? {
                  href: item.href,
                  target: item.href.startsWith("http") ? "_blank" : undefined,
                  rel: item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined,
                }
              : {})}
            title={item.name}
            className={`group flex items-center transition-all ${
              isLink ? "hover:-translate-y-0.5" : ""
            }`}
          >
            {item.keepColor ? (
              <Image
                src={item.logo}
                alt={item.name}
                width={40}
                height={40}
                className="h-10 w-auto object-contain rounded-lg shadow-sm ring-1 ring-slate-100"
              />
            ) : (
              <Image
                src={item.logo}
                alt={item.name}
                width={90}
                height={40}
                className="max-h-8 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            )}
          </Tag>
        );
      })}
    </div>
  </div>
);

export default PressStrip;
