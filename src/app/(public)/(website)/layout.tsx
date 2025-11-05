import { ReactNode } from "react";
import Footer from "@/shared/components/public/footer";
import Header from "@/shared/components/public/header";

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
    </>
  );
}
