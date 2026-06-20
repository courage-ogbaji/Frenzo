import Link from "next/link";

import QuizList from "@/Components/QuizList";
import { getQuizzesByWellWisher } from "@/lib/quiz";

export default async function Quiz() {
    const quizzes = await getQuizzesByWellWisher();

    return (
        <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-foreground">
            <div className="mx-auto max-w-6xl">
                <header className="mb-12 text-center">
                    <h1 className="font-heading text-[32px] font-bold text-heading">
                        Quiz
                    </h1>
                    <p className="mt-3 text-foreground/70">
                        How well do you know Betty? Pick a well-wisher and take their quiz.
                    </p>
                </header>

                <div className="mx-auto max-w-2xl">
                    <QuizList quizzes={quizzes} />
                </div>

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
