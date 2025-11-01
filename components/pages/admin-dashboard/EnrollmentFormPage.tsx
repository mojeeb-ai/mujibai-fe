import EnrollsSearchAndFiltering from "@/components/organisms/admin-dashboard/EnrollsSearchAndFiltering";
import EnrollsTable from "@/components/organisms/admin-dashboard/EnrollsTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";

export default function EnrollmentFormPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader
        title="Enrollment Forms"
        subtitle="Manage company enrollment applications and their status"
      />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <EnrollsSearchAndFiltering />
        <EnrollsTable />
      </div>
    </div>
  );
}
