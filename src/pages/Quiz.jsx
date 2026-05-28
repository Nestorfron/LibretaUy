import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import QuestionCard from "../components/quiz/QuestionCard";

import questions from "../data/questions.json";

export default function Quiz() {
  const navigate = useNavigate();

  // 🔀 función shuffle
  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // 🎯 preguntas mezcladas SOLO UNA VEZ
  const [shuffledQuestions] = useState(() =>
    shuffleArray(questions).slice(0, 20)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const question = shuffledQuestions[currentQuestion];

  const handleNext = () => {
    const newAnswer = {
      ...question,
      userAnswer: selectedAnswer,
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    let newScore = score;

    if (selectedAnswer === question.correctAnswer) {
      newScore++;
      setScore(newScore);
    }

    setSelectedAnswer("");

    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      navigate("/results", {
        state: {
          score: newScore,
          total: shuffledQuestions.length,
          answers: updatedAnswers,
        },
      });
    }
  };

  return (
    <div className="pb-20 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10 flex justify-center">
          <div className="relative w-full max-w-2xl">

            {/* BG */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full" />

            {/* CARD */}
            <div className="relative bg-white rounded-[32px] shadow-2xl border overflow-hidden">

              {/* HEADER */}
              <div className="bg-emerald-600 px-6 py-5 text-white">
                <div className="text-sm opacity-80">
                  Simulador de examen
                </div>

                <div className="text-2xl font-bold mt-1">
                  Pregunta {currentQuestion + 1} de {shuffledQuestions.length}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <QuestionCard
                  question={question}
                  selectedAnswer={selectedAnswer}
                  setSelectedAnswer={setSelectedAnswer}
                />

                <button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className={`mt-8 w-full py-5 rounded-2xl font-bold transition ${
                    selectedAnswer
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:-translate-y-0.5"
                      : "bg-slate-200 text-slate-400 cursor-not-allowed"
                  }`}
                >
                  {currentQuestion === shuffledQuestions.length - 1
                    ? "Finalizar simulador"
                    : "Siguiente pregunta"}
                </button>
              </div>

            </div>
          </div>
        </section>
      </PageContainer>
    </div>
  );
}