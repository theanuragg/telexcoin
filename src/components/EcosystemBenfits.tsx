import React, { useState } from "react";
import LayerBenefits from "./layerbenefits";
import FoundationCard from "@/Shared/Foundationcard";

const Layer1BenefitsData = [
  {
    title: "dRC",
    subtitle: "Native token utility",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Seeding",
    subtitle: "Yield farming entry point",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Referral",
    subtitle: "User invite rewards",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "The Address Wallet",
    subtitle: "Wallet features & Ecosystem",
    amount: "$200",
    percentage: "20%",
  },
];

const Layer2BenefitsData = [
  {
    title: "TeleXcoin",
    subtitle: "Unlock Finance",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Ocean Bazaar",
    subtitle: "NFT Marketplace",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "RootOpia",
    subtitle: "Gamefi Universe",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Deep Assets",
    subtitle: "Real-World Assets",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Share Value",
    subtitle: "Learn, create, innovate",
    amount: "$200",
    percentage: "20%",
  },
];

const Layer3BenefitsData = [
  {
    title: "Innofi",
    subtitle: "Vote & fund innovation",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Innolaunch",
    subtitle: "DeWorld Launchpad",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Innofarm",
    subtitle: "The Web3 Job Marketplace",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "Meta Fabric",
    subtitle: "Your Style, Your NFT - DeFashion",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "GiveFi",
    subtitle: "Empowering Non-Profits",
    amount: "$200",
    percentage: "20%",
  },
  {
    title: "SaXophone",
    subtitle: "Live Podcasts for Insights",
    amount: "$200",
    percentage: "20%",
  },
];

const EcoSystemBenefits = () => {
  const [activeLayer, setActiveLayer] = useState<1 | 2 | 3>(1);

  return (
    <FoundationCard>
      <div className="text-[#8EE9E9] mx-2 my-2">ECOSYSTEM BENEFITS</div>

      {/* Layer Selectors */}
      <div className="flex justify-between w-full bg-[#141414a3] p-1 rounded-2xl mb-2">
        {[1, 2, 3].map(layer => (
          <button
            key={layer}
            onClick={() => setActiveLayer(layer as 1 | 2 | 3)}
            className={`px-6 py-2 rounded-xl ${
              activeLayer === layer
                ? "bg-[#332e3d] shadow-[inset_0px_0px_8px_0px_#FFFFFF42] text-white"
                : "bg-none text-[#B4B4B4]"
            }`}
          >
            Layer {layer}
          </button>
        ))}
      </div>

      {/* Benefits Display */}
      <div className="py-2 px-3">
        {activeLayer === 1 && (
          <LayerBenefits
            title={" Blockchain & Wallet Tools"}
            benefits={Layer1BenefitsData}
          />
        )}
        {activeLayer === 2 && (
          <LayerBenefits
            title="Fianace & Trade"
            benefits={Layer2BenefitsData}
          />
        )}
        {activeLayer === 3 && (
          <LayerBenefits
            title="Innovation & Community"
            benefits={Layer3BenefitsData}
          />
        )}
      </div>
    </FoundationCard>
  );
};

export default EcoSystemBenefits;
