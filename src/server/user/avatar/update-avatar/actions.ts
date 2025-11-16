"use server";

import { createClient } from "@/database/supabaseServer";

const updateAvatar = async (photoUrl: string, userId: string) => {
  const supabase = await createClient();

  const { error, data } = await supabase
    .from("user_profile")
    .update({ avatar_url: photoUrl })
    .eq("user_id", userId);

  if (error) {
    throw new Error("Failed to update profile photo");
  }

  return data;
};

export { updateAvatar };
