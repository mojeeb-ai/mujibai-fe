"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Logo from "../atoms/Logo";
import Link from "next/link";
import Image from "next/image";
const Footer = ({ theme }: { theme: string }) => {
  return (
    <footer className=" w-full bg-footer-background mt-[-4px] relative bg-gradient-to-tl from-primary/40 dark:from-primary/40 via-primary/30 dark:via-primary/10 to-transparent/20">
      <div className="relative w-full">
        <div className="relative w-full  mx-auto px-10">
          <div className="pt-[39px] md:pt-[78px] pb-[35px] md:pb-[70px]">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-8 lg:mb-16">
              <div className="flex flex-col gap-6 w-full sm:w-[30%]">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-[6px]">
                    <Logo />
                  </div>
                  <p className="text-sm md:text-lg font-normal leading-[20px] md:leading-[27px] text-left text-text-light ">
                    Provide a professional patient experience by automatically
                    responding to booking appointments.
                  </p>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-lg md:text-xl font-semibold leading-[22px] md:leading-[25px] text-left text-text-light">
                    Follow Us
                  </h3>
                  <div className="flex items-center gap-[10px]">
                    <ul className="flex justify-center gap-1 items-center">
                      <li className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
                        <Facebook className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                      <li className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
                        <Instagram className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                      <li className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
                        <Twitter className="size-5 text-[#3B82F6] dark:text-white" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Center Section - Quick Links */}
              <div className="flex flex-col gap-[14px] w-full lg:w-[20%] lg:self-center">
                <h3 className="text-lg md:text-xl font-semibold leading-[22px] md:leading-[25px] text-left text-text-light">
                  Quick Links
                </h3>
                <ul className="flex flex-col gap-[6px]">
                  <li>
                    <Link
                      href="#about"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#features"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#why-us"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      Why Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#contact"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      Contact US
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#industries"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      Industries We Serve
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#pricing"
                      className="text-sm md:text-base font-medium leading-normal text-left text-text-light-muted hover:text-text-light transition-colors"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 w-full sm:w-[30%]">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-xl">Contact</h3>

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
                        <Phone className="size-5 text-[#3B82F6] dark:text-white" />
                      </div>
                      <span className="text-sm md:text-sm font-normal leading-tight text-left text-text-light-muted">
                        +91 72 7602 0908
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
                        <Mail className="size-5 text-[#3B82F6] dark:text-white" />
                      </div>
                      <span className="text-sm md:text-base font-normal leading-normal text-left text-text-light-muted">
                        info@lorem.com
                      </span>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="dark:bg-white/20 bg-[#3B82F6]/20 rounded-full p-2 cursor-pointer dark:hover:bg-white/40 hover:bg-[#3B82F6]/40 transition-colors">
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-text-light border-opacity-20">
              <p className="text-xs md:text-xs font-medium leading-tight text-left text-text-light-muted">
                © Copyright Mujib 2025. All Right Reserved.
              </p>

              <div className="flex items-center gap-8">
                <span className="text-xs md:text-xs font-medium leading-tight text-left text-text-light-muted hover:text-text-light transition-colors cursor-pointer">
                  Terms of use
                </span>
                <a
                  href="#privacy"
                  className="text-xs md:text-xs font-medium leading-tight text-left text-text-light-muted hover:text-text-light transition-colors"
                >
                  Privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[10%] right-10 w-[200px] h-[200px]">
        <Image
          src={
            theme === "dark"
              ? "/landingPage/flag-logo-footer-dark.png"
              : "/landingPage/flag-logo-footer-light.png"
          }
          alt=""
          width={100}
          height={100}
          sizes="100vw,100vh"
          className="w-[200px] h-[200px] object-contain"
        />
      </div>
    </footer>
  );
};

export default Footer;
