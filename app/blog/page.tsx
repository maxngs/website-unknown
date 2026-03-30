// app/blog/page.tsx — Server Component
import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { ArrowRight, Calendar, Sparkles, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Recrutement, IA & Soft Skills",
  description:
    "Découvrez nos articles sur le recrutement intelligent, les soft skills, l'insertion professionnelle et l'utilisation de l'IA dans les RH.",
  alternates: { canonical: "/blog" },
};

function estimateReadTime(content?: string): string {
  if (!content) return "3 min";
  const words = content.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min`;
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      <Navbar />

      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-15%] w-[40%] h-[40%] bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[-10%] w-[35%] h-[35%] bg-purple-300/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-36 md:pt-44 pb-24">
        {/* Hero Header */}
        <div className="mb-14 md:mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-indigo-100 text-indigo-600 text-xs font-bold mb-6 shadow-sm">
            <Sparkles size={14} />
            <span>Nos réflexions</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-5">
            Le blog{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Hiry
            </span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl">
            Recrutement, IA, soft skills et insertion professionnelle — nos
            réflexions pour repenser le monde du travail.
          </p>
        </div>

        {/* Articles */}
        {posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-[2rem] border border-slate-100">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Sparkles size={24} className="text-indigo-400" />
            </div>
            <p className="text-slate-500 font-semibold text-lg mb-2">
              Les articles arrivent bientôt
            </p>
            <p className="text-sm text-slate-400 font-medium">
              Restez connectés, du contenu passionnant est en préparation.
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block relative rounded-[1.75rem] overflow-hidden"
              >
                {/* Hover border gradient */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-indigo-400 via-purple-400 to-blue-400 rounded-[1.75rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-[0.5px]" />

                <div className="relative bg-white rounded-[1.75rem] p-7 md:p-9 border border-slate-100 group-hover:border-transparent transition-colors duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Left — number accent */}
                    <div className="hidden md:flex shrink-0 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl items-center justify-center shadow-lg shadow-indigo-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <span className="text-white font-extrabold text-lg">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-lg uppercase tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2.5 tracking-tight leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed mb-5 line-clamp-2 max-w-2xl">
                        {post.description}
                      </p>

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {new Date(post.date).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {estimateReadTime()}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden md:flex shrink-0 self-center w-10 h-10 bg-slate-50 group-hover:bg-indigo-50 rounded-xl items-center justify-center transition-all">
                      <ArrowRight
                        size={16}
                        className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
