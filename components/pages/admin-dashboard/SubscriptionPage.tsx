import { useTranslations } from 'next-intl';

import SupscriptionsTable from '@/components/molecules/admin-dashboard/SupscriptionTable';
import SupscriptionsSearching from '@/components/molecules/admin-dashboard/SupscriptionsSearching';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';

export default function SubscriptionPage() {
  const t = useTranslations('adminSubscription');
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <SupscriptionsSearching />
        <SupscriptionsTable />
      </div>
    </div>
  );
}
