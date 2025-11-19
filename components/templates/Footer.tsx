'use client'

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import Logo from '../atoms/Logo'
import Link from 'next/link'
import Image from 'next/image'
const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className="bg-footer-background from-primary/40 dark:from-primary/40 via-primary/30 dark:via-primary/10 relative mt-[-4px] w-full bg-gradient-to-tl to-transparent/20">
      <div className="relative w-full">
        <div className="relative mx-auto w-full px-10">
          <div className="pt-[39px] pb-[35px] md:pt-[78px] md:pb-[70px]">
            <div className="mb-8 flex flex-col items-start justify-between gap-8 lg:mb-16 lg:flex-row lg:gap-0">
              <div className="flex w-full flex-col gap-6 sm:w-[30%]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[6px]">
                    <Logo />
                  </div>
                  <p className="text-text-light text-left text-sm leading-[20px] font-normal md:text-lg md:leading-[27px]">
                    Provide a professional patient experience by automatically
                    responding to booking appointments.
                  </p>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-text-light text-left text-lg leading-[22px] font-semibold md:text-xl md:leading-[25px]">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <ul className="flex items-center justify-center gap-1">
                      <li className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <Facebook className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                      <li className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <Instagram className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                      <li className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <Twitter className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Center Section - Quick Links */}
              <div className="flex w-full flex-col gap-[14px] lg:w-[20%] lg:self-center">
                <h3 className="text-text-light text-left text-lg leading-[22px] font-semibold md:text-xl md:leading-[25px]">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-[6px]">
                  <li>
                    <Link
                      href="#about"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#why-us"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#industries"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-text-light-muted hover:text-text-light text-left text-sm leading-normal font-medium transition-colors md:text-base"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex w-full flex-col items-start gap-4 sm:w-[30%] lg:flex-row lg:items-center">
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold">Contact</h3>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <Phone className="size-5 text-[#3B82F6] dark:text-white" />
                      </div>
                      <span className="text-text-light-muted text-left text-sm leading-tight font-normal md:text-sm">
                        +91 72 7602 0908
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <Mail className="size-5 text-[#3B82F6] dark:text-white" />
                      </div>
                      <span className="text-text-light-muted text-left text-sm leading-normal font-normal md:text-base">
                        info@lorem.com
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="cursor-pointer rounded-full bg-[#3B82F6]/20 p-2 transition-colors hover:bg-[#3B82F6]/40 dark:bg-white/20 dark:hover:bg-white/40">
                        <MapPin className="size-5 text-[#3B82F6] dark:text-white" />
                      </div>
                      <p className="w-[50%]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright */}
            <div className="border-text-light border-opacity-20 flex flex-col items-center justify-between gap-4 border-t pt-4 sm:flex-row">
              <p className="text-text-light-muted text-left text-xs leading-tight font-medium md:text-xs">
                © Copyright Mujib 2025. All Right Reserved.
              </p>

              <div className="flex items-center gap-8">
                <span className="text-text-light-muted hover:text-text-light cursor-pointer text-left text-xs leading-tight font-medium transition-colors md:text-xs">
                  Terms of use
                </span>
                <a
                  href="#privacy"
                  className="text-text-light-muted hover:text-text-light text-left text-xs leading-tight font-medium transition-colors md:text-xs"
                >
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] right-10 h-[200px] w-[200px]">
        <Image
          src={
            theme === 'dark'
              ? '/landingPage/flag-logo-footer-dark.png'
              : '/landingPage/flag-logo-footer-light.png'
          }
          alt=""
          width={100}
          height={100}
          sizes="100vw,100vh"
          className="h-[200px] w-[200px] object-contain"
          loading="lazy"
        />
      </div>
    </footer>
  )
}

export default Footer
