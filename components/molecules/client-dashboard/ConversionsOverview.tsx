"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig } from "@/components/ui/chart";
import { ChartContainer } from "@/components/ui/chart";
import { ChartTooltip } from "@/components/ui/chart";
import { ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, XAxis } from "recharts";

export const description = "A bar chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
export default function ConversionsOverview() {
  return (
    <Card className="border-none bg-transparent shadow-none gap-3">
      <CardHeader className="p-2">
        <CardTitle className="font-semibold text-xl">
          Conversions Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="dark:bg-[#00143473] bg-[#FFFFFFBF] rounded-2xl p-4 grid grid-cols-2 gap-4">
        <div className="dark:bg-[#FFFFFF0F] bg-[#06B6D40F] rounded-2xl p-4">
          <h4 className="text-2xl font-bold">43%</h4>
          <p>Conversion Rate</p>
        </div>
        <div className="dark:bg-[#FFFFFF0F] bg-[#06B6D40F] rounded-2xl p-4">
          <h4 className="text-2xl font-bold">56</h4>
          <p>AI Missed Intents</p>
        </div>

        <div className="my-5 col-span-2">
          <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
            </BarChart>
          </ChartContainer>
        </div>
        <div className="my-5 col-span-2">
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
                tickFormatter={(value) => value.slice(0, 3)}
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
