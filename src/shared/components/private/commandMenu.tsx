"use client";

import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { CommandGroup } from "cmdk";
import { LayoutDashboard, Settings } from "lucide-react";
import { Route } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

const paths = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Settings", href: "/user", icon: Settings },
];

const CommandMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog
      open={open}
      onOpenChange={setOpen}
      className="rounded-lg border shadow-md md:min-w-[450px] min-h-52 sm:min-h-96"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions" className="text-sm">
          {paths.map((path) => (
            <CommandItem
              key={path.href}
              onSelect={() => setOpen(false)}
              className="hover:bg-gray-100"
            >
              <Link href={path.href as Route} className="flex items-center gap-2 w-full">
                <path.icon /> {path.name}
              </Link>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export { CommandMenu };
