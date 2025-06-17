import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Custom Web3 Wallet",
  projectId: "YOUR_WALLET_CONNECT_PROJECT_ID", // Replace with your  project id
  chains: [sepolia],
  ssr: false,
});
