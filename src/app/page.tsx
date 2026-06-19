import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen w-full md:items-stretch overflow-y-auto md:overflow-hidden bg-background pt-30 text-foreground">
      {/* Celebrant banner — top on mobile, left on desktop */}
      <div className="w-full md:w-1/2 h-72 md:h-auto p-4 md:p-8 m-1 md:m-8">
        <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-accent/60 bg-surface shadow-2xl shadow-accent/30">
          <Image
            src="/images/cele.png"
            alt="The celebrant"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Birthday wish — below image on mobile, right half on desktop */}
      <div className="flex w-full md:w-1/2 flex-col items-center justify-center gap-3 overflow-visible md:overflow-y-auto p-6 md:p-1 text-center">
        <h1 className="font-heading text-3xl md:text-[3.5rem] font-bold leading-tight text-heading">
          Happy Birthday Arcane Smile!
        </h1>
        <p className="text-xl italic text-foreground/80">
          this is our heart written in code!
        </p>

        <article className="max-w-md space-y-1 text-lg leading-relaxed text-foreground/90">
          <p>
            Do you remember how we met? That unavoidable exchange of
            pleasantries, each of us half-hoping it would be the end of it?
          </p>

          <p>
            It is true that{" "}
            <span className="italic text-heading">
              &ldquo;the wind bloweth where it listeth&hellip; and no one can
              tell whence it cometh, and whither it goeth&rdquo;
            </span>{" "}
            &mdash; yet we believe love decides the direction of the wind, for
            it carried you right to us. We are more than persuaded that when the
            crucibles of our destinies were framed, they were textured with the
            hope of being complemented by your large heart and blazing
            countenance.
          </p>

          <p>
            Because of how you shine, you leave us darkness-starved. In how you
            pour out your heart, you leave us awe-struck. In how you smile, you
            leave us joy-bound. And because of how you live, you leave us
            love-filled.
          </p>

          <p>
            We dance to the rhythm of your soul&apos;s music, and we sing along
            all day long.
          </p>

          <p className="text-xl font-semibold text-accent">
            Love you, our friend and brother!
          </p>
        </article>
      </div>
    </div>
  );
}
