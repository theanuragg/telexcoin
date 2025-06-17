import React from "react";

export const TradeCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="rounded-2xl p-4 sm:p-6 text-white font-sans relative w-full max-w-[700px] mx-auto"
      style={{
        background: `
          linear-gradient(0deg, rgba(4, 66, 66, 0.16), rgba(4, 66, 66, 0.16)),
          radial-gradient(106.67% 33.21% at 48.7% -4.01%, rgba(125, 230, 229, 0.5) 0%, rgba(125, 230, 229, 0) 100%),
          radial-gradient(106.67% 33.21% at 48.7% -4.01%, rgba(125, 230, 229, 0.7) 0%, rgba(125, 230, 229, 0) 100%),
          radial-gradient(91.86% 28.6% at 50.14% 51.59%, rgba(125, 230, 229, 0.3) 0%, rgba(125, 230, 229, 0) 100%)
        `,
        boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.52) inset",
        backdropFilter: "blur(20px)",
      }}
    >
      <div className="rounded-xl p-1">{children}</div>
    </div>
  );
};
