'use client'

import Image from 'next/image'

export default function AboutUsSection() {
  const features = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  ]

  return (
    <section
      className="relative z-50 w-full"
      style={{
        backgroundImage: "url('/landingPage/about-us-bg-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white/60 dark:bg-black/50"></div>
      <div className="mx-auto w-full max-w-[1440px] px-4 py-[17px] sm:px-6 md:py-[34px] lg:px-8">
        <div className="mx-auto mt-[18px] mr-[29px] ml-[29px] flex w-full max-w-[1322px] flex-col items-center justify-start gap-[16px] md:mt-[36px] md:mr-[58px] md:ml-[58px] md:gap-[32px]">
          <div className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-start gap-[2px] px-[28px] md:gap-[4px] md:px-[56px]">
            <h2 className="text-center text-5xl font-bold">About Us</h2>
            <p className="w-full text-center text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            <div className="mb-8 flex h-[245px] w-full items-center justify-center md:h-[490px] lg:mb-0 lg:w-[36%]">
              <Image
                src="/landingPage/about-us-image.jpg"
                alt="Mujib AI Story"
                width={500}
                height={500}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex w-full flex-col items-start justify-start lg:w-[58%]">
              <h3 className="text-text-light text-left text-[20px] leading-[24px] font-bold md:text-[40px] md:leading-[49px]">
                Our Story
              </h3>

              <p className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
                Provide a professional patient experience by automatically
                responding to booking appointments and medical reminders,
                reducing pressure on administrative staff. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </p>

              {/* Features List */}
              <div className="mt-[10px] flex w-auto flex-col items-center justify-start gap-[5px] md:mt-[20px] md:gap-[10px]">
                {features?.map((feature, index) => (
                  <div
                    key={index}
                    className="mr-[7px] flex w-auto items-center justify-center gap-[3px] md:mr-[14px] md:gap-[6px]"
                  >
                    <Image
                      src="/about-star-image.png"
                      alt="Feature"
                      width={10}
                      height={10}
                      className="h-[10px] w-[10px] md:h-[20px] md:w-[20px]"
                      loading="lazy"
                    />
                    <span className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
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
  )
}
