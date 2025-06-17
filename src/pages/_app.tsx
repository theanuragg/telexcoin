import type { AppProps } from "next/app";
import { ToastProvider } from "@/Context/ToastContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Web3Provider } from "@/components/Web3provider";
import { DummyDataProvider } from "@/Context/DummyDataContext";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Web3Provider>
        <DummyDataProvider>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </DummyDataProvider>
      </Web3Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
