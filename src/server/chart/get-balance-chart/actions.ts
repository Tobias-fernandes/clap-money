"use server";

import { createClient } from "@/database/supabaseServer";
import { getUserProfileId } from "@/server/userProfile/get-user-profile-id/actions";

const getBalanceChart = async () => {
  const supabase = await createClient();

  const userProfileId = await getUserProfileId();

  const { data: transactions, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_profile_id", userProfileId as string);

  console.log("user transactions", transactions, error);

  if (error) {
    console.error(error);
    return [];
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const grouped = months.map((m, index) => {
    const monthTransactions = transactions.filter((t) => {
      const month = new Date(t.date + "T00:00:00Z").getMonth();
      return month === index;
    });

    return {
      month: m,
      incomes: monthTransactions
        .filter((t) => t.type === "income")
        .reduce((acc, t) => acc + Number(t.amount), 0),

      expenses: monthTransactions
        .filter((t) => t.type === "expense")
        .reduce((acc, t) => acc + Number(t.amount), 0),
    };
  });

  return grouped;
};

export { getBalanceChart };
