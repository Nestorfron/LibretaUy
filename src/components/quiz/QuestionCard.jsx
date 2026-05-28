import AnswerOption from "../quiz/AnswerOption.jsx";

export default function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
}) {
  return (
    <div className="bg-white rounded-[32px] shadow-2xl border border-slate-200 overflow-hidden p-6">
      
      <div className="text-sm font-semibold text-emerald-600 mb-3">
        {question.category}
      </div>

      <h3 className="text-xl font-bold leading-relaxed">
        {question.title}
      </h3>

      {/* IMAGE */}
      <div className="mt-6 flex justify-center">
        <div className="w-40 h-40 rounded-3xl bg-slate-50 flex items-center justify-center shadow border overflow-hidden">
          <img
            src={question.image}
            alt="Señal"
            className="w-full h-full object-contain p-4"
          />
        </div>
      </div>

      {/* OPTIONS */}
      <div className="mt-8 space-y-3">
        {question.options.map((option, i) => (
          <AnswerOption
            key={i}
            option={option}
            selected={selectedAnswer}
            correct={question.correctAnswer}
            onSelect={setSelectedAnswer}
          />
        ))}
      </div>
    </div>
  );
}