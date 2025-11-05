import { ReactNode } from "react";
import Header from "@/shared/components/private/header";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
