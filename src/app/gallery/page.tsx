import Link from "next/link";

export default function Gallery() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-yellow-400">
            <h1 className="text-4xl font-bold mb-8">Gallery</h1>

            <Link href="/" className="inline-block rounded-lg bg-yellow-500 px-6 py-3 font-semibold text-black hover:bg-yellow-400">Back</Link>
         </div>   
    )
}