import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

export default function Navbar() {
    return(
        <nav className="w-full h-16 bg-black px-32 flex flex-row justify-between items-center absolute ">
            <div className="text-white text-lg font-bold  flex flex-row items-center gap-4">
                <Image src="/vercel.svg" alt="" width={32} height={32} className="size-8" />
                <NavButton url="/">Home</NavButton>
                <NavButton url="/menu">Menu</NavButton>
            </div>
            <button className="text-white text-lg font-bold bg-violet-500 h-max p-2 rounded-xl">zakky</button>
        </nav>
    )
}

function NavButton({url, children}: {url: string; children: ReactNode}) {
    return(
        <Link href={url} className="text-lg hover:text-2xl transition-all">
            {children}
        </Link>
    )
}