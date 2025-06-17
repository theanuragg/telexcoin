import React from "react";

interface FoundationCardProps {
  children: React.ReactNode;
  className?: string;
}

const FoundationCard: React.FC<FoundationCardProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={className}
      style={FoundationCardStyle}
    >
      {children}
    </div>
  );
};

const FoundationCardStyle: React.CSSProperties = {
  padding: "1rem",
  borderRadius: "1rem",
  color: "white",
  position: "relative",
  width: "100%",
  backgroundColor: "#21212B",
  background: `
    radial-gradient(50% 50% at 50% 5%, #866692 0%, rgba(40, 41, 49, 0) 100%),
    #21212B
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backdropFilter: "blur(40px)",
  boxShadow: `
    0px 8px 16px 0px #0F172A05,
    0px 4px 8px 0px #0F172A08,
    0px 0px 20px 0px #433E57 inset,
    10px 10px 30px 0px #00000033,
    0px 0px 10px 0px #FFFFFF80 inset
  `,
};

export default FoundationCard;
