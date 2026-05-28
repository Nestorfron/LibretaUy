export default function QuizProgress({ current, total }) {
    const progress = (current / total) * 100;
  
    return (
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className="h-full bg-emerald-600 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    );
  }