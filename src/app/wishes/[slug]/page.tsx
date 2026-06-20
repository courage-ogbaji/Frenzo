import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { wishes, getWish } from "@/data/wishes";

// Pre-generate a static page for every wisher.
export function generateStaticParams() {
  return wishes.map((wish) => ({ slug: wish.slug }));
}

export default async function WishPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const wish = getWish(slug);

  if (!wish) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background px-6 pb-16 pt-32 text-foreground">
      <article className="mx-auto flex max-w-5xl flex-col gap-10 md:flex-row md:items-start">
        {/* Bigger picture of the wisher */}
        <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border-2 border-accent/60 bg-surface shadow-2xl shadow-accent/30 md:w-2/5">
          <Image
            src={wish.image}
            alt={wish.name}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>

        {/* The rest of their wish */}
        <div className="flex-1">
          <h1 className="font-heading text-4xl font-bold text-heading md:text-5xl">
            {wish.name}
          </h1>

          <div className="mt-6 space-y-5 text-lg leading-relaxed text-foreground/90">
            {wish.message.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <Link
            href="/#wishes"
            className="mt-10 inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
          >
            &larr; Back to wishes
          </Link>
        </div>
      </article>
    </main>
  );
}
