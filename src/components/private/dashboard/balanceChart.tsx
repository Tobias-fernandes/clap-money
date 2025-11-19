"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { type ChartConfig } from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
  incomes: {
    label: "Incomes",
    color: "--clap-green",
  },
  expenses: {
    label: "Expenses",
    color: "--clap-red",
  },
} satisfies ChartConfig;

interface IBalanceChart {
  data: {
    month: string;
    incomes: number;
    expenses: number;
  }[];
}

const BalanceChart: React.FC<IBalanceChart> = ({ data }) => {
  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart accessibilityLayer data={data}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="incomes" fill="var(--clap-green)" radius={4} />
        <Bar dataKey="expenses" fill="var(--clap-red)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
};

export { BalanceChart };
