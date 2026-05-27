export default function Home() {
  const stats = [
    { label: "Preguntas", value: "+1200" },
    { label: "Simulacros", value: "24/7" },
    { label: "Aprobados", value: "+15K" },
  ];

  const features = [
    {
      title: "Preguntas reales",
      description:
        "Practica con preguntas inspiradas en exámenes actuales de conducir en Uruguay.",
      icon: "📘",
    },
    {
      title: "Modo examen",
      description:
        "Simula el examen oficial con tiempo, puntaje y corrección automática.",
      icon: "⏱️",
    },
    {
      title: "Señales de tránsito",
      description:
        "Aprende señales con imágenes, categorías y explicaciones simples.",
      icon: "🚦",
    },
    {
      title: "Tu progreso",
      description:
        "Mira estadísticas, errores frecuentes y porcentaje de avance.",
      icon: "📊",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🇺🇾 Preparación para libreta de conducir
              </div>

              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                Practica para tu
                <span className="text-emerald-600 block">
                  examen de conducir
                </span>
              </h1>

              <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                Aprende con preguntas reales, simulacros y señales de tránsito.
                Prepárate para aprobar tu licencia de conducir en Uruguay.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <button className="px-7 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 transition text-white font-semibold shadow-lg shadow-emerald-500/20">
                  Comenzar gratis
                </button>

                <button className="px-7 py-4 rounded-2xl border border-slate-300 hover:bg-white transition font-semibold">
                  Ver simulador
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 max-w-lg">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm"
                  >
                    <div className="text-2xl lg:text-3xl font-black text-emerald-600">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-semibold mb-3">
            TODO PARA APROBAR
          </div>

          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
            Aprende más rápido
          </h2>

          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            Diseñado para ayudarte a practicar todos los días y llegar
            preparado al examen teórico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="text-xl font-bold mt-6">
                {feature.title}
              </h3>

              <p className="text-slate-600 mt-3 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-emerald-600 to-cyan-600 overflow-hidden shadow-2xl">
          <div className="px-8 py-16 lg:px-16 lg:py-20 text-center text-white">
            <div className="text-sm font-semibold tracking-widest opacity-80">
              EMPIEZA HOY
            </div>

            <h2 className="text-4xl lg:text-6xl font-black mt-4 leading-tight">
              Prepárate para aprobar
              <span className="block">tu licencia de conducir</span>
            </h2>

            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Practica desde tu celular, mejora tus resultados y llega listo
              al examen.
            </p>

            <button className="mt-10 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg">
              Comenzar ahora
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
