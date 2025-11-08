"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/database/supabaseServer";

const signUp = async (email: string, password: string) => {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    throw new Error(error.message);
  }

  // TODO: Analyze if revalidation is necessary here
  revalidatePath("/dashboard", "layout");
};

export { signUp };
