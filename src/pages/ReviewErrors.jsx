import { useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

export default function Review( ) {
  const location = useLocation();
  const answers = location.state || [];


  const correctCount = answers.filter(
    (a) => a.userAnswer === a.correctAnswer
  ).length;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      <PageContainer>
        <section className="py-10 flex flex-col items-center gap-10">

          <h1 className="text-4xl font-black">
            Revisión completa
          </h1>

          {answers.map((question, index) => {
            const isCorrectUser =
              question.userAnswer === question.correctAnswer;

            return (
              <div key={index} className="relative w-full max-w-2xl">

                {/* CARD */}
                <div className="bg-white rounded-[32px] shadow-2xl border overflow-hidden">

                  {/* HEADER */}
                  <div
                    className={`px-6 py-4 text-white ${
                      isCorrectUser
                        ? "bg-emerald-600"
                        : "bg-red-500"
                    }`}
                  >
                    Pregunta {index + 1}
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">

                    <div className="text-sm font-semibold text-emerald-600 mb-2">
                      {question.category}
                    </div>

                    <h3 className="text-xl font-bold">
                      {question.question}
                    </h3>

                    {/* IMAGE */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-40 h-40 rounded-3xl bg-slate-50 flex items-center justify-center shadow border overflow-hidden">
                        {question.image?.includes("/") ? (
                          <img
                            src={question.image}
                            alt="Señal"
                            className="w-full h-full object-contain p-4"
                          />
                        ) : (
                          <span className="text-7xl">
                            {question.image}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* OPTIONS */}
                    <div className="mt-8 space-y-3">
                      {question.options.map((option, i) => {
                        const isCorrect =
                          option === question.correctAnswer;

                        const isUser =
                          option === question.userAnswer;

                        return (
                          <div
                            key={i}
                            className={`p-4 rounded-2xl border flex justify-between items-center font-medium

                              ${
                                isCorrect
                                  ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                                  : ""
                              }

                              ${
                                isUser && !isCorrect
                                  ? "bg-red-50 border-red-500 text-red-600"
                                  : ""
                              }

                              ${
                                !isCorrect && !isUser
                                  ? "border-slate-200"
                                  : ""
                              }
                            `}
                          >
                            {option}

                            {isCorrect && (
                              <span className="font-bold">✓</span>
                            )}

                            {isUser && !isCorrect && (
                              <span className="font-bold">✕</span>
                            )}
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </section>
      </PageContainer>
    </div>
  );
}