"use client";

import { useState, useCallback } from "react";
import { Question } from "@/data/questions";

type QuizCardProps = {
  question: Question;
  questionNumber: number;
  onNext: (wasCorrect: boolean) => void;
};

const LETTERS = ["A", "B", "C", "D"];

const encouragements = [
  "Excellent ! 🌟",
  "Bravo, super ! 🎉",
  "Parfait ! 🏆",
  "Tu es fort(e) ! 💪",
  "Génial ! ⭐",
];

export default function QuizCard({ question, questionNumber, onNext }: QuizCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleChoice = useCallback(
    (idx: number) => {
      if (answered) return;
      setSelected(idx);
      setAnswered(true);
    },
    [answered]
  );

  const isCorrect = selected === question.correctIndex;
  const encouragement =
    encouragements[questionNumber % encouragements.length];

  const getButtonStyle = (idx: number) => {
    if (!answered) {
      return {
        background: "white",
        border: "2.5px solid #e5e0d0",
        color: "#1a1a2e",
      };
    }
    if (idx === question.correctIndex) {
      return {
        background: "linear-gradient(135deg, #d4edda, #c3e6cb)",
        border: "2.5px solid #28a745",
        color: "#155724",
      };
    }
    if (idx === selected && !isCorrect) {
      return {
        background: "linear-gradient(135deg, #f8d7da, #f5c6cb)",
        border: "2.5px solid #dc3545",
        color: "#721c24",
      };
    }
    return {
      background: "#f7f5f0",
      border: "2.5px solid #e5e0d0",
      color: "#9a9080",
      opacity: 0.6,
    };
  };

  return (
    <div className="question-enter">
      {/* Section badge */}
      <div className="flex items-center gap-2 mb-4">
        <span
          className="px-3 py-1 rounded-full text-xs font-body font-bold text-white"
          style={{ background: "linear-gradient(135deg, #2ec4b6, #1aab9e)" }}
        >
          {question.section}
        </span>
      </div>

      {/* Question */}
      <h2
        className="font-display font-bold text-xl md:text-2xl mb-6 leading-snug"
        style={{ color: "#1a1a2e" }}
      >
        {question.question}
      </h2>

      {/* Choices */}
      <div className="flex flex-col gap-3 mb-6">
        {question.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleChoice(idx)}
            disabled={answered}
            className="choice-btn w-full text-left px-5 py-4 rounded-2xl font-body font-semibold text-base flex items-center gap-4 shadow-sm"
            style={getButtonStyle(idx)}
            aria-label={`Choix ${LETTERS[idx]}: ${choice}`}
          >
            {/* Letter badge */}
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-sm"
              style={{
                background:
                  answered && idx === question.correctIndex
                    ? "#28a745"
                    : answered && idx === selected && !isCorrect
                    ? "#dc3545"
                    : answered
                    ? "#d1c9b0"
                    : "linear-gradient(135deg, #ff6551, #ffc233)",
                color: "white",
              }}
            >
              {LETTERS[idx]}
            </span>
            <span className="flex-1">{choice}</span>

            {/* Icons */}
            {answered && idx === question.correctIndex && (
              <span className="text-lg flex-shrink-0">✅</span>
            )}
            {answered && idx === selected && !isCorrect && (
              <span className="text-lg flex-shrink-0">❌</span>
            )}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className="rounded-2xl p-4 mb-6 animate-[bounceIn_0.4s_cubic-bezier(0.68,-0.55,0.265,1.55)_forwards]"
          style={{
            background: isCorrect
              ? "linear-gradient(135deg, #d4edda, #c3e6cb)"
              : "linear-gradient(135deg, #fff3cd, #ffeeba)",
            border: isCorrect ? "2px solid #28a745" : "2px solid #ffc107",
          }}
        >
          <p
            className="font-display font-bold text-base mb-1"
            style={{ color: isCorrect ? "#155724" : "#856404" }}
          >
            {isCorrect ? encouragement : `💡 La bonne réponse est : ${question.choices[question.correctIndex]}`}
          </p>
          <p
            className="font-body text-sm"
            style={{ color: isCorrect ? "#1e7e34" : "#533f03" }}
          >
            {question.explanation}
          </p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={() => onNext(isCorrect)}
          className="w-full py-4 rounded-2xl font-display font-bold text-lg text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 animate-[slideUp_0.3s_ease-out_forwards]"
          style={{
            background: "linear-gradient(135deg, #ff6551, #e54d39)",
            boxShadow: "0 6px 20px rgba(255, 101, 81, 0.35)",
          }}
        >
          Question suivante →
        </button>
      )}
    </div>
  );
}
