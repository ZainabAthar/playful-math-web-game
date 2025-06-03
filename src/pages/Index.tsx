
import { useState } from "react";
import Home from "@/components/Home";
import Game from "@/components/Game";
import Awards from "@/components/Awards";
import Profile from "@/components/Profile";
import Navigation from "@/components/Navigation";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [userProgress, setUserProgress] = useState({
    level: 3,
    totalPoints: 850,
    achievements: 8,
    completedLevels: ["addition", "subtraction"],
    streak: 5
  });

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Home userProgress={userProgress} onNavigate={setCurrentPage} />;
      case "game":
        return <Game userProgress={userProgress} setUserProgress={setUserProgress} onNavigate={setCurrentPage} />;
      case "awards":
        return <Awards userProgress={userProgress} />;
      case "profile":
        return <Profile userProgress={userProgress} />;
      default:
        return <Home userProgress={userProgress} onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        {renderCurrentPage()}
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      </div>
    </div>
  );
};

export default Index;
