import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";

// Configuration de la police Poppins avec les graisses nécessaires
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Du léger au gras
  display: "swap", // Optimisation de l'affichage
});

export const metadata: Metadata = {
  title: "Hiry - Le recrutement propulsé par l'IA",
  description: "La plateforme qui connecte Étudiants, PME et Écoles grâce à l'Intelligence Artificielle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${poppins.className} bg-white text-slate-900 antialiased min-h-screen pt-16`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
