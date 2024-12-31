"use client";

import BottomTabs from "./BottomTabs";
import { useState } from "react";
import InfoBox from "./InfoBox";
import GamePage from "./GamePage";
import DisplayUser from "./DisplayUser";
import GamePageTest from "./GamePageTest";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <DisplayUser />;
      case "search":
        return <GamePage />;
      case "chainSearch":
        return <GamePageTest />;
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
