import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

type IButton = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export type { IButton };
