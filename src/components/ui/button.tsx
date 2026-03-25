"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-body text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bm-white disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-bm-white text-bm-black hover:bg-bm-gray",
        accent: "bg-bm-blue text-bm-white hover:bg-bm-blue/80",
        outline:
          "border border-bm-gray/30 text-bm-white hover:border-bm-white hover:text-bm-white bg-transparent",
        ghost: "text-bm-gray hover:text-bm-white bg-transparent",
        destructive: "bg-bm-red text-bm-white hover:bg-bm-red/80",
        gradient:
          "bg-gradient-to-r from-bm-green via-bm-blue to-bm-lavender text-bm-white hover:opacity-80",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
