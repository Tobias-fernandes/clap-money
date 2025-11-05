import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/*
  This component displays the user's current balance (incomes - expenses).
*/
const Balance: React.FC = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Balance</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div>Balance Component</div>
      </CardContent>
    </Card>
  );
};

export default Balance;
