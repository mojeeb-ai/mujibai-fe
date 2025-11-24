'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
      {/* Animated overlay */}
      <motion.div
        className="absolute top-0 left-0 -z-10 h-full w-full bg-white/60 dark:bg-black/50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="mx-auto w-full max-w-[1440px] px-4 py-[17px] sm:px-6 md:py-[34px] lg:px-8">
        <div className="mx-auto mt-[18px] mr-[29px] ml-[29px] flex w-full max-w-[1322px] flex-col items-center justify-start gap-[16px] md:mt-[36px] md:mr-[58px] md:ml-[58px] md:gap-[32px]">
          {/* Header section */}
          <motion.div
            className="mx-auto flex w-full max-w-[800px] flex-col items-center justify-start gap-[2px] px-[28px] md:gap-[4px] md:px-[56px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h2
              className="text-center text-5xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                type: 'spring',
                stiffness: 120,
              }}
            >
              About Us
            </motion.h2>
            <motion.p
              className="w-full text-center text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </motion.p>
          </motion.div>

          <div className="flex w-full flex-col items-center justify-between lg:flex-row">
            {/* Image section - slides from left */}
            <motion.div
              className="mb-8 flex h-[245px] w-full items-center justify-center md:h-[490px] lg:mb-0 lg:w-[36%]"
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.9,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.2,
              }}
            >
              <motion.div
                className="h-full w-full overflow-hidden rounded-lg shadow-2xl"
                whileHover={{
                  scale: 1.03,
                  rotate: 1,
                  boxShadow: '0 30px 60px rgba(6, 182, 212, 0.25)',
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/landingPage/about-us-image.jpg"
                  alt="Mujib AI Story"
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>

            {/* Content section - slides from right */}
            <motion.div
              className="flex w-full flex-col items-start justify-start lg:w-[58%]"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.9,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3,
              }}
            >
              {/* Title */}
              <motion.h3
                className="text-text-light text-left text-[20px] leading-[24px] font-bold md:text-[40px] md:leading-[49px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Our Story
              </motion.h3>

              {/* Paragraph */}
              <motion.p
                className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Provide a professional patient experience by automatically
                responding to booking appointments and medical reminders,
                reducing pressure on administrative staff. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry.Lorem Ipsum
                is simply dummy text of the printing and typesetting industry.
              </motion.p>

              {/* Features List - staggered entrance */}
              <div className="mt-[10px] flex w-auto flex-col items-center justify-start gap-[5px] md:mt-[20px] md:gap-[10px]">
                {features?.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="mr-[7px] flex w-auto items-center justify-center gap-[3px] md:mr-[14px] md:gap-[6px]"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7 + index * 0.1,
                      ease: 'easeOut',
                    }}
                    whileHover={{
                      x: 8,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Star icon with spin animation */}
                    <motion.div
                      initial={{ scale: 0, rotate: -90 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + index * 0.1,
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                      }}
                      whileHover={{
                        rotate: 180,
                        scale: 1.3,
                        transition: { duration: 0.4 },
                      }}
                    >
                      <Image
                        src="/about-star-image.png"
                        alt="Feature"
                        width={10}
                        height={10}
                        className="h-[10px] w-[10px] md:h-[20px] md:w-[20px]"
                        loading="lazy"
                      />
                    </motion.div>
                    <span className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
