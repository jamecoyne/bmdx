import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "bg-bm-white text-bm-black",
        outline: "border border-bm-gray/30 text-bm-gray",
        identity: "bg-bm-yellow text-bm-black",
        content: "bg-bm-blue text-bm-white",
        creative: "bg-bm-orange text-bm-white",
        success: "bg-bm-green text-bm-white",
        destructive: "bg-bm-red text-bm-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
