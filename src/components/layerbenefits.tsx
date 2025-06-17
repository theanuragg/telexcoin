import React from "react";

interface IBenefit {
  title: string;
  subtitle: string;
  amount: string;
  percentage: string;
}

interface LayerBenefitsProps {
  benefits: IBenefit[];
  title?: string;
}

const LayerBenefits = ({ benefits, title }: LayerBenefitsProps) => {
  return (
    <>
      {/* Blockchain & Wallet Tools Header */}
      <div className="text-sm mb-4 text-[#B4B4B4] ">{title}</div>

      {/* Benefits List */}
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="text-white font-medium text-base mb-1">
                {benefit.title}
              </h3>
              <p className="text-[#B3B3B3] text-sm">{benefit.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-[#8EE9E9] font-medium text-base mb-1">
                {benefit.amount}
              </div>
              <div className="text-[#B3B3B3] text-sm">{benefit.percentage}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LayerBenefits;
