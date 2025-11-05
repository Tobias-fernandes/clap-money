import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { History } from "lucide-react";

interface ILastExpenses {
  list: {
    id: number;
    description: string;
    amount: number;
    date: string;
    category: string;
  }[];
}

/*
  This component displays the user's last 03 expenses.
*/
const LastExpenses: React.FC<ILastExpenses> = ({ list }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Last Expenses</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        <History className="mt-1" />
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.description} - ${item.amount} ({item.date})
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LastExpenses;
