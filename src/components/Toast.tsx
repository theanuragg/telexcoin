import { useEffect, useState } from "react";

type ToastProps = {
  heading: string;
  message: string;
  type: "error" | "processing" | "done";
  duration?: number;
  onClose?: () => void;
};

export const Toast = ({
  heading,
  message,
  type,
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "error":
        return {
          background: `
            linear-gradient(0deg, rgba(37, 43, 55, 0.8), rgba(37, 43, 55, 0.8)),
            radial-gradient(50.46% 76.03% at 50.15% 0%, rgba(255, 0, 0, 0.2) 0%, rgba(255, 0, 0, 0) 100%),
            radial-gradient(36.57% 18.84% at 50.15% 0%, rgba(255, 0, 0, 0.44) 0%, rgba(255, 0, 0, 0) 100%),
            radial-gradient(52.28% 74.43% at 51.17% 93.51%, rgba(249, 112, 102, 0.7) 0%, rgba(230, 143, 125, 0) 100%)
          `,
          border: "1px solid transparent",
          borderImageSource: `
            radial-gradient(38.01% 38.01% at 50.15% 0%, #FF0505 0%, #990303 70.19%, rgba(153, 3, 3, 0) 96.15%)
          `,
          boxShadow: `
            0px -4px 20px 0px rgba(255, 51, 51, 0.25) inset,
            0px 2px 6px rgba(0, 0, 0, 0.1)
          `,
          backdropFilter: "blur(11px)",
        };
      case "done":
        return {
          background: `
            linear-gradient(0deg, rgba(37, 43, 55, 0.8), rgba(37, 43, 55, 0.8)),
            radial-gradient(50.46% 76.03% at 50.15% 0%, rgba(0, 255, 179, 0.2) 0%, rgba(0, 255, 47, 0) 100%),
            radial-gradient(36.57% 18.84% at 50.15% 0%, rgba(0, 255, 30, 0.44) 0%, rgba(9, 255, 0, 0) 100%),
            radial-gradient(52.28% 74.43% at 51.17% 93.51%, rgba(166, 244, 197, 0.7) 0%, rgba(125, 230, 229, 0) 100%)
          `,
          border: "1px solid transparent",
          borderImageSource: `
            radial-gradient(38.01% 38.01% at 50.15% 0%, #05FF54 0%, #039914 70.19%, rgba(3, 153, 18, 0) 96.15%)
          `,
          boxShadow: `
            0px -4px 20px 0px rgba(119, 255, 51, 0.25) inset,
            0px 2px 6px rgba(0, 0, 0, 0.1)
          `,
          backdropFilter: "blur(11px)",
        };
      case "processing":
        return {
          background: `
            linear-gradient(0deg, rgba(37, 43, 55, 0.8), rgba(37, 43, 55, 0.8)),
            radial-gradient(50.46% 76.03% at 50.15% 0%, rgba(125, 230, 229, 0.2) 0%, rgba(125, 230, 229, 0) 100%),
            radial-gradient(36.57% 18.84% at 50.15% 0%, rgba(125, 230, 229, 0.44) 0%, rgba(125, 230, 229, 0) 100%),
            radial-gradient(52.28% 74.43% at 51.17% 93.51%, rgba(151, 235, 234, 0.7) 0%, rgba(151, 235, 234, 0) 100%)
          `,
          border: "1px solid transparent",
          borderImageSource: `
            radial-gradient(38.01% 38.01% at 50.15% 0%, #7DE6E5 0%, #356160 70.19%, rgba(53, 97, 96, 0) 96.15%)
          `,
          boxShadow: `
            0px -4px 20px 0px rgba(125, 230, 229, 0.25) inset,
            0px 2px 6px rgba(0, 0, 0, 0.1)
          `,
          backdropFilter: "blur(11px)",
        };
      default:
        return {
          background: "bg-gray-500",
          boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        };
    }
  };

  const getIcon = () => {
    switch (type) {
      case "error":
        return (
          <div className="mt-2 items-start mb-2">
            <div
              className="absolute w-16 h-4 rounded-sm"
              style={{
                backgroundColor: "rgba(240, 68, 56, 1)",
                boxShadow:
                  "0px -2px 4px 0px rgba(127, 29, 29, 1) inset, 0px 2px 3px 0px rgba(252, 165, 165, 1) inset",
                transform: "rotate(45deg)",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                marginTop: "-8px",
                marginLeft: "-32px",
              }}
            />
            <div
              className="absolute w-16 h-4 rounded-sm"
              style={{
                backgroundColor: "rgba(240, 68, 56, 1)",
                boxShadow:
                  "0px -2px 4px 0px rgba(127, 29, 29, 1) inset, 0px 2px 3px 0px rgba(252, 165, 165, 1) inset",
                transform: "rotate(-45deg)",
                top: "50%",
                left: "50%",
                transformOrigin: "center",
                marginTop: "-8px",
                marginLeft: "-32px",
              }}
            />
          </div>
        );
      case "done":
        return (
          <div className=" mb-2">
            <svg
              width="100"
              height="100"
              viewBox="0 0 120 120"
            >
              <defs>
                <filter
                  id="checkShadow"
                  x="-50%"
                  y="-50%"
                  width="200%"
                  height="200%"
                >
                  <feDropShadow
                    dx="0"
                    dy="-3"
                    stdDeviation="2"
                    floodColor="rgba(5, 96, 58, 1)"
                    floodOpacity="1"
                  />

                  <feDropShadow
                    dx="0"
                    dy="4"
                    stdDeviation="2"
                    floodColor="rgba(108, 233, 166, 1)"
                    floodOpacity="1"
                  />
                </filter>
              </defs>

              <path
                d="M35 60l18 18 36-36"
                stroke="#22c55e"
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="url(#checkShadow)"
              />
            </svg>
          </div>
        );
      case "processing":
        return (
          <div className="mt-1 mb-1">
            <svg
              className="animate-spin w-12 h-8 text-cyan-400 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };
  const styles = getToastStyles();

  return (
    <div
      className={`fixed  top-12  right-2 text-white px-4 py-4  rounded-lg transition-all duration-300 z-50 min-w-[380px] max-w-[480px]`}
      style={{
        background: styles.background,
        border: styles.border,
        borderImageSource: styles.borderImageSource,
        boxShadow: styles.boxShadow,
        backdropFilter: styles.backdropFilter,
        borderImageSlice: ["error", "done", "processing"].includes(type)
          ? "1"
          : undefined,
      }}
    >
      <div className="flex items-start gap-2">
        {getIcon()}
        <div className="flex-1 min-w-0 ">
          <h4 className="font-mono text-white text-xl mt-2 mb-4">{heading}</h4>
          <p className="text-gray-200  text-base  leading-relaxed">{message}</p>
        </div>

        <button
          onClick={handleClose}
          className="flex-shrink-0 ml-2 text-white rounded-lg"
          aria-label="Close toast"
          style={{
            background: "var(--Button-Primary-Surface, rgba(37, 43, 55, 1))",
            boxShadow: `
      -2px -2px 7px 0px rgba(65, 70, 81, 0.8),
      3px 5px 7px 0px rgba(0, 0, 0, 0.5)
    `,
            padding: "0.5rem",
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
