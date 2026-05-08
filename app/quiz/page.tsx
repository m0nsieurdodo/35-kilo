"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import { questions as allQuestions } from "@/data/questions";
import ProgressBar from "@/components/ProgressBar";
import QuizCard from "@/components/QuizCard";
import ResultScreen from "@/components/ResultScreen";
import { Question } from "@/data/questions";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [key, setKey] = useState(0); // force re-mount of QuizCard on question change

  // Initialize with shuffled questions
  useEffect(() => {
    setQuestions(shuffle(allQuestions));
  }, []);

  const handleNext = useCallback(
    (wasCorrect: boolean) => {
      const newAnswers = [...answers];
      // We get wasCorrect from QuizCard, but we also need the actual selected index.
      // For ResultScreen we need the selected index per question.
      // Since QuizCard owns selectedIdx, we'll pass it up via a modified handler.
      // For now ResultScreen receives answers[] with selectedIdx.
      setScore((s) => (wasCorrect ? s + 1 : s));

      if (currentIndex + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrentIndex((i) => i + 1);
        setKey((k) => k + 1);
      }
    },
    [currentIndex, questions.length, answers]
  );

  const handleNextWithAnswer = useCallback(
    (wasCorrect: boolean, selectedIdx: number) => {
      setAnswers((prev) => {
        const next = [...prev];
        next[currentIndex] = selectedIdx;
        return next;
      });
      setScore((s) => (wasCorrect ? s + 1 : s));

      if (currentIndex + 1 >= questions.length) {
        setFinished(true);
      } else {
        setCurrentIndex((i) => i + 1);
        setKey((k) => k + 1);
      }
    },
    [currentIndex, questions.length]
  );

  const handleRestart = useCallback(() => {
    setQuestions(shuffle(allQuestions));
    setCurrentIndex(0);
    setScore(0);
    setAnswers([]);
    setFinished(false);
    setKey((k) => k + 1);
  }, []);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-4xl animate-spin">🎡</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-2xl mb-6 flex items-center gap-3">
        <Link
          href="/"
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-white border-2 border-amber-200 flex items-center justify-center text-xl hover:scale-105 transition-transform shadow-sm"
          title="Retour à l'accueil"
        >
          ←
        </Link>
        <div className="flex-1">
          <p className="font-display font-bold text-xs uppercase tracking-widest mb-1"
            style={{ color: "#2ec4b6" }}>
            35 kilos d&apos;espoir
          </p>
          {!finished && (
            <ProgressBar
              current={currentIndex + 1}
              total={questions.length}
              score={score}
            />
          )}
        </div>
      </div>

      {/* Main card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border-4 border-amber-100 p-6 md:p-8 relative overflow-hidden">
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl"
          style={{ background: "linear-gradient(90deg, #ff6551, #ffc233, #2ec4b6)" }}
        />

        {finished ? (
          <ResultScreen
            score={score}
            total={questions.length}
            questions={questions}
            answers={answers}
            onRestart={handleRestart}
          />
        ) : (
          <QuizCardWrapper
            key={key}
            question={questions[currentIndex]}
            questionNumber={currentIndex}
            onNext={handleNextWithAnswer}
          />
        )}
      </div>

      {/* Fun footer */}
      {!finished && (
        <p className="text-center text-xs font-body text-gray-400 mt-6">
          Prends le temps de réfléchir avant de répondre 💭
        </p>
      )}
    </main>
  );
}

// Wrapper to pass selected index up to parent
function QuizCardWrapper({
  question,
  questionNumber,
  onNext,
}: {
  question: Question;
  questionNumber: number;
  onNext: (wasCorrect: boolean, selectedIdx: number) => void;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const LETTERS = ["A", "B", "C", "D"];

  const handleChoice = (idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
  };

  const isCorrect = selected === question.correctIndex;

  const encouragements = [
    "Excellent ! 🌟",
    "Bravo, super ! 🎉",
    "Parfait ! 🏆",
    "Tu es fort(e) ! 💪",
    "Génial ! ⭐",
  ];
  const encouragement = encouragements[questionNumber % encouragements.length];

  const getButtonStyle = (idx: number): React.CSSProperties => {
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

  const getBadgeStyle = (idx: number): React.CSSProperties => {
    if (answered && idx === question.correctIndex)
      return { background: "#28a745", color: "white" };
    if (answered && idx === selected && !isCorrect)
      return { background: "#dc3545", color: "white" };
    if (answered)
      return { background: "#d1c9b0", color: "white" };
    return {
      background: "linear-gradient(135deg, #ff6551, #ffc233)",
      color: "white",
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
          >
            <span
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-display font-extrabold text-sm"
              style={getBadgeStyle(idx)}
            >
              {LETTERS[idx]}
            </span>
            <span className="flex-1">{choice}</span>
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
            {isCorrect
              ? encouragement
              : `💡 La bonne réponse est : ${question.choices[question.correctIndex]}`}
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
          onClick={() => onNext(isCorrect, selected!)}
          className="w-full py-4 rounded-2xl font-display font-bold text-lg text-white shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200 animate-[slideUp_0.3s_ease-out_forwards]"
          style={{
            background: "linear-gradient(135deg, #ff6551, #e54d39)",
            boxShadow: "0 6px 20px rgba(255, 101, 81, 0.35)",
          }}
        >
          {questionNumber + 1 >= 20 ? "Voir mes résultats 🎯" : "Question suivante →"}
        </button>
      )}
    </div>
  );
}
