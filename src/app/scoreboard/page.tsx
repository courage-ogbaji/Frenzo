import Link from "next/link";

export default function Gallery() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black-800 text-orange">
            <div className="mt-16 text-center">
                <Link
                    href="/"
                    className="inline-block rounded-full bg-accent px-8 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-90"
                >
                    &larr; Back home
                </Link>
            </div>
        </div>
    )
}