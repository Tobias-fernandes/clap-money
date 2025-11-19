import Balance from "@/components/private/dashboard/balance";
import { BalanceChart } from "@/components/private/dashboard/balanceChart";
import Expenses from "@/components/private/dashboard/expenses";
import Incomes from "@/components/private/dashboard/incomes";
import LastExpenses from "@/components/private/dashboard/lastExpenses";
import { getBalanceChart } from "@/server/chart/get-balance-chart/actions";
import { getTransactions } from "@/server/transaction/getTransaction/actions";

const Dashboard: React.FC = async () => {
  const data = await getTransactions();
  const chartData = await getBalanceChart();
  console.log(chartData);

  const incomeData = data.filter((item) => item.type === "income");
  const incomeDataAmount = incomeData.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  const expenseData = data.filter((item) => item.type === "expense");
  const expenseDataAmount = expenseData.reduce(
    (acc, item) => acc + item.amount,
    0
  );

  return (
    <section className="mt-24 sm:mt-28 md:mt-32 lg:mt-36 h-screen">
      <div className="container px-6 max-w-5xl mx-auto space-y-4">
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <Balance income={incomeDataAmount} expense={expenseDataAmount} />
          <Incomes income={incomeDataAmount} />
          <Expenses expense={expenseDataAmount} />
        </div>
        <div className="flex flex-col md:gap-4 md:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <LastExpenses list={expenseData} />
          <BalanceChart data={chartData} />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
