'use client'
import Header from '../../organisms/Header'
import { Button } from '../../ui/button'
import SessionControls from '../../organisms/SessionControls'
import Link from 'next/link'
import { User } from '@/types/types'
import { motion } from 'framer-motion'

export default function HeroSection({
  startSession,
  stopSession,
  sendClientEvent,
  events,
  isSessionActive,
  user,
}: {
  startSession: () => void
  stopSession: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sendClientEvent: (message: any) => void
  events: unknown[]
  isSessionActive: boolean
  user: User | null
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="from-primary/40 dark:from-primary/20 absolute bottom-0 -z-10 h-[60%] w-full bg-gradient-to-t from-[40%] to-transparent"></div>

      <motion.div
        className="relative z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Header user={user} />
      </motion.div>

      <div className="flex h-full items-center justify-center px-6">
        <div className="mx-auto mt-32 flex w-full max-w-[912px] flex-col items-center gap-8 text-center sm:mt-24 md:mt-20">
          {/* Headline with stagger animation */}
          <motion.h1
            className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            Lorem Ipsum Is Simply Dummy Text Of The{' '}
            <motion.span
              className="text-primary"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8, ease: 'backOut' }}
            >
              Printing.
            </motion.span>
          </motion.h1>

          {/* Paragraph with fade in */}
          <motion.p
            className="max-w-[700px] text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </motion.p>

          {/* Buttons with stagger animation */}
          <motion.div
            className="mt-4 flex h-auto flex-col justify-center gap-4 sm:h-[70px] sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button className="bg-primary hover:bg-primary/90 rounded-full py-6 text-base font-medium text-white shadow-md transition sm:text-lg">
                <Link href={'/login'} className="px-10 py-6 sm:px-14">
                  Get Started
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <SessionControls
                startSession={startSession}
                stopSession={stopSession}
                sendClientEvent={sendClientEvent}
                serverEvents={events}
                isSessionActive={isSessionActive}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
