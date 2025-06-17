import React, { useState } from "react";

interface ToggleCardProps {
  tabs: [string, string];
  onChange?: (activeTab: string) => void;
  initialActiveTab?: string;
}

const ToggleCard: React.FC<ToggleCardProps> = ({
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
    <div className="toggle-container">
      {tabs.map((tab, index) => {
        const isActive = activeTab === tab;
        const tabClass = `toggle-tab ${isActive ? "active" : ""} ${
          isActive ? `active-tab-${index + 1}` : ""
        }`;

        return (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={tabClass}
          >
            {tab}
          </button>
        );
      })}

      <style jsx>{`
        .toggle-container {
          display: flex;
          margin-bottom: 1.5rem;
          padding: 0.35rem;
          border-radius: 0.75rem;
          background-color: rgba(0, 29, 29, 0.73);
          border: 1px solid rgba(113, 118, 128, 0.3);
          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4);
          gap: 0.25rem;
        }

        .toggle-tab {
          flex: 1;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          color: #9ca3af;
          border: none;
          background: transparent;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
          z-index: 1;
          overflow: hidden;
        }

        .toggle-tab:hover:not(.active) {
          color: #99f6e4;
        }

        .toggle-tab.active {
          color: white;
          font-weight: 600;
        }

        .active-tab-1 {
          background:
            radial-gradient(
              200% 150% at 100% -30%,
              rgba(125, 230, 229, 0.5) 0%,
              transparent 100%
            ),
            radial-gradient(
              250% 200% at 110% -80%,
              rgba(212, 47, 197, 0.7) 15%,
              transparent 100%
            );
          box-shadow:
            0 4px 4px rgba(0, 0, 0, 0.25),
            0 5px 5px rgba(0, 0, 0, 0.57);
          border: 1px solid rgba(233, 234, 235, 0.2);
        }

        .active-tab-2 {
          background:
            linear-gradient(0deg, #356160, #356160),
            radial-gradient(
              267.35% 267.35% at 0.35% -50%,
              #7de6e5 0%,
              rgba(0, 0, 0, 0) 100%
            );
          border: 1px solid;
          border-image-source: radial-gradient(
            84.94% 91.84% at 12.43% 0%,
            #e9eaeb 0%,
            rgba(153, 153, 153, 0) 100%
          );
          border-image-slice: 1;
          box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default ToggleCard;
