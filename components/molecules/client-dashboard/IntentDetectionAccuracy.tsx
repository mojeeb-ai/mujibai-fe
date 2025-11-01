"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import Image from "next/image";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

export const description = "A radial chart with text";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;
export default function IntentDetectionAccuracy() {
  return (
    <>
      <Card className="border-none bg-transparent shadow-none gap-2">
        <CardHeader className="p-2">
          <CardTitle className="font-semibold text-xl">
            Intent Detection Accuracy
          </CardTitle>
        </CardHeader>
        <CardContent className="dark:bg-[#00143473] bg-[#FFFFFFBF] rounded-2xl p-4">
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
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
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
                            Accuracy
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </CardContent>
        <div className="z-50 p-4 w-full h-full bg-[#FFFFFFBF] dark:bg-[#001434A6] rounded-2xl shadow-sm flex items-center">
          <div className="flex justify-around items-center gap-2 flex-col">
            <h1 className="text-2xl font-semibold">Keyword Insights</h1>
            <ul className="flex justify-center items-center gap-2 flex-wrap">
              <li className="flex justify-center items-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                Appointment
              </li>
              <li className="flex justify-center items-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                Location
              </li>
              <li className="flex justify-center items-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                Price
              </li>
              <li className="flex justify-center items-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                Hours
              </li>
              <li className="flex justify-center items-center gap-1">
                <Image
                  src="/landingPage/about-star-image.png"
                  alt="stars"
                  loading="lazy"
                  width={10}
                  height={10}
                />
                Services
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </>
  );
}
