import React from "react";

const categories = [
  { key: "all", label: "Todas" },
  { key: "regulatory", label: "Reglamentarias" },
  { key: "warning", label: "Preventivas" },
  { key: "informative", label: "Informativas" },
];

const SignalCategory = ({ selected, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mt-10">
      {categories.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onChange(cat.key)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition
            ${
              selected === cat.key
                ? "bg-cyan-600 text-white"
                : "bg-slate-200 text-slate-700 hover:bg-slate-300"
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default SignalCategory;