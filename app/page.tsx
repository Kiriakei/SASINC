import Link from "next/link";
import Navbar from "../components/Navbar";

const featureCards = [
  {
    href: "/grammar",
    title: "Grammar Guide",
    description: "Build a solid base with clear patterns, examples, and quick tips.",
    icon: "▤",
  },
  {
    href: "/interview",
    title: "Interview Practice",
    description: "Try realistic questions and learn how to answer with confidence.",
    icon: "◈",
  },
  {
    href: "/quiz",
    title: "Quick Quiz",
    description: "Check what you know with short, friendly practice rounds.",
    icon: "✦",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50/80 text-rose-900">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-3xl border border-pink-200 bg-[url('/mc.webp')] bg-cover bg-center p-6 text-rose-950 shadow-xl sm:p-10 lg:p-14">
          <div className="absolute inset-0 bg-pink-100/75" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-rose-800">
              <span className="size-2 rounded-full bg-pink-500" />
              YOUR ENGLISH ADVENTURE STARTS HERE
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Build your English,
              <br />
              <span className="text-pink-700">one block at a time.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-rose-800">
              Learn everyday English and practice for your next big conversation. Pick a path and keep growing.
            </p>
            <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/grammar" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700">
                Start your quest <span aria-hidden="true">→</span>
              </Link>
              <span className="text-xs text-rose-800">
                <span className="mr-1 text-pink-600" aria-hidden="true">✦</span>
                Free to learn · Made for beginners
              </span>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {featureCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl border border-rose-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-xl text-pink-700">
                {card.icon}
              </div>
              <h2 className="text-xl font-bold text-rose-800">{card.title}</h2>
              <p className="mt-2 text-sm leading-6 text-rose-700">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-pink-800">
                Open page <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
