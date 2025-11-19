"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ButtonCloseAuth = () => {
  const pathName = usePathname();

  if (pathName === ("/unauthorized" as Route)) return null;

  return (
    <Button
      className="absolute top-5 right-5 rounded-full p-2"
      asChild
      variant={"outline"}
      size={"icon"}
    >
      <Link
        href={"/" as Route}
        className="absolute top-5 right-5 rounded-full p-2"
      >
        <X />
      </Link>
    </Button>
  );
};

export { ButtonCloseAuth };
