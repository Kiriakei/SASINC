"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { quizQuestions } from "../data";

const buttonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:cursor-default disabled:opacity-60";

export default function QuizPage() {
  const [quizStart, setQuizStart] = useState(0);
  const [quizQuestionIndex, setQuizQuestionIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const quizSessionQuestions = Array.from({ length: 5 }, (_, index) => {
    return quizQuestions[(quizStart + index) % quizQuestions.length];
  });
  const quizQuestion = quizSessionQuestions[quizQuestionIndex];

  function answerQuiz(optionIndex: number) {
    if (selectedQuizOption !== null || !quizQuestion) return;
    setSelectedQuizOption(optionIndex);
    if (optionIndex === quizQuestion.answer) {
      setQuizScore((score) => score + 1);
    }
  }

  function nextQuizQuestion() {
    if (quizQuestionIndex === quizSessionQuestions.length - 1) {
      setQuizComplete(true);
      return;
    }
    setQuizQuestionIndex((index) => index + 1);
    setSelectedQuizOption(null);
  }

  function playAgain() {
    setQuizStart((start) => (start + 5) % quizQuestions.length);
    setQuizQuestionIndex(0);
    setSelectedQuizOption(null);
    setQuizScore(0);
    setQuizComplete(false);
  }

  return (
    <div className="min-h-screen bg-rose-50/80 text-rose-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-8">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-widest text-pink-800">
            <span className="grid size-6 place-items-center rounded-md bg-pink-100">03</span>
            THE XP TRIAL
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-rose-800">
            A little quiz. A lot of progress.
          </h1>
          <p className="mt-2 text-sm leading-6 text-rose-700">
            Five quick questions to practice what you have learned. Ready?
          </p>
        </section>

        <div className="min-h-72 rounded-2xl border border-rose-200 bg-white p-4 shadow-sm sm:p-6">
          {!quizComplete ? (
            <>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl border border-pink-200 bg-pink-50 text-lg text-pink-800" aria-hidden="true">
                    ✦
                  </span>
                  <div className="grid gap-1">
                    <strong className="text-[10px] tracking-wide text-rose-700">
                      QUESTION {quizQuestionIndex + 1} OF 5
                    </strong>
                    <span className="text-[10px] text-rose-700">Your next XP is just one answer away.</span>
                  </div>
                </div>
                <span className="text-xs font-extrabold text-pink-700">◆ {quizScore * 10} XP</span>
              </div>

              <div
                className="my-5 h-2 overflow-hidden rounded-full bg-pink-100"
                role="progressbar"
                aria-label="Quiz progress"
                aria-valuemin={0}
                aria-valuemax={5}
                aria-valuenow={quizQuestionIndex + (selectedQuizOption !== null ? 1 : 0)}
              >
                <span
                  className="block h-full rounded-full bg-gradient-to-r from-pink-400 to-pink-600 transition-all duration-300"
                  style={{ width: `${((quizQuestionIndex + (selectedQuizOption !== null ? 1 : 0)) / 5) * 100}%` }}
                />
              </div>

              <div>
                <span className="text-[9px] font-extrabold tracking-widest text-rose-800">YOUR CHALLENGE</span>
                <h2 className="mb-4 mt-2 text-lg font-bold leading-relaxed text-rose-800">
                  {quizQuestion.question}
                </h2>
                <div className="grid gap-2 md:grid-cols-3">
                  {quizQuestion.options.map((option, index) => {
                    const isSelected = selectedQuizOption === index;
                    const isCorrect = quizQuestion.answer === index;
                    const answered = selectedQuizOption !== null;
                    return (
                      <button
                        type="button"
                        key={index}
                        disabled={answered}
                        aria-pressed={isSelected}
                        onClick={() => answerQuiz(index)}
                        className={`flex min-h-14 items-center gap-3 rounded-xl border p-3 text-left text-xs leading-5 transition disabled:cursor-default ${
                          answered && isCorrect
                            ? "border-pink-300 bg-pink-50 text-pink-900"
                            : isSelected
                              ? "border-rose-200 bg-rose-50 text-rose-900"
                              : "border-rose-200 bg-white text-rose-700 hover:-translate-y-0.5 hover:border-pink-300 hover:bg-pink-50/40"
                        }`}
                      >
                        <span className="grid size-6 shrink-0 place-items-center rounded-md border border-rose-200 bg-rose-50 text-[10px] font-extrabold text-rose-700">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="flex-1">{option}</span>
                        {answered && isCorrect && (
                          <span className="font-bold text-pink-700" aria-label="Correct">
                            ✓
                          </span>
                        )}
                        {isSelected && !isCorrect && (
                          <span className="font-bold text-rose-700" aria-label="Not quite">
                            ×
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>

                {selectedQuizOption !== null && (
                  <div
                    className={`mt-4 flex flex-wrap items-center gap-3 rounded-xl border p-3 ${
                      selectedQuizOption === quizQuestion.answer
                        ? "border-pink-200 bg-pink-50"
                        : "border-rose-200 bg-rose-50"
                    }`}
                    role="status"
                  >
                    <span className="grid size-7 shrink-0 place-items-center rounded-full bg-white font-bold text-pink-800" aria-hidden="true">
                      {selectedQuizOption === quizQuestion.answer ? "✓" : "↗"}
                    </span>
                    <div className="min-w-48 flex-1">
                      <strong className="text-xs text-rose-800">
                        {selectedQuizOption === quizQuestion.answer ? "That’s correct! +10 XP" : "Good try! Keep learning."}
                      </strong>
                      <p className="mt-1 text-[11px] leading-5 text-rose-700">{quizQuestion.explanation}</p>
                    </div>
                    <button className={buttonClasses} type="button" onClick={nextQuizQuestion}>
                      {quizQuestionIndex === 4 ? "See my score" : "Next question"}{" "}
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="flex min-h-64 flex-col items-center justify-center px-2 py-6 text-center">
              <div className="mb-4 grid size-16 rotate-45 place-items-center rounded-xl border border-pink-300 bg-gradient-to-br from-pink-400 to-pink-700 text-2xl text-white shadow-lg" aria-hidden="true">
                ◆
              </div>
              <span className="text-[10px] font-extrabold tracking-widest text-rose-700">QUEST COMPLETE</span>
              <h2 className="mt-2 text-2xl font-extrabold text-rose-800">
                {quizScore === 5
                  ? "You are a Diamond Speaker!"
                  : quizScore >= 3
                    ? "You are an Emerald Explorer!"
                    : "You are a Grammar Apprentice!"}
              </h2>
              <p className="mt-2 max-w-md text-xs leading-5 text-rose-700">
                Every answer is a step forward. Keep practicing and your English will keep growing.
              </p>
              <div className="my-4 flex items-center gap-6 rounded-xl border border-rose-200 bg-rose-50 px-5 py-3">
                <div>
                  <strong className="block text-lg text-pink-800">{quizScore}<span className="text-xs text-rose-700"> / 5</span></strong>
                  <small className="text-[10px] text-rose-700">Correct answers</small>
                </div>
                <span className="h-8 border-l border-rose-200" />
                <div>
                  <strong className="block text-lg text-pink-800">{quizScore * 10}<span className="text-xs text-rose-700"> XP</span></strong>
                  <small className="text-[10px] text-rose-700">Earned this round</small>
                </div>
              </div>
              <button className={buttonClasses} type="button" onClick={playAgain}>
                Play again <span aria-hidden="true">↻</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
