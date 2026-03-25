"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden bg-bm-gray/20">
      <SliderPrimitive.Range className="absolute h-full bg-bm-white" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 border border-bm-white bg-bm-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-bm-white disabled:pointer-events-none disabled:opacity-50 hover:bg-bm-gray" />
  </SliderPrimitive.Root>
));
Slider.displayName = "Slider";

export { Slider };
