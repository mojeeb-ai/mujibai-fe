"use client";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import DataUsageCard from "@/components/organisms/client-dashboard/DataUsageCard";
import RecentClientsTable from "@/components/organisms/client-dashboard/RecentClientsTable";
import React from "react";
import { useTranslations } from "next-intl";
import { Client } from "@/types/types";

export default function ClientDashboardOverviewPage({
  client,
}: {
  client: Client;
}) {
  const t = useTranslations("dashboardOverview");
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("welcome") + " " + client?.name} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2 md:col-span-2">
            <RecentClientsTable title={t("recentClients")} />
          </div>
          <div className="col-span-1">
            <DataUsageCard
              used={10}
              total={100}
              title={t("dataUsage")}
              upgradePlan={t("upgradePlan")}
              of={t("of")}
              more={t("more")}
              dataTitle={t("dataTitle")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
