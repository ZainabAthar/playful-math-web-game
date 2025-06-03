
import { useState, useEffect } from "react";
import { ArrowLeft, Star, Trophy } from "lucide-react";

interface GameProps {
  userProgress: any;
  setUserProgress: (progress: any) => void;
  onNavigate: (page: string) => void;
}

const Game = ({ userProgress, setUserProgress, onNavigate }: GameProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions = [
    {
      question: "Sarah has 5 apples. She gave away 2 apples to her friend. How many apples does Sarah have left?",
      options: [2, 3, 4, 7],
      correct: 1,
      type: "subtraction"
    },
    {
      question: "What is 8 + 4?",
      options: [10, 11, 12, 13],
      correct: 2,
      type: "addition"
    },
    {
      question: "Tom has 3 bags. Each bag has 4 marbles. How many marbles does Tom have in total?",
      options: [7, 10, 12, 15],
      correct: 2,
      type: "multiplication"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correct;
    setIsCorrect(correct);
    setShowResult(true);
    
    if (correct) {
      setScore(score + 10);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Game complete - update progress
      const newProgress = {
        ...userProgress,
        totalPoints: userProgress.totalPoints + score,
        achievements: userProgress.achievements + (score > 20 ? 1 : 0)
      };
      setUserProgress(newProgress);
      onNavigate("awards");
    }
  };

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => onNavigate("home")}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold text-gray-800">🍎 Apple Math Learning</h1>
          <p className="text-sm text-gray-500">Practice counting and basic math with apples!</p>
        </div>
        <div className="w-10 h-10" />
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-1">
            <Star size={16} className="text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{score}</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-6 leading-relaxed">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showResult && handleAnswerSelect(index)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                showResult
                  ? index === questions[currentQuestion].correct
                    ? "border-green-500 bg-green-50 text-green-700"
                    : selectedAnswer === index
                    ? "border-red-500 bg-red-50 text-red-700"
                    : "border-gray-200 bg-gray-50 text-gray-500"
                  : selectedAnswer === index
                  ? "border-cyan-500 bg-cyan-50"
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <span className="font-medium">{option}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      {showResult && (
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm mb-6">
          <div className="text-center">
            <div className={`text-4xl mb-3 ${isCorrect ? "text-green-500" : "text-red-500"}`}>
              {isCorrect ? "🎉" : "😔"}
            </div>
            <h3 className={`text-lg font-bold mb-2 ${isCorrect ? "text-green-700" : "text-red-700"}`}>
              {isCorrect ? "Perfect! Great job!" : "Not quite right. Try again next time!"}
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              {isCorrect
                ? "You earned 10 points! Keep up the excellent work."
                : "The correct answer was " + questions[currentQuestion].options[questions[currentQuestion].correct]
              }
            </p>
            <button
              onClick={handleNext}
              className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Game;
