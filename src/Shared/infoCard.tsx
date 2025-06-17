import React from "react";

interface InnoCardProps {
  children: React.ReactNode;
}

const InnoCard: React.FC<InnoCardProps> = ({ children }) => {
  return <div style={InnoCardStyle}>{children}</div>;
};

const InnoCardStyle: React.CSSProperties = {
  width: "350px",
  height: "250px",
  padding: "1rem",
  borderRadius: "1rem",
  color: "white",
  position: "relative",
  backgroundColor: "#D9ABA9",
  backgroundImage: `
    radial-gradient(50% 50% at 50% 0%, #7DE6E5 0%, rgba(218, 157, 150, 0) 100%)
  `,
  backgroundBlendMode: "overlay",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backdropFilter: "blur(40px)",
  boxShadow: `
    0px 0px 12px 0px #FFFFFF inset,
    0px 12px 28px 0px #AD686C
  `,
};

export default InnoCard;
