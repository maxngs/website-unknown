import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
      <body className={`${poppins.className} bg-white text-slate-900 antialiased min-h-screen`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
