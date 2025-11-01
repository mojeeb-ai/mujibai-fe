import CallGreetingVoice from "@/components/molecules/client-dashboard/CallGreetingVoice";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import MainConversationScript from "@/components/organisms/client-dashboard/MainConversationScript";
import Image from "next/image";

export default function VoiceScriptPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader
        title="Voice Scripts Management"
        subtitle="Custom AI speaker scripts for your customers"
      />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <CallGreetingVoice />
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
          <span>
            Select language & voice, then type your greetings to test it
          </span>
        </p>

        <MainConversationScript />
      </div>
    </div>
  );
}
