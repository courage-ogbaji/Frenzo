import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex items-center justify-center p-4 bg-linear-to-r from-black to-yellow-600 text-yellow-400">
            <div className="flex justify-between w-[70%] text-2xl font-semibold">
                <Link href="/">Home</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/quiz">Quiz</Link>
            </div>
        </nav>
    )
}