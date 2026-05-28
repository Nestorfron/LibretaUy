import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import QuestionCard from "../components/quiz/QuestionCard";

import questions from "../data/questions.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [score, setScore] = useState(0);

  const question = questions[currentQuestion];

  const handleNextQuestion = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Terminaste el simulacro 🚗\n\nPuntaje: ${score + 1}/${questions.length}`);
    }
  };

  return (
    <div className="pb-20 md:pb-0 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10">
          {/* HEADER */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-4xl font-black">
                Simulacro 🚗
              </h1>

              <p className="text-slate-600 mt-2">
                Practica para tu examen teórico.
              </p>
            </div>

            <div className="hidden md:flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
              <span className="text-sm text-slate-500">
                Pregunta
              </span>

              <span className="font-black text-emerald-600">
                {currentQuestion + 1}/{questions.length}
              </span>
            </div>
          </div>

          {/* QUESTION */}
          <QuestionCard
            question={question}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />

          {/* ACTIONS */}
          <div className="mt-8">
            <button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className={`w-full py-5 rounded-2xl font-bold transition ${
                selectedAnswer
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-slate-200 text-slate-400 cursor-not-allowed"
              }`}
            >
              {currentQuestion === questions.length - 1
                ? "Finalizar simulacro"
                : "Siguiente pregunta"}
            </button>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}