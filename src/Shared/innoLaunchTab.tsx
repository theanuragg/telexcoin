import React, { useState } from "react";

interface InnoLaunchTabProps {
  tabs: [string, string];
  onChange?: (activeTab: string) => void;
  initialActiveTab?: string;
  children?: React.ReactNode;
}

const InnoLaunchTab: React.FC<InnoLaunchTabProps> = ({
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
      className="flex mb-4 p-1 px-2 rounded-2xl relative w-[300px]"
      style={{
        background: "#0B0B0B30",
        backdropFilter: "blur(8px)",
        boxShadow: `
          inset 0px 4px 4px 0px #0000001A,
          inset 0px -4px 4px 0px #FFFFFF29
        `,
      }}
    >
      <div
        className="absolute top-1 bottom-1 rounded-2xl transition-all duration-300 ease-out"
        style={{
          width: `calc(${100 / tabs.length}% - 4px)`,
          left:
            activeTab === tabs[0] ? "2px" : `calc(${100 / tabs.length}% + 2px)`,
          background: "#FFFFFF",
          boxShadow: "inset 0px -4px 12px 0px #BF8A84",
        }}
      />

      {tabs.map(tab => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`
              flex-1 py-2 px-2 rounded-2xl font-medium relative z-10 
              transition-all duration-300 ease-out text-sm
              flex items-center justify-center
              ${isActive ? "text-black font-semibold" : "text-white hover:text-gray-200"}
            `}
            style={{ minWidth: 0 }}
          >
            <span className="flex items-center justify-center truncate">
              {isActive && (
                <span
                  className="w-2 h-2 rounded-full mr-2 flex-shrink-0"
                  style={{ background: "#4ADE80" }}
                />
              )}
              <span className="truncate">{tab}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default InnoLaunchTab;
