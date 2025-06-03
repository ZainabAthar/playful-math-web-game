
import { Trophy, Star, Target, Zap, Award, Calendar } from "lucide-react";
import ProgressBar from "./ProgressBar";

interface AwardsProps {
  userProgress: any;
}

const Awards = ({ userProgress }: AwardsProps) => {
  const achievements = [
    {
      id: "first-steps",
      title: "First Steps",
      description: "Complete your first lesson",
      icon: Star,
      completed: true,
      progress: 100,
      reward: "Level 1"
    },
    {
      id: "math-star",
      title: "Math Star",
      description: "Answer 10 questions right in a row",
      icon: Trophy,
      completed: true,
      progress: 100,
      reward: "Level 2"
    },
    {
      id: "speed-demon",
      title: "Speed Demon",
      description: "Answer 5 questions in under 2 minutes",
      icon: Zap,
      completed: false,
      progress: 60,
      reward: "Speed Badge"
    },
    {
      id: "perfect-score",
      title: "Perfect Score",
      description: "Get 100% on any quiz",
      icon: Target,
      completed: false,
      progress: 80,
      reward: "Perfect Badge"
    }
  ];

  const stats = [
    { label: "Total Score", value: userProgress.totalPoints, icon: Star },
    { label: "Streak", value: `${userProgress.streak} days`, icon: Calendar },
    { label: "Completion", value: "40%", icon: Trophy }
  ];

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white mb-6">
        <h1 className="text-xl font-bold mb-2">Awards & Achievements</h1>
        <p className="text-cyan-100 text-sm">Your Progress</p>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon size={20} />
                </div>
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-cyan-100">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-6">
        {["All Subjects", "Learning", "Fun Games", "Quiz Master", "Subjects", "Collections", "Earned"].map((tab, index) => (
          <button
            key={tab}
            className={`flex-1 text-xs py-2 px-2 rounded-md transition-all duration-200 ${
              index === 0
                ? "bg-white text-gray-800 shadow-sm font-medium"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="space-y-4">
        {achievements.map((achievement) => {
          const Icon = achievement.icon;
          return (
            <div
              key={achievement.id}
              className={`bg-white rounded-xl p-4 border-2 transition-all duration-200 ${
                achievement.completed
                  ? "border-green-200 bg-green-50"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  achievement.completed
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-400"
                }`}>
                  <Icon size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h3 className="font-semibold text-gray-800">{achievement.title}</h3>
                    {achievement.completed && (
                      <Award size={16} className="text-yellow-500 fill-current" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{achievement.description}</p>
                  <div className="text-xs text-gray-500 mb-2">Reward: {achievement.reward}</div>
                  
                  {!achievement.completed && (
                    <>
                      <ProgressBar progress={achievement.progress} className="mb-2" />
                      <div className="text-xs text-gray-500">
                        Progress: {achievement.progress}%
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Weekly Activity */}
      <div className="mt-8 bg-white rounded-xl p-4 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4">📊 Weekly Activity</h3>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-gray-500 mb-1">{day}</div>
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-medium ${
                index < 5
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-100 text-gray-400"
              }`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
