import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { History, Calendar, Tag } from "lucide-react";

interface ILastExpenses {
  list: {
    amount: number;
    category_id: string | null;
    created_at: string | null;
    date: string;
    id: string;
    notes: string | null;
    title: string;
    type: string;
    user_profile_id: string;
  }[];
}
/*
  This component displays the user's last 03 expenses.
*/
const LastExpenses: React.FC<ILastExpenses> = ({ list }) => {
  return (
    <Card className="w-full shadow-sm border rounded-xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <History className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg font-semibold">Last Expenses</CardTitle>
        </div>
        <CardDescription>Your 3 most recent expenses</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {list.map((item, index) => {
            if (index >= 3) return null;
            return (
              <li
                key={index}
                className="
                p-3 border rounded-lg 
                hover:bg-muted transition
                flex justify-between items-center
              "
              >
                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-primary mt-1" />

                  <div className="flex flex-col">
                    <span className="font-medium text-base capitalize">
                      {item.title}
                    </span>

                    {item.notes && (
                      <span className="text-sm text-muted-foreground capitalize">
                        {item.notes}
                      </span>
                    )}

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                <span className="font-semibold text-red-600 text-right">
                  - ${item.amount.toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default LastExpenses;
