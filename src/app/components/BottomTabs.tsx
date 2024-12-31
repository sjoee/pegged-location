import React, { Dispatch, SetStateAction } from "react";
import Image from "next/image";

interface BottomTabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

const BottomTabs: React.FC<BottomTabsProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "home", label: "Home", icon: "/home.svg" },
    { id: "search", label: "Private", icon: "/game.svg" },
    { id: "chainSearch", label: "On-Chain", icon: "/history.svg" },
    { id: "about", label: "About", icon: "/about.svg" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 items-end bg-white shadow-lg p-2 flex justify-around text-center">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 text-center flex flex-col items-center ${
            activeTab === tab.id ? "text-primary font-bold" : "text-gray-500"
          }`}
        >
          <Image
            src={tab.icon}
            alt={tab.label}
            width={activeTab === tab.id ? 32 : 22}
            height={activeTab === tab.id ? 32 : 22}
          />
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default BottomTabs;
