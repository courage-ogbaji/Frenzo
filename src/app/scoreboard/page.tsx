import Link from "next/link";

import ScoreboardChart from "@/Components/ScoreboardChart";
import { getScoreboard } from "@/lib/quiz";

// Always reflect the latest quiz plays.
export const dynamic = "force-dynamic";

export default async function Scoreboard() {
  const entries = await getScoreboard();
  const totalPlays = entries.reduce((sum, e) => sum + e.attempts, 0);
  const best = entries.find((e) => e.attempts > 0) ?? null;

  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-foreground">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-[32px] font-bold text-heading">
            Scoreboard
          </h1>
          <p className="mt-3 text-foreground/70">
            Average quiz scores per well-wisher — who does everyone know best?
          </p>
        </header>

        {totalPlays === 0 ? (
          <div className="rounded-2xl border border-accent/30 bg-surface p-10 text-center shadow-lg">
            <p className="text-foreground/70">
              No quizzes have been played yet. Be the first!
            </p>
            <Link
              href="/quiz"
              className="mt-6 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
            >
              Take a quiz
            </Link>
          </div>
        ) : (
          <>
            {best && (
              <div className="mb-10 rounded-2xl border border-emerald-500/40 bg-emerald-500/5 p-6 text-center shadow-lg">
                <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                  👑 Known best
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-heading">
                  {best.name}
                </p>
                <p className="mt-1 text-foreground/70">
                  {best.averagePercent}% average over {best.attempts}{" "}
                  {best.attempts === 1 ? "play" : "plays"}
                </p>
              </div>
            )}

            <div className="rounded-2xl border border-accent/30 bg-surface p-6 shadow-lg">
              <ScoreboardChart entries={entries} />
            </div>
          </>
        )}

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
          >
            &larr; Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
