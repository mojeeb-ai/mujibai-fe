import Logo from "../atoms/Logo";
import PasswordInput from "../atoms/PasswordInput";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useTranslations } from "next-intl";

/**
 * ResetPasswordPage
 *
 * A page that allows users to set a new password.
 * Supports multilingual text using next-intl.
 */
export default function ResetPasswordPage() {
  const t = useTranslations("resetPasswordPage");

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

        {/* Password Reset Card */}
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] border-t-1 border-b-1 border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <h1 className="text-2xl font-semibold">{t("title")}</h1>

          <form className="flex flex-col gap-4 py-5">
            {/* New Password */}
            <div>
              <Label>{t("newPassword")}</Label>
              <PasswordInput placeholder={t("placeholder")} />
            </div>

            {/* Confirm Password */}
            <div>
              <Label>{t("confirmPassword")}</Label>
              <PasswordInput placeholder={t("placeholder")} />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full text-white capitalize py-5 text-md mt-2"
            >
              {t("submit")}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
