/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { PropsWithChildren, useEffect } from "react";
import { useStoreUser } from "@/context/user";

const GetUserInformation = ({ children }: PropsWithChildren) => {
  const {
    actions: { fetchUserData },
  } = useStoreUser();

  const fetchUserDataFN = fetchUserData;

  useEffect(() => {
    fetchUserDataFN();
  }, []);

  return <>{children}</>;
};

export { GetUserInformation };
