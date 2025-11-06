import { Button } from "@/components/ui/button";
import { deleteAccount } from "@/server/delete-account/actions";
import { getUser } from "@/server/get-user/actions";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const DeleteAccountForm = () => {
  const router = useRouter();

  const handleDeleteAccount = async () => {
    try {
      const user = await getUser();
      if (!user) throw new Error("User not found");
      await deleteAccount(user?.id as string);
      toast.success("Your account has been deleted successfully.");
      router.push("/sign-up");
    } catch (error) {
      toast.error(
        `${error instanceof Error ? error.message : "Unknown error"}`
      );
    }
  };
  return (
    <Button onClick={handleDeleteAccount} variant="destructive">
      Delete Account
    </Button>
  );
};

export { DeleteAccountForm };
