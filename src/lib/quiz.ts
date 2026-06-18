import { prisma } from "./prisma";

/** The only labels a question's options may use. */
export const OPTION_LABELS = ["a", "b", "c"] as const;
export type OptionLabel = (typeof OPTION_LABELS)[number];

/** Max questions a single user may own. */
export const MAX_QUESTIONS_PER_USER = 20;

export interface OptionInput {
  label: OptionLabel;
  text: string;
}

export interface QuestionInput {
  text: string;
  /** Exactly 3 options, one per label a/b/c. */
  options: [OptionInput, OptionInput, OptionInput];
  /** Which label is the correct answer. */
  correct: OptionLabel;
}

/**
 * Validate the "exactly 3 options labelled a, b, c, one correct" invariant.
 * Throws on the first violation. SQLite can't express this, so every write path
 * must call this before touching the DB.
 */
export function assertValidQuestion(input: QuestionInput): void {
  const labels = input.options.map((o) => o.label);

  if (labels.length !== OPTION_LABELS.length) {
    throw new Error(`A question must have exactly ${OPTION_LABELS.length} options.`);
  }
  for (const label of OPTION_LABELS) {
    if (!labels.includes(label)) {
      throw new Error(`Missing option "${label}". Options must be labelled a, b, c.`);
    }
  }
  if (new Set(labels).size !== labels.length) {
    throw new Error("Duplicate option labels are not allowed.");
  }
  if (!OPTION_LABELS.includes(input.correct)) {
    throw new Error(`Correct answer must be one of: ${OPTION_LABELS.join(", ")}.`);
  }
  for (const o of input.options) {
    if (!o.text.trim()) throw new Error(`Option "${o.label}" must have text.`);
  }
  if (!input.text.trim()) throw new Error("Question text is required.");
}

/**
 * Create a question with its 3 options atomically, enforcing both the
 * exactly-3-options invariant and the 20-questions-per-user cap.
 */
export async function createQuestion(userId: string, input: QuestionInput) {
  assertValidQuestion(input);

  return prisma.$transaction(async (tx) => {
    const count = await tx.question.count({ where: { userId } });
    if (count >= MAX_QUESTIONS_PER_USER) {
      throw new Error(`A user may have at most ${MAX_QUESTIONS_PER_USER} questions.`);
    }

    return tx.question.create({
      data: {
        text: input.text,
        position: count + 1,
        userId,
        options: {
          create: input.options.map((o) => ({
            label: o.label,
            text: o.text,
            isCorrect: o.label === input.correct,
          })),
        },
      },
      include: { options: true },
    });
  });
}
