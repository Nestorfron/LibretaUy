export default function AnswerOption({
    option,
    selected,
    correct,
    onSelect,
  }) {
    const isSelected = selected === option;
    const isCorrect = option === correct;
  
    return (
      <button
        onClick={() => onSelect(option)}
        className={`w-full text-left p-4 rounded-2xl border transition font-medium ${
          isSelected
            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
            : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <div className="flex justify-between items-center">
          {option}
  
          {isSelected && isCorrect && (
            <span className="text-emerald-600 font-bold">✓</span>
          )}
        </div>
      </button>
    );
  }