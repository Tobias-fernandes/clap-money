import { ReactNode } from "react";
import Header from "@/shared/components/private/header";
import { CommandMenu } from "@/shared/components/private/commandMenu";
import Footer from "@/shared/components/private/footer";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CommandMenu />
    </>
  );
}
