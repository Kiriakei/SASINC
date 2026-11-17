"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import { interviewScenarios } from "../data";

const buttonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-pink-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-pink-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 disabled:cursor-default disabled:opacity-60";

export default function InterviewPage() {
  const [scenarioId, setScenarioId] = useState(interviewScenarios[0].id);
  const [interviewQuestionIndex, setInterviewQuestionIndex] = useState(0);
  const [selectedInterviewOption, setSelectedInterviewOption] = useState<number | null>(null);
  const [interviewComplete, setInterviewComplete] = useState(false);

  const selectedScenario =
    interviewScenarios.find((scenario) => scenario.id === scenarioId) ?? interviewScenarios[0];
  const interviewQuestion = selectedScenario.questions[interviewQuestionIndex];

  function chooseScenario(id: string) {
    setScenarioId(id);
    setInterviewQuestionIndex(0);
    setSelectedInterviewOption(null);
    setInterviewComplete(false);
  }

  function answerInterview(optionIndex: number) {
    if (selectedInterviewOption !== null || !interviewQuestion) return;
    setSelectedInterviewOption(optionIndex);
  }

  function nextInterviewQuestion() {
    if (interviewQuestionIndex + 1 < selectedScenario.questions.length) {
      setInterviewQuestionIndex((index) => index + 1);
      setSelectedInterviewOption(null);
      return;
    }
    setInterviewComplete(true);
  }

  return (
    <div className="min-h-screen bg-rose-50/80 text-rose-900">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-6">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold tracking-widest text-pink-800">
            <span className="grid size-6 place-items-center rounded-md bg-pink-100">02</span>
            VILLAGE &amp; GUILD DIALOGUE
          </span>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-rose-800">
            Practice your next conversation.
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-rose-700">
            Take a breath, choose your words, and build interview confidence one answer at a time.
          </p>
        </section>

        <div className="mb-4 grid gap-2 sm:grid-cols-3" role="group" aria-label="Choose a practice scenario">
          {interviewScenarios.map((scenario, index) => (
            <button
              type="button"
              key={scenario.id}
              aria-pressed={scenario.id === scenarioId}
              className={`relative grid min-h-20 grid-cols-[2rem_1fr] items-center gap-x-3 rounded-xl border p-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow ${
                scenario.id === scenarioId
                  ? "border-pink-300 bg-pink-50"
                  : "border-rose-200 bg-white/90 hover:border-pink-200"
              }`}
              onClick={() => chooseScenario(scenario.id)}
            >
              <span className="row-span-2 grid size-8 place-items-center rounded-lg bg-rose-100 text-xs font-extrabold text-rose-800">
                0{index + 1}
              </span>
              <span className="self-end pr-5 text-xs font-bold text-rose-800">{scenario.title}</span>
              <span className="mt-1 pr-5 text-[10px] text-rose-700">{scenario.subtitle}</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-rose-700" aria-hidden="true">
                →
              </span>
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-rose-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
            <span className="grid size-10 place-items-center rounded-xl bg-rose-100 font-bold text-rose-900" aria-hidden="true">
              G
            </span>
            <span className="grid gap-1 text-xs">
              <strong className="text-rose-800">Guild master</strong>
              <span className="text-rose-700">Interviewer · Friendly village guild</span>
            </span>
            <span className="ml-auto rounded-md border border-rose-200 bg-rose-50 px-2 py-1.5 text-[9px] font-extrabold tracking-wider text-rose-700">
              {interviewComplete
                ? "QUEST COMPLETE"
                : `QUESTION ${interviewQuestionIndex + 1} OF ${selectedScenario.questions.length}`}
            </span>
          </div>

          {interviewComplete ? (
            <div className="flex items-start gap-4 py-8">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-rose-200 bg-rose-50 text-2xl text-rose-700" aria-hidden="true">
                ✦
              </span>
              <div>
                <span className="text-[10px] font-extrabold tracking-widest text-rose-700">QUEST COMPLETE</span>
                <h2 className="mt-2 text-xl font-bold text-rose-800">You showed up. That is a great start.</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-rose-700">
                  You practiced the “{selectedScenario.title}” conversation. Keep your answers clear, kind, and true to you.
                </p>
                <button
                  className="mt-4 text-xs font-bold text-pink-800 hover:text-pink-950"
                  type="button"
                  onClick={() => chooseScenario(scenarioId)}
                >
                  Practice this scenario again <span aria-hidden="true">↻</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="relative my-5 rounded-xl border border-rose-100 bg-rose-50/80 p-4">
                <span className="text-[9px] font-extrabold tracking-widest text-rose-800">THE GUILD MASTER ASKS</span>
                <h2 className="mt-2 text-lg font-bold leading-relaxed text-rose-800">
                  {interviewQuestion.question}
                </h2>
              </div>

              <div className="mb-5 flex items-start gap-3 rounded-xl border border-pink-200 bg-pink-50 p-3">
                <span className="text-rose-700" aria-hidden="true">✦</span>
                <div>
                  <strong className="text-xs text-pink-900">A little hint</strong>
                  <p className="mt-1 text-xs leading-5 text-rose-700">{interviewQuestion.hint}</p>
                </div>
              </div>

              <div className="mb-2 flex flex-wrap justify-between gap-2 text-[10px]">
                <span className="font-extrabold tracking-widest text-rose-700">CHOOSE A RESPONSE</span>
                <span className="text-rose-700">There is no pressure. This is practice.</span>
              </div>

              <div className="grid gap-2">
                {interviewQuestion.options.map((option, index) => {
                  const isSelected = selectedInterviewOption === index;
                  const showFeedback = selectedInterviewOption !== null;
                  return (
                    <button
                      key={option.text}
                      className={`flex min-h-12 items-start gap-3 rounded-xl border p-3 text-left text-xs leading-5 transition disabled:cursor-default ${
                        isSelected && !option.worksWell
                          ? "border-rose-200 bg-rose-50"
                          : showFeedback && option.worksWell
                            ? "border-pink-200 bg-pink-50"
                            : "border-rose-200 bg-white hover:border-pink-300 hover:bg-pink-50/40"
                      }`}
                      type="button"
                      disabled={showFeedback}
                      aria-pressed={isSelected}
                      onClick={() => answerInterview(index)}
                    >
                      <span className="grid size-6 shrink-0 place-items-center rounded-md border border-rose-200 bg-rose-50 text-[10px] font-extrabold text-rose-700">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="grid flex-1 gap-1">
                        <span className="text-rose-700">{option.text}</span>
                        {isSelected && (
                          <span className="text-[11px] text-rose-700" role="status">
                            {option.feedback}
                          </span>
                        )}
                      </span>
                      {showFeedback && option.worksWell && (
                        <span className="font-bold text-pink-700" aria-label="Recommended answer">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedInterviewOption !== null && (
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-xs font-bold text-rose-800">
                    ✦ +{interviewQuestion.options[selectedInterviewOption].worksWell ? 15 : 8} XP
                  </span>
                  <button className={buttonClasses} type="button" onClick={nextInterviewQuestion}>
                    {interviewQuestionIndex + 1 < selectedScenario.questions.length ? "Next question" : "Finish quest"}{" "}
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>
    </div>
  );
}
