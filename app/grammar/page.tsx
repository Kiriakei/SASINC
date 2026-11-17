"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { grammarTopics } from "../data";

type GrammarFilter = "All lessons" | "Tenses" | "Foundations";

export default function GrammarPage() {
  const [grammarFilter, setGrammarFilter] = useState<GrammarFilter>("All lessons");
  const [copiedTopic, setCopiedTopic] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);

  const filteredTopics = grammarTopics.filter((topic) => {
    return grammarFilter === "All lessons" || topic.category === grammarFilter;
  });

  async function copyExample(topicId: string, sentence: string) {
    setCopyError(null);
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard access is not available in this browser.");
      }
      await navigator.clipboard.writeText(sentence);
      setCopiedTopic(topicId);
      window.setTimeout(() => setCopiedTopic(null), 1800);
    } catch {
      setCopiedTopic(null);
      setCopyError(topicId);
      window.setTimeout(() => setCopyError(null), 2800);
    }
  }

  return (
    <div className="min-h-screen bg-rose-50/80 text-rose-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-10">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-widest text-rose-700">
            <span className="grid size-6 place-items-center rounded-md bg-rose-100 text-rose-800">01</span>
            THE ENCHANTMENT &amp; CRAFTING GUIDE
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-rose-800">Grammar, made simple.</h1>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Clear patterns and real examples to help you build a strong foundation.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl border border-rose-200 bg-white shadow-sm">
          <div className="border-b border-rose-200 p-4">
            <div className="flex flex-wrap gap-1" role="group" aria-label="Filter lessons">
              {(["All lessons", "Tenses", "Foundations"] as const).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  aria-pressed={grammarFilter === filter}
                  className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                    grammarFilter === filter
                      ? "bg-pink-100 text-pink-900 ring-1 ring-pink-200"
                      : "text-rose-700 hover:bg-rose-100"
                  }`}
                  onClick={() => setGrammarFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-rose-200 bg-rose-50 px-4 py-3 text-[10px] text-rose-700">
            <span className="font-extrabold tracking-widest text-rose-700">READ THE COLORS</span>
            <span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-sm bg-rose-500" />Subject</span>
            <span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-sm bg-pink-500" />Verb</span>
            <span className="inline-flex items-center gap-1.5"><i className="size-2 rounded-sm bg-pink-600" />Object / detail</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-rose-50 text-[9px] font-extrabold tracking-wider text-rose-700">
                <tr>
                  <th className="px-4 py-3" scope="col">LESSON</th>
                  <th className="px-4 py-3" scope="col">FORMULA / PATTERN</th>
                  <th className="px-4 py-3" scope="col">EXAMPLE SENTENCE</th>
                  <th className="px-4 py-3" scope="col">WHEN TO USE</th>
                  <th className="px-4 py-3" scope="col">PRO TIP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100 text-xs text-rose-700">
                {filteredTopics.map((topic, index) => (
                  <tr className="transition hover:bg-rose-50" key={topic.id}>
                    <td className="min-w-40 px-4 py-4">
                      <span className="mr-2 inline-grid size-6 place-items-center rounded-md border border-rose-200 bg-rose-50 text-[10px] font-bold text-rose-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <strong className="text-rose-800">{topic.title}</strong>
                      <span className="mt-1 block pl-8 text-[10px] text-rose-700">{topic.category}</span>
                    </td>
                    <td className="min-w-44 px-4 py-4">
                      <code className="inline-block max-w-44 rounded-md border border-rose-200 bg-rose-50 px-2 py-1 font-sans text-[10px] leading-5 text-rose-700">
                        {topic.formula}
                      </code>
                    </td>
                    <td className="min-w-60 px-4 py-4">
                      <div className="relative flex items-center gap-2">
                        <span className="whitespace-nowrap font-semibold text-rose-700">
                          <span className="text-rose-700">{topic.subject}</span>{" "}
                          <span className="text-pink-700">{topic.verb}</span>{" "}
                          <span className="text-pink-700">{topic.object}</span>
                        </span>
                        <button
                          className="rounded-md border border-rose-200 bg-rose-50 px-2 py-1 text-[10px] font-bold text-rose-700 transition hover:border-pink-300 hover:bg-pink-50 hover:text-pink-800"
                          type="button"
                          onClick={() => copyExample(topic.id, `${topic.subject} ${topic.verb} ${topic.object}`)}
                          aria-label={`Copy example: ${topic.subject} ${topic.verb} ${topic.object}`}
                        >
                          {copiedTopic === topic.id ? "Copied!" : "Copy"}
                        </button>
                        {copyError === topic.id && (
                          <span
                            className="absolute left-0 top-full z-10 mt-1 rounded border border-rose-200 bg-rose-50 px-2 py-1 text-[10px] text-rose-800"
                            role="status"
                          >
                            Copy unavailable
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="min-w-48 px-4 py-4 leading-5">{topic.explanation}</td>
                    <td className="min-w-36 px-4 py-4 text-rose-900">✦ {topic.tip}</td>
                  </tr>
                ))}
                {filteredTopics.length === 0 && (
                  <tr>
                    <td className="p-8 text-center text-rose-700" colSpan={5}>
                      No lessons found. Try another word or filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap items-center gap-2 border-t border-rose-200 bg-rose-50 px-4 py-3 text-[10px] text-rose-700">
            <span className="grid size-5 place-items-center rounded-full bg-rose-100 font-serif italic text-rose-800" aria-hidden="true">
              i
            </span>
            <span>Read the pattern, say the example aloud, then make it your own.</span>
            <span className="ml-auto hidden font-extrabold tracking-wider text-rose-700 sm:inline">
              YOU’VE GOT THIS
            </span>
          </div>
        </div>
      </main>
    </div>
  );
}
