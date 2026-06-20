import Image from "next/image";

import type { ScoreboardEntry } from "@/lib/quiz";

export default function ScoreboardChart({
  entries,
}: {
  entries: ScoreboardEntry[];
}) {
  return (
    <div className="space-y-6">
      {entries.map((entry, index) => {
        const played = entry.attempts > 0;
        const isTop = index === 0 && played;

        return (
          <div key={entry.id} className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-accent/40">
              <Image
                src={entry.image}
                alt={entry.name}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="truncate font-heading font-bold text-heading">
                  {isTop && <span aria-label="best known">👑 </span>}
                  {entry.name}
                </span>
                <span className="shrink-0 text-sm font-semibold text-foreground/80">
                  {played ? `${entry.averagePercent}%` : "—"}
                </span>
              </div>

              {/* Bar track */}
              <div className="h-3 w-full overflow-hidden rounded-full bg-accent/10">
                <div
                  className={`h-full rounded-full transition-all ${
                    isTop ? "bg-emerald-500" : "bg-accent"
                  }`}
                  style={{ width: `${played ? entry.averagePercent : 0}%` }}
                />
              </div>

              <p className="mt-1 text-xs text-foreground/50">
                {played
                  ? `${entry.attempts} ${entry.attempts === 1 ? "play" : "plays"} · ${entry.questionCount} questions`
                  : `No plays yet · ${entry.questionCount} questions`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
