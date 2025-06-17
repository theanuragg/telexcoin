const FoundationHeader = () => (
  <div className="flex flex-wrap justify-between items-center w-full gap-[16px] h-[22px] mb-[16px]">
    <div className="flex items-center gap-[6px] h-[22px]">
      <span className="font-['Satoshi'] font-[700] text-[16px] tracking-[-0.007em] text-white">
        dRC Seeding
      </span>
    </div>
    <div className="flex items-center gap-[4px] h-[22px]">
      <span className="font-['Satoshi'] font-[300] text-[14px] text-[#CCCCCC]">
        Balance:
      </span>
      <span className="font-['Satoshi'] font-[700] text-[14px] text-[#8EE9E9]">
        112 dRC
      </span>
    </div>
  </div>
);

export default FoundationHeader;
