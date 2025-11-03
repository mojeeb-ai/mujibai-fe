import EnrollsSearchAndFiltering from "@/components/organisms/admin-dashboard/EnrollsSearchAndFiltering";
import EnrollsTable from "@/components/organisms/admin-dashboard/EnrollsTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import { useTranslations } from "next-intl";

export default function EnrollmentFormPage() {
  const t = useTranslations("adminEnrollmentForms");
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} subtitle={t("subTitle")} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <EnrollsSearchAndFiltering t={t} />
        <EnrollsTable />
      </div>
    </div>
  );
}
