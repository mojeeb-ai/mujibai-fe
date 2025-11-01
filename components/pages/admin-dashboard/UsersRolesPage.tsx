import UserRolesSearchAndFiltering from "@/components/organisms/admin-dashboard/UserRolesSearchAndFiltering";
import UserRolesTable from "@/components/organisms/admin-dashboard/UserRolesTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";

export default function UsersRolesPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Welcome, Abdulrahman Alharbi!" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <UserRolesSearchAndFiltering />
        <UserRolesTable />
      </div>
    </div>
  );
}
