import React, { useState, useEffect } from "react";
import InnoCard from "@/Shared/infoCard";
import { Badge, Subtitles, Earth } from "lucide-react";
import InnoLaunchTab from "@/Shared/innoLaunchTab";
import Image from "next/image";

const InnoLaunch = () => {
  const [showFooter, setShowFooter] = useState(false);

  const innoData = [
    {
      title: "DEEPROOTS",
      subtitle: "For Innovative DeWorld Apps.",
      url: "www.deeproots.earth",
      image: "/deeproot-banner.png",
      badge: "A & B",
    },
    {
      title: "DEEPASSETS",
      subtitle: "Tokenized Real-world Ownership",
      url: "www.deepassets.earth",
      image: "/deeprootassests.png",
      badge: "A & B",
    },
    {
      title: "SHAREVALUE",
      subtitle: "Learn & Earn in DeWorld Education",
      url: "www.sharevalue.earth",
      image: "/deeproot-sharevalue.png",
      badge: "A & B",
    },
    {
      title: "INNOFI",
      subtitle: "Tokenized Real-world Ownership",
      url: "www.innofi.earth",
      image: "/deeproot-vote.png",
      badge: "A & B",
    },
    {
      title: "INNOLAUNCH",
      subtitle: "Launchpad for Game-Changers",
      url: "www.innolaunch.earth",
      image: "/deeproot-Launch.png",
      badge: "A & B",
    },
    {
      title: "INNOFARM",
      subtitle: "Web3 Job & Talent Marketplace",
      url: "www.innofarm.earth",
      image: "/deeproot-Farm.png",
      badge: "A & B",
    },
    {
      title: "METAFABRIC",
      subtitle: "Fashion X NFT Marketplace",
      url: "www.metafabric.earth",
      image: "/deeproot-MetaFabric.png",
      badge: "A & P",
    },
    {
      title: "GIVEFI",
      subtitle: "Blockchain Donation & Impact",
      url: "www.givefi.earth",
      image: "/deeproot-Givefi.png",
      badge: "A & B",
    },
    {
      title: "SAXOPHONE",
      subtitle: "Live Podcasting with Token Access",
      url: "www.saxophone.earth",
      image: "/deeproot-saxophone.png",
      badge: "A & B",
    },
    {
      title: "THE ADDRESS",
      subtitle: "Web3 Wallet  with Staking & discover",
      url: "www.theaddress.earth",
      image: "/deeproot-theaddress.png",
      badge: "A & B",
    },
    {
      title: "TELEXCOIN",
      subtitle: "Decentralized Exchange of Deworld",
      url: "www.telexcoin.earth",
      image: "/deeproot-telexcoin.png",
      badge: "A & B",
    },
    {
      title: "OCEAN BAZAAR",
      subtitle: "NFT Marketplace for all Creations",
      url: "www.oceanbazaar.earth",
      image: "/deeproot-oceanbazaar.png",
      badge: "A & B",
    },
    {
      title: "ROOTOPIA",
      subtitle: "Refreral-Based Gamefi Exosystem",
      url: "www.rootopia.earth",
      image: "/deeproot-rootopia.png",
      badge: "A & B",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100;
      setShowFooter(isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative min-h-screen">
        <div className="relative z-10 pb-32">
          <div className="py-5">
            <div className="max-w-6xl mx-auto mb-8">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  boxShadow: `
      0px 0px 16px 0px #FFFFFF inset,
      0px 12px 28px 0px #AD686C,
      0px 0px 20px 0px #FFFFFF inset
    `,
                }}
              >
                <Image
                  src="/InfoRocket.png"
                  alt="InnoLaunch Header"
                  width={1200}
                  height={192}
                  className="w-full h-32 sm:h-40 md:h-48 object-cover"
                  priority
                />
                <div
                  className="absolute -bottom-32 sm:-bottom-32 md:-bottom-48 left-16 right-16 sm:left-16 md:left-52 sm:right-16 md:right-52 h-48 sm:h-56 md:h-72 bg-[#DA9D96] rounded-full"
                  style={{
                    boxShadow: "0px 0px 20px 0px #FFFFFF inset",
                  }}
                >
                  <div className="flex flex-col pt-4  sm:pt-4 md:pt-6 items-center">
                    <h3 className="text-lg sm:text-xl text-center md:mb-1 text-black">
                      InnoLaunch
                    </h3>
                    <span className="text-sm sm:text-md text-center pb-3 text-black px-2">
                      Launch for Game-Changer
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-start mt-14">
                <InnoLaunchTab tabs={["live", "Upcoming "]} />
              </div>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {innoData.map((item, index) => (
                  <InnoCard key={index}>
                    <div className="rounded-2xl overflow-hidden transition-all duration-300">
                      <div className="relative rounded-xl overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300"
                          width={600}
                          height={200}
                        />
                        <div className="absolute inset-0"></div>
                      </div>

                      <div className="mt-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <div
                            className="px-2 py-1 rounded-full text-xs font-semibold"
                            style={{
                              background:
                                "linear-gradient(90deg, #D45557 0%, #54BAB9 100%)",
                              boxShadow: `
                          0px 3px 5px 0px rgba(191, 127, 124, 0.698),
                          0px 0px 4px 0px rgba(255, 255, 255, 0.851) inset
                        `,
                            }}
                          >
                            {item.badge}
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm font-mono mb-2">
                          {item.subtitle}
                        </p>
                        <div
                          className="flex items-center gap-2 rounded-2xl p-2"
                          style={{ background: "#2D2D2D69" }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
                              stroke="#96dedd"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M4 24H44"
                              stroke="#96dedd"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 44C28.4183 44 32 35.0457 32 24C32 12.9543 28.4183 4 24 4C19.5817 4 16 12.9543 16 24C16 35.0457 19.5817 44 24 44Z"
                              stroke="#96dedd"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M9.85791 10.1421C13.4772 13.7614 18.4772 16 24 16V16C29.5229 16 34.5229 13.7614 38.1422 10.1421"
                              stroke="#96dedd"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M38.1422 37.8579C34.5229 34.2386 29.5229 32 24 32C18.4772 32 13.4772 34.2386 9.85791 37.8579"
                              stroke="#96dedd"
                              strokeWidth="4"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <p className="text-gray-200 underline text-sm font-medium truncate max-w-[180px]">
                            {item.url}
                          </p>
                        </div>
                      </div>
                    </div>
                  </InnoCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0  right-0 z-0">
        <Image
          src="/innolaunch_footer.png"
          alt="Footer"
          className="w-full"
          width={1200}
          height={200}
          priority
        />
      </div>
    </>
  );
};

export default InnoLaunch;
