import React, { useRef, useEffect, useState, useMemo } from "react";

interface NavItem {
  id: string;
  icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  label: string;
}

interface MobileBottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function MobileBottomNav({
  activeSection,
  onSectionChange,
}: MobileBottomNavProps) {
  const navItems: NavItem[] = useMemo(
    () => [
      {
        id: "Swap",
        icon: ({ className, style }) => (
          <svg
            width="20"
            height="20"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
          >
            <path
              d="M14.0046 2.49805C14.056 1.99392 14.4821 1.60059 14.9998 1.60059C15.5173 1.6007 15.9436 1.99399 15.9949 2.49805L15.9998 2.60059L15.9998 18.1865L20.2927 13.8936L20.3689 13.8252C20.7617 13.505 21.3407 13.5275 21.7068 13.8936C22.0728 14.2596 22.0954 14.8387 21.7752 15.2314L21.7068 15.3076L15.7068 21.3076C15.639 21.3755 15.5613 21.4333 15.4763 21.4795C15.467 21.4846 15.4575 21.4894 15.448 21.4941C15.3872 21.5247 15.3228 21.5487 15.2556 21.5664C15.24 21.5705 15.2245 21.5748 15.2088 21.5781C15.1949 21.5811 15.1809 21.5836 15.1668 21.5859C15.1512 21.5886 15.1356 21.5909 15.1199 21.5928C15.1024 21.5949 15.0849 21.5965 15.0671 21.5977C15.0512 21.5987 15.0353 21.5993 15.0193 21.5996C15.0128 21.5997 15.0063 21.6006 14.9998 21.6006C14.993 21.6006 14.986 21.5997 14.9793 21.5996C14.9613 21.5993 14.9434 21.599 14.9255 21.5977C14.9075 21.5963 14.8896 21.595 14.8718 21.5928C14.8613 21.5914 14.851 21.5886 14.8406 21.5869C14.7533 21.573 14.6697 21.5487 14.5916 21.5137C14.523 21.4831 14.4579 21.4433 14.3963 21.3965C14.2442 21.2811 14.1256 21.1241 14.0593 20.9414C14.055 20.9294 14.0505 20.9174 14.0466 20.9053C14.0442 20.8975 14.0421 20.8897 14.0398 20.8818C14.0326 20.8573 14.0265 20.8325 14.0213 20.8076C14.0192 20.7979 14.0181 20.7881 14.0164 20.7783C14.0133 20.7614 14.0097 20.7446 14.0076 20.7275C14.0054 20.7101 14.004 20.6925 14.0027 20.6748C14.0014 20.6569 14.0011 20.639 14.0007 20.6211C14.0006 20.6143 13.9998 20.6074 13.9998 20.6006L13.9998 2.60059L14.0046 2.49805Z"
              fill={
                activeSection === "Swap"
                  ? "url(#iconGradient-Swap)"
                  : "currentColor"
              }
            />
            <path
              d="M3.29273 9.70703C2.92662 9.34092 2.90402 8.76191 3.22437 8.36914L3.29273 8.29297L9.29273 2.29297L9.30152 2.28516C9.42503 2.16464 9.57923 2.07624 9.75172 2.03223C9.76474 2.0289 9.77766 2.02526 9.79078 2.02246C9.80785 2.01884 9.82516 2.01641 9.84254 2.01367C9.85748 2.0113 9.87245 2.00951 9.88746 2.00781C9.89979 2.00644 9.91211 2.00483 9.92457 2.00391C9.94312 2.00251 9.96165 2.00134 9.98023 2.00098C9.98666 2.00086 9.99331 2 9.99977 2C10.006 2 10.0121 2.00086 10.0183 2.00098C10.0386 2.00135 10.0587 2.00329 10.0789 2.00488C10.0864 2.00547 10.0939 2.00511 10.1013 2.00586C10.1186 2.00762 10.1359 2.01004 10.1531 2.0127C10.2023 2.02028 10.2501 2.03143 10.2966 2.0459C10.3082 2.0495 10.3193 2.05456 10.3308 2.05859C10.3496 2.06519 10.3683 2.07144 10.3865 2.0791C10.3974 2.08367 10.408 2.08878 10.4187 2.09375C10.4329 2.10032 10.4469 2.10705 10.4607 2.11426C10.4791 2.12386 10.4975 2.1337 10.5154 2.14453C10.5227 2.14893 10.5297 2.15363 10.5369 2.1582C10.5522 2.16801 10.5669 2.17873 10.5818 2.18945C10.5943 2.19845 10.6068 2.20725 10.6189 2.2168C10.6301 2.22568 10.6412 2.23471 10.6521 2.24414C10.6645 2.25485 10.6764 2.26605 10.6882 2.27734C10.694 2.28287 10.7011 2.28727 10.7068 2.29297C10.711 2.29721 10.7144 2.30234 10.7185 2.30664C10.7337 2.32241 10.7483 2.33872 10.7625 2.35547C10.7665 2.36022 10.7712 2.36433 10.7752 2.36914C10.7899 2.38721 10.8027 2.40669 10.8162 2.42578C10.8207 2.43223 10.8264 2.43781 10.8308 2.44434C10.8412 2.45986 10.8506 2.47606 10.8601 2.49219C10.8683 2.50604 10.8761 2.52003 10.8836 2.53418C10.8925 2.55116 10.9009 2.5684 10.9089 2.58594C10.912 2.59272 10.9148 2.59961 10.9177 2.60645C10.9392 2.6563 10.9563 2.70807 10.9695 2.76172C10.9714 2.76955 10.9736 2.77729 10.9754 2.78516C10.9793 2.8032 10.9821 2.82145 10.9851 2.83984C10.9869 2.85059 10.9886 2.86128 10.99 2.87207C10.9911 2.88058 10.994 2.88888 10.9949 2.89746L10.9968 2.94434C10.9972 2.9502 10.9976 2.95605 10.9978 2.96191L10.9998 3L10.9998 21C10.9998 21.5522 10.5519 21.9999 9.99977 22C9.44748 22 8.99977 21.5523 8.99977 21L8.99977 5.41406L4.7068 9.70703L4.63063 9.77539C4.23788 10.0957 3.65885 10.0731 3.29273 9.70703Z"
              fill={
                activeSection === "Swap"
                  ? "url(#iconGradient-Swap)"
                  : "currentColor"
              }
            />
            <defs>
              <linearGradient
                id="iconGradient-Swap"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop
                  offset="0%"
                  stopColor="#EC4899"
                />
                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                />
              </linearGradient>
            </defs>
          </svg>
        ),
        label: "Swap",
      },
      {
        id: "Pool",
        icon: ({ className, style }) => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
          >
            <path
              d="M12 19C9.49345 19 7.91806 17.6547 6.86651 16.3888C6.42721 15.8599 5.58617 15.867 5.20168 16.4323C4.50078 17.4629 3.68402 18.4127 2 18.7859M22 18.7859C20.4123 18.4341 19.5955 17.5697 18.9199 16.6083C18.4965 16.0059 17.5655 16.0425 17.1055 16.6208C16.6953 17.1365 16.2063 17.6119 15.6148 18"
              stroke={
                activeSection === "Pool"
                  ? "url(#iconGradient-Pool)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 9C14.5065 9 16.0819 7.65471 17.1335 6.38877C17.5728 5.85991 18.4138 5.86697 18.7983 6.43233C19.4992 7.46288 20.316 8.41274 22 8.78594M2 8.78594C3.58767 8.4341 4.40448 7.56969 5.08009 6.60834C5.50345 6.00591 6.43454 6.04252 6.89447 6.62076C7.30467 7.13646 7.79373 7.6119 8.38519 8"
              stroke={
                activeSection === "Pool"
                  ? "url(#iconGradient-Pool)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 13.7859C20.4123 13.4341 19.5955 12.5697 18.9199 11.6083C18.4965 11.0059 17.5655 11.0425 17.1055 11.6208C16.0541 12.9427 14.4844 14 12 14C9.49345 14 7.91806 12.6547 6.86651 11.3888C6.42721 10.8599 5.58617 10.867 5.20168 11.4323C4.50078 12.4629 3.68402 13.4127 2 13.7859"
              stroke={
                activeSection === "Pool"
                  ? "url(#iconGradient-Pool)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label: "Pool",
      },
      {
        id: "Foundation",
        icon: ({ className, style }) => (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
          >
            <path
              d="M12.37 2.15009L21.37 5.75006C21.72 5.89006 22 6.31006 22 6.68006V10.0001C22 10.5501 21.55 11.0001 21 11.0001H3C2.45 11.0001 2 10.5501 2 10.0001V6.68006C2 6.31006 2.28 5.89006 2.63 5.75006L11.63 2.15009C11.83 2.07009 12.17 2.07009 12.37 2.15009Z"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22 22H2V19C2 18.45 2.45 18 3 18H21C21.55 18 22 18.45 22 19V22Z"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18V11"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 18V11"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 18V11"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 18V11"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 18V11"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1 22H23"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              stroke={
                activeSection === "Foundation"
                  ? "url(#iconGradient-Foundation)"
                  : "currentColor"
              }
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
        label: "Foundation",
      },
      {
        id: "InoLaunch",
        icon: ({ className, style }) => (
          <svg
            viewBox="0 0 16 16"
            fill={
              activeSection === "InoLaunch"
                ? "url(#iconGradient-InoLaunch)"
                : "currentColor"
            }
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
          >
            <path d="M2.67 10.73a3.52 3.52 0 0 0-.94 1.93 5 5 0 0 0-.07 1.1v.58h.8a5.05 5.05 0 0 0 .88-.08 3.46 3.46 0 0 0 1.93-.94 1.76 1.76 0 0 0-.14-2.48 1.76 1.76 0 0 0-2.46-.11zm1.74 1.73a2.26 2.26 0 0 1-1.26.6h-.22v-.22a2.26 2.26 0 0 1 .6-1.26.36.36 0 0 1 .24-.08.67.67 0 0 1 .47.22.54.54 0 0 1 .17.74zM14.65 2.24a.91.91 0 0 0-.89-.89A8.75 8.75 0 0 0 7.27 3.5L5.64 5.4l-2.4-.5a1 1 0 0 0-.92.27l-.68.68a1 1 0 0 0-.28.81 1 1 0 0 0 .45.74l2.06 1.32.13.08 3.2 3.25.08.08 1.32 2.06a1 1 0 0 0 .74.45h.11a1 1 0 0 0 .7-.29l.68-.68a1 1 0 0 0 .27-.92l-.5-2.39 1.84-1.58a8.79 8.79 0 0 0 2.21-6.54zM3.11 6.15l1.32.28-.64.75-1-.67zm6.38 7.1-.67-1 .75-.64.28 1.32zm2.39-5.11.18.17zm-.28-.28L7.92 11 5 8.08 8.14 4.4a7.44 7.44 0 0 1 5.26-1.8 7.48 7.48 0 0 1-1.8 5.26z" />
            <path d="M11.13 6.63a1.19 1.19 0 0 0-.06-1.7 1.16 1.16 0 1 0-1.64 1.63 1.2 1.2 0 0 0 1.7.07z" />
          </svg>
        ),
        label: "Launch",
      },
      {
        id: "Contact",
        icon: ({ className, style }) => (
          <svg
            viewBox="0 0 512 512"
            fill={
              activeSection === "Contact"
                ? "url(#iconGradient-Contact)"
                : "currentColor"
            }
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
          >
            <path d="M151.21 26.775c-18.385 2.518-37.75 18.106-48.784 28.028l15.607 18.527c17.103-12.17 32.453-18.857 36.975-5.98 43.955 125.186 102.805 440.16 214.205 416.636 90.158-25.674 42.966-127.593 56.11-188.435 2.508-10.346 8.965-23.229 21.237-22.842 11.477.362 6.472-5.97 2.8-7.682-35.743-19.406-80.315-25.59-117.909-38.12-11.833-3.945-8.18 4.162-5.371 10.28 4.217 9.188 2.88 41.07 5.293 54.526a32.625 32.625 0 0 1 15.105-3.707c18.12 0 33 14.881 33 33 0 6.41-1.87 12.412-5.08 17.496 10.623 5.506 17.947 16.611 17.947 29.318 0 18.12-14.88 33-33 33-1.186 0-2.358-.067-3.513-.191-.511 4.767-2.01 8.147-4.81 9.693-10.326 3.204-45.397-73.375-83.014-161.382-6.54 3.924-12.608 5.998-19.31 5.212 17.077 46.103 35.722 91.756 58.396 136.98l-16.09 8.067c-45.888-91.528-75.273-184.003-107.725-277.195l16.998-5.92c2.355 6.764 4.67 13.496 6.996 20.24a27.134 27.134 0 0 1 10.82-5.945c-14.584-34.816-28.005-66.631-38.576-90.332-5.286-7.657-17.624-13.574-28.306-13.272zM89.522 67.424C77.28 80.24 66.187 94.324 58.33 106.93l7.474 8.806c8.001-5.403 22.698-19.026 37.948-31.418zm135.737 79.97c-5.1 0-9.041 3.942-9.041 9.042s3.941 9.04 9.04 9.04c5.1 0 9.042-3.94 9.042-9.04s-3.942-9.041-9.041-9.041zm12.707 34.122c-5.1 0-9.041 3.941-9.041 9.04 0 5.1 3.941 9.042 9.04 9.042 5.1 0 9.04-3.942 9.04-9.041 0-5.1-3.94-9.041-9.04-9.041zm13.904 36.752c-5.1 0-9.041 3.94-9.041 9.039 0 5.1 3.941 9.04 9.04 9.04 5.1 0 9.042-3.94 9.042-9.04s-3.942-9.04-9.041-9.04zm94.61 87.738c-8.392 0-15 6.609-15 15 0 8.39 6.608 15 15 15 8.39 0 15-6.61 15-15 0-8.391-6.61-15-15-15zm12.866 46.814c-8.39 0-15 6.61-15 15 0 8.391 6.61 15 15 15 8.391 0 15-6.609 15-15 0-8.39-6.609-15-15-15z" />
          </svg>
        ),
        label: "Contact",
      },
    ],
    [activeSection]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorPosition, setIndicatorPosition] = useState(0);

  useEffect(() => {
    const updateIndicatorPosition = () => {
      const activeIndex = navItems.findIndex(item => item.id === activeSection);
      if (activeIndex === -1 || !itemRefs.current[activeIndex]) return;

      const activeItem = itemRefs.current[activeIndex];
      const container = containerRef.current;

      if (activeItem && container) {
        const itemRect = activeItem.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const centerPosition =
          itemRect.left - containerRect.left + itemRect.width / 2;
        setIndicatorPosition(centerPosition);
      }
    };

    updateIndicatorPosition();
    window.addEventListener("resize", updateIndicatorPosition);

    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [activeSection, navItems]);

  const getGradientForIcon = (id: string) => {
    if (id === "InoLaunch") {
      return (
        <linearGradient
          id={`iconGradient-${id}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            stopColor="#fec0a5"
          />
          <stop
            offset="100%"
            stopColor="#fe9a8b"
          />
        </linearGradient>
      );
    }
    return (
      <linearGradient
        id={`iconGradient-${id}`}
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop
          offset="0%"
          stopColor="#EC4899"
        />
        <stop
          offset="100%"
          stopColor="#3B82F6"
        />
      </linearGradient>
    );
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#181d27] pt-1 pb-3">
      <div
        ref={containerRef}
        className="relative w-full h-full"
      >
        <div
          className="absolute -top-6 w-16 h-6 transition-all duration-300 ease-out"
          style={{
            left: `${indicatorPosition}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="w-full h-full relative overflow-hidden rounded-t-full bg-[#181d27] border-t border-t-[#5d999c]">
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-[30px] h-[20px] rounded-full z-0"
              style={{
                background: "var(--Primary-700, #59A3A3)",
                filter: "blur(7.74px)",
                opacity: 1,
              }}
            ></div>
          </div>
        </div>

        <div className="flex justify-around px-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                ref={el => {
                  itemRefs.current[index] = el;
                }}
                onClick={() => onSectionChange(item.id)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 flex-1 ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <div className="relative">
                  <svg className="absolute w-0 h-0">
                    <defs>{getGradientForIcon(item.id)}</defs>
                  </svg>
                  <Icon
                    className="w-6 h-6"
                    style={
                      isActive && item.id !== "Swap" // Skip style for Swap since it handles its own gradient
                        ? {
                            stroke:
                              item.id === "Pool" || item.id === "Foundation"
                                ? `url(#iconGradient-${item.id})`
                                : undefined,
                            fill:
                              item.id === "InoLaunch" || item.id === "Contact"
                                ? `url(#iconGradient-${item.id})`
                                : undefined,
                          }
                        : undefined
                    }
                  />
                </div>
                {isActive && (
                  <span className="text-xs font-medium mt-1 text-white">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
