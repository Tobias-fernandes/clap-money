"use server";

import { createClient } from "@/database/supabaseServer";

const getUserProfileId = async (): Promise<string | undefined> => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: profile } = await supabase
    .from("user_profile")
    .select("*")
    .eq("user_id", user?.id as string)
    .single();

  return profile?.id || "profile not found";
};

export { getUserProfileId };
