import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/*
  This component displays the user's last 03 expenses.
*/
const LastExpenses: React.FC = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Last Expenses</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div>Last Expenses Component</div>
      </CardContent>
    </Card>
  );
};

export default LastExpenses;
