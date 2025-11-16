import { ReactNode } from "react";
import Header from "@/shared/components/private/header";
import { CommandMenu } from "@/shared/components/private/commandMenu";
import { GetUserInformation } from "@/shared/components/private/getUserInformation";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <GetUserInformation>
      <Header />
      {children}
      <CommandMenu />
    </GetUserInformation>
  );
}
