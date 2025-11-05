import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/*
  This component displays the user's current expenses.
*/
const Expenses: React.FC = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Expenses</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div>Expenses Component</div>
      </CardContent>
    </Card>
  );
};

export default Expenses;
