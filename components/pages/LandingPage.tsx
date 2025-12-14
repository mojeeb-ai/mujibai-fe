'use client';
import { User } from '@/types/types';

import useAuth from '@/hooks/useAuth';
import useLandingPage from '@/hooks/useLandingPage';

import Footer from '../templates/Footer';
import AboutUsSection from '../templates/landingPage/AboutUsSection';
import ContactUsSection from '../templates/landingPage/ContactUsSection';
import FeaturesSection from '../templates/landingPage/FeaturesSection';
import HeroSection from '../templates/landingPage/HeroSection';
import PricingSection from '../templates/landingPage/PricingSection';
import TargetedSectorsSection from '../templates/landingPage/TargetedSectorsSection';
import WhyChooseUs from '../templates/landingPage/WhyChooseUs';

export default function LandingPage({ user }: { user: User | null }) {
  const {
    startSession,
    stopSession,
    sendClientEvent,
    isSessionActive,
    events,
    currentTheme,
  } = useLandingPage();
  const { user: authUser } = useAuth();
  const existUser = user || authUser?.user || null;

  return (
    <main className="h-screen w-full overflow-x-hidden">
      <HeroSection
        startSession={startSession}
        stopSession={stopSession}
        sendClientEvent={sendClientEvent}
        isSessionActive={isSessionActive}
        events={events}
        user={existUser || null}
      />
      <FeaturesSection />
      <TargetedSectorsSection theme={currentTheme || 'dark'} />
      <WhyChooseUs />
      <PricingSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer theme={currentTheme || 'dark'} />
    </main>
  );
}
