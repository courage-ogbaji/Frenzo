"use client";

import { useState } from "react";

import { submitQuizAttempt } from "@/lib/actions";
import type { WellWisherQuiz } from "@/lib/quiz";

type Question = WellWisherQuiz["questions"][number];

export default function QuizRunner({
  userId,
  questions,
}: {
  userId: string;
  questions: Question[];
}) {
  // questionId -> selected optionId
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const answeredCount = questions.filter((q) => answers[q.id]).length;
  const allAnswered = answeredCount === questions.length;

  const score = questions.filter(
    (q) => q.options.find((o) => o.id === answers[q.id])?.isCorrect,
  ).length;

  function select(questionId: string, optionId: string) {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  }

  async function handleSubmit() {
    if (!allAnswered || pending) return;
    setPending(true);
    try {
      // Record the play so it counts toward the scoreboard. Grading is redone
      // server-side; we ignore the return here since the on-screen tally matches.
      await submitQuizAttempt(userId, answers);
    } catch {
      // Recording is best-effort — still show the player their results.
    } finally {
      setPending(false);
      setSubmitted(true);
    }
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div>
      <ol className="space-y-8">
        {questions.map((question) => (
          <li
            key={question.id}
            className="rounded-2xl border border-accent/30 bg-surface p-6 shadow-lg"
          >
            <h2 className="mb-4 font-heading text-lg font-bold text-heading">
              {question.position}. {question.text}
            </h2>
            <ul className="space-y-3">
              {question.options.map((option) => {
                const selected = answers[question.id] === option.id;
                const showCorrect = submitted && option.isCorrect;
                const showWrong = submitted && selected && !option.isCorrect;

                const base =
                  "flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition";
                const state = showCorrect
                  ? "border-emerald-500 bg-emerald-500/10 text-foreground"
                  : showWrong
                    ? "border-red-500 bg-red-500/10 text-foreground"
                    : selected
                      ? "border-accent bg-accent/10 text-foreground"
                      : "border-accent/20 text-foreground/90 hover:border-accent/60";

                return (
                  <li key={option.id}>
                    <button
                      type="button"
                      onClick={() => select(question.id, option.id)}
                      disabled={submitted}
                      aria-pressed={selected}
                      className={`${base} ${state} ${submitted ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <span className="font-semibold uppercase text-accent">
                        {option.label}
                      </span>
                      <span className="flex-1">{option.text}</span>
                      {showCorrect && (
                        <CheckIcon className="h-5 w-5 shrink-0 text-emerald-500" />
                      )}
                      {showWrong && (
                        <XIcon className="h-5 w-5 shrink-0 text-red-500" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ol>

      <div className="mt-10 text-center">
        {!submitted ? (
          <>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allAnswered || pending}
              className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              {pending ? "Submitting…" : "Submit"}
            </button>
            {!allAnswered && (
              <p className="mt-3 text-sm text-foreground/60">
                Answered {answeredCount} of {questions.length} — answer them all
                to submit.
              </p>
            )}
          </>
        ) : (
          <div className="rounded-2xl border border-accent/30 bg-surface p-8 shadow-lg">
            <p className="font-heading text-2xl font-bold text-heading">
              You scored {score} / {questions.length}
            </p>
            <p className="mt-2 text-foreground/70">
              {score === questions.length
                ? "Perfect score — you really know them! 🎉"
                : "Correct answers are ticked above."}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-6 inline-block rounded-full border border-accent px-8 py-3 font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"
            >
              Try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
