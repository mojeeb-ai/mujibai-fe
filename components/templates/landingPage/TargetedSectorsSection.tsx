"use client";

import Image from "next/image";

export default function SectorsSection({ theme }: { theme: string }) {
  const sectors = [
    {
      id: 1,
      icon: "/images/img_group_white_a700_74x86.svg",
      title: "Clinics & Hospitals",
      description:
        "Provide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Automatically confirm and schedule appointments and reduce cancellations to thanks to automated reminders.",
      isLarge: true,
    },
    {
      id: 2,
      icon: "/images/img_group_white_a700_74x86.svg",
      title: "Travel & Hotels",
      description:
        "Provide a professional patient experience by automatically responding to booking appointments.",
      isLarge: false,
    },
    {
      id: 3,
      icon: "/images/img_group_white_a700_74x86.svg",
      title: "Travel & Hotels",
      description:
        "Provide a professional patient experience by automatically responding to booking appointments.",
      isLarge: false,
    },
    {
      id: 4,
      icon: "/images/img_group_white_a700_74x86.svg",
      title: "Travel & Hotels",
      description:
        "Provide a professional patient experience by automatically responding to booking appointments.",
      isLarge: false,
    },
    {
      id: 5,
      icon: "/images/img_group_white_a700_74x86.svg",
      title: "Travel & Hotels",
      description:
        "Provide a professional patient experience by automatically responding to booking appointments.",
      isLarge: false,
    },
  ];

  return (
    <section className="w-full bg-background-dark relative dark:bg-[#001434] bg-white">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/40 blur-[160px] 
            opacity-60 z-0"
      ></div>
      <div className="relative w-full mx-auto px-8 py-18">
        <div className="flex flex-col items-center justify-start gap-10 w-full mx-auto">
          <div className="flex flex-col items-center justify-start gap-3 w-full px-15 mx-auto max-w-[95%]">
            <h2 className="text-[44px] font-bold leading-[54px] text-center">
              Targeted Sectors
            </h2>
            <p className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-center w-full transition-colors duration-300 ease-in-out">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-start gap-[14px] md:gap-[28px] w-full">
            <div className="w-full h-full lg:w-[32%]">
              <div className="bg-[#06B6D40D] dark:bg-transparent flex flex-col items-start justify-start w-full  rounded-xl py-9 px-6 border border-[#3FA9F5]/30">
                <div className="p-3 px-7 bg-white/5 dark:bg-[#06B6D40F] rounded-lg">
                  <Image
                    src={
                      theme === "dark"
                        ? "/landingPage/targeted-sector-image-one-dark.png"
                        : "/landingPage/targeted-sector-image-one-light.png"
                    }
                    alt="Clinics & Hospitals"
                    width={100}
                    height={100}
                    className="w-20"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col items-start justify-start gap-[4px] md:gap-[8px] w-full mt-20">
                  <h3 className="text-3xl font-bold leading-[35px] text-left">
                    Clinics & Hospitals
                  </h3>
                  <p className="py-3 text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-left w-full transition-colors duration-300 ease-in-out">
                    Provide a professional patient experience by automatically
                    responding to booking appointments and medical reminders,
                    reducing pressure on administrative staff. Automatically
                    confirm and schedule appointments and reduce cancellations
                    to thanks to automated reminders.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px] md:gap-[28px] w-full lg:w-[68%] ml-0 lg:ml-[14px] md:ml-[28px]">
              {sectors?.slice(1)?.map((sector) => (
                <div key={sector?.id} className="">
                  <div className="flex flex-col items-start justify-start w-full bg-[#06B6D40D] dark:bg-transparent rounded-xl py-[36px] px-[22px] border border-[#3FA9F5]/30">
                    <div className=" p-3 px-7 bg-white/3 rounded-lg">
                      <Image
                        src={
                          theme === "dark"
                            ? "/landingPage/targeted-sector-image-one-dark.png"
                            : "/landingPage/targeted-sector-image-one-light.png"
                        }
                        alt="Clinics & Hospitals"
                        width={100}
                        height={100}
                        className="w-10"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col items-start justify-start w-full mt-[6px] md:mt-[12px]">
                      <h3 className="text-[12px] md:text-[24px] font-bold leading-[15px] md:leading-[30px] text-left">
                        {sector?.title}
                      </h3>
                      <p className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-left w-full transition-colors duration-300 ease-in-out">
                        {sector?.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
