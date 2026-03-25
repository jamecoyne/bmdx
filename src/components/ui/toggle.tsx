"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center text-sm font-medium transition-colors hover:text-bm-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bm-white disabled:pointer-events-none disabled:opacity-50 data-[state=on]:text-bm-white",
  {
    variants: {
      variant: {
        default:
          "bg-transparent text-bm-gray data-[state=on]:bg-bm-gray/10",
        outline:
          "border border-bm-gray/30 bg-transparent text-bm-gray hover:border-bm-white data-[state=on]:border-bm-white data-[state=on]:text-bm-white",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Toggle = React.forwardRef<
  React.ComponentRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
));
Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
