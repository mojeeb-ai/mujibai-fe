import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import DataUsageCard from "@/components/organisms/client-dashboard/DataUsageCard";
import RecentClientsTable from "@/components/organisms/client-dashboard/RecentClientsTable";
import React from "react";

export default function ClientDashboardOverviewPage() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title="Welcome, Salman Khan!" />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-2">
            <RecentClientsTable />
          </div>
          <div className="col-span-1">
            <DataUsageCard />
          </div>
        </div>
      </div>
    </div>
  );
}
