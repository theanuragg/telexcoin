import React, { useState } from "react";

interface ToggleTabsProps {
  tabs: [string, string];
  onChange?: (activeTab: string) => void;
  initialActiveTab?: string;
  children?: React.ReactNode;
}

const ToggleTabs: React.FC<ToggleTabsProps> = ({
  tabs,
  onChange,
  initialActiveTab,
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab ?? tabs[0]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div
      className="flex mb-6 p-1 rounded-xl relative"
      style={{
        background: "rgba(0, 29, 29, 0.73)",
        border: "1px solid rgba(113, 118, 128, 0.3)",
        boxShadow: "inset 0px 3px 6px rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        className="absolute top-2 bottom-2 rounded-lg transition-all duration-500 ease-out"
        style={{
          width: "calc(50% - 4px)",
          left: activeTab === tabs[0] ? "4px" : "calc(50% + 0px)",
          background: `
            radial-gradient(ellipse 200% 150% at 100% -30%, rgba(125, 230, 229, 0.5) 0%, rgba(125, 230, 229, 0) 100%),
            radial-gradient(ellipse 250% 200% at 110% -80%, rgba(212, 47, 197, 0.7) 15%, rgba(125, 230, 229, 0) 100%)
          `,
          border: "1px solid rgba(233, 234, 235, 0.2)",
          boxShadow: `
            0px 4px 4px 0px #00000040,
            0px -2px 4px 0px #FFFFFF40,
            0px 5px 5px 0px #00000091
          `,
        }}
      />

      {tabs.map(tab => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              flex-1 py-3 px-6 rounded-lg font-medium relative z-10 
              transition-all duration-500 ease-out text-sm
              ${
                isActive
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-teal-200"
              }
            `}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default ToggleTabs;
