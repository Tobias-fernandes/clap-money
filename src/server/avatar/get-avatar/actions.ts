"use server";

import { createClient } from "@/database/supabaseServer";

const getAvatar = async (userId: string) => {
  const supabase = await createClient();

  const { data: profile } = await supabase
    .from("user_profile")
    .select("avatar_url")
    .eq("user_id", userId)
    .single();

  return profile?.avatar_url;
};

export { getAvatar };
