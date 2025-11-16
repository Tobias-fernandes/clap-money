"use server";

import { createClient } from "@/database/supabaseServer";

const getUserName = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("user_profile")
    .select("display_name")
    .eq("user_id", user?.id as string)
    .single();

  if (error) {
    throw new Error("Failed to fetch user name");
  }

  return data?.display_name ?? "unknown";
};

export { getUserName };
