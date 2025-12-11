'use client';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig } from '@/components/ui/chart';
import { ChartContainer } from '@/components/ui/chart';
import { ChartTooltip } from '@/components/ui/chart';
import { ChartTooltipContent } from '@/components/ui/chart';

export const description = 'A bar chart';

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig;
export default function ConversionsOverview({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <Card className="gap-3 border-none bg-transparent shadow-none">
      <CardHeader className="p-2">
        <CardTitle className="text-xl font-semibold">
          {t('conversionsOverview')}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 rounded-2xl bg-[#FFFFFFBF] p-4 dark:bg-[#00143473]">
        <div className="rounded-2xl bg-[#06B6D40F] p-4 dark:bg-[#FFFFFF0F]">
          <h4 className="text-2xl font-bold">43%</h4>
          <p> {t('conversionRate')}</p>
        </div>
        <div className="rounded-2xl bg-[#06B6D40F] p-4 dark:bg-[#FFFFFF0F]">
          <h4 className="text-2xl font-bold">56</h4>
          <p>{t('aiMissedIntents')}</p>
        </div>

        <div className="col-span-2 my-5">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={value => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="col-span-2 my-5">
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={value => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="desktop"
                type="natural"
                fill="var(--color-desktop)"
                fillOpacity={0.4}
                stroke="var(--color-desktop)"
              />
            </AreaChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}
