import React, { useState } from "react";
import { Flame, UserX, X } from "lucide-react";
import SwapSuccess from "./SawpSuccess";
import Image from "next/image";
import ActionButton from "@/Shared/ActionButton";
import CancelButton from "@/Shared/CancelButton";
import TokenCard from "@/Shared/TokenCard";
import TokenAreaCard from "@/Shared/TokenInfoCard";

const SwapContent = ({ onCancel }: { onCancel: () => void }) => {
  const [swapFailed, setSwapFailed] = useState(false);
  const [swapSuccess, setSwapSuccess] = useState(false);

  const handleSwapClick = () => {
    const success = Math.random() > 0.5;

    if (success) {
      setSwapSuccess(true);
      setSwapFailed(false);
    } else {
      setSwapFailed(true);
      setSwapSuccess(false);
    }
  };

  const handleTryAgain = () => {
    setSwapFailed(false);
    setSwapSuccess(false);
  };

  const handleNewSwap = () => {
    setSwapSuccess(false);
    setSwapFailed(false);
  };

  if (swapSuccess) {
    return <SwapSuccess onNewSwap={handleNewSwap} />;
  }

  return (
    <div className="w-full max-w-[900px] mx-auto rounded-2xl">
      <TokenAreaCard className="flex flex-col gap-4 p-6 rounded-xl backdrop-blur-sm bg-slate-700/60 relative overflow-hidden">
        {swapFailed && (
          <div
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-full opacity-50 -z-0"
            style={{
              background: "rgba(255, 54, 54, 1)",
              backdropFilter: "blur(180px)",
              filter: "blur(80px)",
            }}
          ></div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl font-sans mb-2 leading-none text-red-500">
              283.2
            </span>
            <span className="text-sm text-gray-400 leading-tight">$0.00</span>
          </div>
          <TokenCard className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
              <Image
                src="/usd-coin-usdc-logo.png"
                alt="USDC"
                height={24}
                width={24}
                className="rounded-full"
              />
            </div>
            <span className="font-medium text-white">USDC</span>
          </TokenCard>
        </div>

        <div className="flex justify-center py-2">
          <span
            className="text-xl text-gray-400"
            style={{ display: "inline-block", transform: "rotate(90deg)" }}
          >
            {">"}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-3xl font-sans mb-2 leading-none text-green-500">
              45.29
            </span>
            <span className="text-sm text-gray-400 leading-tight">$283.19</span>
          </div>
          <TokenCard className="flex items-center gap-2 flex-shrink-0">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
              <Image
                src="/drc-coin.png"
                alt="DRC"
                height={24}
                width={24}
                className="rounded-full"
              />
            </div>
            <span className="font-medium text-white whitespace-nowrap">
              dRC
            </span>
          </TokenCard>
        </div>
      </TokenAreaCard>

      {!swapFailed ? (
        <>
          <div className="mt-6 mb-2 text-2xl font-mono text-white">
            Confirm Swap
          </div>
          <div className="text-sm text-gray-500 mb-10">
            Confirm Swap details
          </div>
        </>
      ) : (
        <div className="mt-6 mb-10 text-center">
          <div className="flex justify-center mt-32 mb-4">
            <div
              className="absolute w-16 h-4 rounded-sm"
              style={{
                backgroundColor: "rgba(240, 68, 56, 1)",
                boxShadow:
                  "0px -2px 4px 0px rgba(127, 29, 29, 1) inset, 0px 2px 3px 0px rgba(252, 165, 165, 1) inset",
                transform: "rotate(45deg)",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                marginTop: "-8px",
                marginLeft: "-32px",
              }}
            />
            <div
              className="absolute w-16 h-4 rounded-sm"
              style={{
                backgroundColor: "rgba(240, 68, 56, 1)",
                boxShadow:
                  "0px -2px 4px 0px rgba(127, 29, 29, 1) inset, 0px 2px 3px 0px rgba(252, 165, 165, 1) inset",
                transform: "rotate(-45deg)",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                marginTop: "-8px",
                marginLeft: "-32px",
              }}
            />
          </div>
          <div className="text-3xl font-mono text-red-500 mb-2">
            Swap Failed
          </div>
          <div className="text-sm font-mono text-gray-400">
            The swap wasn't successful. Would you like to try again?
          </div>
        </div>
      )}

      <div className="flex items-center justify-center gap-18 mb-8 text-lg">
        <div
          className="flex flex-row items-center gap-4 rounded-2xl px-4 py-1"
          style={{
            background: "rgba(4, 66, 66, 0.16)",
            boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.3) inset",
          }}
        >
          <Flame className="w-8 h-8 text-orange-500" />
          <span className="text-gray-300">0.03 dRC</span>
        </div>

        <div
          className="flex items-center gap-8 rounded-2xl px-4 py-1"
          style={{
            background: "rgba(4, 66, 66, 0.16)",
            boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.3) inset",
          }}
        >
          <UserX className="w-8 h-8 text-green-500" />
          <span className="text-gray-300">8.1%</span>
        </div>
      </div>

      <div className="flex justify-between gap-4 mt-2">
        <CancelButton
          onClick={onCancel}
          className="w-full py-3 rounded-xl  text-xl  text-[#97ebea] font-noraml text-center"
        >
          Cancel
        </CancelButton>

        <ActionButton
          onClick={swapFailed ? handleTryAgain : handleSwapClick}
          className="w-full py-3 rounded-xl text-xl font-normal text-[#97ebea] text-center"
        >
          {swapFailed ? "Try Again" : "Swap"}
        </ActionButton>
      </div>
    </div>
  );
};

export default SwapContent;
