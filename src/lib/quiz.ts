import { prisma } from "./prisma";
import { wishes } from "@/data/wishes";

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

/** Fallback portrait for a well-wisher who isn't in the wishes catalogue. */
const FALLBACK_WISHER_IMAGE = "/images/celebrant.jpg";

/**
 * Resolve a well-wisher's portrait (and slug, if any) from the wishes catalogue
 * by matching on name. Falls back to a default portrait for unknown wishers.
 */
function wisherPortrait(name: string): { image: string; slug?: string } {
  const match = wishes.find(
    (w) => w.name.toLowerCase() === name.trim().toLowerCase(),
  );
  return match ? { image: match.image, slug: match.slug } : { image: FALLBACK_WISHER_IMAGE };
}

/** A quiz as shown in the listing: one well-wisher and how many questions they wrote. */
export interface QuizSummary {
  /** The owning user's id — also the quiz route segment (`/quiz/[id]`). */
  id: string;
  name: string;
  image: string;
  slug?: string;
  questionCount: number;
}

/**
 * Every well-wisher who owns at least one question, with their question count
 * and portrait — the data behind the quiz listing page.
 */
export async function getQuizzesByWellWisher(): Promise<QuizSummary[]> {
  const users = await prisma.user.findMany({
    where: { questions: { some: {} } },
    select: {
      id: true,
      name: true,
      email: true,
      _count: { select: { questions: true } },
    },
    orderBy: { name: "asc" },
  });

  return users.map((u) => {
    const name = u.name ?? u.email;
    return {
      id: u.id,
      name,
      questionCount: u._count.questions,
      ...wisherPortrait(name),
    };
  });
}

/** A single well-wisher's quiz, with questions and options (answers omitted). */
export interface WellWisherQuiz {
  id: string;
  name: string;
  image: string;
  slug?: string;
  questions: {
    id: string;
    text: string;
    position: number;
    options: { id: string; label: string; text: string }[];
  }[];
}

/** Load one well-wisher's quiz by user id, or null if they have no quiz. */
export async function getQuizForWellWisher(
  userId: string,
): Promise<WellWisherQuiz | null> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      questions: {
        orderBy: { position: "asc" },
        select: {
          id: true,
          text: true,
          position: true,
          // `isCorrect` is intentionally not selected — the listing/preview
          // must not leak answers to the client.
          options: {
            orderBy: { label: "asc" },
            select: { id: true, label: true, text: true },
          },
        },
      },
    },
  });

  if (!user || user.questions.length === 0) return null;

  const name = user.name ?? user.email;
  return { id: user.id, name, ...wisherPortrait(name), questions: user.questions };
}
