"use server";

import { createClient } from "@/database/supabaseServer";
import { getUserProfileId } from "@/server/userProfile/get-user-profile-id/actions";

const getTransactions = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const userProfileId = await getUserProfileId();

  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_profile_id", userProfileId as string)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Failed to fetch transactions");
  }

  return data ?? [];
};

export { getTransactions };
