"use client";

import { RippleButton } from "@/components/animate-ui/buttons/ripple";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "font-heading font-normal rounded-2xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring shadow-lg hover:shadow-xl cursor-pointer",
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
        default: "px-8 py-5 text-lg h-14",
        sm: "px-4 py-4 text-base h-12",
        lg: "px-12 py-6 text-xl h-16",
        icon: "h-10 w-10",
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
