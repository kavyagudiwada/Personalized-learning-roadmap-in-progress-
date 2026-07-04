import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { getQuestions } from "./assessment-questions";

interface Question {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

interface AssessmentState {
  assessmentId: string;
  questions: Question[];
  careerGoal: string;
  currentLevel: number;
  totalLevels: number;
  allAnswers: Record<string, string[]>;
  levelScores: { level: number; correct: number; total: number }[];
}

function LevelQuiz({
  state,
  onLevelComplete,
}: {
  state: AssessmentState;
  onLevelComplete: (answers: string[], correct: number) => void;
}) {
  const { questions, currentLevel, totalLevels } = state;
  const [answers, setAnswers] = useState<string[]>(Array(questions.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const handleSubmit = () => {
    const unanswered = answers.some((a) => !a);
    if (unanswered) return;

    let correct = 0;
    answers.forEach((a, i) => {
      if (a === questions[i].answer) correct++;
    });
    setCorrectCount(correct);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-[32px] p-8 shadow-xl text-center">
        <div className="text-5xl mb-4">{correctCount >= 7 ? "🎉" : correctCount >= 5 ? "👍" : "📚"}</div>
        <h2 className="text-2xl font-black text-[#171C4A]">Level {currentLevel} Complete</h2>
        <p className="text-gray-500 mt-2">
          {correctCount} of {questions.length} correct
        </p>
        <div className="mt-6 w-full bg-gray-100 rounded-full h-3">
          <div
            className="bg-[#171C4A] h-3 rounded-full transition-all duration-500"
            style={{ width: `${(correctCount / questions.length) * 100}%` }}
          />
        </div>
        <div className="mt-6 space-y-4 text-left">
          {questions.map((q, i) => (
            <div key={i} className={`p-4 rounded-2xl border-2 ${answers[i] === q.answer ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className="font-semibold text-sm text-[#171C4A]">{q.question}</p>
              <p className="text-xs mt-1 text-gray-500">Your answer: {answers[i]}</p>
              <p className="text-xs text-green-600 font-medium">Correct: {q.answer}</p>
              <p className="text-xs text-gray-400 mt-1">{q.explanation}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => onLevelComplete(answers, correctCount)}
          className="mt-6 w-full py-4 rounded-2xl bg-[#171C4A] text-white font-bold text-lg hover:opacity-90 transition"
        >
          {currentLevel < totalLevels ? `Continue to Level ${currentLevel + 1} →` : "See Final Results →"}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {Array.from({ length: totalLevels }, (_, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                i + 1 === currentLevel
                  ? "bg-[#171C4A] text-white scale-110"
                  : i + 1 < currentLevel
                  ? "bg-green-200 text-green-800"
                  : "bg-gray-100 text-gray-400"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
        <span className="text-sm font-semibold text-gray-400">
          Level {currentLevel} of {totalLevels}
        </span>
      </div>

      <div className="bg-white rounded-[32px] p-8 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black text-[#171C4A]">Level {currentLevel}</h2>
          <span className="text-xs font-semibold text-gray-400">
            {answers.filter(Boolean).length}/{questions.length} answered
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2 mb-6">
          <div
            className="bg-[#171C4A] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(answers.filter(Boolean).length / questions.length) * 100}%` }}
          />
        </div>

        <div className="space-y-5">
          {questions.map((q, index) => (
            <div key={index} className="border border-gray-100 rounded-2xl p-5">
              <h3 className="text-base font-bold text-[#171C4A] mb-3">
                {index + 1}. {q.question.replace(/^(Level \d+ · )/, "")}
              </h3>
              <div className="space-y-2">
                {q.options.map((option) => (
                  <label
                    key={option}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition ${
                      answers[index] === option
                        ? "border-[#171C4A] bg-[#F8F6E8]"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${index}`}
                      value={option}
                      checked={answers[index] === option}
                      onChange={() => {
                        const updated = [...answers];
                        updated[index] = option;
                        setAnswers(updated);
                      }}
                      className="accent-[#171C4A]"
                    />
                    <span className="font-medium text-gray-700 text-sm">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={answers.some((a) => !a)}
          className="w-full mt-6 py-4 rounded-2xl bg-[#171C4A] text-white font-bold text-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Submit Level {currentLevel} →
        </button>
        {answers.some((a) => !a) && (
          <p className="text-center text-xs text-red-400 mt-2">Answer all questions to submit</p>
        )}
      </div>
    </div>
  );
}

export default function AssessmentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<AssessmentState | null>(null);
  const [completed, setCompleted] = useState(false);
  const [finalScores, setFinalScores] = useState<{ level: number; correct: number; total: number }[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("assessment_data");
      if (raw) {
        const parsed = JSON.parse(raw);
        setState(parsed);
      }
    } catch {}
  }, []);

  const handleLevelComplete = (answers: string[], correct: number) => {
    if (!state) return;

    const level = state.currentLevel;
    const newLevelScores = [...(state.levelScores || []), { level, correct, total: state.questions.length }];
    const newAllAnswers = { ...(state.allAnswers || {}), [`Level ${level}`]: answers };

    if (level >= state.totalLevels) {
      setFinalScores(newLevelScores);
      setCompleted(true);
      const updated = {
        ...state,
        allAnswers: newAllAnswers,
        levelScores: newLevelScores,
        currentLevel: level,
      };
      localStorage.setItem("assessment_data", JSON.stringify(updated));
    } else {
      const nextLevel = level + 1;
      const nextQuestions = getQuestions(state.careerGoal, nextLevel);
      const updated: AssessmentState = {
        ...state,
        questions: nextQuestions,
        currentLevel: nextLevel,
        allAnswers: newAllAnswers,
        levelScores: newLevelScores,
      };
      setState(updated);
      localStorage.setItem("assessment_data", JSON.stringify(updated));
    }
  };

  const handleRetry = () => {
    if (!state) return;
    localStorage.removeItem("assessment_data");
    navigate({ to: "/assessment" });
  };

  if (completed) {
    const totalCorrect = finalScores.reduce((s, l) => s + l.correct, 0);
    const totalQuestions = finalScores.reduce((s, l) => s + l.total, 0);
    const overallPercent = Math.round((totalCorrect / totalQuestions) * 100);

    return (
      <div className="min-h-screen bg-[#F8F6E8] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-[40px] p-10 shadow-2xl text-center">
            <div className="text-7xl mb-4">{overallPercent >= 80 ? "🏆" : "📚"}</div>
            <h1 className="text-4xl font-black text-[#171C4A]">Assessment Complete</h1>
            <p className="text-gray-500 mt-2">{state?.careerGoal} — All 10 Levels</p>

            <div className="mt-8 bg-[#171C4A] text-white rounded-3xl p-8">
              <div className="text-6xl font-black">{overallPercent}%</div>
              <p className="text-white/70 mt-2">{totalCorrect} of {totalQuestions} correct across 10 levels</p>
            </div>

            <div className="mt-8 space-y-3">
              {finalScores.map((s) => (
                <div key={s.level} className="flex items-center gap-4 p-3 bg-gray-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-[#171C4A] text-white flex items-center justify-center font-bold text-sm">
                    {s.level}
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-sm font-semibold text-[#171C4A]">Level {s.level}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-[#171C4A] h-2 rounded-full" style={{ width: `${(s.correct / s.total) * 100}%` }} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#171C4A]">{s.correct}/{s.total}</span>
                </div>
              ))}
            </div>

            <button
              onClick={handleRetry}
              className="mt-8 w-full py-4 rounded-2xl bg-yellow-300 text-[#171C4A] font-bold text-lg hover:opacity-90 transition"
            >
              Retry Assessment
            </button>
            <button
              onClick={() => navigate({ to: "/dashboard" })}
              className="mt-3 w-full py-4 rounded-2xl bg-gray-100 text-[#171C4A] font-bold text-lg hover:bg-gray-200 transition"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!state) {
    return (
      <div className="min-h-screen bg-[#F8F6E8] px-6 py-16 text-center">
        <p className="text-gray-500">No assessment data found. Please start a new assessment.</p>
        <button onClick={() => navigate({ to: "/assessment" })} className="mt-4 px-6 py-3 bg-[#171C4A] text-white rounded-2xl font-bold">
          Start Assessment
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F6E8] px-6 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate({ to: "/assessment" })}
            className="px-4 py-2 bg-white shadow-md rounded-2xl hover:scale-105 transition text-sm font-semibold"
          >
            ← Back
          </button>
          <div className="text-right">
            <h1 className="text-lg font-black text-[#171C4A]">{state.careerGoal}</h1>
            <p className="text-xs text-gray-400">10 levels • 100 questions total</p>
          </div>
        </div>

        <LevelQuiz state={state} onLevelComplete={handleLevelComplete} />
      </div>
    </div>
  );
}
