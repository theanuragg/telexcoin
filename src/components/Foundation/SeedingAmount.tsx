import React, { useState } from "react";
import PresetButtons from "./presentButton";
import AmountInput from "./AmountInput";
import YieldDetails from "./yeildDetails";
import ScheduleRules from "./scheduleRule";
import FoundationHeader from "./FoundationHeader";
import FoundationCard from "@/Shared/Foundationcard";

const AVAILABLE_BALANCE = 500;

interface SeedingAmountProps {
  onReceiveClick: () => void;
}

const SeedingAmount = ({ onReceiveClick }: SeedingAmountProps) => {
  const [amount, setAmount] = useState<number | "">("");
  const [activeTab, setActiveTab] = useState<"schedule" | "rules">("schedule");

  const exceedsBalance =
    typeof amount === "number" && amount > AVAILABLE_BALANCE;

  return (
    <div className="w-full overflow-x-hidden text-white">
      <div className="flex flex-col items-center">
        <FoundationHeader />

        <FoundationCard>
          <div className="text-white font-normal mb-2 w-full">
            Select a quick package
          </div>

          <PresetButtons
            amount={amount}
            setAmount={setAmount}
          />

          <div className="flex justify-between my-2">
            <span>You Pay</span>
            <span>
              Available: <strong className="text-[#8EE9E9]">95,000 USDT</strong>
            </span>
          </div>

          <AmountInput
            amount={amount}
            setAmount={setAmount}
            exceedsBalance={exceedsBalance}
          />

          <hr className="my-3 text-[#334155]" />

          <YieldDetails />

          <hr className="my-3 text-[#334155]" />

          <ScheduleRules
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <button
            className="w-full  rounded-lg py-2 px-2"
            disabled={exceedsBalance || !amount}
            onClick={onReceiveClick}
            style={{
              background:
                "linear-gradient(180deg, #8EE9E9 0%, #BCACFA 33.94%, #C4A2FD 100%)",
              border: "1px solid #FFFFFF",
              boxShadow: `
      0px 0px 28px 0px #B082FF,
      0px 0px 8px 0px #B082FF,
      0px 0px 20px 0px #FFFFFF inset
    `,

              cursor: "pointer",
              textAlign: "center",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
              ...((exceedsBalance || !amount) && {
                opacity: 0.6,
                cursor: "not-allowed",
              }),
            }}
          >
            Seed Now
          </button>
        </FoundationCard>
      </div>
    </div>
  );
};

export default SeedingAmount;
