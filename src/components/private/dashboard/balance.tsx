import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Scale } from "lucide-react";

interface IBalance {
  income: number;
  expense: number;
}

/*
  This component displays the user's current balance (incomes - expenses).
*/
const Balance: React.FC<IBalance> = ({ income, expense }) => {
  const isPositiveBalance = income - expense >= 0;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Balance</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 items-center">
        <Scale />
        <span className={`text-2xl font-bold ${isPositiveBalance ? "text-clap-green" : "text-clap-red"}`}>
          ${(income - expense).toFixed(2)}
        </span>
      </CardContent>
    </Card>
  );
};

export default Balance;
