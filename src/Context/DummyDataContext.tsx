import { createContext, useContext, useState, ReactNode } from "react";

type DummyDataContextType = {
  isSeeded: boolean;
  setIsSeeded: (val: boolean) => void;
  showSwapSeedInfo: boolean;
  setShowSwapSeedInfo: (val: boolean) => void;
};

const DummyDataContext = createContext<DummyDataContextType | undefined>(
  undefined
);

export const DummyDataProvider = ({ children }: { children: ReactNode }) => {
  const [isSeeded, setIsSeeded] = useState(false);
  const [showSwapSeedInfo, setShowSwapSeedInfo] = useState(true);

  return (
    <DummyDataContext.Provider
      value={{ isSeeded, setIsSeeded, showSwapSeedInfo, setShowSwapSeedInfo }}
    >
      {children}
    </DummyDataContext.Provider>
  );
};

export const useDummyDataContext = () => {
  const context = useContext(DummyDataContext);
  if (!context) {
    throw new Error(
      "useDummyDataContext must be used within a DummyDataProvider"
    );
  }
  return context;
};
