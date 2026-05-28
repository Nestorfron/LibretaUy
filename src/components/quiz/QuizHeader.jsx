export default function QuizHeader({ current, total }) {
    return (
      <div className="flex items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-black">Simulador 🚗</h1>
          <p className="text-slate-600 mt-2">
            Practica para tu examen teórico.
          </p>
        </div>
  
        <div className="hidden md:flex items-center gap-2 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-sm">
          <span className="text-sm text-slate-500">Pregunta</span>
          <span className="font-black text-emerald-600">
            {current}/{total}
          </span>
        </div>
      </div>
    );
  }