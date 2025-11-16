"use server";

import { createClient } from "@/database/supabaseServer";

const getUserAvatar = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("user_profile")
    .select("avatar_url")
    .eq("user_id", user?.id as string)
    .single();

  return profile?.avatar_url;
};

export { getUserAvatar };
