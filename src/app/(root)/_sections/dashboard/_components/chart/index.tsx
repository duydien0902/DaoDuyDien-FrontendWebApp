import React from "react";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { percentageChange } from "@/utilities/format";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { RenderPercentage } from "@/app/(root)/_sections/dashboard/_components/chart/render-percentage";

const chartConfig: any = {
  cv: {
    label: "Cv",
    color: "hsl(var(--chart-1))",
  },
  ob: {
    label: "On Board",
    color: "hsl(var(--chart-2))",
  },
  at: {
    label: "Active",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

interface ChartProps {
  data:
    | {
        month: string;
        cv: number;
        ob: number;
        at: number;
      }[]
    | [];
}

export const Chart = ({ data }: ChartProps) => {
  if (!(data?.length > 0)) return null;
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing the total number of recruitments and employees for the last 6
          months.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={data}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              {Object.keys(chartConfig).map((key) => (
                <linearGradient
                  key={key}
                  id={`fill${key}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor={chartConfig[key as keyof ChartConfig].color}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={chartConfig[key as keyof ChartConfig].color}
                    stopOpacity={0.1}
                  />
                </linearGradient>
              ))}
            </defs>
            {Object.keys(chartConfig).map((key) => (
              <Area
                key={key}
                dataKey={key}
                type="natural"
                fill={`url(#fill${key})`}
                fillOpacity={0.4}
                stroke={chartConfig[key as keyof ChartConfig].color}
                stackId="a"
              />
            ))}
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="space-y-2 font-medium leading-none">
              <p>Percentage change this month:</p>
              <div className="text-sm flex flex-col sm:flex-row items-start sm:items-center gap-x-4">
                <RenderPercentage
                  title="Curriculum vitae:"
                  percen={percentageChange(
                    data?.[data?.length - 1].cv,
                    data?.[data?.length - 2].cv
                  )}
                  color={chartConfig.cv.color}
                />
                <RenderPercentage
                  title="On board:"
                  percen={percentageChange(
                    data?.[data?.length - 1].ob,
                    data?.[data?.length - 2].ob
                  )}
                  color={chartConfig.ob.color}
                />
                <RenderPercentage
                  title="Active:"
                  percen={percentageChange(
                    data?.[data?.length - 1].at,
                    data?.[data?.length - 2].at
                  )}
                  color={chartConfig.at.color}
                />
              </div>
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {data?.[0]?.month} - {data?.[data?.length - 1].month}{" "}
              {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
