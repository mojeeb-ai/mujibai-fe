import PlansSearchAndFiltering from "@/components/molecules/admin-dashboard/PlansSearchAndFiltering";
import PlansTable from "@/components/molecules/admin-dashboard/PlansTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
export default function PlansPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Upgrade Plan" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <PlansSearchAndFiltering />
        <PlansTable />
      </div>
    </div>
  );
}
