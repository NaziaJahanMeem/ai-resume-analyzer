import React from "react";

export default function ScoreBadge({ score }: { score: number }) {
  const isStrong = score > 70;
  const isGood = score > 49 && score <= 70;

  const bgClass = isStrong
    ? "bg-badge-green"
    : isGood
    ? "bg-badge-yellow"
    : "bg-badge-red";

  const textClass = isStrong
    ? "text-green-600"
    : isGood
    ? "text-yellow-600"
    : "text-red-600";

  const label = isStrong ? "Strong" : isGood ? "Good start" : "Needs work";

  return (
    <div
      className={`${bgClass} inline-flex items-center px-2 py-1 rounded-full`}
    >
      <p className={`${textClass} text-xs font-medium`}>{label}</p>
    </div>
  );
}
