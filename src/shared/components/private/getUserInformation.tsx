/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ReactNode, useEffect } from "react";
import { useStoreUser } from "@/context/user";

interface IGetUserInformation {
  children: ReactNode;
}

const GetUserInformation = ({ children }: IGetUserInformation) => {
  const fetchUserData = useStoreUser((state) => state.actions.fetchUserData);

  useEffect(() => {
    fetchUserData();
  }, []);

  return <>{children}</>;
};

export { GetUserInformation };
