import { useTranslations } from 'next-intl';

import Top5ActiveClients from '@/components/molecules/admin-dashboard/Top5ActiveClients';
import AnalyticsStatistics from '@/components/organisms/admin-dashboard/AnalyticsStatistics';
import CallsOverTimeAnalytics from '@/components/organisms/admin-dashboard/CallsOverTimeAnalytics';
import TicketVolumeAnalytics from '@/components/organisms/admin-dashboard/TicketVolumeAnalytics';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';

export default function AdminAnalyticsPage() {
  const t = useTranslations('adminAnalyticsPage');
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <AnalyticsStatistics />
        <div className="my-10 grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <CallsOverTimeAnalytics />
          <TicketVolumeAnalytics />
        </div>
        <Top5ActiveClients />
      </div>
    </div>
  );
}
