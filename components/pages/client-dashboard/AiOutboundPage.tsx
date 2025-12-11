import { useLocale, useTranslations } from 'next-intl';

import { Download, Plus } from 'lucide-react';

import CallsAndTicketsTablePagination from '@/components/molecules/client-dashboard/CallsAndTicketsTablePagination';
import DashboardHeader from '@/components/organisms/client-dashboard/DashboardHeader';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AiOutboundPage() {
  const t = useTranslations('aiOutbound');
  const locale = useLocale();
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <DashboardHeader title={t('title')} subtitle={t('subTitle')} />
      <div className="z-50 h-full w-full rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
        <div className="my-6 flex w-full items-center justify-end gap-3">
          <Button className="rounded-full py-5">
            <Plus className="size-4" />
            {t('addCallTask')}
          </Button>
          <Button className="border-primary text-primary rounded-full border-2 bg-transparent py-5 hover:bg-transparent">
            <Download className="size-4" /> {t('ImportCSV')}
          </Button>
        </div>
        <Table className="bg-[#FFFFFF73] dark:bg-[#00143473]">
          <TableHeader>
            <TableRow>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                #
              </TableHead>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t('phone')}
              </TableHead>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t('duration')}
              </TableHead>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t('scenario')}
              </TableHead>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t('duration')}
              </TableHead>
              <TableHead
                className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
              >
                {t('satisfaction')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>Scenario {index + 1}</TableCell>
                <TableCell>31</TableCell>
                <TableCell>3</TableCell>
                <TableCell>3</TableCell>
                <TableCell>3</TableCell>
                <TableCell>
                  <div className="w-full">
                    <p className="text-[#000000BF] dark:text-[#FFFFFFBF]">
                      30%
                    </p>
                    <Progress value={30} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <CallsAndTicketsTablePagination t={t} />
      </div>
    </div>
  );
}
