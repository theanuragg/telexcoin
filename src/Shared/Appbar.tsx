import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "../Shared/Button";
import CircleGlass from "../Shared/CircleGlass";
import { Moon, Move, Wallet } from "lucide-react";
import WalletConnectModal from "../components/WalletConnetModel";
import { useAccount, useDisconnect, useBalance } from "wagmi";
import Image from "next/image";
import WalletCard from "@/components/WalletInfo";

interface AppbarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onConnectWallet?: () => void;
}

const Appbar: React.FC<AppbarProps> = ({
  activeSection,
  onSectionChange,
  onConnectWallet,
}) => {
  const router = useRouter();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showWalletCard, setShowWalletCard] = useState(false);

  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: balanceData } = useBalance({
    address,
  });

  const navItems = [
    { name: "Swap" },
    { name: "Pool" },
    { name: "Foundation" },
    { name: "InoLaunch" },
  ];

  const handleNavClick = (itemName: string) => {
    onSectionChange(itemName);
  };

  const handleWalletConnect = (walletId: string) => {
    console.log("Connected to wallet:", walletId);
    if (onConnectWallet) {
      onConnectWallet();
    }
    setIsWalletModalOpen(false);
  };

  const handleConnectWallet = () => {
    setIsWalletModalOpen(true);
  };

  const handleDisconnect = () => {
    disconnect();
    setShowWalletCard(false);
  };

  const formatAddress = (addr: string) => {
    return addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between px-3 md:px-20 h-16 md:h-18 bg-[#010d1b] relative z-10">
        {/* Left Side - Logo */}
        <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-transparent">
          TeleXcoin
        </div>

        <div className="hidden md:flex items-start space-x-6">
          {navItems.map(item => (
            <Button
              key={item.name}
              onClick={() => handleNavClick(item.name)}
              size="md"
              isActive={activeSection === item.name}
              className="h-8 px-3 py-1 text-xs"
            >
              {item.name}
            </Button>
          ))}
        </div>

        {/* Right Side - Wallet/Connect */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <CircleGlass
            icon={Moon}
            size="sm"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <CircleGlass
            image="/Menu.png"
            alt=""
            size="sm"
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <Image
            src="/Callme.png"
            alt=""
            width={28}
            height={28}
            className="md:w-9 md:h-9"
          />
          {!isMounted ? (
            <button className="px-2 py-1.5 md:px-3 md:py-2 bg-gradient-to-r from-sky-500 to-pink-500 text-white text-xs font-mono rounded-lg">
              Connect
            </button>
          ) : isConnected && address ? (
            <div className="relative">
              <div className="hidden md:flex items-center gap-2 rounded-xl bg-[#181D27] shadow-inset-white">
                <div className="flex items-center gap-2 px-2 py-2">
                  <Image
                    src="/Avatar.png"
                    alt=""
                    height={32}
                    width={32}
                    className="rounded-full"
                  />
                  <span className="text-white text-sm font-mono">
                    {formatAddress(address)}
                  </span>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setShowWalletCard(!showWalletCard)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 text-white transition-transform ${
                      showWalletCard ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile - Wallet icon only */}
              <div className="md:hidden flex flex-row items-center p-1 gap-1 rounded-xl bg-[#181D27]">
                <div className="w-7 h-7 flex items-center justify-center">
                  <Wallet className="w-4 h-4 text-white" />
                </div>
                <button
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setShowWalletCard(!showWalletCard)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-3 w-3 text-white transition-transform ${
                      showWalletCard ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
              {showWalletCard && (
                <div className="absolute right-0 top-full mt-2 z-50">
                  <WalletCard
                    address={address}
                    balance={balanceData?.formatted || "0"}
                    symbol={balanceData?.symbol || "ETH"}
                    usdValue="$832.33"
                    onDisconnect={handleDisconnect}
                  />
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleConnectWallet}
              className="px-3 py-1.5 md:px-6 md:py-2 bg-gradient-to-r from-sky-500 to-pink-500 text-white text-xs md:text-sm font-mono rounded-lg transition-transform"
            >
              <span className="text-sm">Connect Wallet</span>
            </button>
          )}
        </div>
      </div>

      <WalletConnectModal
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
        onConnect={handleWalletConnect}
      />
    </>
  );
};

export default Appbar;
