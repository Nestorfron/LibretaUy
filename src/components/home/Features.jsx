export default function Features() {
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
      <section className="py-20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-emerald-600 font-semibold mb-3">
            TODO PARA APROBAR
          </div>
  
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight">
            Aprende más rápido
          </h2>
  
          <p className="text-slate-600 mt-5 text-lg leading-relaxed">
            Diseñado para ayudarte a practicar todos los días y llegar preparado
            al examen teórico.
          </p>
        </div>
  
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>
  
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
    );
  }