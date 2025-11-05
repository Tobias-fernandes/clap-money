import Balance from "@/components/private/dashboard/balance";
import Expenses from "@/components/private/dashboard/expenses";
import Incomes from "@/components/private/dashboard/incomes";
import LastExpenses from "@/components/private/dashboard/lastExpenses";

const Dashboard: React.FC = () => {
  return (
    <section className="mt-32 flex flex-col">
      <div className="container px-6 max-w-5xl mx-auto space-y-4">
        <Balance />
        <Expenses />
        <Incomes />
        <LastExpenses />
      </div>
    </section>
  );
};

export default Dashboard;
