"use client";

import { Button } from "@/components/ui/button";
import { ToggleDarkMode } from "@/components/ui/toggleDarkMode";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../../lib/tw-merge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface MenuItens {
  name: string;
  href: string;
}

const menuItems: MenuItens[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const NavigationMenu: React.FC = () => {
  const pathName = usePathname();

  return (
    <>
      {menuItems.map(({ name, href }, index) => (
        <Link
          key={index}
          href={href}
          className={cn(
            "text-lg transition-colors",
            pathName === href || pathName?.startsWith(`${href}/`)
              ? "font-bold"
              : "font-normal"
          )}
        >
          {name}
        </Link>
      ))}
    </>
  );
};

const Header: React.FC = () => {
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 backdrop-blur-md bg-background/70 border border-border shadow-md rounded-2xl px-6 py-3 w-[90%] max-w-7xl transition-all duration-300">
      <div className="hidden md:flex justify-between items-center">
        <Link href="/">Logo aqui</Link>

        <nav className="flex gap-5">
          <NavigationMenu />
        </nav>

        <div className="flex items-center gap-4">
          <ToggleDarkMode />
          <Button asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
        </div>
      </div>

      <div className="md:hidden flex justify-between items-center">
        <Link href="/">Logo aqui</Link>

        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full text-center max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerDescription></DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <div className="flex flex-col items-center gap-3 justify-center">
                  {menuItems.map(({ name, href }, index) => {
                    return (
                      <DrawerClose asChild key={index}>
                        <Link className="text-md" href={href}>
                          {name}
                        </Link>
                      </DrawerClose>
                    );
                  })}
                </div>
              </div>
              <DrawerFooter>
                <div className="bg-gray-200 h-0.5 w-full my-3"></div>
                <ToggleDarkMode />
                <DrawerClose asChild>
                  <Button asChild type="button" size={"lg"}>
                    <Link className="w-full" href="/sign-in">
                      Log In
                    </Link>
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
