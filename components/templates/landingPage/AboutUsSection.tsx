"use client";

import Image from "next/image";

export default function AboutUsSection() {
  const features = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  ];

  return (
    <section
      className="w-full relative z-50"
      style={{
        backgroundImage: "url('/landingPage/about-us-bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full -z-10 dark:bg-black/50 bg-white/60"></div>
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[17px] md:py-[34px] ">
        <div className="flex flex-col items-center justify-start gap-[16px] md:gap-[32px] w-full max-w-[1322px] mx-auto mt-[18px] md:mt-[36px] mr-[29px] md:mr-[58px] ml-[29px] md:ml-[58px]">
          <div className="flex flex-col items-center justify-start gap-[2px] md:gap-[4px] w-full px-[28px] md:px-[56px] mx-auto max-w-[800px]">
            <h2 className="text-5xl font-bold text-center ">About Us</h2>
            <p className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-center w-full transition-colors duration-300 ease-in-out">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between w-full">
            <div className="flex items-center justify-center w-full lg:w-[36%] h-[245px] md:h-[490px] mb-8 lg:mb-0">
              <Image
                src="/landingPage/about-us-image.jpg"
                alt="Mujib AI Story"
                width={500}
                height={500}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col items-start justify-start w-full lg:w-[58%]">
              <h3 className="text-[20px] md:text-[40px] font-bold leading-[24px] md:leading-[49px] text-left text-text-light">
                Our Story
              </h3>

              <p className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-left w-full transition-colors duration-300 ease-in-out">
                Provide a professional patient experience by automatically
                responding to booking appointments and medical reminders,
                reducing pressure on administrative staff. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>

              {/* Features List */}
              <div className="flex flex-col items-center justify-start gap-[5px] md:gap-[10px] w-auto mt-[10px] md:mt-[20px]">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-[3px] md:gap-[6px] w-auto mr-[7px] md:mr-[14px]"
                  >
                    <Image
                      src="/about-star-image.png"
                      alt="Feature"
                      width={10}
                      height={10}
                      className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
                      loading="lazy"
                    />
                    <span className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-left w-full transition-colors duration-300 ease-in-out">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
