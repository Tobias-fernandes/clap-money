"use client";

import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useStoreUser } from "@/context/user";
import { Label } from "@radix-ui/react-label";

const EmailForm = () => {
  const {
    state: { email, isLoading: userLoading },
  } = useStoreUser();

  if (userLoading) {
    return <Skeleton className="h-10 w-full rounded-md" />;
  }

  return (
    <>
      <Label htmlFor="email" className="text-sm font-medium">
        Email Address
      </Label>
      <Input
        id="email"
        aria-busy={userLoading}
        placeholder="loading..."
        defaultValue={email}
        className="mt-1"
        disabled
      />
    </>
  );
};

export { EmailForm };
