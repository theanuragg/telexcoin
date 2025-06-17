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
import ToggleTabs from "@/Shared/ToggleTab";
import { TradeCard } from "@/Shared/TradeCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import TokenAreaCard from "@/Shared/TokenInfoCard";
import TokenCard from "@/Shared/TokenCard";
import ToggleCard from "@/Shared/ToggleTabComp";
import BuySellToggle from "@/Shared/TradeToggleCard";
import { useToast, useToastHelpers } from "@/Context/ToastContext";

const TradeComponent = ({
  onTabChange,
}: {
  onTabChange: (tab: string) => void;
}) => {
  const [showChart, setShowChart] = useState(true);
  const [chartPeriod, setChartPeriod] = useState("1h");
  const timeframes = ["25%", "50%", "75%", "100%"];
  const generateChartData = () => {
    const now = new Date();
    return Array.from({ length: 24 }, (_, i) => ({
      time: `${i}:00`,
      value: Math.random() * 100 + 50,
    }));
  };
  const [activeRange, setActiveRange] = useState("24h");
  const [selectedQuickBuy, setSelectedQuickBuy] = useState<number>(10);
  const quickBuyAmounts = [10, 100, 500, 1000, 5000, 10000];
  const [activeTab, setActiveTab] = useState("Buy");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  const { toast } = useToast();
  const { showError, showSuccess, showProcessing } = useToastHelpers();

  const handleAction = async () => {
    showSuccess(
      "Upload Failed",
      "The file could not be uploaded. Please try again."
    );
  };

  return (
    <TradeCard>
      <div className="space-y-4">
        <ToggleCard
          tabs={["Swap", "Trade"]}
          initialActiveTab="Trade"
          onChange={onTabChange}
        />

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-2 md:items-center w-full">
            <div className="flex items-center w-full justify-between">
              <div className="rounded-xl p-2 flex flex-row gap-2 border border-[#9eeceb]">
                <span className="text-base md:text-lg font-medium">
                  dRC/USDT
                </span>
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </div>
              <div className="text-right">
                <div className="text-xl md:text-2xl font-bold">$104.32</div>
                <div className="text-green-400 text-sm md:text-base">
                  +2.14%
                </div>
              </div>
            </div>

            {activeTab === "Sell" && (
              <div
                className="absolute -bottom-6 -right-4 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-30 -z-10"
                style={{
                  background: "rgba(240, 68, 56, 1)",
                  filter: "blur(12px)",
                }}
              />
            )}

            <div className="w-full mt-2 md:mt-0">
              <BuySellToggle
                tabs={["Buy", "Sell"]}
                initialActiveTab="Buy"
                onChange={handleTabChange}
              />
            </div>

            {activeTab === "Buy" && (
              <div
                className="absolute -bottom-6 left-0 md:left-1/2 md:-translate-x-1/2 right-4 md:right-auto w-32 h-32 md:w-48 md:h-48 rounded-full opacity-30 -z-10"
                style={{
                  background: "rgba(18, 183, 106, 1)",
                  filter: "blur(10px)",
                }}
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 text-sm">
          <div>
            <div className="font-medium">$185.62</div>
            <div className="text-gray-400 text-xs md:text-sm">High</div>
          </div>
          <div>
            <div className="font-medium">$102.83</div>
            <div className="text-gray-400 text-xs md:text-sm">Low</div>
          </div>
          <div>
            <div className="font-medium">$2.483m</div>
            <div className="text-gray-400 text-xs md:text-sm">Volume</div>
          </div>

          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center justify-between">
              <div
                className="flex items-center space-x-2 p-1 rounded-2xl"
                style={{
                  boxShadow: `
                    inset 0px 5.5px 5.5px rgba(0, 0, 0, 0.25),
                    inset 0px -1.38px 5.5px rgba(255, 255, 255, 0.25)
                  `,
                }}
              >
                <div className="bg-[#59a3a3] rounded-full p-1">\`/</div>
                <button
                  onClick={() => setShowChart(!showChart)}
                  className="text-green-400 hover:text-green-300"
                >
                  {showChart ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-2 text-xs">
                <RefreshCw className="w-4 h-4 text-gray-400 cursor-pointer" />
              </div>
            </div>

            {showChart && (
              <div
                className="rounded-lg p-3 md:p-4 relative overflow-hidden"
                style={{
                  background: "#082b2f",
                  border: "1px solid",
                  borderImageSource:
                    "radial-gradient(90.87% 102.48% at 69.33% 123.97%, #717680 0%, rgba(102, 102, 102, 0) 100%)",
                  boxShadow: "inset 0px 0px 13px 0px rgba(255, 255, 255, 0.57)",
                  backdropFilter: "blur(14px)",
                }}
              >
                <div className="flex justify-between items-center mb-3 md:mb-4">
                  <div className="flex space-x-1 md:space-x-2">
                    {["24h", "1h", "15m"].map(range => (
                      <button
                        key={range}
                        onClick={() => setActiveRange(range)}
                        className="px-2 py-1 text-xs rounded-md transition-all"
                        style={{
                          background:
                            activeRange === range ? "#ffffff" : "transparent",
                          color: activeRange === range ? "#000000" : "#E5E7EB",
                          border:
                            activeRange === range
                              ? "1px solid rgba(118, 217, 216, 0.5)"
                              : "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-40 md:h-48 relative">
                  <div
                    className="absolute inset-0"
                    style={{ background: "#082b2f", borderRadius: "4px" }}
                  ></div>

                  <ResponsiveContainer
                    width="100%"
                    height="100%"
                  >
                    <AreaChart
                      data={generateChartData()}
                      margin={{ top: 10, right: 5, left: 0, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="tealGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#76d9d8"
                            stopOpacity={0.8}
                          />
                          <stop
                            offset="100%"
                            stopColor="#76d9d8"
                            stopOpacity={0.1}
                          />
                        </linearGradient>

                        <linearGradient
                          id="gridGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="rgba(118, 217, 216, 0.1)"
                            stopOpacity={0.1}
                          />
                          <stop
                            offset="95%"
                            stopColor="rgba(118, 217, 216, 0.1)"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="#082b2f"
                      />

                      <YAxis
                        orientation="right"
                        domain={["auto", "auto"]}
                        tick={{ fontSize: 12, fill: "#E5E7EB" }}
                        width={30}
                        stroke="#0a3a3f"
                      />

                      <XAxis
                        dataKey="day"
                        tick={{ fontSize: 12, fill: "#E5E7EB" }}
                        stroke="#0a3a3f"
                        tickFormatter={value => {
                          const days = [
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ];
                          return days[value % 7];
                        }}
                      />

                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="url(#gridGradient)"
                        vertical={false}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#082b2f",
                          border: "1px solid rgba(118, 217, 216, 0.5)",
                          borderRadius: "4px",
                          color: "#E5E7EB",
                        }}
                        labelStyle={{ color: "#76d9d8" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#76d9d8"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#tealGradient)"
                        activeDot={{
                          r: 6,
                          fill: "#082b2f",
                          stroke: "#76d9d8",
                          strokeWidth: 2,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 md:space-y-4">
            <TokenAreaCard className="bg-black/20 rounded-lg p-2">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div className="text-xl md:text-2xl font-bold">1</div>

                <div className="flex flex-col items-end">
                  <TokenCard className="flex items-center space-x-2">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center bg-gray-700">
                      <Image
                        src="/drc-coin.png"
                        alt="DRC Token"
                        height={20}
                        width={20}
                        className="w-4 h-4 md:w-5 md:h-5"
                      />
                    </div>
                    <span className="font-medium text-sm md:text-base">
                      dRC
                    </span>
                    <ChevronDown className="w-3 h-3 md:w-4 md:h-4 text-gray-400" />
                  </TokenCard>
                  <span className="text-xs md:text-sm text-gray-400 mt-1">
                    Bal: 27,394.29
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-1 rounded-xl p-1 bg-[#2d4d4d]">
                {quickBuyAmounts.map((amount, index) => (
                  <button
                    key={amount}
                    className={`px-2 py-1 md:px-2 md:py-1 rounded-lg text-xs md:text-sm font-medium transition-all ${
                      selectedQuickBuy === amount
                        ? "text-white"
                        : "bg-[#355656] text-gray-300"
                    }`}
                    style={
                      selectedQuickBuy === amount
                        ? {
                            background: "rgba(168, 238, 238, 1)",
                            boxShadow: `
                              0px 3px 2px 0px rgba(255, 255, 255, 0.73) inset,
                              0px -2px 4px 0px rgba(0, 180, 180, 1) inset
                            `,
                          }
                        : {}
                    }
                  >
                    {amount >= 1000 ? `${amount / 1000}k` : amount}
                  </button>
                ))}
              </div>
            </TokenAreaCard>

            <TokenAreaCard className="bg-black/20 rounded-lg p-3 md:p-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="text-xl md:text-2xl font-bold">1</div>
                  <div className="text-xs md:text-sm text-gray-400">$0.00</div>
                </div>
                <div className="flex flex-col items-end">
                  <TokenCard className="flex items-center space-x-2">
                    <Image
                      src="/usd-coin-usdc-logo.png"
                      alt="usdc"
                      height={20}
                      width={20}
                      className="rounded-full w-5 h-5 md:w-6 md:h-6"
                    />
                    <span className="font-medium text-sm md:text-base">
                      USDT
                    </span>
                  </TokenCard>
                  <span className="text-xs md:text-sm text-gray-400 mt-1">
                    Bal: 27,394.29
                  </span>
                </div>
              </div>
            </TokenAreaCard>

            <div className="space-y-2 text-xs md:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Rate:</span>
                <span>1 USDC = 0.000013 ETH</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Fees:</span>
                <span>0.03 dRC</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Slippage</span>
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">1% (+5.18 dRC)</span>
                  <button className="w-4 h-4 rounded-full flex items-center justify-center">
                    <span className="text-xs">⚙</span>
                  </button>
                </div>
              </div>
            </div>

            <button
              className="w-full py-2 md:py-3 rounded-lg font-medium text-sm md:text-base transition-colors"
              style={{
                background:
                  activeTab === "Buy"
                    ? "linear-gradient(180deg, #12B76A 0%, #054F31 100%)"
                    : "linear-gradient(180deg, #F04438 0%, #912018 100%)",
                boxShadow: "0px 0px 8px 0px rgba(255, 255, 255, 1) inset",
              }}
              onClick={handleAction}
            >
              {activeTab === "Buy" ? "Buy" : "Sell"} dRC
            </button>
          </div>
        </div>
      </div>
    </TradeCard>
  );
};

export default TradeComponent;
