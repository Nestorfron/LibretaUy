import { Link } from "react-router-dom";

import Stats from "./Stats";
import ExamPreview from "./ExamPreview";

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent" />

      <div className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
              Practica para tu
              <span className="text-emerald-600 block">
                examen de conducir
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
              Aprende con preguntas reales, Simuladors y señales de tránsito.
              Prepárate para aprobar tu licencia de conducir en Uruguay.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/quiz"
                className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold shadow-lg shadow-emerald-500/20"
              >
                Ver Simulador
              </Link>

            </div>

            <Stats />
          </div>

          <ExamPreview />
        </div>
      </div>
    </section>
  );
}