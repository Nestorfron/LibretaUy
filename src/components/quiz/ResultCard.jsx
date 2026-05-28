export default function ResultCard({ score, total, onRestart }) {
    return (
      <div className="bg-white rounded-[32px] shadow-2xl border p-8 text-center">
        <h2 className="text-3xl font-black mb-2">Resultado 🚗</h2>
  
        <p className="text-slate-600 mb-6">
          Completaste el simulacro
        </p>
  
        <div className="text-5xl font-black text-emerald-600 mb-6">
          {score}/{total}
        </div>
  
        <button
          onClick={onRestart}
          className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-700"
        >
          Reintentar
        </button>
      </div>
    );
  }