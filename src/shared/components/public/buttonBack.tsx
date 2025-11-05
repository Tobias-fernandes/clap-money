import { Button, buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";

import { ArrowLeft } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

interface IButtonBack
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const ButtonBack: React.FC<IButtonBack> = ({ ...props }) => {
  return (
    <Button {...props}>
      <ArrowLeft className="h-6 w-6 text-muted-foreground hover:text-foreground cursor-pointer" />
      Back
    </Button>
  );
};

export { ButtonBack };
