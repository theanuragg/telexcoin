const ScheduleRules = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "schedule" | "rules";
  setActiveTab: (tab: "schedule" | "rules") => void;
}) => (
  <div className="flex flex-col gap-[12px] w-full p-[16px] mb-[16px] rounded-[18px] border border-[#39394B] bg-[rgba(33,33,43,0.85)] backdrop-blur-[12px]">
    <div className="flex gap-[12px] w-full max-w-[205px] mb-[8px]">
      {["schedule", "rules"].map(tab => (
        <button
          key={tab}
          className={`flex-1 h-[32px] rounded-[64px] text-[14px] font-[500] font-['Satoshi'] ${
            activeTab === tab
              ? "bg-[#252531] text-[#8EE9E9] shadow-[inset_0px_-2px_4px_rgba(142,233,233,0.3)]"
              : "opacity-40 border border-[#737373] text-[#CBD5E1]"
          } transition`}
          onClick={() => setActiveTab(tab as "schedule" | "rules")}
          type="button"
        >
          {tab === "schedule" ? "Schedule" : "Product Rules"}
        </button>
      ))}
    </div>

    {activeTab === "schedule" ? (
      <>
        <div className="flex justify-between text-[#CCCCCC] text-[14px] font-[300]">
          <span>Start date</span>
          <span>End date</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[#8EE9E9] text-[16px] font-[700]">
            2 Jan 2025
          </span>
          <span className="text-[#A1A1A1] text-sm">365 D</span>
          <span className="text-[#8EE9E9] text-[16px] font-[700]">
            12 Jan 2025
          </span>
        </div>
      </>
    ) : (
      <>
        {[
          ["Reward Calculation", "12% (12 dRC)"],
          ["dRC amount to receive", "112 dRC"],
          ["Seeding time", "365 days"],
        ].map(([label, value]) => (
          <div
            className="flex justify-between items-center"
            key={label}
          >
            <span className="text-[14px] text-[#CCCCCC] font-[300]">
              {label}
            </span>
            <span className="text-[16px] text-[#8EE9E9] font-[700]">
              {value}
            </span>
          </div>
        ))}
      </>
    )}
  </div>
);

export default ScheduleRules;
