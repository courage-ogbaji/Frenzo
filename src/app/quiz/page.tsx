import Link from "next/link";

export default function Quiz() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
            <h1 className="font-heading text-[32px] font-bold mb-8 text-heading">Quiz</h1>

            <Link href="/" className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90">Back</Link>
        </div>
    )
}