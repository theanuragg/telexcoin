import CancelButton from "@/Shared/CancelButton";
import { Check, SquareArrowOutUpRight, X } from "lucide-react";
import React from "react";

const SeedStatus = ({
  success,
  onClose,
  isConfirming,
}: {
  success: boolean | null;
  onClose: () => void;
  isConfirming: boolean;
}) => {
  return (
    <div>
      <div className="">
        <div className="text-white text-2xl font-light">
          {isConfirming
            ? "Processing Seed"
            : success
              ? "Seed Confirm"
              : "Seed Failed"}
        </div>
      </div>

      <div className="my-4">
        <div className="w-fit mx-auto">
          {isConfirming ? (
            <div className="animate-spin w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto" />
          ) : success ? (
            <Check className="w-20 h-20 text-green-500" />
          ) : (
            <div className="text-center text-red-500">
              <X className="w-20 h-20" />
              <div>Error</div>
            </div>
          )}
        </div>
      </div>

      <div
        className="bg-[#1B1B1C] text-center rounded-2xl p-4 mb-6 border border-[#1B1B1C] text-[#919191]"
        style={{
          backdropFilter: "blur(40px)",
          boxShadow: `inset 0px 0px 20px 0px #0D0D0D,0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,10px 10px 30px 0px #00000033`,
        }}
      >
        <div className="text-gray-400 text-sm mb-1">
          Amount {success ? "Seeded" : isConfirming ? "Seeding" : ""}
        </div>
        <div className="text-white text-2xl font-bold">800 dRC</div>
        <div className="text-gray-500 text-sm">
          {success ? "$100.00" : isConfirming ? "" : "Transaction failed"}
        </div>
      </div>

      <div className="flex flex-row gap-2 text-[#308DEA] my-4">
        View on Explorer <SquareArrowOutUpRight />
      </div>

      <div className="my-4">
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            Annualized (EST.) Rewards
          </span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            dRC = 1050 dRC
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            Seeding Time
          </span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            365 days
          </span>
        </div>
      </div>
      <CancelButton
        className="w-full  text-white py-2 rounded-4xl font-medium flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
        onClick={onClose}
        disabled={isConfirming}
      >
        <span>Close</span>
      </CancelButton>
    </div>
  );
};

export default SeedStatus;
