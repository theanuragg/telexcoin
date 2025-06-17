import React from "react";
import Link from "next/link";
import Image from "next/image";

const benefits = [
  {
    icon: "/foundation-benefits-red.png",
    iconColor: "shadow-[0_0_24px_0_#FF9900]",
    title: "Round Table Seat",
    description: "Description",
  },
  {
    icon: "/foundation-benefits-yellow.png",
    iconColor: "shadow-[0_0_24px_0_#FFD600]",
    title: "Earning Machine",
    description: "Description",
  },
  {
    icon: "/foundation-benefits-cyan.png",
    iconColor: "shadow-[0_0_24px_0_#8EE9E9]",
    title: "Referral Rewards",
    description: "Description",
  },
  {
    icon: "/foundation-benefits-purple.png",
    iconColor: "shadow-[0_0_24px_0_#B18AFF]",
    title: "RootOpia Game",
    description: "Description",
  },
];

const FoundationBenefits: React.FC = () => {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Title - Moved outside the card */}
      <div className="flex flex-row items-center gap-[8px]">
        <span className="text-[18px] font-bold font-satoshi text-[white] items-center">
          <span className="inline-block align-middle mr-[4px]">★</span>
          <span className="inline-block align-middle text-[16px]">
            Foundation Benefits
          </span>
        </span>
      </div>

      {/* Card Container */}
      <div className="relative flex flex-col items-start p-[16px] gap-[12px] w-full bg-[#21212B] rounded-[18px] shadow-[10px_10px_30px_rgba(0,0,0,0.2),0px_4px_8px_rgba(15,23,42,0.03),0px_8px_16px_rgba(15,23,42,0.02),inset_0px_0px_10px_rgba(255,255,255,0.5),inset_0px_0px_20px_#433E57] backdrop-blur-[20px] overflow-hidden">
        {/* Radial Ellipse BG */}
        <div
          className="absolute -left-[90px] -top-[292px] w-[523px] h-[523px] z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, #866692 0%, rgba(40, 41, 49, 0) 100%)",
          }}
        />

        {/* Benefits List */}
        <div className="flex flex-col gap-[16px] w-full z-10 ">
          {benefits.map((benefit, idx) => (
            <div
              key={benefit.title}
              className="flex flex-row items-center p-0 gap-[12px] w-full h-[85px] bg-[#21212B] rounded-[18px] shadow-[10px_10px_30px_rgba(0,0,0,0.2),0px_4px_8px_rgba(15,23,42,0.03),0px_8px_16px_rgba(15,23,42,0.02),inset_0px_0px_20px_#433E57] backdrop-blur-[20px]"
            >
              <Image
                src={benefit.icon}
                alt={benefit.title}
                width={64}
                height={64}
              />
              <div className="flex flex-col justify-center gap-[4px] w-[222px]">
                <div className="flex flex-row items-center gap-[16px]">
                  <span className="font-satoshi font-bold text-[16px] leading-[22px] text-[white]">
                    {benefit.title}
                  </span>
                </div>
                <div className="flex flex-row items-start gap-[16px]">
                  <span className="font-satoshi font-normal text-[14px] leading-[20px] text-[#CCCCCC]">
                    {benefit.description}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/benefits"
          className="text-[14px] w-full font-medium font-satoshi leading-[20px] text-right underline text-[#8EE9E9]"
        >
          See more
        </Link>
      </div>
    </div>
  );
};

export default FoundationBenefits;
