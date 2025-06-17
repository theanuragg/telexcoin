import FoundationCard from "@/Shared/Foundationcard";

const PRESET_AMOUNTS = [1, 10, 50, 100, 500, 1000, 5000, 10000];

const PresetButtons = ({
  amount,
  setAmount,
}: {
  amount: number | "";
  setAmount: (val: number) => void;
}) => (
  <FoundationCard>
    <div className="grid grid-cols-4 gap-x-[24px] gap-y-[16px] w-full mx-auto max-w-xl">
      {PRESET_AMOUNTS.map(val => (
        <button
          key={val}
          className={`w-[48px] h-[22px] rounded-[4px] font-['Archivo'] text-[16px] text-center
          ${amount === val ? "bg-[#1F2937] text-[#FF8000]" : "text-[#CBD5E1]"}
          transition`}
          onClick={() => setAmount(val)}
          type="button"
        >
          {val}
        </button>
      ))}
    </div>
  </FoundationCard>
);

export default PresetButtons;
