'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function SectorsSection({ theme }: { theme: string }) {
  const sectors = [
    {
      id: 1,
      icon: '/images/img_group_white_a700_74x86.svg',
      title: 'Clinics & Hospitals',
      description:
        'Provide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Automatically confirm and schedule appointments and reduce cancellations to thanks to automated reminders.',
      isLarge: true,
    },
    {
      id: 2,
      icon: '/images/img_group_white_a700_74x86.svg',
      title: 'Travel & Hotels',
      description:
        'Provide a professional patient experience by automatically responding to booking appointments.',
      isLarge: false,
    },
    {
      id: 3,
      icon: '/images/img_group_white_a700_74x86.svg',
      title: 'Travel & Hotels',
      description:
        'Provide a professional patient experience by automatically responding to booking appointments.',
      isLarge: false,
    },
    {
      id: 4,
      icon: '/images/img_group_white_a700_74x86.svg',
      title: 'Travel & Hotels',
      description:
        'Provide a professional patient experience by automatically responding to booking appointments.',
      isLarge: false,
    },
    {
      id: 5,
      icon: '/images/img_group_white_a700_74x86.svg',
      title: 'Travel & Hotels',
      description:
        'Provide a professional patient experience by automatically responding to booking appointments.',
      isLarge: false,
    },
  ]

  return (
    <section className="bg-background-dark relative w-full bg-white dark:bg-[#001434]">
      {/* Animated background blur */}
      <motion.div
        className="absolute top-1/2 left-1/2 z-0 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/40 opacity-60 blur-[160px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      <div className="relative mx-auto w-full px-8 py-18">
        <div className="mx-auto flex w-full flex-col items-center justify-start gap-10">
          {/* Header section with animations */}
          <motion.div
            className="mx-auto flex w-full max-w-[95%] flex-col items-center justify-start gap-3 px-15"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-center text-[44px] leading-[54px] font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Targeted Sectors
            </motion.h2>
            <motion.p
              className="w-full text-center text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </motion.p>
          </motion.div>

          <div className="flex w-full flex-col items-start justify-start gap-[14px] md:gap-[28px] lg:flex-row">
            {/* Large featured card */}
            <motion.div
              className="h-full w-full lg:w-[32%]"
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="flex w-full flex-col items-start justify-start rounded-xl border border-[#3FA9F5]/30 bg-[#06B6D40D] px-6 py-9 dark:bg-transparent"
                whileHover={{
                  boxShadow: '0 20px 50px rgba(6, 182, 212, 0.2)',
                  borderColor: 'rgba(63, 169, 245, 0.6)',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="rounded-lg bg-white/5 p-3 px-7 dark:bg-[#06B6D40F]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                  >
                    <Image
                      src={
                        theme === 'dark'
                          ? '/landingPage/targeted-sector-image-one-dark.png'
                          : '/landingPage/targeted-sector-image-one-light.png'
                      }
                      alt="Clinics & Hospitals"
                      width={100}
                      height={100}
                      className="w-20"
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  className="mt-20 flex w-full flex-col items-start justify-start gap-[4px] md:gap-[8px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <h3 className="text-left text-3xl leading-[35px] font-bold">
                    Clinics & Hospitals
                  </h3>
                  <p className="w-full py-3 text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
                    Provide a professional patient experience by automatically
                    responding to booking appointments and medical reminders,
                    reducing pressure on administrative staff. Automatically
                    confirm and schedule appointments and reduce cancellations
                    to thanks to automated reminders.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Grid of smaller cards */}
            <motion.div
              className="ml-0 grid w-full grid-cols-1 gap-[14px] sm:grid-cols-2 md:ml-[28px] md:gap-[28px] lg:ml-[14px] lg:w-[68%]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {sectors?.slice(1)?.map((sector, index) => (
                <motion.div
                  key={sector?.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -8, scale: 1.03 }}
                >
                  <motion.div
                    className="flex w-full flex-col items-start justify-start rounded-xl border border-[#3FA9F5]/30 bg-[#06B6D40D] px-[22px] py-[36px] dark:bg-transparent"
                    whileHover={{
                      boxShadow: '0 15px 40px rgba(6, 182, 212, 0.15)',
                      borderColor: 'rgba(63, 169, 245, 0.5)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="rounded-lg bg-white/3 p-3 px-7"
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: 180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.6,
                          delay: 0.5 + index * 0.1,
                          type: 'spring',
                        }}
                      >
                        <Image
                          src={
                            theme === 'dark'
                              ? '/landingPage/targeted-sector-image-one-dark.png'
                              : '/landingPage/targeted-sector-image-one-light.png'
                          }
                          alt="Clinics & Hospitals"
                          width={100}
                          height={100}
                          className="w-10"
                          loading="lazy"
                        />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      className="mt-[6px] flex w-full flex-col items-start justify-start md:mt-[12px]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <h3 className="text-left text-[12px] leading-[15px] font-bold md:text-[24px] md:leading-[30px]">
                        {sector?.title}
                      </h3>
                      <p className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]">
                        {sector?.description}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
