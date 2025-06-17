import { ChevronDown } from "lucide-react";

const AmountInput = ({
  amount,
  setAmount,
  exceedsBalance,
}: {
  amount: number | "";
  setAmount: (val: number | "") => void;
  exceedsBalance: boolean;
}) => (
  <div className="flex flex-col items-end gap-[8px]">
    <div className="relative flex items-center w-full px-3 py-3 gap-[12px] bg-[#21212B] border border-[#334155] rounded-[64px]">
      <input
        type="number"
        min={0}
        value={amount}
        onChange={e =>
          setAmount(e.target.value === "" ? "" : Number(e.target.value))
        }
        placeholder="Enter Amount"
        className="flex-1 bg-transparent outline-none text-[16px] text-[#A8A8A8] placeholder:text-[#A8A8A8] font-['Satoshi']"
      />
      <span className="text-[14px] flex items-center gap-1 bg-[#414148] px-3 py-1 rounded-3xl text-[#8EE9E9] font-[700]">
        dRC <ChevronDown className="w-4 h-4" />
      </span>
    </div>
    {exceedsBalance && (
      <div className="text-[14px] w-full text-[#F43F5E] font-['Satoshi']">
        Amount exceeds available balance
      </div>
    )}
  </div>
);

export default AmountInput;
