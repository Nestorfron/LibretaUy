import AnswerOption from "./AnswerOption";

export default function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer,
}) {
  return (
    <div>

      {/* CATEGORY */}
      <div className="text-xs md:text-sm font-semibold text-emerald-600 mb-2">
        {question.category}
      </div>

      {/* TITLE + QUESTION */}
      <h3 className="text-lg md:text-2xl font-bold leading-snug text-slate-800">
        {question.question}
      </h3>

      {/* IMAGE */}
      <div className="mt-4 flex justify-center">
        <div className="
          w-32 h-32 md:w-44 md:h-44
          rounded-2xl md:rounded-3xl
          bg-slate-50 flex items-center justify-center
          shadow border border-slate-200 overflow-hidden
        ">
          {question.image?.includes("/") ? (
            <img
              src={question.image}
              alt="Señal"
              className="w-full h-full object-contain p-3 md:p-5"
            />
          ) : (
            <span className="text-5xl md:text-7xl">
              {question.image}
            </span>
          )}
        </div>
      </div>

      {/* OPTIONS */}
      <div className="mt-6 space-y-2 md:space-y-3">
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