"use client";

import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-heading font-normal rounded-3xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost:
          "text-foreground hover:bg-secondary hover:text-secondary-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-4 text-lg",
        sm: "px-4 py-3 text-base",
        lg: "px-12 py-6 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function Button({ className, variant, size, ...props }) {
  return (
    <RippleButton
      variant={variant === "default" ? "default" : "ghost"}
      className={cn(buttonVariants({ variant, size, className }))}
      scale={8}
      {...props}
    />
  );
}
