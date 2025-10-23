"use client";
import { Button } from "@/components/ui/button";
export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: 1,
      title: "Lorem Ipsum",
      description:
        "Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      description:
        "Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
    {
      id: 3,
      title: "Lorem Ipsum",
      description:
        "Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.",
    },
  ];

  return (
    <section
      className="w-full bg-background-dark relative"
      style={{
        backgroundImage: "url('/landingPage/img_.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-white/90 dark:bg-black/30 z-10 py-20"></div>
      <div
        className="absolute top-1/2 left-2/2 -translate-x-2/2 -translate-y-1/2 
            w-[45%] h-[45%] rounded-full 
            bg-[#06B6D4]/40 blur-[100px] 
            opacity-80 z-20"
      ></div>
      <div className="z-50 relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-[16px] md:py-[32px]">
        <div className="flex flex-col items-center justify-start gap-[16px] md:gap-[32px] w-full max-w-[1322px] mx-auto">
          <div className="flex flex-col items-center justify-start gap-3 w-full px-5 max-w-[90%]">
            <h2 className="text-4xl font-bold leading-[50px] text-center">
              Why Choose Us
            </h2>
            <p className="text-sm md:text-base font-normal leading-normal text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex flex-col items-start justify-start gap-[20px] md:gap-[40px] w-full">
            <div className="flex flex-col items-start justify-start gap-[13px] md:gap-[26px] w-full mr-[5px] md:mr-[10px]">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="flex flex-col items-start justify-start  gap-3 w-full dark:bg-[#ffffff1e] bg-[#06B6D426] border-l-2 dark:border-primary border-[#3B82F6] py-[24px] px-[24px]"
                >
                  <h3 className="text-3xl font-bold leading-[30px] text-left">
                    {reason.title}
                  </h3>
                  <p className="text-base md:text-lg font-normal text-[#4E4E4E] dark:text-[#E5E5E5] leading-relaxed md:leading-[30px] tracking-[0.2px] text-left w-full transition-colors duration-300 ease-in-out">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
            <Button
              variant="default"
              size="lg"
              className="bg-primary rounded-full px-15 text-black dark:text-white font-bold"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
