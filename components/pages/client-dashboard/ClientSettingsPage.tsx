import AccountSettings from "@/components/molecules/client-dashboard/AccountSettings";
import IntegrationSettings from "@/components/molecules/client-dashboard/IntegrationSettings";
import NotificationPreference from "@/components/molecules/client-dashboard/NotificationPreference";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocale, useTranslations } from "next-intl";

export default function ClientSettingsPage() {
  const t = useTranslations("settings");
  const locale = useLocale();
  const TAB_ITEMS = [
    { value: "accountSettings", label: t("accountSettings.title") },
    { value: "integrationSettings", label: t("integrationSettings.title") },
    {
      value: "notificationPreference",
      label: t("notificationPreference.title"),
    },
  ];
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} />

      <div className="z-50 p-4 w-full h-full bg-white/75 dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <Tabs
          dir={locale === "ar" ? "rtl" : "ltr"}
          defaultValue="accountSettings"
          className="w-full"
        >
          <TabsList
            className={`
            h-12
              mt-4 mx-3 flex flex-wrap justify-between
              bg-[#3B82F614] dark:bg-[#3B82F614]
              rounded-full p-1 gap-2
            `}
          >
            {TAB_ITEMS.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="
                  flex-1 rounded-full px-6 py-5 text-sm font-medium
                  transition-all duration-300 ease-in-out
                  text-gray-700 dark:text-gray-300
                  hover:bg-[#06B6D420]
                  data-[state=active]:bg-[#06B6D4]
                  data-[state=active]:text-white
                  dark:data-[state=active]:bg-[#06B6D440]
              
                "
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="accountSettings" className="mt-4">
            <AccountSettings />
          </TabsContent>

          <TabsContent value="integrationSettings" className="mt-4">
            <IntegrationSettings />
          </TabsContent>

          <TabsContent value="notificationPreference" className="mt-4">
            <NotificationPreference />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
