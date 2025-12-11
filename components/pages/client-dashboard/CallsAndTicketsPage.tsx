import { useLocale, useTranslations } from 'next-intl';

import CallsAndTicketsFiltering from '@/components/molecules/client-dashboard/CallsAndTicketsFiltering';
import CallsAndTicketsTable from '@/components/organisms/client-dashboard/CallsAndTicketsTable';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';

export default function CallsAndTicketsPage() {
  const t = useTranslations('ticketsAndCalls');
  const locale = useLocale();
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} />
      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <section className="flex flex-col">
          <CallsAndTicketsFiltering
            filterPlaceholderOne={t('filterPlaceholderOne')}
            filterPlaceholderTwo={t('filterPlaceholderTwo')}
          />
          <CallsAndTicketsTable t={t} locale={locale} />
        </section>
      </div>
    </div>
  );
}
