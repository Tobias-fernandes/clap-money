import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BanknoteArrowUp } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IIncome {
  income: number;
}

const ModalCreateIncome = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          Add Income
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Income</DialogTitle>
          <DialogDescription>
            Fill in the form below to add a new Income to your dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="username-1">Username</Label>
            <Input id="username-1" name="username" defaultValue="@peduarte" />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit">Add Income</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

/*
  This component displays the user's current incomes.
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

        <ModalCreateIncome />
      </CardContent>
    </Card>
  );
};

export default Incomes;
