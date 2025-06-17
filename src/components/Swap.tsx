import React, { useState } from "react";
import {
  ArrowUpDown,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  TrendingUp,
  CloudLightning,
  FileWarning,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import { SwapCard } from "../Shared/SwapCard";
import SwapContent from "./Swapfinal";
import ConfirmButton from "@/Shared/ConfirmButton";
import TokenAreaCard from "@/Shared/TokenInfoCard";
import TokenCard from "@/Shared/TokenCard";
import ToggleTabs from "@/Shared/ToggleTab";
import { TradeCard } from "@/Shared/TradeCard";
import TradeComponent from "./Trade";
import ToggleCard from "@/Shared/ToggleTabComp";

export default function SwapComponent() {
  const [fromAmount, setFromAmount] = useState("10");
  const [toAmount, setToAmount] = useState("45.29");
  const [activeTab, setActiveTab] = useState("Swap");
  const [selectedQuickBuy, setSelectedQuickBuy] = useState<number>(10);
  const [showSwapContent, setShowSwapContent] = useState(false);

  const quickBuyAmounts = [10, 100, 500, 1000, 5000, 10000];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      {activeTab === "Swap" ? (
        <SwapCard>
          {!showSwapContent ? (
            <>
              <ToggleCard
                tabs={["Swap", "Trade"]}
                initialActiveTab="Swap"
                onChange={handleTabChange}
              />
              <div className="mb-4">
                <div
                  className="bg-slate-700/60 backdrop-blur-sm rounded-xl p-4 "
                  style={{
                    borderImageSource:
                      "radial-gradient(90.87% 102.48% at 69.33% 123.97%, #717680 0%, rgba(102, 102, 102, 0) 100%)",
                    boxShadow:
                      "0px -4px 12px 0px rgba(255, 255, 255, 0.25) inset, 0px 5px 5px 0px rgba(0, 0, 0, 0.57) inset",
                    background: "rgba(0, 29, 29, 0.93)",
                  }}
                >
                  <div className="text-sm text-gray-300 mb-2">From</div>
                  <div className="flex justify-between items-center mb-3 ">
                    <input
                      type="text"
                      value={fromAmount}
                      onChange={e => setFromAmount(e.target.value)}
                      className="bg-transparent text-2xl font-bold text-white outline-none w-20 sm:w-auto"
                    />
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
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </TokenCard>
                  </div>
                  <div className="text-right text-sm space-x-6 text-gray-400">
                    Bal: <span className="text-[#7bc5c4]">27,394.29</span>
                  </div>

                  <div
                    className="mt-4 rounded-xl p-2 relative"
                    style={{
                      background:
                        "linear-gradient(0deg, rgba(51, 72, 72, 0.6), rgba(51, 72, 72, 0.6)), radial-gradient(69.27% 69.27% at 48.22% 0%, rgba(125, 230, 229, 0.2) 0%, rgba(125, 230, 229, 0) 100%)",
                      borderRadius: "0.75rem",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "-1px",
                        right: "-1px",
                        bottom: "-1px",
                        background:
                          "radial-gradient(124.46% 119.23% at 34.52% -11.3%, rgba(125, 230, 229, 0.7) 0%, rgba(125, 230, 229, 0.056) 44.65%, rgba(255, 250, 235, 0) 99.69%)",
                        borderRadius: "0.75rem",
                        zIndex: "-1",
                      }}
                    />
                    <div className="flex items-center gap-2 mb-3">
                      <Image
                        src="/quickbuy.svg"
                        alt="quickbuy Svg"
                        height={24}
                        width={24}
                      />
                      <span className="text-lg font-medium text-gray-300">
                        Quick Buy
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {quickBuyAmounts.map((amount, index) => (
                        <button
                          key={amount}
                          onClick={() => {
                            setFromAmount(amount.toString());
                            setSelectedQuickBuy(amount);
                          }}
                          className={`px-2 py-1 rounded-lg text-lg font-medium transition-all ${
                            selectedQuickBuy === amount
                              ? "text-white"
                              : "bg-slate-600/50 text-gray-300 hover:bg-slate-600/70"
                          }`}
                          style={
                            selectedQuickBuy === amount
                              ? {
                                  background: "rgba(235, 159, 228, 1)",
                                  boxShadow:
                                    "0px 4px 4px 0px rgba(255, 255, 255, 0.25) inset, 0px -2px 4px 0px rgba(147, 51, 234, 1) inset",
                                }
                              : {}
                          }
                        >
                          {amount.toLocaleString()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mb-4">
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg relative"
                  style={{
                    background: "rgba(53, 97, 96, 0.5)",
                    border: "1px solid",
                    borderImage:
                      "radial-gradient(91.36% 89.77% at 3.41% -28.41%, #E9EAEB 0%, rgba(153, 153, 153, 0) 100%)",
                    boxShadow:
                      "-2px -2px 7px 0px rgba(69, 127, 126, 0.7), 3px 5px 7px 0px rgba(6, 28, 28, 1)",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.0046 2.49805C14.056 1.99392 14.4821 1.60059 14.9998 1.60059C15.5173 1.6007 15.9436 1.99399 15.9949 2.49805L15.9998 2.60059L15.9998 18.1865L20.2927 13.8936L20.3689 13.8252C20.7617 13.505 21.3407 13.5275 21.7068 13.8936C22.0728 14.2596 22.0954 14.8387 21.7752 15.2314L21.7068 15.3076L15.7068 21.3076C15.639 21.3755 15.5613 21.4333 15.4763 21.4795C15.467 21.4846 15.4575 21.4894 15.448 21.4941C15.3872 21.5247 15.3228 21.5487 15.2556 21.5664C15.24 21.5705 15.2245 21.5748 15.2088 21.5781C15.1949 21.5811 15.1809 21.5836 15.1668 21.5859C15.1512 21.5886 15.1356 21.5909 15.1199 21.5928C15.1024 21.5949 15.0849 21.5965 15.0671 21.5977C15.0512 21.5987 15.0353 21.5993 15.0193 21.5996C15.0128 21.5997 15.0063 21.6006 14.9998 21.6006C14.993 21.6006 14.986 21.5997 14.9793 21.5996C14.9613 21.5993 14.9434 21.599 14.9255 21.5977C14.9075 21.5963 14.8896 21.595 14.8718 21.5928C14.8613 21.5914 14.851 21.5886 14.8406 21.5869C14.7533 21.573 14.6697 21.5487 14.5916 21.5137C14.523 21.4831 14.4579 21.4433 14.3963 21.3965C14.2442 21.2811 14.1256 21.1241 14.0593 20.9414C14.055 20.9294 14.0505 20.9174 14.0466 20.9053C14.0442 20.8975 14.0421 20.8897 14.0398 20.8818C14.0326 20.8573 14.0265 20.8325 14.0213 20.8076C14.0192 20.7979 14.0181 20.7881 14.0164 20.7783C14.0133 20.7614 14.0097 20.7446 14.0076 20.7275C14.0054 20.7101 14.004 20.6925 14.0027 20.6748C14.0014 20.6569 14.0011 20.639 14.0007 20.6211C14.0006 20.6143 13.9998 20.6074 13.9998 20.6006L13.9998 2.60059L14.0046 2.49805Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      d="M3.29273 9.70703C2.92662 9.34092 2.90402 8.76191 3.22437 8.36914L3.29273 8.29297L9.29273 2.29297L9.30152 2.28516C9.42503 2.16464 9.57923 2.07624 9.75172 2.03223C9.76474 2.0289 9.77766 2.02526 9.79078 2.02246C9.80785 2.01884 9.82516 2.01641 9.84254 2.01367C9.85748 2.0113 9.87245 2.00951 9.88746 2.00781C9.89979 2.00644 9.91211 2.00483 9.92457 2.00391C9.94312 2.00251 9.96165 2.00134 9.98023 2.00098C9.98666 2.00086 9.99331 2 9.99977 2C10.006 2 10.0121 2.00086 10.0183 2.00098C10.0386 2.00135 10.0587 2.00329 10.0789 2.00488C10.0864 2.00547 10.0939 2.00511 10.1013 2.00586C10.1186 2.00762 10.1359 2.01004 10.1531 2.0127C10.2023 2.02028 10.2501 2.03143 10.2966 2.0459C10.3082 2.0495 10.3193 2.05456 10.3308 2.05859C10.3496 2.06519 10.3683 2.07144 10.3865 2.0791C10.3974 2.08367 10.408 2.08878 10.4187 2.09375C10.4329 2.10032 10.4469 2.10705 10.4607 2.11426C10.4791 2.12386 10.4975 2.1337 10.5154 2.14453C10.5227 2.14893 10.5297 2.15363 10.5369 2.1582C10.5522 2.16801 10.5669 2.17873 10.5818 2.18945C10.5943 2.19845 10.6068 2.20725 10.6189 2.2168C10.6301 2.22568 10.6412 2.23471 10.6521 2.24414C10.6645 2.25485 10.6764 2.26605 10.6882 2.27734C10.694 2.28287 10.7011 2.28727 10.7068 2.29297C10.711 2.29721 10.7144 2.30234 10.7185 2.30664C10.7337 2.32241 10.7483 2.33872 10.7625 2.35547C10.7665 2.36022 10.7712 2.36433 10.7752 2.36914C10.7899 2.38721 10.8027 2.40669 10.8162 2.42578C10.8207 2.43223 10.8264 2.43781 10.8308 2.44434C10.8412 2.45986 10.8506 2.47606 10.8601 2.49219C10.8683 2.50604 10.8761 2.52003 10.8836 2.53418C10.8925 2.55116 10.9009 2.5684 10.9089 2.58594C10.912 2.59272 10.9148 2.59961 10.9177 2.60645C10.9392 2.6563 10.9563 2.70807 10.9695 2.76172C10.9714 2.76955 10.9736 2.77729 10.9754 2.78516C10.9793 2.8032 10.9821 2.82145 10.9851 2.83984C10.9869 2.85059 10.9886 2.86128 10.99 2.87207C10.9911 2.88058 10.994 2.88888 10.9949 2.89746L10.9968 2.94434C10.9972 2.9502 10.9976 2.95605 10.9978 2.96191L10.9998 3L10.9998 21C10.9998 21.5522 10.5519 21.9999 9.99977 22C9.44748 22 8.99977 21.5523 8.99977 21L8.99977 5.41406L4.7068 9.70703L4.63063 9.77539C4.23788 10.0957 3.65885 10.0731 3.29273 9.70703Z"
                      fill="url(#paint1_linear)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="12.4997"
                        y1="1.60059"
                        x2="12.4997"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7DE6E5" />
                        <stop
                          offset="1"
                          stopColor="#D42FC5"
                        />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear"
                        x1="12.4997"
                        y1="1.60059"
                        x2="12.4997"
                        y2="22"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#7DE6E5" />
                        <stop
                          offset="1"
                          stopColor="#D42FC5"
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </div>

              <div className="mb-4">
                <TokenAreaCard>
                  <div className="text-sm text-gray-300 mb-2">To</div>
                  <div className="flex justify-between items-center gap-2">
                    {" "}
                    <input
                      type="text"
                      value={toAmount}
                      onChange={e => setToAmount(e.target.value)}
                      className="bg-transparent text-2xl font-bold text-white outline-none w-full min-w-0"
                    />
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
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </TokenCard>
                  </div>
                  <div className="text-left text-sm text-gray-400 mt-2">
                    ≈ $3.00
                  </div>
                </TokenAreaCard>
              </div>

              <div className="rounded-xl p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500">Rate:</span>
                  <span className="text-sm text-gray-200">
                    1 USDC = 0.000015 ETH
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Fees:</span>
                  <span className="text-sm text-gray-200">
                    0.1% (≈ 0.05 BTC)
                  </span>
                </div>
              </div>

              <ConfirmButton onClick={() => setShowSwapContent(true)}>
                {" "}
                Swap
              </ConfirmButton>
            </>
          ) : (
            <SwapContent onCancel={() => setShowSwapContent(false)} />
          )}
        </SwapCard>
      ) : (
        <TradeComponent onTabChange={handleTabChange} />
      )}
    </>
  );
}
