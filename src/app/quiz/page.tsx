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

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                    {/* Left — fixed while the list on the right scrolls */}
                    <div className="md:sticky md:top-32 md:self-start">
                        <h2 className="font-heading text-3xl font-bold leading-snug text-heading">
                            Think you know your friends better?  
                            Put your friendship to the test with this fun quiz! Answer questions about their likes, 
                            memories, personality, and favorite things to see how well you truly know them. 
                            Challenge other friends, compare scores, and discover who deserves the title of the celebrant&apos;s
                            biggest fan. Good luck, and let the fun begin!

                        </h2>
                    </div>

                    {/* Right — scrollable horizontal rows */}
                    <div className="md:max-h-[70vh] md:overflow-y-auto md:pr-2">
                        <QuizList quizzes={quizzes} />
                    </div>
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
