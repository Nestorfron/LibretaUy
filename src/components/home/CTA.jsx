import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto rounded-[40px] bg-gradient-to-r from-emerald-600 to-cyan-600 overflow-hidden shadow-2xl">
        <div className="px-8 py-16 lg:px-16 lg:py-20 text-center text-white">
          <div className="text-sm font-semibold tracking-widest opacity-80">
            EMPIEZA HOY
          </div>

          <h2 className="text-4xl lg:text-6xl font-black mt-4 leading-tight">
            Prepárate para aprobar
            <span className="block">
              tu licencia de conducir
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Practica desde tu celular, mejora tus resultados y llega listo al
            examen.
          </p>

          <Link
            to="/quiz"
            className="inline-block mt-10 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg"
          >
            Comenzar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}