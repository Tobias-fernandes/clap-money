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

const chartData = [
  { month: "January", incomes: 186, expenses: 80 },
  { month: "February", incomes: 305, expenses: 200 },
  { month: "March", incomes: 237, expenses: 120 },
  { month: "April", incomes: 73, expenses: 190 },
  { month: "May", incomes: 209, expenses: 130 },
  { month: "June", incomes: 214, expenses: 140 },
];

const BalanceChart = () => {
  return (
    <ChartContainer config={chartConfig} className="w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
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
