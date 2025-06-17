import React from "react";
import clsx from "clsx";

interface ActionButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  const baseClasses = clsx(
    "w-fit py-3 px-6 rounded-xl font-semibold text-lg text-white transition-shadow duration-300",
    {
      "opacity-60 cursor-not-allowed": disabled,
      "cursor-pointer": !disabled,
    },
    className
  );

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      disabled={disabled}
      style={{
        background: "linear-gradient(180deg, #D42FC5 0%, #457F7E 100%)",
        boxShadow: "0 0 24px rgba(255, 255, 255, 1) inset",
      }}
    >
      {children}
      <style jsx>{`
        button:hover:not(:disabled) {
          box-shadow:
            0 0 24px rgba(255, 255, 255, 1) inset,
            0 0 30px 8px rgba(212, 47, 197, 0.8);
        }
      `}</style>
    </button>
  );
};

export default ActionButton;
