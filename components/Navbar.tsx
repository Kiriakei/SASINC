"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/grammar", label: "Grammar Guide" },
  { href: "/interview", label: "Interview Practice" },
  { href: "/quiz", label: "Quick Quiz" },
];

export default function Navbar({ rightSlot }: { rightSlot?: ReactNode }) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-rose-200 bg-rose-50/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-8">
        <Link href="/" className="font-bold tracking-wide text-rose-800">
          SASINC
        </Link>

        <nav
          className="order-3 flex w-full items-center gap-1 overflow-x-auto rounded-xl bg-rose-200 p-1 lg:order-2 lg:w-auto"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-10 shrink-0 items-center justify-center gap-2 rounded-lg px-3 text-xs hover:text-base font-semibold transition-all sm:px-4 ${
                  isActive
                    ? "bg-white text-pink-800 shadow-sm"
                    : "text-rose-700 hover:bg-white/70 hover:text-pink-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {rightSlot}
      </div>
    </header>
  );
}
