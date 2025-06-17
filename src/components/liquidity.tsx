import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { SwapCard } from "@/Shared/SwapCard";
import PoolConfirm from "./liquidityfinial";
import Image from "next/image";
import RemoveLPComponent from "./Removeliquidity";
import ToggleTabs from "@/Shared/ToggleTab";
import TokenAreaCard from "@/Shared/TokenInfoCard";
import TokenCard from "@/Shared/TokenCard";
import ConfirmButton from "@/Shared/ConfirmButton";

export default function LiquidityPool() {
  const [activeTab, setActiveTab] = useState("Add LP");
  const [token1Amount, setToken1Amount] = useState("1");
  const [token2Amount, setToken2Amount] = useState("1");
  const [token1, setToken1] = useState("USDC");
  const [token2, setToken2] = useState("dRC");
  const [showConfirm, setShowConfirm] = useState(false);

  const handleReviewClick = () => {
    setShowConfirm(true);
  };

  const handleBackClick = () => {
    setShowConfirm(false);
  };

  return (
    <SwapCard>
      {showConfirm ? (
        <PoolConfirm
          onBack={handleBackClick}
          token1={token1}
          token2={token2}
          token1Amount={token1Amount}
          token2Amount={token2Amount}
        />
      ) : (
        <div className="text-white font-sans space-y-6">
          <ToggleTabs
            tabs={["Add LP", "Remove LP"]}
            onChange={tab => setActiveTab(tab)}
            initialActiveTab="Add LP"
          />

          {activeTab === "Add LP" ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Select Pair</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Select the tokens you'd like to use for providing liquidity.
                  </p>

                  <div className="flex justify-center w-full">
                    <div className="flex flex-row items-center gap-2 mx-auto">
                      <div
                        className="flex items-center gap-2 bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[100px] sm:min-w-[120px]"
                        style={{
                          background: "rgba(4, 66, 66, 0.16)",
                          boxShadow:
                            "0px 0px 24px 0px rgba(255, 255, 255, 0.3) inset",
                        }}
                      >
                        <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                          <Image
                            src="/usd-coin-usdc-logo.png"
                            alt="usdc-coin"
                            width={20}
                            height={20}
                            className="w-5 sm:w-6 h-5 sm:h-6"
                          />
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          {token1}
                        </span>
                        <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                      </div>

                      <Plus className="w-4 sm:w-5 h-4 sm:h-5 text-gray-400 shrink-0" />

                      <div
                        className="flex items-center gap-2 bg-slate-700/50 rounded-lg px-3 sm:px-4 py-2 sm:py-3 min-w-[100px] sm:min-w-[120px]"
                        style={{
                          background: "rgba(4, 66, 66, 0.16)",
                          boxShadow:
                            "0px 0px 24px 0px rgba(255, 255, 255, 0.3) inset",
                        }}
                      >
                        <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full flex items-center justify-center">
                          <Image
                            src="/drc-coin.png"
                            alt="drc-coin"
                            width={20}
                            height={20}
                            className="w-5 sm:w-6 h-5 sm:h-6"
                          />
                        </div>
                        <span className="font-medium text-sm sm:text-base">
                          {token2}
                        </span>
                        <ChevronDown className="w-3 sm:w-4 h-3 sm:h-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="border-t border-gray-400 rounded-lg p-4"
                  style={{
                    borderStyle: "dashed",
                    borderImageSource: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dashed' patternUnits='userSpaceOnUse' width='16' height='2'%3e%3cpath d='M0,1 L10,1' stroke='%23a1a1aa' stroke-width='1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='100' height='100' fill='url(%23dashed)'/%3e%3c/svg%3e")`,
                    borderImageSlice: 1,
                  }}
                >
                  <div className="flex items-center mt-4 gap-2 mb-2">
                    <span className="text-lg text-gray-400">APY</span>
                    <div className="px-1 border rounded-sm  text-sm border-gray-300">
                      i
                    </div>
                  </div>
                  <div className="text-2xl text-end font-bold text-purple-400 mb-1">
                    26.6%
                  </div>
                  <div className="text-xs text-purple-400">APY</div>
                  <div className="text-xs text-gray-400 mt-2">
                    Adding LP to this token pair provides
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-normal">Enter Token Amount</h3>

                <TokenAreaCard className="rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <input
                      type="text"
                      value={token1Amount}
                      onChange={e => setToken1Amount(e.target.value)}
                      className="bg-transparent text-2xl font-medium outline-none text-white w-full"
                      placeholder="1"
                    />
                    <TokenCard className="flex items-center gap-2 bg-slate-700/50 rounded-lg px-3 py-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center">
                        <Image
                          src="/drc-coin.png"
                          alt="drc-coin"
                          height={24}
                          width={24}
                        />
                      </div>
                      <span className="font-medium text-sm">{token2}</span>
                    </TokenCard>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>$0.00</span>
                    <span>Bal: 27,394.29</span>
                  </div>
                </TokenAreaCard>

                <TokenAreaCard className="rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <input
                      type="text"
                      value={token2Amount}
                      onChange={e => setToken2Amount(e.target.value)}
                      className="bg-transparent text-2xl font-medium outline-none text-white w-full"
                      placeholder="1"
                    />
                    <TokenCard className="flex items-center gap-2 bg-slate-700/50 rounded-lg px-3 py-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center">
                        <Image
                          src="/usd-coin-usdc-logo.png"
                          alt="usdc-coin"
                          width={24}
                          height={24}
                        />
                      </div>
                      <span className="font-medium text-sm">{token1}</span>
                    </TokenCard>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>$0.00</span>
                    <span>Bal: 27,394.29</span>
                  </div>
                </TokenAreaCard>

                <div className="rounded-lg p-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Pool Share</span>
                    <span className="text-white">5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Rate:</span>
                    <span className="text-white">1 USDC = 0.000013 ETH</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Fees:</span>
                    <span className="text-white">0.03 dRC</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400">Slippage</span>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">1%</span>
                      <div className="w-4 h-4 border border-gray-400 rounded-sm flex items-center justify-center">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <ConfirmButton
                  className="w-full text-white font-medium py-4 rounded-lg"
                  onClick={handleReviewClick}
                >
                  Review
                </ConfirmButton>
              </div>
            </div>
          ) : (
            <RemoveLPComponent />
          )}
        </div>
      )}
    </SwapCard>
  );
}
