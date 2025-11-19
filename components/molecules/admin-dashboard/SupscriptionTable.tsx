import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useLocale } from 'next-intl'
import { useTranslations } from 'next-intl'

export default function SupscriptionsTable() {
  const locale = useLocale()
  const t = useTranslations('adminSubscription')
  const subscriptions = [
    {
      id: 1,
      name: 'Basic',
      email: 'example@example.com',
      plan: 'Basic',
      clientUsage: 30,
    },
    {
      id: 2,
      name: 'Standard',
      email: 'example@example.com',
      plan: 'Standard',
      clientUsage: 80,
    },
    {
      id: 3,
      name: 'Premium',
      email: 'example@example.com',
      plan: 'Premium',
      clientUsage: 50,
    },
  ]
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
            {t('email')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('plan')}
          </TableHead>
          <TableHead
            className={`${locale === 'ar' ? 'text-right' : 'text-left'}`}
          >
            {t('clientUsage')}
          </TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {subscriptions.map((subscription) => (
          <TableRow
            key={subscription.id}
            className="transition-colors hover:bg-white/10"
          >
            <TableCell>{subscription.name}</TableCell>
            <TableCell>{subscription.email}</TableCell>
            <TableCell>
              <Badge variant="default" className="text-foreground">
                {subscription.plan}
              </Badge>
            </TableCell>
            <TableCell>
              <div className="flex flex-col items-start gap-2">
                <span>{subscription.clientUsage}</span>
                <Progress value={subscription.clientUsage} />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
