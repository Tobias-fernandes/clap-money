import { ButtonCloseAuth } from "@/shared/components/public/buttonCloseAuth";
import { ReactNode } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <>
      <ButtonCloseAuth />
      {children}
    </>
  );
}
