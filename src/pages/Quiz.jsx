import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import QuizHeader from "../components/quiz/QuizHeader";
import QuizProgress from "../components/quiz/QuizProgress";
import QuestionCard from "../components/quiz/QuestionCard";
import ResultCard from "../components/quiz/ResultCard";

import questions from "../data/questions.json";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = questions[currentQuestion];

  const handleNext = () => {
    if (selectedAnswer === question.correctAnswer) {
      setScore((s) => s + 1);
    }

    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setFinished(false);
  };

  return (
    <div className="pb-20 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10">
          {finished ? (
            <ResultCard
              score={score}
              total={questions.length}
              onRestart={restart}
            />
          ) : (
            <>
              <QuizHeader
                current={currentQuestion + 1}
                total={questions.length}
              />

              <QuizProgress
                current={currentQuestion + 1}
                total={questions.length}
              />

              <div className="mt-6">
                <QuestionCard
                  question={question}
                  selectedAnswer={selectedAnswer}
                  setSelectedAnswer={setSelectedAnswer}
                />
              </div>

              <button
                onClick={handleNext}
                disabled={!selectedAnswer}
                className={`mt-8 w-full py-5 rounded-2xl font-bold transition ${
                  selectedAnswer
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {currentQuestion === questions.length - 1
                  ? "Finalizar simulacro"
                  : "Siguiente pregunta"}
              </button>
            </>
          )}
        </section>
      </PageContainer>
    </div>
  );
}