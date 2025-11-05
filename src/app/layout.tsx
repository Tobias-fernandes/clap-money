import { ReactNode } from "react";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import CookieConsent from "@/components/ui/cookie-consent";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClapMoney",
  description:
    "A simple expense tracker to manage your personal finances effectively.",
  keywords: ["finance", "expense tracking", "budgeting"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${outfit.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
