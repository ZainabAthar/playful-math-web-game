
import { Star, Trophy, Clock } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface HomeProps {
  userProgress: any;
  onNavigate: (page: string) => void;
}

const Home = ({ userProgress, onNavigate }: HomeProps) => {
  const learningLevels = [
    {
      id: "addition",
      title: "Addition Adventure",
      description: "Learn to add numbers",
      progress: 85,
      difficulty: "Beginner",
      completed: true,
    },
    {
      id: "subtraction",
      title: "Subtraction Safari",
      description: "Master subtraction skills",
      progress: 65,
      difficulty: "Beginner",
      completed: false,
    },
    {
      id: "multiplication",
      title: "Multiplication Magic",
      description: "Discover multiplication",
      progress: 20,
      difficulty: "Medium",
      completed: false,
    },
    {
      id: "division",
      title: "Division Discovery",
      description: "Explore division concepts",
      progress: 0,
      difficulty: "Medium",
      completed: false,
    },
  ];

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white mb-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-cyan-100 text-sm">Good morning!</p>
            <h1 className="text-xl font-bold">Hello, Zainab!</h1>
            <div className="flex items-center gap-4 mt-3">
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <Trophy size={14} />
                <span className="text-sm font-medium">{userProgress.level}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <Star size={14} />
                <span className="text-sm font-medium">{userProgress.totalPoints}</span>
              </div>
              <div className="flex items-center gap-1 bg-white/20 rounded-full px-3 py-1">
                <Clock size={14} />
                <span className="text-sm font-medium">Easy streak</span>
              </div>
            </div>
          </div>
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg">👋</span>
          </div>
        </div>
      </div>

      {/* Learning Levels */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Learning Levels</h2>
          <button className="text-cyan-600 text-sm font-medium">View Achievements</button>
        </div>

        <div className="space-y-4">
          {learningLevels.map((level) => (
            <div
              key={level.id}
              className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{level.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{level.description}</p>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {level.difficulty}
                  </span>
                </div>
                {level.completed && (
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Star size={16} className="text-green-600 fill-current" />
                  </div>
                )}
              </div>
              
              <ProgressBar progress={level.progress} className="mb-3" />
              
              <button
                onClick={() => onNavigate("game")}
                className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 ${
                  level.progress > 0
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {level.progress > 0 ? "Continue" : "Start Learning"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
