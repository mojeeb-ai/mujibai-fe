import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import { EllipsisVertical } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function PlansTable() {
  const locale = useLocale();
  const t = useTranslations('adminPlans.plansTable');
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '$10',
      includes:
        '10 conversions, 4000 characters in input code / conversion, Email Support',
    },
    {
      id: 2,
      name: 'Standard',
      price: '$20',
      includes:
        '10 conversions, 4000 characters in input code / conversion, Email Support',
    },
    {
      id: 3,
      name: 'Premium',
      price: '$30',
      includes:
        '10 conversions, 4000 characters in input code / conversion, Email Support',
    },
  ];
  return (
    <Table className="my-10 rounded-2xl bg-[#FFFFFFBF] dark:bg-[#001434A6]">
      <TableHeader>
        <TableRow>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('name')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('price')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('includes')}
          </TableHead>

          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('actions')}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {plans.map(plan => (
          <TableRow
            key={plan.id}
            className="transition-colors hover:bg-white/10"
          >
            <TableCell>{plan.name}</TableCell>
            <TableCell>{plan.price}</TableCell>
            <TableCell>{plan.includes}</TableCell>
            <TableCell>
              <Button variant="ghost" size="sm">
                <EllipsisVertical className="size-5" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
