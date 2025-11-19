import Header from '../../organisms/Header'
import { Button } from '../../ui/button'
import SessionControls from '../../organisms/SessionControls'
import Link from 'next/link'
import { User } from '@/types/types'
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
      <div className="relative z-50">
        <Header user={user} />
      </div>
      <div className="flex h-full items-center justify-center px-6">
        <div className="/* matches Figma width */ mx-auto mt-32 flex w-full max-w-[912px] flex-col items-center gap-8 text-center sm:mt-24 md:mt-20">
          {/* ====== Headline ====== */}
          <h1 className="text-3xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
            Lorem Ipsum Is Simply Dummy Text Of The{' '}
            <span className="text-primary">Printing.</span>
          </h1>

          {/* ====== Paragraph ====== */}
          <p className="max-w-[700px] text-base text-gray-600 sm:text-lg md:text-xl dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>

          {/* ====== Buttons ====== */}
          <div className="mt-4 flex h-auto flex-col justify-center gap-4 sm:h-[70px] sm:flex-row">
            <Button className="bg-primary hover:bg-primary/90 rounded-full py-6 text-base font-medium text-white shadow-md transition sm:text-lg">
              <Link href={'/login'} className="px-10 py-6 sm:px-14">
                Get Started
              </Link>
            </Button>
            <SessionControls
              startSession={startSession}
              stopSession={stopSession}
              sendClientEvent={sendClientEvent}
              serverEvents={events}
              isSessionActive={isSessionActive}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
