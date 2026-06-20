import Link from "next/link";
import Image from "next/image";

import { photos } from "@/data/gallery";

export default function Gallery() {
  return (
    <main className="min-h-screen bg-background px-6 pb-20 pt-32 text-foreground">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 text-center">
          <h1 className="font-heading text-[32px] font-bold text-heading">
            Gallery
          </h1>
          <p className="mt-3 text-foreground/70">
            A catalogue of moments — and the stories behind them.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo) => (
            <figure
              key={photo.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-accent/30 bg-surface shadow-lg transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-accent/30"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover"
                />
              </div>

              <figcaption className="flex flex-1 flex-col p-6">
                <h2 className="font-heading text-xl font-bold text-heading">
                  {photo.title}
                </h2>
                <p className="mt-1 mb-3 text-sm text-accent">
                  {photo.date} &middot; {photo.location}
                </p>
                <p className="text-foreground/80">{photo.story}</p>
              </figcaption>
            </figure>
          ))}
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
