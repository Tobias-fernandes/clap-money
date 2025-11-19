"use server";

import { createClient } from "@/database/supabaseServer";

const getUserEmail = async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user?.email || "email not found";
};

export { getUserEmail };
