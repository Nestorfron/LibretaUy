export default function Stats() {
    const stats = [
      { label: "Preguntas", value: "+1200" },
      { label: "Simuladors", value: "24/7" },
      { label: "Aprobados", value: "+15K" },
    ];
  
    return (
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
    );
  }