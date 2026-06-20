import Link from "next/link";
import Image from "next/image";

import type { QuizSummary } from "@/lib/quiz";

export default function QuizCard({ quiz }: { quiz: QuizSummary }) {
  return (
    <Link
      href={`/quiz/${quiz.id}`}
      className="group flex items-stretch overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-lg transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
    >
      <div className="relative aspect-4/3 w-32 shrink-0 overflow-hidden sm:w-44">
        <Image
          src={quiz.image}
          alt={quiz.name}
          fill
          sizes="(min-width: 640px) 176px, 128px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 items-center justify-between gap-4 p-6">
        <div>
          <h2 className="font-heading text-xl font-bold text-heading">
            {quiz.name}
          </h2>
          <p className="mt-1 text-sm text-accent">
            {quiz.questionCount}{" "}
            {quiz.questionCount === 1 ? "question" : "questions"}
          </p>
        </div>
        <span className="shrink-0 font-semibold text-accent group-hover:underline">
          Take the quiz &rarr;
        </span>
      </div>
    </Link>
  );
}
