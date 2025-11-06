import Balance from "@/components/private/dashboard/balance";
import { BalanceChart } from "@/components/private/dashboard/balanceChart";
import Expenses from "@/components/private/dashboard/expenses";
import Incomes from "@/components/private/dashboard/incomes";
import LastExpenses from "@/components/private/dashboard/lastExpenses";

const data = {
  income: 350,
  expense: 120,
};

const listExpenses = [
  {
    id: 1,
    description: "Groceries",
    amount: 50,
    date: "2024-06-01",
    category: "Food",
  },
  {
    id: 2,
    description: "Utilities",
    amount: 30,
    date: "2024-06-03",
    category: "Food",
  },
  {
    id: 3,
    description: "Transport",
    amount: 40,
    date: "2024-06-05",
    category: "Food",
  },
];

const Dashboard: React.FC = async () => {
  return (
    <section className="mt-24 sm:mt-28 md:mt-32 lg:mt-36 h-screen">
      <div className="container px-6 max-w-5xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Balance income={data.income} expense={data.expense} />
          <Incomes income={data.income} />
          <Expenses expense={data.expense} />
        </div>
        <div className="flex">
          <LastExpenses list={listExpenses} />
          <BalanceChart />
        </div>
        <div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
