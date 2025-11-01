import ClientsSearchAndFiltering from "@/components/molecules/admin-dashboard/ClientsSearchAndFiltering";
import ClientsTable from "@/components/molecules/admin-dashboard/ClientsTable";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";

export default function ClientsPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Welcome, Abdulrahman Alharbi!" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <ClientsSearchAndFiltering />
        <ClientsTable />
      </div>
    </div>
  );
}
