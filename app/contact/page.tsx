// app/contact/page.tsx — Server Component
import type { Metadata } from "next";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe Hiry. Une question sur la plateforme, une demande de démo ou un partenariat ? Nous vous répondons sous 24h.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen bg-[#fafafa]">
      <Navbar />
      <ContactForm />
      <Footer />
    </div>
  );
}
