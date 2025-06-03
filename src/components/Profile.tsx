
import { Calendar, Star, Trophy, Target, Settings } from "lucide-react";

interface ProfileProps {
  userProgress: any;
}

const Profile = ({ userProgress }: ProfileProps) => {
  const profileStats = [
    { label: "Points Earned", value: userProgress.totalPoints, color: "text-blue-600" },
    { label: "Streak", value: userProgress.streak, color: "text-green-600" },
    { label: "Achievements", value: userProgress.achievements, color: "text-purple-600" },
    { label: "Level", value: userProgress.level, color: "text-orange-600" }
  ];

  const recentActivity = [
    { date: "Today", activity: "Completed Addition Adventure", points: 50 },
    { date: "Yesterday", activity: "Earned Math Star badge", points: 25 },
    { date: "2 days ago", activity: "Perfect score on quiz", points: 100 },
  ];

  return (
    <div className="p-4 pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl p-6 text-white mb-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👧</span>
          </div>
          <h1 className="text-xl font-bold mb-1">My Profile</h1>
          <h2 className="text-lg font-semibold mb-1">Zainab</h2>
          <p className="text-cyan-100 text-sm">Young mathematical superstar ⭐</p>
          
          <div className="flex justify-center space-x-4 mt-4">
            {profileStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-xs text-cyan-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <div className="text-lg font-bold text-gray-800">Progress</div>
          <div className="text-sm text-gray-600">Weekly Activity</div>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100 text-center">
          <Target className="w-8 h-8 text-green-500 mx-auto mb-2" />
          <div className="text-lg font-bold text-gray-800">2 Awards</div>
          <div className="text-sm text-gray-600">This week</div>
        </div>
      </div>

      {/* Weekly Activity Grid */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Weekly Activity
        </h3>
        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
            const activities = [3, 2, 1, 4, 2, 0, 1];
            const activity = activities[index];
            return (
              <div key={day} className="text-center">
                <div className="text-xs text-gray-500 mb-2">{day}</div>
                <div className={`w-8 h-8 rounded-lg mx-auto mb-1 ${
                  activity === 0
                    ? "bg-gray-100"
                    : activity <= 2
                    ? "bg-cyan-200"
                    : activity <= 3
                    ? "bg-cyan-400"
                    : "bg-cyan-600"
                }`} />
                <div className="text-xs text-gray-600">{activity}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 mb-6">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <Star className="w-5 h-5 mr-2" />
          Rewards Earned
        </h3>
        <div className="space-y-3">
          {recentActivity.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="font-medium text-gray-800 text-sm">{item.activity}</div>
                <div className="text-xs text-gray-500">{item.date}</div>
              </div>
              <div className="flex items-center space-x-1 text-cyan-600">
                <Star size={14} className="fill-current" />
                <span className="text-sm font-medium">+{item.points}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="bg-white rounded-xl p-4 border border-gray-100">
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
          <Trophy className="w-5 h-5 mr-2" />
          Fun Facts
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div>🎯 Most improved subject: Addition</div>
          <div>⚡ Fastest time: 45 seconds</div>
          <div>🏆 Favorite topic: Number patterns</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
