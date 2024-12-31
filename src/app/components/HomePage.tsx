"use client";

import BottomTabs from "./BottomTabs";
import { useState } from "react";
import InfoBox from "./InfoBox";
import HistoryBox from "./HistoryBox";
import GamePage from "./GamePage";
import DisplayUser from "./DisplayUser";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DisplayUser />;
      case "search":
        return <GamePage />;
      case "history":
        return <HistoryBox />;
      case "about":
        return <InfoBox />;
      default:
        return <DisplayUser />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient text-center space-y-4">
      {renderContent()}
      <BottomTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
