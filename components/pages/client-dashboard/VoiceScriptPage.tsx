import CallGreetingVoice from "@/components/molecules/client-dashboard/CallGreetingVoice";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import MainConversationScript from "@/components/organisms/client-dashboard/MainConversationScript";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

export default function VoiceScriptPage() {
  const t = useTranslations("VoiceScripts");
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} subtitle={t("subTitle")} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <CallGreetingVoice t={t} locale={locale} />
        <p className="flex items-center gap-2">
          {" "}
          <Image
            src="/about-star-image.png"
            alt="Feature"
            width={10}
            height={10}
            className="w-[10px] h-[10px] md:w-[20px] md:h-[20px]"
            loading="lazy"
          />{" "}
          <span>{t("selectLanguageVoice")}</span>
        </p>

        <MainConversationScript t={t} locale={locale} />
      </div>
    </div>
  );
}
