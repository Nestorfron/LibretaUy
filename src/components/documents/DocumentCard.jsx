import { FileText, Download } from "lucide-react";

export default function DocumentCard({ document }) {
  return (
    <a
      href={document.file}
      download
      className="group block relative bg-white border border-slate-200 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

      {/* ICON */}
      <div className="relative z-10 w-14 h-14 flex items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
        <FileText size={26} />
      </div>

      {/* TITLE */}
      <h2 className="relative z-10 font-semibold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors">
        {document.title}
      </h2>

      {/* DESCRIPTION */}
      <p className="relative z-10 text-sm text-slate-500 mt-1 leading-relaxed">
        {document.description}
      </p>

      {/* FOOTER */}
      <div className="relative z-10 flex items-center justify-between mt-5">
        <span className="text-xs text-slate-400">
          {document.size}
        </span>

        <div className="flex items-center gap-1 text-sm font-semibold text-emerald-600 group-hover:translate-x-1 transition-transform">
          <Download size={16} />
          Descargar
        </div>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-emerald-200 transition-all" />
    </a>
  );
}