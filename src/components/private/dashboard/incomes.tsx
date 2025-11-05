import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BanknoteArrowUp } from "lucide-react";

interface IIncome {
  income: number;
}

/*
  This component displays the user's current income.
*/
const Incomes: React.FC<IIncome> = ({ income }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Incomes</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 items-center">
        <BanknoteArrowUp />
        <span className="text-2xl font-bold">${income.toFixed(2)}</span>
      </CardContent>
    </Card>
  );
};

export default Incomes;
