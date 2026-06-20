import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import QuizRunner from "@/Components/QuizRunner";
import { getQuizForWellWisher } from "@/lib/quiz";

export default async function WellWisherQuiz({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quiz = await getQuizForWellWisher(id);

  if (!quiz) notFound();

  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-foreground">
      <div className="mx-auto max-w-3xl">
        <header className="mb-12 flex flex-col items-center text-center">
          <div className="relative mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-accent/60 shadow-lg shadow-accent/30">
            <Image
              src={quiz.image}
              alt={quiz.name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <h1 className="font-heading text-[32px] font-bold text-heading">
            {quiz.name}&rsquo;s Quiz
          </h1>
          <p className="mt-3 text-foreground/70">
            {quiz.questions.length}{" "}
            {quiz.questions.length === 1 ? "question" : "questions"} to test how
            well you know Betty.
          </p>
        </header>

        <QuizRunner userId={quiz.id} questions={quiz.questions} />

        <div className="mt-16 text-center">
          <Link
            href="/quiz"
            className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
          >
            &larr; All quizzes
          </Link>
        </div>
      </div>
    </main>
  );
}
