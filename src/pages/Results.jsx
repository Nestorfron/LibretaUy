import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

export default function Results() {
  // DEMO
  const correctAnswers = 16;
  const totalQuestions = 20;

  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const approved = percentage >= 70;

  return (
    <div className="pb-20 md:pb-0 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto">
            <div
              className={`w-32 h-32 rounded-full mx-auto flex items-center justify-center text-6xl shadow-xl ${
                approved
                  ? "bg-emerald-500 text-white"
                  : "bg-red-500 text-white"
              }`}
            >
              {approved ? "🎉" : "😢"}
            </div>

            <h1 className="text-5xl font-black mt-8">
              {approved
                ? "¡Aprobaste!"
                : "Sigue practicando"}
            </h1>

            <p className="text-slate-600 text-lg mt-4">
              {approved
                ? "Excelente trabajo. Ya estás más cerca de obtener tu libreta."
                : "Continúa practicando para mejorar tus resultados."}
            </p>
          </div>

          {/* SCORE */}
          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {/* CORRECTAS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="text-5xl font-black text-emerald-600">
                {correctAnswers}
              </div>

              <div className="text-slate-500 mt-3">
                Correctas
              </div>
            </div>

            {/* INCORRECTAS */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="text-5xl font-black text-red-500">
                {totalQuestions - correctAnswers}
              </div>

              <div className="text-slate-500 mt-3">
                Incorrectas
              </div>
            </div>

            {/* PORCENTAJE */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="text-5xl font-black text-cyan-600">
                {percentage}%
              </div>

              <div className="text-slate-500 mt-3">
                Resultado
              </div>
            </div>
          </div>

          {/* PROGRESS */}
          <div className="mt-10 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold">
                Rendimiento
              </span>

              <span className="text-slate-500 text-sm">
                {percentage}%
              </span>
            </div>

            <div className="w-full h-5 rounded-full bg-slate-200 overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  approved
                    ? "bg-emerald-500"
                    : "bg-red-500"
                }`}
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>
          </div>

          {/* ACTIONS */}
          <div className="grid sm:grid-cols-2 gap-4 mt-10">
            <Link
              to="/quiz"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-center py-5 rounded-2xl font-bold transition"
            >
              Repetir simulacro
            </Link>

            <Link
              to="/"
              className="border border-slate-300 hover:bg-slate-100 text-center py-5 rounded-2xl font-bold transition"
            >
              Volver al inicio
            </Link>
          </div>
        </section>
      </PageContainer>

    </div>
  );
}