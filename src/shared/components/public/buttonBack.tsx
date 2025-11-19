"use client";

import { Button } from "@/components/ui/button";
import { IButton } from "@/shared/types/button";
import { ArrowLeft } from "lucide-react";
import { Route } from "next";
import Link from "next/link";

interface IButtonBack extends IButton {
  route: string;
}

const ButtonBack: React.FC<IButtonBack> = ({ route = "/", ...props }) => {
  return (
    <Button {...props} asChild>
      <Link href={route as Route}>
        <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer" />
        <span>Back</span>
      </Link>
    </Button>
  );
};

export { ButtonBack };
