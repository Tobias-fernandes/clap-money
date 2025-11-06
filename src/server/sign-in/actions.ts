"use server";

import { revalidatePath } from "next/cache";

import { createClient } from "@/database/supabaseServer";

const signIn = async (email: string, password: string) => {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/dashboard", "layout");
};

export { signIn };
