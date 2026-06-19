"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type { Wish } from "@/data/wishes";

export default function WishCard({
  wish,
  reversed = false,
}: {
  wish: Wish;
  reversed?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback: if the browser lacks IntersectionObserver, just show the card.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      // Trigger a little before the card is fully in view.
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center gap-8 md:gap-12 ${
        reversed ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      {/* Picture — slides in from its own side */}
      <div
        className={`relative aspect-4/3 w-full overflow-hidden rounded-2xl border-2 border-accent/60 bg-surface shadow-2xl shadow-accent/30 transition-all duration-700 ease-out md:w-1/2 ${
          visible
            ? "translate-x-0 opacity-100"
            : `${reversed ? "translate-x-16" : "-translate-x-16"} opacity-0`
        }`}
      >
        <Image
          src={wish.image}
          alt={wish.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Wish — slides in from the opposite side */}
      <div
        className={`w-full text-center transition-all delay-150 duration-700 ease-out md:w-1/2 md:text-left ${
          visible
            ? "translate-x-0 opacity-100"
            : `${reversed ? "-translate-x-16" : "translate-x-16"} opacity-0`
        }`}
      >
        <h3 className="mb-4 font-heading text-2xl font-bold text-heading">
          {wish.name}
        </h3>
        <p className="mb-6 text-lg leading-relaxed text-foreground/80">
          {wish.excerpt}
        </p>
        <Link
          href={`/wishes/${wish.slug}`}
          className="inline-block font-semibold text-accent hover:underline"
        >
          See more &rarr;
        </Link>
      </div>
    </div>
  );
}
