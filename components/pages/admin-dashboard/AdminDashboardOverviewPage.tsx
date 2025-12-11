import { useTranslations } from 'next-intl';

import initialData from '@/data/data.json';

import { AdminOverviewTable } from '@/components/organisms/admin-dashboard/AdminOverviewTable';
import { TotalVisitorsAnalytics } from '@/components/organisms/admin-dashboard/TotalVisitorsAnalytics';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';

export default function AdminDashboardOverviewPage() {
  const t = useTranslations('adminDashboardOverview');
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('welcome') + ', Abdulrahman Alharbi'} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <TotalVisitorsAnalytics />
        <AdminOverviewTable data={initialData} />
      </div>
    </div>
  );
}
