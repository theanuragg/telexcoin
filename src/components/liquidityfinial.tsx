import React, { useState } from "react";
import Image from "next/image";
import TokenAreaCard from "@/Shared/TokenInfoCard";
import TokenCard from "@/Shared/TokenCard";
import CancelButton from "@/Shared/CancelButton";
import ActionButton from "@/Shared/ActionButton";

interface PoolConfirmProps {
  onBack: () => void;
  token1: string;
  token2: string;
  token1Amount: string | number;
  token2Amount: string | number;
  onSuccess?: () => void;
}

const PoolConfirm: React.FC<PoolConfirmProps> = ({
  onBack,
  token1,
  token2,
  token1Amount,
  token2Amount,
  onSuccess,
}) => {
  const [lpFailed, setLpFailed] = useState(false);
  const [lpSuccess, setLpSuccess] = useState(false);

  const handleAddLPClick = () => {
    const success = Math.random() > 0.5;

    if (success) {
      setLpSuccess(true);
      setLpFailed(false);

      if (onSuccess) {
        setTimeout(() => onSuccess(), 1000);
      }
    } else {
      setLpFailed(true);
      setLpSuccess(false);
    }
  };

  const handleTryAgain = () => {
    setLpFailed(false);
    setLpSuccess(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full text-white">
      <TokenAreaCard className="flex flex-col gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md relative overflow-hidden">
        {lpFailed && (
          <div
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-full opacity-50 -z-0"
            style={{
              background: "rgba(255, 54, 54, 1)",
              backdropFilter: "blur(180px)",
              filter: "blur(80px)",
            }}
          />
        )}

        {lpSuccess && (
          <div
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-full opacity-50 -z-0"
            style={{
              background: "rgba(34, 197, 94, 1)",
              backdropFilter: "blur(180px)",
              filter: "blur(80px)",
            }}
          />
        )}

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[28px] font-bold leading-none text-white">
              {token2Amount}
            </span>
            <span className="text-sm text-gray-300 leading-tight">$0.00</span>
          </div>
          <TokenCard
            className="flex items-center gap-2 px-3 py-2
           rounded-md  backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
              <Image
                src="/drc-coin.png"
                alt="drc-coin"
                height={24}
                width={24}
              />
            </div>
            <span className="text-sm font-medium">{token2}</span>
          </TokenCard>
        </div>

        <div className="flex justify-center text-2xl text-white/60 font-light">
          +
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-[28px] font-bold leading-none text-white">
              {token1Amount}
            </span>
            <span className="text-sm text-gray-300 leading-tight">$0.00</span>
          </div>
          <TokenCard
            className="flex items-center gap-2 px-3 py-2
          rounded-md backdrop-blur-md"
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center">
              <Image
                src="/usd-coin-usdc-logo.png"
                alt="usdc-coin"
                width={24}
                height={24}
              />
            </div>
            <span className="text-sm font-medium">{token1}</span>
          </TokenCard>
        </div>
      </TokenAreaCard>

      <div className="w-full h-[1px] border-t border-dashed border-white/30" />

      {lpSuccess ? (
        <div className="text-center">
          <div className="flex justify-center ">
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
          <div className="text-3xl font-mono text-green-500 mb-2">
            LP Added Successfully
          </div>
          <div className="text-sm font-mono text-gray-400">
            Your liquidity has been added to the pool successfully!
          </div>
        </div>
      ) : lpFailed ? (
        <div className="text-center">
          <div className="flex justify-center mt-8 mb-8">
            <div className="relative">
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
          </div>
          <div className="text-3xl font-mono text-red-500 mb-2">
            LP Addition Failed
          </div>
          <div className="text-sm font-mono text-gray-400">
            The liquidity addition wasn't successful. Would you like to try
            again?
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-xl font-mono mb-2">Confirm Position</h3>
          <p className="text-xs text-gray-300 mb-4">
            By confirming your position, your funds will be secured in the pool.
          </p>

          <div className="grid grid-cols-2 text-sm gap-y-3">
            <span className="text-gray-400 flex items-center gap-1">
              APY{" "}
              <span className="text-xs">
                <div className="px-1 border rounded-sm  text-md border-gray-300">
                  i
                </div>
              </span>
            </span>
            <span className="text-white text-right">26.6%</span>

            <span className="text-gray-400 flex items-center gap-1">
              Pool Share{" "}
              <span className="text-xs">
                {" "}
                <div className="px-1 border rounded-sm  text-md border-gray-300">
                  i
                </div>
              </span>
            </span>
            <span className="text-white text-right">5%</span>

            <span className="text-gray-400 flex items-center gap-1">
              Rate{" "}
              <span className="text-xs">
                {" "}
                <div className="px-1 border rounded-sm  text-md border-gray-300">
                  i
                </div>
              </span>
            </span>
            <span className="text-white text-right">1 USDC = 0.000013 ETH</span>

            <span className="text-gray-400 flex items-center gap-1">
              Fees{" "}
              <span className="text-xs">
                {" "}
                <div className="px-1 border rounded-sm  text-md border-gray-300">
                  i
                </div>
              </span>
            </span>
            <span className="text-white text-right">0.03 dRC</span>

            <span className="text-gray-400 flex items-center gap-1">
              Slippage{" "}
              <span className="text-xs">
                {" "}
                <div className="px-1 border rounded-sm  text-md border-gray-300">
                  i
                </div>
              </span>
            </span>
            <span className="text-green-400 text-right">1%</span>
          </div>
        </div>
      )}

      <div className="flex justify-between gap-2 mt-6">
        <CancelButton
          onClick={onBack}
          className="w-full py-3 rounded-xl font-sans leading-tight text-white"
        >
          Back
        </CancelButton>
        <ActionButton
          onClick={lpFailed ? handleTryAgain : handleAddLPClick}
          className="w-full py-3 rounded-xl text-[#7cd2cd] text-xl font-normal"
        >
          {lpFailed ? "Try Again" : lpSuccess ? "Done" : "Add LP"}
        </ActionButton>
      </div>
    </div>
  );
};

export default PoolConfirm;
