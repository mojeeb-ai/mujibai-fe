'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer } from '@/components/ui/chart'
import Image from 'next/image'
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from 'recharts'

export const description = 'A radial chart with text'

const chartData = [
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
]

const chartConfig = {
  visitors: {
    label: 'Visitors',
  },
  safari: {
    label: 'Safari',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig
export default function IntentDetectionAccuracy({
  t,
}: {
  t: (key: string) => string
}) {
  return (
    <>
      <Card className="gap-2 border-none bg-transparent shadow-none">
        <CardHeader className="p-2">
          <CardTitle className="text-xl font-semibold">
            {t('intentDetectionAccuracy')}
          </CardTitle>
        </CardHeader>
        <CardContent className="rounded-2xl bg-[#FFFFFFBF] p-4 dark:bg-[#00143473]">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <RadialBarChart
              data={chartData}
              startAngle={0}
              endAngle={250}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background cornerRadius={10} />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            68%
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            {t('accuracy')}
                          </tspan>
                        </text>
                      )
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <div className="z-50 flex h-full w-full items-center rounded-2xl bg-[#FFFFFFBF] p-4 shadow-sm dark:bg-[#001434A6]">
          <div className="flex flex-col items-center justify-around gap-2">
            <h1 className="text-2xl font-semibold">{t('keywordInsights')}</h1>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              <li className="flex items-center justify-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                {t('appointment')}
              </li>
              <li className="flex items-center justify-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                {t('location')}
              </li>
              <li className="flex items-center justify-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                {t('price')}
              </li>
              <li className="flex items-center justify-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                {t('hours')}
              </li>
              <li className="flex items-center justify-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                {t('services')}
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  )
}
