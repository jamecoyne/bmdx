"use client";

import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ComponentRef<typeof SwitchPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    className={cn(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center border border-bm-gray/50 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bm-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-bm-white data-[state=checked]:border-bm-white data-[state=unchecked]:bg-transparent rounded-full",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=checked]:bg-bm-black data-[state=unchecked]:translate-x-0 data-[state=unchecked]:bg-bm-gray"
      )}
    />
  </SwitchPrimitive.Root>
));
Switch.displayName = "Switch";

export { Switch };
