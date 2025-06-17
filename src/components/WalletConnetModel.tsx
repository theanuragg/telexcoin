import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useConnect, useAccount, useDisconnect, useSwitchChain } from "wagmi";
import { sepolia } from "wagmi/chains";

declare global {
  interface Window {
    ethereum?: any;
    trustwallet?: any;
  }
}

interface WalletConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: (walletId: string) => void;
}

const WALLET_CONFIG = {
  metamask: {
    name: "MetaMask",
    icon: "/Location_logo.png",
    downloadUrl: "https://metamask.io/",
    detectKey: "isMetaMask",
    aliases: ["metamask", "injected"],
  },
  walletconnect: {
    name: "WalletConnect",
    icon: "/Location_logo.png",
    downloadUrl: "https://walletconnect.com/",
    detectKey: "isWalletConnect",
  },
  coinbase: {
    name: "Coinbase Wallet",
    icon: "/Location_logo.png",
    downloadUrl: "https://www.coinbase.com/wallet",
    detectKey: "isCoinbaseWallet",
    aliases: ["coinbase"],
  },
  trust: {
    name: "Trust Wallet",
    icon: "/Location_logo.png",
    downloadUrl: "https://trustwallet.com/",
    detectKey: "isTrust",
    aliases: ["trustwallet"],
  },
};

const WalletConnectModal: React.FC<WalletConnectModalProps> = ({
  isOpen,
  onClose,
  onConnect,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectedWalletName, setConnectedWalletName] = useState("");
  const [isConnecting, setIsConnecting] = useState(false);
  const { connect, connectors, error, isPending } = useConnect();
  const {
    isConnected: wagmiConnected,
    chain,
    address,
    connector: activeConnector,
  } = useAccount();
  const { switchChain } = useSwitchChain();

  const detectedWallets = useMemo(() => {
    const detected = new Set<string>();
    if (typeof window === "undefined") return detected;

    if (window.ethereum) {
      if (window.ethereum.isTrust || window.ethereum.isTrustWallet)
        detected.add("Trust Wallet");
      if (window.ethereum.isCoinbaseWallet) detected.add("Coinbase Wallet");

      if (window.ethereum.providers?.length) {
        window.ethereum.providers.forEach((provider: any) => {
          if (provider.isMetaMask) detected.add("MetaMask");
          if (provider.isTrust || provider.isTrustWallet)
            detected.add("Trust Wallet");
          if (provider.isCoinbaseWallet) detected.add("Coinbase Wallet");
        });
      }
    }

    if (window.trustwallet) detected.add("Trust Wallet");

    return detected;
  }, []);

  useEffect(() => {
    if (wagmiConnected && address) {
      setIsConnected(true);
      if (activeConnector) {
        setConnectedWalletName(activeConnector.name);
      }
    } else {
      setIsConnected(false);
      setConnectedWalletName("");
    }
  }, [wagmiConnected, address, activeConnector]);

  const getWalletConfig = (connector: any) => {
    const connectorId = connector.id.toLowerCase();
    const connectorName = connector.name.toLowerCase();

    if (connectorId.includes("trust") || connectorName.includes("trust")) {
      return WALLET_CONFIG.trust;
    }

    for (const [key, config] of Object.entries(WALLET_CONFIG)) {
      if (connectorId.includes(key) || connectorName.includes(key)) {
        return config;
      }
      if (
        Array.isArray((config as any).aliases) &&
        (config as any).aliases.some(
          (alias: string) =>
            connectorId.includes(alias) || connectorName.includes(alias)
        )
      ) {
        return config;
      }
    }

    return {
      name: connector.name,
      icon: "/Location_logo.png",
      downloadUrl: "#",
    };
  };

  const handleWalletClick = async (connector: any) => {
    try {
      setIsConnecting(true);
      await connect({ connector });
      onConnect(connector.id);
    } finally {
      setIsConnecting(false);
    }
  };

  const handleSignMessage = async () => {
    if (chain?.id !== sepolia.id) {
      await switchChain({ chainId: sepolia.id });
    }
    handleClose();
  };

  const handleClose = () => {
    setIsConnected(false);
    setConnectedWalletName("");
    setIsConnecting(false);
    onClose();
  };

  if (!isOpen) return null;

  // Success State
  if (isConnected) {
    return (
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-white text-lg font-medium">Connect Wallet</h2>
          <button
            onClick={handleClose}
            className="w-6 h-6 flex items-center justify-center rounded-lg bg-white/10 transition-colors"
          >
            <X
              size={24}
              className="text-white/80"
            />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="mb-2">
            <svg
              width="64"
              height="64"
              viewBox="0 0 100 100"
              className="text-green-400"
            >
              <defs>
                <linearGradient
                  id="checkGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#4ade80"
                    stopOpacity="1"
                  />
                  <stop
                    offset="50%"
                    stopColor="#22c55e"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="#16a34a"
                    stopOpacity="1"
                  />
                </linearGradient>
                <filter
                  id="innerShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="2"
                  />
                  <feOffset
                    dx="2"
                    dy="3"
                    result="offset"
                  />
                  <feFlood
                    floodColor="#000000"
                    floodOpacity="0.6"
                  />
                  <feComposite
                    in2="offset"
                    operator="in"
                  />
                  <feComposite
                    in2="SourceGraphic"
                    operator="over"
                  />
                </filter>
              </defs>
              <path
                d="M20 50 L40 70 L80 25"
                fill="none"
                stroke="url(#checkGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#innerShadow)"
              />
              <path
                d="M20 52 L40 72 L80 27"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3 className="text-[#97ebea] text-xl font-sans mb-2">
            Wallet Connected
          </h3>
        </div>

        {error && (
          <div className="text-start w-full px-4 mb-4">
            <p className="text-red-400 font-mono text-lg leading-tight">
              You're on the wrong network
            </p>
          </div>
        )}

        <div className="mb-2">
          <button
            onClick={handleClose}
            style={{
              background: "linear-gradient(180deg, #D42FC5 0%, #356160 100%)",
              boxShadow: "inset 0px 0px 24px 0px #FFFFFF",
            }}
            className="w-full py-2 text-[#97EBEA] text-base font-medium rounded-2xl transition-all duration-200"
          >
            <span className="text-[#97EBEA] text-xl font-sans tracking-wide">
              Sign Message
            </span>
          </button>
        </div>
      </div>
    );
  }

  // Default State with Scroll
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={handleClose}
      />

      <div className="relative w-96 mx-4">
        <div className="relative rounded-2xl overflow-hidden max-h-[600px]">
          <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-md" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#783d8c]/60 via-[#0c2842] to-[#783d8c]/60" />

          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255, 0.1)",
            }}
          />

          <div className="relative z-10 px-6 py-6 h-full min-h-[500px] max-h-[600px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-white text-lg font-medium">Connect Wallet</h2>
              <button
                onClick={handleClose}
                className="w-6 h-6 flex items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
              >
                <X
                  size={24}
                  className="text-white/80"
                />
              </button>
            </div>

            <div className="flex-1 overflow-hidden mb-4">
              <div
                className="h-full overflow-y-auto pr-2 space-y-3"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor:
                    "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)",
                }}
              >
                <style>{`
                  .wallet-scroll::-webkit-scrollbar {
                    width: 6px;
                  }
                  .wallet-scroll::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 3px;
                  }
                  .wallet-scroll::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 3px;
                  }
                  .wallet-scroll::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.5);
                  }
                `}</style>

                <div className="wallet-scroll space-y-3">
                  {connectors.map(connector => {
                    const walletConfig = getWalletConfig(connector);
                    const isDetected = detectedWallets.has(walletConfig.name);

                    return (
                      <button
                        key={connector.id}
                        onClick={() => handleWalletClick(connector)}
                        disabled={isPending || isConnecting}
                        className={`w-full flex items-center space-x-4 p-4 transition-all duration-200 group rounded-xl ${
                          isPending || isConnecting
                            ? "opacity-50 cursor-not-allowed"
                            : ""
                        }`}
                      >
                        <Image
                          src={walletConfig.icon}
                          alt={walletConfig.name}
                          width={32}
                          height={32}
                          className="w-8 h-8 object-contain"
                        />
                        <div className="flex-1 text-left">
                          <p className="text-white/90 text-lg font-mono">
                            {walletConfig.name}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {error && (
              <div className="mt-auto">
                <div className="mb-1">
                  <p className="text-red-500 text-lg font-mono leading-tight">
                    Could not connect to your wallet try again
                  </p>
                </div>
              </div>
            )}

            <div className="flex items-center justify-between">
              <span className="text-white/80 font-mono text-lg">
                Don't have a wallet?
              </span>
              <button className="px-3 py-1 bg-white/10 text-white/90 text-lg font-medium rounded-lg transition-all duration-200 ">
                Get
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletConnectModal;
