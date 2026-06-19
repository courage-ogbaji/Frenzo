import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-5 text-nav">
            <div className="flex w-[70%] items-center justify-between rounded-full bg-surface px-8 py-3 font-nav text-lg font-normal shadow-lg">
                <Link href="/" className="hover:text-white">Home</Link>
                <Link href="/gallery" className="hover:text-white">Gallery</Link>
                <Link href="/quiz" className="hover:text-white">Quiz</Link>
                <Link href="/scoreboard" className="hover:text-white">Scoreboard</Link>
            </div>
        </nav>
    )
}