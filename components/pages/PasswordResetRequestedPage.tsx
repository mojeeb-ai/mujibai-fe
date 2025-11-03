import Image from "next/image";
import Logo from "../atoms/Logo";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

export default function PasswordResetRequested() {
  const t = useTranslations("passwordResetRequested");

  return (
    <div className="w-screen h-screen relative flex justify-center items-center">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[65%] h-[65%] rounded-full 
          bg-[#06B6D4]/70 blur-[160px] 
          opacity-60 z-[-1]"
      ></div>

      <div className="sm:w-[50%] w-[100%] h-[50%] flex items-center justify-center flex-col gap-5 ">
        <Logo />
        <div className="sm:w-[100%] md:w-[80%] lg:w-[60%] flex justify-center items-center gap-4 text-center flex-col border-t-1 border-b-1 border-white p-10 rounded-2xl bg-[#FFFFFF80] dark:bg-[#06B6D40F]">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/dashboard-images/password-reset-requested.svg"
              alt={t("title")}
              width={300}
              height={300}
              className="w-40 h-40"
            />
            <h1 className="text-2xl font-semibold">{t("title")}</h1>
            <p className="w-[80%] m-auto">{t("description")}</p>
          </div>
          <Button className="w-full py-5 capitalize rounded-full">
            {t("button")}
          </Button>
        </div>
      </div>
    </div>
  );
}
