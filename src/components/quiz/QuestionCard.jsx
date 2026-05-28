export default function QuestionCard({
    question,
    selectedAnswer,
    setSelectedAnswer,
  }) {
    return (
      <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
        {/* TOP */}
        <div className="bg-emerald-600 text-white px-6 py-5">
          <div className="text-sm opacity-80">
            {question.category}
          </div>
  
          <div className="text-2xl font-bold mt-1">
            {question.difficulty}
          </div>
        </div>
  
        {/* CONTENT */}
        <div className="p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-black leading-relaxed">
            {question.question}
          </h2>
  
          {/* IMAGE */}
          <div className="mt-10 flex justify-center">
            <div className="w-40 h-40 rounded-[32px] bg-slate-100 flex items-center justify-center text-7xl shadow-inner">
              {question.image}
            </div>
          </div>
  
          {/* OPTIONS */}
          <div className="mt-10 space-y-4">
            {question.options.map((option) => {
              const active = selectedAnswer === option;
  
              return (
                <button
                  key={option}
                  onClick={() => setSelectedAnswer(option)}
                  className={`w-full p-5 rounded-2xl border text-left transition-all font-semibold ${
                    active
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }