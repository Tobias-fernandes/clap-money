import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/*
  This component displays the user's current income.
*/
const Incomes: React.FC = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Incomes</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <div>Incomes Component</div>
      </CardContent>
    </Card>
  );
};

export default Incomes;
