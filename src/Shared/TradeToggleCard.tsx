import React, { useState, useRef, useEffect, useCallback } from "react";

interface BuySellToggleProps {
  tabs: [string, string];
  onChange?: (activeTab: string) => void;
  initialActiveTab?: string;
}

const BuySellToggle: React.FC<BuySellToggleProps> = ({
  tabs = ["Buy", "Sell"],
  onChange,
  initialActiveTab = "Buy",
}) => {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const updateIndicatorPosition = useCallback(() => {
    const activeTabElement = tabRefs.current[activeTab];
    if (activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      setIndicatorStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicatorPosition();
  }, [activeTab, updateIndicatorPosition]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    onChange?.(tab);
  };

  return (
    <div className="toggle-container">
      <div
        className="indicator"
        style={indicatorStyle}
      />
      {tabs.map(tab => {
        const isBuyTab = tab === "Buy";
        const isSellTab = tab === "Sell";
        const tabClass = `toggle-tab ${activeTab === tab ? "active" : ""} ${
          activeTab === tab ? (isBuyTab ? "buy-active" : "sell-active") : ""
        }`;

        return (
          <button
            key={tab}
            ref={el => {
              tabRefs.current[tab] = el;
            }}
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
          position: relative;
          margin-bottom: 1.5rem;
          padding: 0.35rem;
          border-radius: 0.75rem;
          background-color: rgba(0, 29, 29, 0.73);
          border: 1px solid rgba(113, 118, 128, 0.3);
          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.4);
          gap: 0.25rem;
        }

        .indicator {
          position: absolute;
          height: calc(100% - 0.7rem);
          top: 0.35rem;

          z-index: 0;
        }

        .toggle-tab {
          flex: 1;
          position: relative;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          color: #9ca3af;
          border: none;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .toggle-tab:hover:not(.active) {
          opacity: 0.8;
        }

        .toggle-tab.active {
          color: white;
          font-weight: 600;
        }

        .buy-active {
          background: linear-gradient(180deg, #12b76a 0%, #054f31 100%);
          box-shadow:
            0px 0px 8px 0px rgba(255, 255, 255, 1) inset,
            0px 4px 4px 0px rgba(0, 0, 0, 0.25),
            0 -2px 4px rgba(255, 255, 255, 0.1),
            0 5px 5px rgba(0, 0, 0, 0.57);
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .sell-active {
          background: linear-gradient(180deg, #f04438 0%, #912018 100%);
          box-shadow:
            0px 0px 8px 0px rgba(255, 255, 255, 1) inset,
            0 4px 4px rgba(0, 0, 0, 0.25),
            0 -2px 4px rgba(255, 255, 255, 0.1),
            0 5px 5px rgba(0, 0, 0, 0.57);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
      `}</style>
    </div>
  );
};

export default BuySellToggle;
