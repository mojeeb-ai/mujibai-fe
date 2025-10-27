import DataUsageCard from "@/components/organisms/client-dashboard/DataUsageCard";
import RecentClientsTable from "@/components/organisms/client-dashboard/RecentClientsTable";
import React from "react";

export default function ClientDashboardOverviewPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="col-span-2 md:col-span-2">
        <RecentClientsTable />
      </div>
      <div className="col-span-1">
        <DataUsageCard />
      </div>
    </div>
  );
}
