import { Link, useLocation } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

export default function Results() {
  const location = useLocation();

  const correctAnswers = location.state?.score || 0;
  const totalQuestions = location.state?.total || 0;
  const answers = location.state?.answers || [];

  const percentage = Math.round(
    (correctAnswers / totalQuestions) * 100
  );

  const approved = percentage >= 70;

  const getMessage = () => {
    if (percentage === 100)
      return { title: "¡Perfecto!", text: "Dominas el examen." };
    if (percentage >= 85)
      return { title: "¡Excelente!", text: "Muy buen resultado." };
    if (percentage >= 70)
      return { title: "¡Aprobaste!", text: "Listo para el examen." };
    if (percentage >= 50)
      return { title: "Vas bien", text: "Estás cerca." };

    return {
      title: "Seguí practicando",
      text: "Necesitás mejorar.",
    };
  };

  const message = getMessage();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar />

      <PageContainer>
        <section className="py-10 text-center max-w-2xl mx-auto">

          {/* ICON */}
          <div
            className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center text-6xl shadow-xl ${
              approved ? "bg-emerald-500" : "bg-red-500"
            } text-white`}
          >
            {percentage >= 85 ? "🔥" : approved ? "🎉" : "😢"}
          </div>

          {/* TITLE */}
          <h1 className="text-5xl font-black mt-6">
            {message.title}
          </h1>

          {/* TEXT */}
          <p className="mt-3 text-slate-600 text-lg">
            {message.text}
          </p>

          <p className="text-sm text-slate-500 mt-2">
            Necesitás al menos 70% para aprobar
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="text-3xl font-bold text-emerald-600">
                {correctAnswers}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Correctas
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="text-3xl font-bold text-red-500">
                {totalQuestions - correctAnswers}
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Incorrectas
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow">
              <div className="text-3xl font-bold text-cyan-600">
                {percentage}%
              </div>
              <div className="text-sm text-slate-500 mt-1">
                Resultado
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-10 grid gap-4">

            <Link
              to="/quiz"
              className="bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold transition"
            >
              Repetir simulador
            </Link>

            {answers.length > 0 && (
              <Link
                to="/review"
                state={answers}
                className="bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-bold transition"
              >
                Revisar examen
              </Link>
            )}

          </div>

        </section>
      </PageContainer>
    </div>
  );
}