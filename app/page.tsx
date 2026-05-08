"use client";

import Link from "next/link";
import { questions } from "@/data/questions";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ffc233, transparent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #2ec4b6, transparent)" }}
      />

      <div className="relative w-full max-w-2xl animate-[slideUp_0.6s_ease-out_forwards]">
        {/* Book decoration */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            {/* Book icon made with CSS */}
            <div className="w-28 h-36 bg-gradient-to-br from-coral-500 to-coral-600 rounded-lg shadow-2xl flex flex-col items-center justify-center relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #ff6551, #e54d39)" }}>
              {/* Spine */}
              <div className="absolute left-0 top-0 bottom-0 w-3 rounded-l-lg"
                style={{ background: "rgba(0,0,0,0.2)" }} />
              {/* Lines */}
              <div className="ml-2 flex flex-col gap-2 w-16">
                <div className="h-1.5 rounded-full bg-white opacity-80" />
                <div className="h-1.5 rounded-full bg-white opacity-60 w-10" />
                <div className="h-1.5 rounded-full bg-white opacity-40 w-12" />
              </div>
              {/* Weight icon */}
              <div className="mt-3 ml-2 text-white text-2xl font-display font-bold opacity-90">35</div>
              <div className="ml-2 text-white text-xs font-body opacity-70">kilos</div>
            </div>

            {/* Floating stars */}
            <div className="absolute -top-3 -right-3 text-2xl star-pop"
              style={{ animationDelay: "0.3s", opacity: 0 }}>⭐</div>
            <div className="absolute -bottom-2 -left-4 text-xl star-pop"
              style={{ animationDelay: "0.5s", opacity: 0 }}>✨</div>
          </div>
        </div>

        {/* Title card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center border-4 border-amber-200 relative">
          {/* Top stripe decoration */}
          <div className="absolute top-0 left-0 right-0 h-2 rounded-t-3xl"
            style={{ background: "linear-gradient(90deg, #ff6551, #ffc233, #2ec4b6)" }} />

          <p className="text-sm font-body font-bold uppercase tracking-widest mb-2"
            style={{ color: "#2ec4b6" }}>
            Quiz de lecture · CM2
          </p>

          <h1 className="font-display font-extrabold text-4xl md:text-5xl leading-tight mb-2"
            style={{ color: "#1a1a2e" }}>
            35 kilos d&apos;espoir
          </h1>

          <p className="font-body text-gray-500 text-lg mb-1">
            d&apos;<span className="font-bold" style={{ color: "#ff6551" }}>Anna Gavalda</span>
          </p>

          <div className="my-6 border-t-2 border-dashed border-amber-200" />

          <p className="font-body text-gray-600 text-base md:text-lg mb-2 leading-relaxed">
            Seras-tu capable de répondre à toutes les questions sur
            l&apos;histoire de Grégoire et de son Grand-Léon ?
          </p>

          <p className="font-display font-bold text-gray-400 text-sm mb-8">
            🎯 {questions.length} questions · Bonne chance !
          </p>

          {/* Sections preview */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Personnages", "École", "Grand-Léon", "Actions", "Titre & sens", "Fin du roman"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-body font-bold text-white"
                style={{ background: "linear-gradient(135deg, #ff6551, #ffc233)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="/quiz"
            className="inline-block w-full md:w-auto px-10 py-4 rounded-2xl font-display font-bold text-xl text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #ff6551, #e54d39)",
              boxShadow: "0 6px 20px rgba(255, 101, 81, 0.4)",
            }}
          >
            🚀 Commencer le quiz
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs font-body text-gray-400 mt-6">
          Pas de compte nécessaire · Réponds à ton rythme
        </p>
      </div>
    </main>
  );
}
