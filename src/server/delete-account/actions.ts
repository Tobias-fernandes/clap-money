"use server";

import { supabaseAdmin } from "@/database/supabaseAdmin";
import { revalidatePath } from "next/cache";

const deleteAccount = async (userId: string) => {
  const { error } = await supabaseAdmin.auth.admin.deleteUser(userId);

  if (error) {
    throw new Error(error.message);
  }

  revalidatePath("/sign-up", "layout");
};

export { deleteAccount };
