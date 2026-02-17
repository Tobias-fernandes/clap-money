import { ReactNode } from "react";
import Header from "@/shared/components/private/header";
import { CommandMenu } from "@/shared/components/private/commandMenu";
import { GetUserInformation } from "@/shared/components/private/getUserInformation";
import { VerifyUserInformation } from "@/shared/components/private/VerifyUserInformation";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <VerifyUserInformation>
      <GetUserInformation>
        <Header />
        {children}
        <CommandMenu />
      </GetUserInformation>
    </VerifyUserInformation>
  );
}
