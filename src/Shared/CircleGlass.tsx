import React, { useMemo } from "react";
import Image, { StaticImageData } from "next/image";

interface CircleGlassProps {
  icon?: React.ComponentType<{
    size?: number;
    strokeWidth?: number;
    style?: React.CSSProperties;
  }>;
  image?: StaticImageData | string;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  alt?: string;
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-16 h-16",
  lg: "w-20 h-20",
};

const iconSizes = {
  sm: 20,
  md: 20,
  lg: 24,
};

const imageSizes = {
  sm: 24,
  md: 32,
  lg: 40,
};

const CircleGlass: React.FC<CircleGlassProps> = ({
  icon: IconComponent,
  image,
  size = "md",
  className = "",
  onClick,
  alt = "",
}) => {
  const iconSize = iconSizes[size];
  const imageSize = imageSizes[size];

  const gradientId = useMemo(
    () => `iconGradient-${Math.random().toString(36).substr(2, 9)}`,
    []
  );

  const customStyle: React.CSSProperties = {
    background: "#04424229",
    backgroundBlendMode: "color-dodge",
    boxShadow: "0px 0px 7.74px 0px #FFFFFF66 inset",
    backgroundImage:
      "radial-gradient(55% 55% at 50% 122.5%, #7DE6E5 0%, rgba(125, 230, 229, 0.3) 50.87%, rgba(125, 230, 229, 0) 99.54%)",
  };

  return (
    <div
      className={`${sizeClasses[size]} p-2 px-2 relative rounded-full cursor-pointer transition-all duration-300 transform ${className}`}
      onClick={onClick}
      style={customStyle}
    >
      <div className="absolute inset-0 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-600/30" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#125e69]/60 via-[#125e69]/20 to-transparent" />
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-white/10 to-transparent" />

      <svg
        width="1"
        height="1"
        style={{ position: "absolute", top: 0, left: 0 }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id={gradientId}
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
            gradientUnits="objectBoundingBox"
          >
            <stop
              offset="0%"
              stopColor="#38bdf8"
            />
            <stop
              offset="100%"
              stopColor="#ec4899"
            />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {IconComponent && (
          <IconComponent
            size={iconSize}
            strokeWidth={2}
            style={{
              stroke: `url(#${gradientId})`,
              fill: "none",
            }}
          />
        )}
        {image && (
          <Image
            src={image}
            width={imageSize}
            height={imageSize}
            alt={alt}
            className="object-contain"
          />
        )}
      </div>

      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-slate-400/10 to-slate-500/10 blur-md -z-10" />
    </div>
  );
};

export default CircleGlass;
