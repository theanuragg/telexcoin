import React from "react";
import clsx from "clsx";

interface TokenCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const TokenCard: React.FC<TokenCardProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={clsx(
        "rounded-lg p-2 transition-shadow duration-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)]",
        className
      )}
      style={{
        background: "rgba(40, 61, 62, 1)",
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default TokenCard;
