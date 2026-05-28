export default function DocumentCard({ document, onSelect }) {
    return (
      <div
        onClick={() => onSelect(document)}
        className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
      >
        <div className="text-3xl mb-3">📄</div>
  
        <h2 className="font-semibold text-lg">
          {document.title}
        </h2>
  
        <p className="text-sm text-slate-500 mt-1">
          {document.description}
        </p>
  
        <p className="text-xs text-slate-400 mt-2">
          {document.size}
        </p>
      </div>
    );
  }