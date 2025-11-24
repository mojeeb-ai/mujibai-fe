'use client'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function WhyChooseUsSection() {
  const reasons = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      description:
        'Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description:
        'Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      description:
        'Provide a professional patient experience bProvide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Lorem Ipsum is simply dummy text of the printing and typesetting.',
    },
  ]

  return (
    <section
      className="bg-background-dark relative w-full"
      style={{
        backgroundImage: "url('/landingPage/img_.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated overlay */}
      <motion.div
        className="absolute top-0 left-0 z-10 h-full w-full bg-white/90 py-20 dark:bg-black/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Animated background blur */}
      <motion.div
        className="absolute top-1/2 left-2/2 z-20 h-[45%] w-[45%] -translate-x-2/2 -translate-y-1/2 rounded-full bg-[#06B6D4]/40 opacity-80 blur-[100px]"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 0.6, 0.8],
        }}
      />

      <div className="relative z-50 mx-auto w-full max-w-[1440px] px-4 py-[16px] sm:px-6 md:py-[32px] lg:px-8">
        <div className="mx-auto flex w-full max-w-[1322px] flex-col items-center justify-start gap-[16px] md:gap-[32px]">
          {/* Header section */}
          <motion.div
            className="flex w-full max-w-[90%] flex-col items-center justify-start gap-3 px-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-center text-4xl leading-[50px] font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              className="text-center text-sm leading-normal font-normal md:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </motion.p>
          </motion.div>

          <div className="flex w-full flex-col items-start justify-start gap-[20px] md:gap-[40px]">
            <div className="mr-[5px] flex w-full flex-col items-start justify-start gap-[13px] md:mr-[10px] md:gap-[26px]">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.id}
                  className="dark:border-primary flex w-full flex-col items-start justify-start gap-3 border-l-2 border-[#3B82F6] bg-[#06B6D426] px-[24px] py-[24px] dark:bg-[#ffffff1e]"
                  initial={{ opacity: 0, x: -50, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    x: 10,
                    borderLeftWidth: '6px',
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                  >
                    <h3 className="text-left text-3xl leading-[30px] font-bold">
                      {reason.title}
                    </h3>
                  </motion.div>
                  <motion.p
                    className="w-full text-left text-base leading-relaxed font-normal tracking-[0.2px] text-[#4E4E4E] transition-colors duration-300 ease-in-out md:text-lg md:leading-[30px] dark:text-[#E5E5E5]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                  >
                    {reason.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            {/* Animated button */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="default"
                size="lg"
                className="bg-primary rounded-full px-15 font-bold text-black dark:text-white"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
