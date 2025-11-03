import { AdminOverviewTable } from "@/components/organisms/admin-dashboard/AdminOverviewTable";
import { TotalVisitorsAnalytics } from "@/components/organisms/admin-dashboard/TotalVisitorsAnalytics";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import initialData from "@/data/data.json";
import { useTranslations } from "next-intl";
export default function AdminDashboardOverviewPage() {
  const t = useTranslations("adminDashboardOverview");
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("welcome") + ", Abdulrahman Alharbi"} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <TotalVisitorsAnalytics />
        <AdminOverviewTable data={initialData} />
      </div>
    </div>
  );
}
