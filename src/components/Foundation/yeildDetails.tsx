const YieldDetails = () => (
  <div className="flex flex-col gap-[12px] my-4">
    {[
      ["Estimated Annual Yield", "12% APY"],
      ["Receive", "1050 dRC"],
      ["Return", "500 dRC"],
      ["Conversion Ratio", "1 dRC = 19.88 USDT"],
      ["Annualized (EST.) 12%", "dRC = 1050 dRC"],
    ].map(([label, value]) => (
      <div
        className="flex justify-between items-center"
        key={label}
      >
        <span className="text-[14px] text-[#CCCCCC] font-[300]">{label}</span>
        <span className="text-[16px] text-[#8EE9E9] font-[700]">{value}</span>
      </div>
    ))}
  </div>
);

export default YieldDetails;
