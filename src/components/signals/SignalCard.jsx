import React from "react";

const SignalCard = ({ signal, onSelect }) => {

  const getColor = (categoria) => {
    switch (categoria) {
      case "regulatory":
        return "bg-red-500";
      case "warning":
        return "bg-yellow-400";
      case "informative":
        return "bg-blue-500";
      default:
        return "bg-slate-400";
    }
  };

  return (
    <div
      onClick={() => onSelect(signal)}
      className="bg-white rounded-[32px] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
    >
      {/* Imagen */}
      <div
        className={`${getColor(signal.categoria)} h-40 flex items-center justify-center`}
      >
        <img
          src={`src/assets/${signal.ruta}`}
          alt={signal.titulo}
          className="max-h-24 object-contain"
        />
      </div>

      {/* Info */}
      <div className="p-6">
        <h2 className="text-lg font-black">{signal.titulo}</h2>

        <p className="text-xs text-slate-500 mt-1 capitalize">
          {signal.categoria === "regulatory"
            ? "Reglamentaria"
            : signal.categoria === "warning"
            ? "Preventiva"
            : "Informativa"}
        </p>
      </div>
    </div>
  );
};

export default SignalCard;