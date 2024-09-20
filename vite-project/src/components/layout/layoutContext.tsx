import React, { createContext, useState } from "react";
import LoadingScreen from "@/components/layout/loader";

interface OverlayContextProps {
  showLoading: boolean;
  setShowLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OverlayContext = createContext<OverlayContextProps>({
    showLoading: true,
    setShowLoading: () => {},
});

const LayoutContext = ({ children }: { children: React.ReactNode }) => {
  const [showLoading, setShowLoading] = useState(false);
  return (
    <OverlayContext.Provider value={{ showLoading, setShowLoading }}>
      {showLoading && <LoadingScreen />}
      <div>{children}</div>
    </OverlayContext.Provider>
  );
};

export default LayoutContext;
