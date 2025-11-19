'use client'
import HeroSection from '../templates/landingPage/HeroSection'
import FeaturesSection from '../templates/landingPage/FeaturesSection'
import TargetedSectorsSection from '../templates/landingPage/TargetedSectorsSection'
import WhyChooseUs from '../templates/landingPage/WhyChooseUs'
import PricingSection from '../templates/landingPage/PricingSection'
import AboutUsSection from '../templates/landingPage/AboutUsSection'
import ContactUsSection from '../templates/landingPage/ContactUsSection'
import Footer from '../templates/Footer'
import useLandingPage from '@/hooks/useLandingPage'
import { User } from '@/types/types'

export default function LandingPage({ user }: { user: User | null }) {
  const {
    startSession,
    stopSession,
    sendClientEvent,
    isSessionActive,
    events,
    currentTheme,
  } = useLandingPage()
  return (
    <main className="h-screen w-full overflow-x-hidden">
      <HeroSection
        startSession={startSession}
        stopSession={stopSession}
        sendClientEvent={sendClientEvent}
        isSessionActive={isSessionActive}
        events={events}
        user={user || null}
      />
      <FeaturesSection />
      <TargetedSectorsSection theme={currentTheme || 'dark'} />
      <WhyChooseUs />
      <PricingSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer theme={currentTheme || 'dark'} />
    </main>
  )
}
