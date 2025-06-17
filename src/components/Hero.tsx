import React, { useState, memo, useCallback } from "react";
import Image from "next/image";
import Appbar from "../Shared/Appbar";
import SwapComponent from "./Swap";
import TrendingCard from "./News";
import LiquidityPool from "./liquidity";
import MobileBottomNav from "./Navbar";
import InnoLaunch from "./Infolaunch";
import Foundation from "./Foundation";

const ComingSoonBox = memo(
  ({ color, name }: { color: string; name: string }) => (
    <div
      className={`w-full h-[200px] sm:h-[400px] bg-gradient-to-br ${color} rounded-xl sm:rounded-2xl p-4 text-white font-sans shadow-2xl flex items-center justify-center`}
    >
      <h2 className="text-base sm:text-2xl font-bold text-center">
        {name} Component - Coming Soon
      </h2>
    </div>
  )
);
ComingSoonBox.displayName = "ComingSoonBox";

const ActiveContent = memo(({ activeSection }: { activeSection: string }) => {
  const getGradientColor = useCallback((section: string) => {
    switch (section) {
      case "Foundation":
        return "";
      case "InoLaunch":
        return "";
      default:
        return "from-yellow-800 via-yellow-700 to-yellow-600";
    }
  }, []);

  const showTrendingCard =
    activeSection === "Swap" ||
    activeSection === "Pool" ||
    activeSection === "InfoLaunch";

  return (
    <div className="flex flex-col items-center w-full gap-3 sm:gap-6 px-0">
      {showTrendingCard && (
        <div className="w-xl flex items-center justify-center flex-row overflow-x-auto pb-2">
          <TrendingCard />
        </div>
      )}
      <div className="w-full flex flex-col justify-center items-center px-0">
        {activeSection === "Swap" ? (
          <SwapComponent />
        ) : activeSection === "Pool" ? (
          <LiquidityPool />
        ) : activeSection === "InoLaunch" ? (
          <InnoLaunch />
        ) : activeSection === "Foundation" ? (
          <Foundation />
        ) : (
          <ComingSoonBox
            color={getGradientColor(activeSection)}
            name={activeSection}
          />
        )}
      </div>
    </div>
  );
});
ActiveContent.displayName = "ActiveContent";

const Hero: React.FC = () => {
  const [activeSection, setActiveSection] = useState("Swap");

  const handleSectionChange = useCallback((section: string) => {
    setActiveSection(section);
  }, []);

  const getBackgroundGradient = useCallback((section: string) => {
    switch (section) {
      case "InoLaunch":
        return "linear-gradient(270deg, #DE9994 0%, #F4B7AB 100%)";
      case "Foundation":
        return "#21212B";
      default:
        return "linear-gradient(180deg, #000814 0%, #00334E 100%)";
    }
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        <Appbar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </header>

      <div
        className="relative min-h-screen overflow-hidden transition-all duration-500 ease-in-out flex flex-col"
        style={{
          background: getBackgroundGradient(activeSection),
        }}
      >
        <div className="flex-grow flex flex-col px-6 pt-32 sm:pt-24 pb-20 z-30 w-full">
          <div className="w-full flex flex-col items-center">
            <ActiveContent activeSection={activeSection} />
          </div>
        </div>
      </div>

      <MobileBottomNav
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </>
  );
};

export default Hero;
