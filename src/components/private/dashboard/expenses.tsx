import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BanknoteArrowUp } from "lucide-react";

interface IExpense {
  expense: number;
}

/*
  This component displays the user's current expenses.
*/
const Expenses: React.FC<IExpense> = ({ expense }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 items-center">
        <BanknoteArrowUp />
        <span className="text-2xl font-bold">${expense.toFixed(2)}</span>
      </CardContent>
    </Card>
  );
};

export default Expenses;
