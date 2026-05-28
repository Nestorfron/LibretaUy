import React from "react";

const SignalModal = ({ signal, onClose }) => {
  if (!signal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full relative">

        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-black"
        >
          ✕
        </button>

        {/* Imagen */}
        <div className="flex justify-center mb-6">
          <img
            src={`src/assets/${signal.ruta}`}
            alt={signal.titulo}
            className="max-h-40 object-contain"
          />
        </div>

        {/* Info */}
        <h2 className="text-2xl font-black text-center">
          {signal.titulo}
        </h2>
        <p className="text-center text-slate-500 mt-2">{signal.descripcion}</p>

      </div>
    </div>
  );
};

export default SignalModal;