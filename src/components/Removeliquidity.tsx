import ActionButton from "@/Shared/ActionButton";
import CancelButton from "@/Shared/CancelButton";
import TokenCard from "@/Shared/TokenCard";
import TokenAreaCard from "@/Shared/TokenInfoCard";
import Image from "next/image";
import React, { useState } from "react";

interface Pool {
  id: number;
  token1Color: string;
  token2Color: string;
  pairName: string;
  value: string;
  poolShare: string;
  totalReward: string;
  token1Amount: string;
  token2Amount: string;
  token1Symbol: string;
  token2Symbol: string;
}

interface PoolCardProps {
  token1Color?: string;
  token2Color?: string;
  pairName?: string;
  value?: string;
  poolShare?: string;
  totalReward?: string;
  onRemove: () => void;
}

const PoolCard: React.FC<PoolCardProps> = ({
  token1Color = "bg-blue-500",
  token2Color = "bg-gray-400",
  pairName = "USDC / ETH",
  value = "$8,724.82",
  poolShare = "1.26%",
  totalReward = "$ 597.62",
  onRemove,
}) => {
  return (
    <div className="rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 ${token1Color} rounded-lg `}>
            <Image
              src="/usd-coin-usdc-logo.png"
              alt="usdc-coin"
              width={24}
              height={24}
            />
          </div>
          <div className={`w-6 h-6 ${token2Color} rounded-lg -ml-4`}>
            <Image
              src="/Ethereum.png"
              alt="Eth.png"
              width={24}
              height={24}
            />
          </div>
          <span className="text-white font-medium ml-1">{pairName}</span>
        </div>
        <span className="text-green-400 font-semibold">{value}</span>
      </div>

      <div className="space-y-2 text-sm text-gray-400 mb-4">
        <div className="flex justify-between">
          <span>Pool Share:</span>
          <span>{poolShare}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Reward:</span>
          <span>{totalReward}</span>
        </div>
      </div>

      <CancelButton
        className="w-full text-white py-3 rounded-lg font-medium"
        onClick={onRemove}
      >
        Remove LP
      </CancelButton>
    </div>
  );
};

const RemoveLPComponent: React.FC = () => {
  const [removeFailed, setRemoveFailed] = useState<boolean>(false);
  const [removeSuccess, setRemoveSuccess] = useState<boolean>(false);
  const [selectedPool, setSelectedPool] = useState<Pool | null>(null);

  const pools: Pool[] = [
    {
      id: 1,
      token1Color: "bg-blue-500",
      token2Color: "bg-gray-400",
      pairName: "USDC / ETH",
      value: "$8,724.82",
      poolShare: "1.26%",
      totalReward: "$ 597.62",
      token1Amount: "283.2",
      token2Amount: "45.29",
      token1Symbol: "USDC",
      token2Symbol: "dRC",
    },
    {
      id: 2,
      token1Color: "bg-blue-500",
      token2Color: "bg-gray-400",
      pairName: "USDT / BTC",
      value: "$12,456.73",
      poolShare: "2.45%",
      totalReward: "$ 823.91",
      token1Amount: "6,228.37",
      token2Amount: "0.18",
      token1Symbol: "USDT",
      token2Symbol: "BTC",
    },
    {
      id: 3,
      token1Color: "bg-blue-500",
      token2Color: "bg-gray-400",
      pairName: "DAI / LINK",
      value: "$5,892.15",
      poolShare: "0.87%",
      totalReward: "$ 294.61",
      token1Amount: "2,946.08",
      token2Amount: "203.45",
      token1Symbol: "DAI",
      token2Symbol: "LINK",
    },
  ];

  const handleRemoveLP = (pool: Pool): void => {
    setSelectedPool(pool);
    const success = Math.random() > 0.5;

    if (success) {
      setRemoveSuccess(true);
      setRemoveFailed(false);
    } else {
      setRemoveFailed(true);
      setRemoveSuccess(false);
    }
  };

  const handleTryAgain = (): void => {
    setRemoveFailed(false);
    setRemoveSuccess(false);

    const success = Math.random() > 0.5;
    if (success) {
      setRemoveSuccess(true);
      setRemoveFailed(false);
    } else {
      setRemoveFailed(true);
      setRemoveSuccess(false);
    }
  };

  const handleBack = (): void => {
    setRemoveFailed(false);
    setRemoveSuccess(false);
    setSelectedPool(null);
  };

  if (removeSuccess || removeFailed) {
    return (
      <div className="flex flex-col gap-6 w-full text-white">
        <TokenAreaCard className="flex flex-col gap-4 p-10 rounded-xl bg-white/5 backdrop-blur-md relative overflow-hidden">
          {removeFailed && (
            <div
              className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-full opacity-50 -z-0"
              style={{
                background: "rgba(255, 54, 54, 1)",
                backdropFilter: "blur(180px)",
                filter: "blur(80px)",
              }}
            />
          )}

          {removeSuccess && (
            <div
              className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 w-80 h-48 rounded-full opacity-50 -z-0"
              style={{
                background: "rgba(34, 197, 94, 1)",
                backdropFilter: "blur(180px)",
                filter: "blur(80px)",
              }}
            />
          )}

          <div className="flex flex-col gap-3  p-2 rounded-lg">
            <div className="flex justify-between items-center gap-4">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-bold text-white">
                  {selectedPool?.token1Amount || "283.2"}
                </span>
                <span className="text-sm text-gray-400">
                  ${selectedPool?.token1Amount || "0.00"}
                </span>
              </div>
              <TokenCard className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-1">
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  <Image
                    src="/usd-coin-usdc-logo.png"
                    alt="drc-coin"
                    height={24}
                    width={24}
                  />
                </div>
                <span
                  className="text-lg
                font-normal
                 text-white"
                >
                  {selectedPool?.token1Symbol || "USDC"}
                </span>
              </TokenCard>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">
                  {selectedPool?.token2Amount || "45.29"}
                </span>
                <span className="text-sm text-gray-400">
                  ${selectedPool?.token2Amount || "0.00"}
                </span>
              </div>
              <TokenCard className="flex items-center gap-2 bg-slate-700 rounded-lg px-3 py-2">
                <div className="w-5 h-5 rounded-full flex items-center justify-center">
                  <Image
                    src="/drc-coin.png"
                    alt="drc-coin"
                    height={24}
                    width={24}
                  />
                </div>
                <span className="text-sm font-medium text-white">
                  {selectedPool?.token2Symbol || "dRC"}
                </span>
              </TokenCard>
            </div>
          </div>
        </TokenAreaCard>

        <div className="w-full h-[1px] border-t border-dashed border-white/30" />

        {removeSuccess ? (
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
              LP Removed Successfully
            </div>
            <div className="text-sm font-mono text-gray-400">
              Your liquidity has been removed from the pool successfully!
            </div>
          </div>
        ) : removeFailed ? (
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
              LP Removal Failed
            </div>
            <div className="text-sm font-mono text-gray-400">
              The liquidity removal wasn't successful. Would you like to try
              again?
            </div>
          </div>
        ) : null}

        <div className="flex justify-between gap-2 mt-6">
          <CancelButton
            onClick={handleBack}
            className="w-full py-3 rounded-xl font-sans leading-tight text-white"
          >
            &lt; Back
          </CancelButton>
          <ActionButton
            onClick={removeFailed ? handleTryAgain : handleBack}
            className="w-full py-3 rounded-xl text-[#7cd2cd] text-xl font-normal"
          >
            {removeFailed ? "Try Again" : removeSuccess ? "Done" : "Remove LP"}
          </ActionButton>
        </div>
      </div>
    );
  }

  return (
    <div className="text-white font-sans space-y-6">
      {pools.map(pool => (
        <PoolCard
          key={pool.id}
          token1Color={pool.token1Color}
          token2Color={pool.token2Color}
          pairName={pool.pairName}
          value={pool.value}
          poolShare={pool.poolShare}
          totalReward={pool.totalReward}
          onRemove={() => handleRemoveLP(pool)}
        />
      ))}
    </div>
  );
};

export default RemoveLPComponent;
