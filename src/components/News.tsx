"use client";

export default function TrendingCardsRow() {
  return (
    <div className="flex animate-marquee flex-row gap-3">
      <TrendingCard
        text="What's hot?"
        cardStyle="pink"
        iconStyle="teal"
      />

      <TrendingCard
        text="What's hot?"
        cardStyle="teal"
        iconStyle="pink"
      />

      <TrendingCard
        text="What's hot?"
        cardStyle="pink"
        iconStyle="teal"
      />
    </div>
  );
}

type CardStyle = "pink" | "teal";
type IconStyle = "teal" | "pink" | "white";

interface TrendingCardProps {
  text?: string;
  cardStyle?: CardStyle;
  iconStyle?: IconStyle;
}

function TrendingCard({
  text = "What's hot?",
  cardStyle = "pink",
  iconStyle = "teal",
}: TrendingCardProps) {
  const cardStyles: Record<CardStyle, { background: string; border: string }> =
    {
      pink: {
        background:
          "linear-gradient(135deg, #FF1493 0%, #FF69B4 50%, #DA70D6 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      },
      teal: {
        background:
          "linear-gradient(135deg, #00CED1 0%, #20B2AA 50%, #48D1CC 100%)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      },
    };

  return (
    <div
      className="px-2 py-1 rounded-full flex items-center gap-1 font-medium text-white shadow-lg"
      style={{
        ...cardStyles[cardStyle],
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0px 0px 24px 0px rgba(255, 255, 255, 0.92) inset",
      }}
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <svg
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path
            d="M7.44538 3.142C7.44538 3.87562 7.20085 4.85377 6.02706 5.24503C6.36942 4.4136 6.41832 3.58217 6.17378 2.79965C5.83143 1.77259 4.70655 0.990064 3.92403 0.549895C3.7284 0.403172 3.38605 0.598803 3.43495 0.892249C3.43495 1.43023 3.28823 2.21276 2.4568 3.04419C1.38083 4.12016 0.842847 5.24503 0.842847 6.321C0.842847 7.73932 1.821 9.5 3.77731 9.5C1.821 7.54369 3.28823 5.83192 3.28823 5.83192C3.67949 8.71748 5.73362 9.5 6.71177 9.5C7.5432 9.5 9.15715 8.91311 9.15715 6.36991C9.15715 4.85377 8.52135 3.67999 7.98337 2.99528C7.83665 2.75074 7.49429 2.89746 7.44538 3.142Z"
            fill={
              iconStyle === "teal"
                ? "#a8eced"
                : iconStyle === "pink"
                  ? "#FF69B4"
                  : "rgba(151, 235, 234, 1)"
            }
            stroke="none"
          />
        </svg>
      </div>

      <span className="text-xs sm:text-md font-mono px-1">{text}</span>
    </div>
  );
}
