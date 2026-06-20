"use server";

import { revalidatePath } from "next/cache";

import { prisma } from "./prisma";

/**
 * Grade a quiz play-through on the server (so the stored score can't be faked
 * from the client) and record it as a QuizAttempt.
 *
 * @param userId      the well-wisher whose quiz was played
 * @param selections  map of questionId -> selected optionId
 * @returns the graded score out of total
 */
export async function submitQuizAttempt(
  userId: string,
  selections: Record<string, string>,
): Promise<{ score: number; total: number }> {
  const questions = await prisma.question.findMany({
    where: { userId },
    select: {
      id: true,
      options: { select: { id: true, isCorrect: true } },
    },
  });

  const total = questions.length;
  if (total === 0) return { score: 0, total: 0 };

  let score = 0;
  for (const question of questions) {
    const selectedId = selections[question.id];
    if (
      selectedId &&
      question.options.find((o) => o.id === selectedId)?.isCorrect
    ) {
      score += 1;
    }
  }

  await prisma.quizAttempt.create({ data: { userId, score, total } });

  // Keep the scoreboard fresh now that there's a new attempt.
  revalidatePath("/scoreboard");

  return { score, total };
}
