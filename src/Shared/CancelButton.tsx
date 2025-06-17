import React from "react";
import clsx from "clsx";

interface CancelButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  onClick,
  children = "Cancel",
  className,
  disabled = false,
}) => {
  const baseClasses = clsx(
    "w-1/2 py-3 rounded-xl text-xl text-[#97ebea] text-center font-normal transition-all duration-200",
    {
      "opacity-70 cursor-not-allowed": disabled,
      "cursor-pointer hover:bg-opacity-80 active:scale-95": !disabled,
    },
    className
  );

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      style={{
        background: "rgba(73, 86, 112, 0.71)",
        boxShadow: "0px 0px 24px 0px rgba(207, 207, 207, 0.31) inset",
      }}
    >
      {children}
    </button>
  );
};

export default CancelButton;
