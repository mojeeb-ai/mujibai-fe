import ConversationScriptDescriptionTab from "@/components/molecules/client-dashboard/ConversationScriptDescriptionTab";
import MainConversationScriptTab from "@/components/molecules/client-dashboard/MainConversationScriptTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MainConversationScript({
  t,
  locale,
}: {
  t: (key: string) => string;
  locale: string;
}) {
  console.log(t);
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Tabs defaultValue="conversation" className="w-full">
        <TabsList className="w-[30%] mx-auto rounded-full bg-[#06B6D44D] dark:bg-[#3B82F614]">
          <TabsTrigger
            value="conversation"
            className="
              w-full rounded-full 
              data-[state=active]:bg-[#06B6D4] 
              dark:data-[state=active]:bg-[#06B6D440]
              font-normal
            "
          >
            {t("conversation")}
          </TabsTrigger>

          <TabsTrigger
            value="descriptions"
            className="
              w-full rounded-full 
              data-[state=active]:bg-[#06B6D4] 
              dark:data-[state=active]:bg-[#06B6D440]
              font-normal
            "
          >
            {t("descriptions")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="conversation">
          <MainConversationScriptTab t={t} locale={locale} />
        </TabsContent>
        <TabsContent value="descriptions">
          <ConversationScriptDescriptionTab t={t} locale={locale} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
