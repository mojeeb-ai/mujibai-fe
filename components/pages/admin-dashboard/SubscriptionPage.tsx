import SupscriptionsSearching from "@/components/molecules/admin-dashboard/SupscriptionsSearching";
import SupscriptionsTable from "@/components/molecules/admin-dashboard/SupscriptionTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { useTranslations } from "next-intl";

export default function SubscriptionPage() {
  const t = useTranslations("adminSubscription");
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <SupscriptionsSearching />
        <SupscriptionsTable />
      </div>
    </div>
  );
}
