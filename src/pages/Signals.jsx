import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import PageContainer from "../components/layout/PageContainer";

import signals from "../data/signals.json";

import SignalCard from "../components/signals/SignalCard";
import SignalCategory from "../components/signals/SignalCategory";
import SignalModal from "../components/signals/SignalModal";

export default function Signals() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSignal, setSelectedSignal] = useState(null);

  // 🔍 Filtrar señales
  const filteredSignals =
    selectedCategory === "all"
      ? signals
      : signals.filter((s) => s.categoria === selectedCategory);

  return (
    <div className="pb-20 md:pb-0 min-h-screen bg-slate-50">
      <Navbar />

      <PageContainer>
        <section className="py-10">

          {/* HEADER */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
              🚦 Educación vial
            </div>

            <h1 className="text-5xl font-black leading-tight">
              Señales de tránsito
            </h1>

            <p className="text-slate-600 text-lg mt-5 leading-relaxed">
              Aprende las señales más importantes para aprobar tu examen
              teórico de conducir en Uruguay.
            </p>
          </div>

          {/* FILTRO */}
          <SignalCategory
            selected={selectedCategory}
            onChange={setSelectedCategory}
          />

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {filteredSignals.map((signal) => (
              <SignalCard
                key={signal.id}
                signal={signal}
                onSelect={setSelectedSignal}
              />
            ))}
          </div>

        </section>
      </PageContainer>

      {/* MODAL */}
      <SignalModal
        signal={selectedSignal}
        onClose={() => setSelectedSignal(null)}
      />
    </div>
  );
}