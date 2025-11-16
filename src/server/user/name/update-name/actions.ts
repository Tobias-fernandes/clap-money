"use server";

import { createClient } from "@/database/supabaseServer";

interface IsetUserName {
  newName: string;
}

const setUserName = async ({ newName }: IsetUserName) => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("user_profile")
    .update({ display_name: newName })
    .eq("user_id", user?.id as string)
    .single();

  if (error) {
    throw new Error("Failed to update user name");
  }

  return data ?? "unknown";
};

export { setUserName };
