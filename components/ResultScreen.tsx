"use client";

import { useState } from "react";
import { Question } from "@/data/questions";

type ResultScreenProps = {
  score: number;
  total: number;
  questions: Question[];
  answers: number[]; // selected index per question
  onRestart: () => void;
};

function getResultData(score: number, total: number) {
  const pct = (score / total) * 100;
  if (pct < 50) {
    return {
      emoji: "📚",
      title: "Continue d'apprendre !",
      message:
        "Tu as fait des efforts, mais le roman a encore beaucoup de secrets à te révéler. Relis quelques chapitres et retente le quiz !",
      color: "#ff6551",
      bg: "linear-gradient(135deg, #ffeaa7, #fdcb6e)",
    };
  }
  if (pct < 75) {
    return {
      emoji: "👍",
      title: "Beau résultat !",
      message:
        "Tu connais bien l'histoire de Grégoire ! Encore un peu de révision et tu pourras tout réussir.",
      color: "#2ec4b6",
      bg: "linear-gradient(135deg, #a8e6cf, #88d8c0)",
    };
  }
  return {
    emoji: "🏆",
    title: "Bravo, champion(ne) !",
    message:
      "Tu maîtrises parfaitement l'histoire de Grégoire et Grand-Léon ! Tu es un(e) vrai(e) expert(e) de ce roman.",
    color: "#ffc233",
    bg: "linear-gradient(135deg, #ffd700, #ffc233)",
  };
}

export default function ResultScreen({
  score,
  total,
  questions,
  answers,
  onRestart,
}: ResultScreenProps) {
  const [showCorrections, setShowCorrections] = useState(false);
  const result = getResultData(score, total);
  const pct = Math.round((score / total) * 100);

  return (
    <div className="animate-[fadeIn_0.5s_ease-out_forwards]">
      {/* Score card */}
      <div
        className="rounded-3xl p-6 md:p-8 text-center mb-6 relative overflow-hidden"
        style={{ background: result.bg }}
      >
        <div className="text-6xl mb-3 star-pop" style={{ animationDelay: "0.1s", opacity: 0 }}>
          {result.emoji}
        </div>
        <h2
          className="font-display font-extrabold text-2xl md:text-3xl mb-2"
          style={{ color: "#1a1a2e" }}
        >
          {result.title}
        </h2>
        <p className="font-body text-base text-gray-700 mb-5 leading-relaxed max-w-md mx-auto">
          {result.message}
        </p>

        {/* Big score */}
        <div
          className="inline-flex flex-col items-center bg-white rounded-2xl px-8 py-4 shadow-lg"
        >
          <span
            className="font-display font-extrabold text-5xl"
            style={{ color: result.color }}
          >
            {score} / {total}
          </span>
          <span className="font-body text-gray-500 text-sm font-semibold">
            {pct}% de bonnes réponses
          </span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button
          onClick={onRestart}
          className="flex-1 py-4 rounded-2xl font-display font-bold text-lg text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #ff6551, #e54d39)",
            boxShadow: "0 6px 20px rgba(255, 101, 81, 0.35)",
          }}
        >
          🔄 Recommencer
        </button>
        <button
          onClick={() => setShowCorrections(!showCorrections)}
          className="flex-1 py-4 rounded-2xl font-display font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 border-2"
          style={{
            background: showCorrections ? "#1a1a2e" : "white",
            color: showCorrections ? "white" : "#1a1a2e",
            borderColor: "#1a1a2e",
          }}
        >
          {showCorrections ? "▲ Masquer" : "📋 Voir le corrigé"}
        </button>
      </div>

      {/* Corrections list */}
      {showCorrections && (
        <div className="animate-[slideUp_0.3s_ease-out_forwards] space-y-3">
          <h3
            className="font-display font-bold text-lg mb-4"
            style={{ color: "#1a1a2e" }}
          >
            Corrigé complet
          </h3>
          {questions.map((q, i) => {
            const userAnswer = answers[i];
            const correct = userAnswer === q.correctIndex;
            return (
              <div
                key={q.id}
                className="rounded-2xl p-4 border-2"
                style={{
                  background: correct ? "#f0fff4" : "#fff5f5",
                  borderColor: correct ? "#28a745" : "#dc3545",
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">
                    {correct ? "✅" : "❌"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-body font-bold text-sm mb-1"
                      style={{ color: "#1a1a2e" }}
                    >
                      {i + 1}. {q.question}
                    </p>
                    {!correct && (
                      <p className="font-body text-xs text-red-600 mb-1">
                        Ta réponse : {q.choices[userAnswer] ?? "Pas de réponse"}
                      </p>
                    )}
                    <p
                      className="font-body font-semibold text-xs"
                      style={{ color: correct ? "#155724" : "#155724" }}
                    >
                      ✓ {q.choices[q.correctIndex]}
                    </p>
                    <p className="font-body text-xs text-gray-500 mt-1">
                      {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
