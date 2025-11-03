"use client";

import Link from "next/link";
import Logo from "@/components/atoms/Logo";
import PasswordInput from "@/components/atoms/PasswordInput";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

/**
 * LoginPage — User login form with localization support
 */
export default function LoginPage() {
  const t = useTranslations("loginPage");

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/70 blur-[160px] 
            opacity-60 z-[-1]"
      ></div>

      <div className="sm:w-[50%] w-full h-[50%] flex items-center justify-center flex-col gap-5">
        <Logo />
        <div className="sm:w-full md:w-[80%] lg:w-[60%] border-t border-b border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>

          <form className="flex flex-col gap-4 py-5">
            {/* Email field */}
            <div>
              <Label>{t("email")}</Label>
              <Input
                type="text"
                placeholder={t("emailPlaceholder")}
                className="w-full mt-3 focus:outline-none focus:ring-2 border-none focus:ring-[#06B6D4] bg-[#06B6D40F] dark:bg-[#3B82F633] placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]"
              />
            </div>

            {/* Password field */}
            <div>
              <Label>{t("password")}</Label>
              <PasswordInput placeholder={t("passwordPlaceholder")} />
            </div>

            {/* Forgot password link */}
            <div className="w-full flex justify-end items-center">
              <Link
                href="/forget-password"
                className="text-primary capitalize font-semibold hover:underline"
              >
                {t("forgotPassword")}
              </Link>
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              className="w-full rounded-full text-white capitalize py-5 text-md mt-2"
            >
              {t("loginButton")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
