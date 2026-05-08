"use client";

type ProgressBarProps = {
  current: number;   // 1-based current question number
  total: number;
  score: number;
};

export default function ProgressBar({ current, total, score }: ProgressBarProps) {
  const pct = ((current - 1) / total) * 100;

  return (
    <div className="w-full">
      {/* Stats row */}
      <div className="flex justify-between items-center mb-2">
        <span className="font-display font-bold text-sm" style={{ color: "#1a1a2e" }}>
          Question <span style={{ color: "#ff6551" }}>{current}</span> / {total}
        </span>
        <span className="font-display font-bold text-sm px-3 py-1 rounded-full text-white"
          style={{ background: "linear-gradient(135deg, #2ec4b6, #1aab9e)" }}>
          ✅ {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""}
        </span>
      </div>

      {/* Progress track */}
      <div className="h-4 bg-amber-100 rounded-full overflow-hidden border-2 border-amber-200 shadow-inner">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${pct}%`,
            background: "linear-gradient(90deg, #ffc233, #ff6551)",
            boxShadow: "0 2px 8px rgba(255, 194, 51, 0.5)",
          }}
        />
      </div>

      {/* Milestones */}
      <div className="flex justify-between mt-1 px-0.5">
        {[0, 25, 50, 75, 100].map((m) => (
          <div
            key={m}
            className="w-1 h-1 rounded-full"
            style={{ background: pct >= m ? "#ff6551" : "#d1c9b0" }}
          />
        ))}
      </div>
    </div>
  );
}
