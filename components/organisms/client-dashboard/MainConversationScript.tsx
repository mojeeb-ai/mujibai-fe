import ConversationScriptDescriptionTab from "@/components/molecules/client-dashboard/ConversationScriptDescriptionTab";
import MainConversationScriptTab from "@/components/molecules/client-dashboard/MainConversationScriptTab";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function MainConversationScript() {
  return (
    <div className="w-full flex justify-center items-center py-10">
      <Tabs defaultValue="account" className="w-full">
        <TabsList className="w-[30%] mx-auto rounded-full bg-[#06B6D44D] dark:bg-[#3B82F614]">
          <TabsTrigger
            value="account"
            className="
              w-full rounded-full 
              data-[state=active]:bg-[#06B6D4] 
              dark:data-[state=active]:bg-[#06B6D440]
              font-normal
            "
          >
            Conversation
          </TabsTrigger>

          <TabsTrigger
            value="password"
            className="
              w-full rounded-full 
              data-[state=active]:bg-[#06B6D4] 
              dark:data-[state=active]:bg-[#06B6D440]
              font-normal
            "
          >
            Descriptions
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <MainConversationScriptTab />
        </TabsContent>
        <TabsContent value="password">
          <ConversationScriptDescriptionTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
