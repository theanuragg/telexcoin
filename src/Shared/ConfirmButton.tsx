import React from "react";

interface ConfirmButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({
  onClick,
  children,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full py-4 rounded-xl font-normal text-lg text-slate-400 transition-all duration-300 shadow-lg transform hover:shadow-[0_0_16px_rgba(212,47,197,0.6)] ${className}`}
      style={{
        background:
          "linear-gradient(180deg, rgba(212, 47, 197, 0.22) 0%, rgba(69, 127, 126, 0.22) 100%)",
        boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.6) inset",
      }}
    >
      {children}
    </button>
  );
};

export default ConfirmButton;
