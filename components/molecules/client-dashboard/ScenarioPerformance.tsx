import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Progress } from '@/components/ui/progress'
import CallsAndTicketsTablePagination from './CallsAndTicketsTablePagination'
export default function ScenarioPerformance({
  t,
}: {
  t: (key: string) => string
}) {
  return (
    <Card className="col-span-2 gap-3 border-none bg-transparent shadow-none">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-semibold">
          {t('scenarioPerformance')}
        </CardTitle>
      </CardHeader>
      <CardContent className="rounded-2xl bg-[#FFFFFFBF] p-4 dark:bg-[#00143473]">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('scenarioName')}</TableHead>
              <TableHead>{t('calls')}</TableHead>
              <TableHead>{t('duration')}</TableHead>
              <TableHead>{t('satisfaction')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 5 }).map((_, index) => (
              <TableRow key={index}>
                <TableCell>{t('scenarioName')}</TableCell>
                <TableCell>31</TableCell>
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
      </CardContent>
    </Card>
  )
}
