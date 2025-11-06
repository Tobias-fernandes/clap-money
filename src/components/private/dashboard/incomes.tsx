import { Button } from "@/components/ui/button";
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
      <CardContent className="flex gap-2 items-center flex-wrap">
        <div className="flex gap-2 items-center">
          <BanknoteArrowUp />
          <span className="text-2xl font-bold">${income.toFixed(2)}</span>
        </div>

        <Button variant="outline" size="sm" className="ml-auto">
          Add Income
        </Button>
      </CardContent>
    </Card>
  );
};

export default Incomes;
