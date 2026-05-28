export default function ExamPreview() {
  const question = {
    title: "¿Qué significa esta señal?",
    category: "Señales de tránsito",
    image: "/signals/regulatory/r1_pare.png",
    options: [
      "Prohibido estacionar",
      "Pare obligatorio",
      "Ceda el paso",
      "Velocidad máxima",
    ],
    correct: "Pare obligatorio",
  };

  return (
    <div className="relative">
      {/* Background effects */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Card */}
      <div className="relative bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-emerald-600 px-6 py-5 text-white">
          <div className="text-sm opacity-80">Simulador de examen</div>
          <div className="text-2xl font-bold mt-1">
            Pregunta 7 de 20
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-sm font-semibold text-emerald-600 mb-3">
            {question.category}
          </div>

          <h3 className="text-xl font-bold leading-relaxed">
            {question.title}
          </h3>

          {/* Image signal */}
          <div className="mt-6 flex justify-center">
            <div className="w-40 h-40 rounded-3xl bg-slate-50 flex items-center justify-center shadow-lg border border-slate-200 overflow-hidden">
              <img
                src={question.image}
                alt="Señal de tránsito"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>

          {/* Options */}
          <div className="mt-8 space-y-3">
            {question.options.map((option, index) => {
              const isCorrect = option === question.correct;

              return (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-2xl border transition font-medium ${
                    isCorrect
                      ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    {option}
                    {isCorrect && (
                      <span className="text-emerald-600 font-bold">
                        ✓
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}