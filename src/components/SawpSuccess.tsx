import React, { useState } from "react";
import { Flame, UserX, X, Check } from "lucide-react";
import Image from "next/image";
import ActionButton from "@/Shared/ActionButton";
import TokenCard from "@/Shared/TokenCard";
import CancelButton from "@/Shared/CancelButton";

const SwapSuccess = ({ onNewSwap }: { onNewSwap: () => void }) => {
  return (
    <div className="w-full  mx-auto rounded-2xl p-2 ">
      <div
        className="flex justify-between items-center mb-2 p-8 rounded-xl bg-white/5 border border-white/10"
        style={{
          background: "rgba(0, 29, 29, 0.93)",
          border: "1px solid",
          borderImageSource:
            "radial-gradient(90.87% 102.48% at 69.33% 123.97%, #717680 0%, rgba(102, 102, 102, 0) 100%)",
          boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.57) inset",
        }}
      >
        <div className="flex flex-col">
          <span className="text-3xl font-sans mb-2  text-green-400 leading-none">
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
          <span className="font-medium text-white whitespace-nowrap">dRC</span>
        </TokenCard>
      </div>

      <div className="flex flex-col items-center  ">
        <div className="flex items-center justify-center ">
          <svg
            width="150"
            height="150"
            viewBox="0 0 120 120"
          >
            <defs>
              <filter
                id="checkShadow"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feDropShadow
                  dx="0"
                  dy="-3"
                  stdDeviation="2"
                  floodColor="rgba(5, 96, 58, 1)"
                  floodOpacity="1"
                />

                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="2"
                  floodColor="rgba(108, 233, 166, 1)"
                  floodOpacity="1"
                />
              </filter>
            </defs>

            <path
              d="M35 60l18 18 36-36"
              stroke="#22c55e"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="url(#checkShadow)"
            />
          </svg>
        </div>
        <span className="text-2xl font-semibold text-[#B1F3FF]">
          Swap Completed
        </span>
      </div>

      <div className="flex justify-between gap-4 mt-10">
        <CancelButton className="w-full py-3 text-center  text-xl font-sans rounded-xl  text-white">
          View Txn ↗
        </CancelButton>

        <ActionButton
          onClick={onNewSwap}
          className="w-full py-3 text-center font-sans rounded-xl leading-tight text-white"
        >
          New Swap
        </ActionButton>
      </div>
    </div>
  );
};

export default SwapSuccess;
