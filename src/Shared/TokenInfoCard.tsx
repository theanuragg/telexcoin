import React from "react";
import clsx from "clsx";

interface TokenAreaCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TokenAreaCard: React.FC<TokenAreaCardProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={clsx(
        "bg-slate-700/60 backdrop-blur-sm rounded-xl p-4",
        className
      )}
      style={{
        background: "rgba(0, 29, 29, 0.93)",
        border: "1px solid",
        borderImageSource:
          "radial-gradient(90.87% 102.48% at 69.33% 123.97%, #717680 0%, rgba(102, 102, 102, 0) 100%)",
        boxShadow: "0px 5px 5px 0px rgba(0, 0, 0, 0.57) inset",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TokenAreaCard;
