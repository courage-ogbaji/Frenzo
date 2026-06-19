import type { QuizSummary } from "@/lib/quiz";
import QuizCard from "./QuizCard";

export default function QuizList({ quizzes }: { quizzes: QuizSummary[] }) {
  if (quizzes.length === 0) {
    return (
      <p className="text-center text-foreground/70">
        No quizzes yet — check back soon!
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
