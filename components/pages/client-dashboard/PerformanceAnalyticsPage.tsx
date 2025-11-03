"use client";
import StatictisCards from "@/components/molecules/client-dashboard/StatictisCards";
import DailyAICallsAnalytics from "@/components/organisms/client-dashboard/DailyAICallsAnalytics";
import DashboardHeader from "@/components/organisms/client-dashboard/DashboardHeader";
import ScenarioPerformanceAnalytics from "@/components/organisms/client-dashboard/ScenarioPerformanceAnalytics";
import { useTranslations } from "next-intl";

export default function PerformanceAnalyticsPage() {
  const t = useTranslations("performanceAnalytics");
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <DashboardHeader title={t("title")} />

      <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm">
        <StatictisCards t={t} />
        <DailyAICallsAnalytics />
        <ScenarioPerformanceAnalytics t={t} />
      </div>
    </div>
  );
}
