"use client";

import { Button } from "@/components/ui/button";
import { IButton } from "@/shared/types/button";
import { ArrowLeft } from "lucide-react";

const ButtonBack: React.FC<IButton> = ({ ...props }) => {
  return (
    <Button {...props}>
      <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer" />
      Back
    </Button>
  );
};

export { ButtonBack };
