import { X } from "lucide-react";

export default function DocumentModal({ document, onClose }) {
  if (!document) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* MODAL */}
      <div className="relative bg-white w-[95%] max-w-5xl h-[90%] rounded-2xl shadow-xl overflow-hidden">
        
        {/* HEADER */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold">
            {document.title}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* PDF VIEWER */}
        <iframe
          src={document.file}
          className="w-full h-full"
          title="PDF Viewer"
        />

        {/* FOOTER */}
        <div className="absolute bottom-4 right-4">
          <a
            href={document.file}
            download
            className="bg-slate-900 text-white px-4 py-2 rounded-xl"
          >
            Descargar
          </a>
        </div>
      </div>
    </div>
  );
}