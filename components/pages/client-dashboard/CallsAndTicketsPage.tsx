import CallsAndTicketsFiltering from "@/components/molecules/client-dashboard/CallsAndTicketsFiltering";
import CallsAndTicketsTable from "@/components/organisms/client-dashboard/CallsAndTicketsTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { useLocale, useTranslations } from "next-intl";

export default function CallsAndTicketsPage() {
  const t = useTranslations("ticketsAndCalls");
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} />
      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <section className="flex flex-col">
          <CallsAndTicketsFiltering
            filterPlaceholderOne={t("filterPlaceholderOne")}
            filterPlaceholderTwo={t("filterPlaceholderTwo")}
          />
          <CallsAndTicketsTable t={t} locale={locale} />
        </section>
      </div>
    </div>
  );
}
