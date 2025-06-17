import React from "react";
import dRCLogo from "@/assets/images/drc-logo.png";
import Image from "next/image";
import { X } from "lucide-react";
import CancelButton from "@/Shared/CancelButton";
import ActionButton from "@/Shared/ActionButton";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  isConfirming: boolean;
  setIsConfirming: React.Dispatch<React.SetStateAction<boolean>>;
  handleConfirm: () => void;
}

const ConfirmSeed = ({
  open,
  onClose,
  isConfirming,
  setIsConfirming,
  handleConfirm,
}: ModalProps) => {
  return (
    <>
      {/* Header */}
      <div className="mb-8">
        <div className="text-white text-2xl font-light ">Confirm Seed</div>
        <p
          className={`text-[#B5B5B5] text-md ${isConfirming ? "inline-block" : "hidden"}`}
        >
          Processing
        </p>
      </div>

      {/* Minimum Received Box */}
      <div
        className="bg-[#1B1B1C] rounded-2xl p-4 mb-6 border border-[#1B1B1C] text-[#919191] "
        style={{
          backdropFilter: "blur(40px)",
          boxShadow: `inset 0px 0px 20px 0px #0D0D0D,0px 8px 16px 0px #0F172A05,0px 4px 8px 0px #0F172A08,10px 10px 30px 0px #00000033`,
        }}
      >
        <div className="text-gray-400 text-sm mb-1">Amount to seed </div>
        <div className="w-fit mx-auto text-center">
          <div className="text-white text-2xl font-bold flex flex-row">
            800.00 dRC{" "}
            <Image
              src="/drc-coin.png"
              width={30}
              height={24}
              alt="dRC logo"
              className="ml-3"
            />
          </div>
          <div className="text-gray-500 text-sm">$990.00</div>
        </div>
      </div>

      {/* Transaction Details */}
      <div className="flex flex-col gap-[12px] my-4">
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            Estimated Annual Yield
          </span>
          <div className="text-[16px] text-[#8EE9E9] font-[700]">12% APY</div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">Receive</span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            1050 dRC
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">Return</span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">500 dRC</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            Conversion Ratio
          </span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            1 dRC = 19.88 USDT
          </span>
        </div>
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
          <span className="text-[16px] text-[#8EE9E9] font-[700]">365</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            Start Date
          </span>
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            End Date
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            2 Jan 2025
          </span>
          <span className="text-[16px] text-[#8EE9E9] font-[700]">
            2 Jan 2026
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[14px] text-[#CCCCCC] font-[300]">Fees</span>
          <span className="text-[14px] text-[#CCCCCC] font-[300]">
            ~ 0.01dRC
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3 items-center">
        <CancelButton
          className="w-1/2 flex-1  text-white py-2 rounded-4xl font-medium flex items-center justify-center space-x-2  transition-colors"
          onClick={() => onClose()}
        >
          <X className="w-4 h-4" />
          <span>Cancel</span>
        </CancelButton>
        <div className="w-1/2">
          <ActionButton
            className=" w-full "
            onClick={handleConfirm}
            disabled={isConfirming}
          >
            Confirm
          </ActionButton>
        </div>
      </div>
    </>
  );
};

export default ConfirmSeed;
