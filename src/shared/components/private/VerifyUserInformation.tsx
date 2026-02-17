"use client";

import { Spinner } from "@/components/ui/spinner";
import { getUserProfileId } from "@/server/userProfile/get-user-profile-id/actions";
import { PropsWithChildren, useCallback, useEffect, useState } from "react";

export function VerifyUserInformation({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);

  const checkUser = useCallback(async () => {
    const profile = await getUserProfileId();

    console.log("PROFILE", profile);

    if (!profile) {
      return <h1>Eita kkkk</h1>;
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    checkUser();
  }, [checkUser]);

  if (isLoading) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted">
        <Spinner className="h-16 w-16" />
        <h2>Loading user information...</h2>
      </div>
    );
  }

  return <>{children}</>;
}
