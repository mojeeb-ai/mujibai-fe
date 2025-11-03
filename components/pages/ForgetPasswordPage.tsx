import Link from "next/link";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useTranslations } from "next-intl";

/**
 * ForgetPasswordPage
 *
 * A page that allows users to reset their password by entering their email.
 * Automatically translates text based on the current locale using next-intl.
 */
export default function ForgetPasswordPage() {
  const t = useTranslations("forgetPasswordPage");

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      {/* Background Blur Effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[65%] h-[65%] rounded-full 
            bg-[#06B6D4]/70 blur-[160px] 
            opacity-60 z-[-1]"
      ></div>

      <div className="sm:w-[50%] w-[100%] h-[50%] flex items-center justify-center flex-col gap-5">
        <Logo />

        {/* Card Container */}
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] border-t-1 border-b-1 border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>
          <p>{t("description")}</p>

          {/* Form Section */}
          <form className="flex flex-col gap-4 py-5">
            <div>
              <Label>{t("emailLabel")}</Label>
              <Input
                type="text"
                placeholder={t("emailPlaceholder")}
                className="w-full mt-3 focus:outline-none focus:ring-2 border-none focus:ring-[#06B6D4]
                          bg-[#06B6D40F] dark:bg-[#3B82F633]
                          placeholder:text-[#000000BF] dark:placeholder:text-[#FFFFFFBF]"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full text-white capitalize py-5 text-md mt-4"
            >
              {t("sendButton")}
            </Button>

            {/* Return to Login Link */}
            <div className="flex justify-center items-center">
              <Link href={"/login"} className="text-primary hover:underline">
                {t("returnLogin")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
