import React from "react";
import { Copy, LogOut, RefreshCw, ExternalLink, Power } from "lucide-react";
import CancelButton from "@/Shared/CancelButton";

interface WalletCardProps {
  address: string;
  balance: string;
  symbol: string;
  usdValue: string;
  onDisconnect: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({
  address = "0x4nxw29sn3...",
  balance = "273.28",
  symbol = "dRC",
  usdValue = "$832.33",
  onDisconnect = () => console.log("Disconnect clicked"),
}) => {
  return (
    <div
      className="w-96 rounded-xl p-6 shadow-xl font-sans text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        boxShadow:
          "0px 4px 4px 0px #00000040, 0px 0px 16px 0px #FFFFFF38 inset, 0px 20px 52px 0px #0000008C",
      }}
    >
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ boxShadow: "inset 0px 0px 16px 0px #FFFFFF38" }}
      />

      <div className="flex items-center justify-between mt-2 mb-6 text-sm font-mono relative z-10">
        <span className="truncate text-lg  text-normal pr-2">{address}</span>
        <div className="flex gap-4 ml-10">
          <Copy
            size={20}
            className="cursor-pointer hover:opacity-80"
          />
          <RefreshCw
            size={20}
            className="cursor-pointer hover:opacity-80"
          />
        </div>
      </div>

      <div className="text-center mb-8 relative z-10">
        <p className="text-4xl font-light text-[#76D9D8] mb-1">
          {balance} {symbol}
        </p>
        <p className="text-lg opacity-80">{usdValue}</p>
      </div>

      <div className="flex gap-4 relative z-10">
        <CancelButton className="flex-1 flex items-center justify-center gap-2 px-4 py-3  rounded-lg transition-colors text-sm font-medium">
          Explorer
          <ExternalLink size={16} />
        </CancelButton>
        <button
          onClick={onDisconnect}
          style={{
            background: "var(--Error-900, #7A271A)",
            boxShadow: "0px 0px 24px 0px #FFFFFF4D inset",
          }}
          className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg  transition-colors text-sm font-medium text-[#db4336]"
        >
          Disconnect
          <Power
            className=" text-[#db4336]"
            size={16}
          />
        </button>
      </div>
    </div>
  );
};

export default WalletCard;
