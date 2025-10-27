"use client";
import HeroSection from "../templates/landingPage/HeroSection";
import FeaturesSection from "../templates/landingPage/FeaturesSection";
import TargetedSectorsSection from "../templates/landingPage/TargetedSectorsSection";
import WhyChooseUs from "../templates/landingPage/WhyChooseUs";
import PricingSection from "../templates/landingPage/PricingSection";
import AboutUsSection from "../templates/landingPage/AboutUsSection";
import ContactUsSection from "../templates/landingPage/ContactUsSection";
import Footer from "../templates/Footer";
import { useTheme } from "next-themes";

export default function LandingPage() {
  const { theme, resolvedTheme } = useTheme();

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <main className="w-screen h-screen overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <TargetedSectorsSection theme={currentTheme || "dark"} />
      <WhyChooseUs />
      <PricingSection />
      <AboutUsSection />
      <ContactUsSection />
      <Footer theme={currentTheme || "dark"} />
    </main>
  );
}
