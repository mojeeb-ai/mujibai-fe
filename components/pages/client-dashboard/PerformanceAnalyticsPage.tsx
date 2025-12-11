'use client';
import { useTranslations } from 'next-intl';

import StatictisCards from '@/components/molecules/client-dashboard/StatictisCards';
import DailyAICallsAnalytics from '@/components/organisms/client-dashboard/DailyAICallsAnalytics';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';
import ScenarioPerformanceAnalytics from '@/components/organisms/client-dashboard/ScenarioPerformanceAnalytics';

export default function PerformanceAnalyticsPage() {
  const t = useTranslations('performanceAnalytics');
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <StatictisCards t={t} />
        <DailyAICallsAnalytics />
        <ScenarioPerformanceAnalytics t={t} />
      </div>
    </div>
  );
}
