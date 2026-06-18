import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-400">
      <h1 className="text-5xl font-bold mb-4">Happy Birthday Arcane Smile!</h1>
      <p className="max-w-2xl mb-6">this is our heart written in code!</p>

      <Link
        href="/gallery"
        className="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400"
      >
        See more
      </Link>

    </div>
  );
}
