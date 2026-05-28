export default function ExamPreview() {
    return (
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full" />
  
        <div className="absolute -bottom-10 -right-10 w-52 h-52 bg-cyan-400/20 blur-3xl rounded-full" />
  
        <div className="relative bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden">
          <div className="bg-emerald-600 px-6 py-5 text-white">
            <div className="text-sm opacity-80">
              Simulacro de examen
            </div>
  
            <div className="text-2xl font-bold mt-1">
              Pregunta 7 de 20
            </div>
          </div>
  
          <div className="p-6">
            <div className="text-sm font-semibold text-emerald-600 mb-3">
              Señales de tránsito
            </div>
  
            <h3 className="text-xl font-bold leading-relaxed">
              ¿Qué significa esta señal?
            </h3>
  
            <div className="mt-6 flex justify-center">
              <div className="w-32 h-32 rounded-3xl bg-red-500 flex items-center justify-center text-6xl text-white shadow-lg">
                🛑
              </div>
            </div>
  
            <div className="mt-8 space-y-3">
              {[
                "Prohibido estacionar",
                "Pare obligatorio",
                "Ceda el paso",
                "Velocidad máxima",
              ].map((option, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-2xl border transition font-medium ${
                    option === "Pare obligatorio"
                      ? "bg-emerald-50 border-emerald-500 text-emerald-700"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }