import { useTranslations } from 'next-intl';

import EnrollsSearchAndFiltering from '@/components/organisms/admin-dashboard/EnrollsSearchAndFiltering';
import EnrollsTable from '@/components/organisms/admin-dashboard/EnrollsTable';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';

export default function EnrollmentFormPage() {
  const t = useTranslations('adminEnrollmentForms');
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} subtitle={t('subTitle')} />

      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <EnrollsSearchAndFiltering t={t} />
        <EnrollsTable />
      </div>
    </div>
  );
}
