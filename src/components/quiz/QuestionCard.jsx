import AnswerOption from "./AnswerOption";

export default function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
}) {
  return (
    <div>
      {/* CATEGORY */}
      <div className="text-sm font-semibold text-emerald-600 mb-3">
        Categoría: {question.category}
      </div>

      {/* TITLE */}
      <h3 className="text-xl md:text-2xl font-bold leading-relaxed text-slate-800">
        {question.title}
      </h3>

      {/* IMAGE */}
      <div className="mt-6 flex justify-center">
        <div className="w-44 h-44 rounded-3xl bg-slate-50 flex items-center justify-center shadow-lg border border-slate-200 overflow-hidden transition hover:scale-105">
          {question.image?.includes("/") ? (
            <img
              src={question.image}
              alt="Señal"
              className="w-full h-full object-contain p-5"
            />
          ) : (
            <span className="text-7xl">{question.image}</span>
          )}
        </div>
      </div>

      {/*QUESTION*/}
      <div className="text-lg font-bold text-slate-800 mt-8">
        {question.question}
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
