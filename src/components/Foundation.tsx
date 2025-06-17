import React, { useState } from "react";
import Image from "next/image";
import EcoSystemBenefits from "./EcosystemBenfits";
import SeedingAmount from "./Foundation/SeedingAmount";
import FoundationBenefits from "./Foundation/FoundationBenefits";
import SeedModal from "./Foundation/SeedModel";
import { DummyDataProvider } from "@/Context/DummyDataContext";

const Foundation = () => {
  const [isSeedModalOpen, setIsSeedModalOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="relative z-10 mt-10">
          <div className="p-3 ">
            <div className="md:hidden relative rounded-[20px] overflow-hidden aspect-[16/9] w-full">
              <Image
                src="/foundation-back-v2.png"
                alt="Foundation Seat"
                className="w-full h-full object-cover object-center"
                width={1200}
                height={192}
              />
              <h2 className="text-md absolute bottom-4 left-1/2 w-fit text-nowrap px-3 py-2 rounded-2xl -translate-x-1/2 text-center text-[#8DE8E8] bg-[#21212B]">
                The Heart of the Deep Root Ecosystem
              </h2>
            </div>
            <div className="hidden md:block max-w-6xl mx-auto mb-2">
              <div className="relative rounded-3xl overflow-hidden">
                <Image
                  src="/foundation.png"
                  alt="Foundation"
                  width={1200}
                  height={192}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modified layout section */}
        <div className="max-w-6xl mx-auto pt-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left column - contains both benefits components */}
            <div className="flex-1 flex flex-col gap-8">
              <EcoSystemBenefits />
              <FoundationBenefits />
            </div>

            {/* Right column - seeding amount */}
            <div className="flex-1">
              <SeedingAmount onReceiveClick={() => setIsSeedModalOpen(true)} />
            </div>
          </div>
        </div>
      </div>

      <DummyDataProvider>
        <SeedModal
          open={isSeedModalOpen}
          onClose={() => setIsSeedModalOpen(false)}
        />
      </DummyDataProvider>
    </>
  );
};

export default Foundation;
