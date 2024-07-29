import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="rounded-full relative h-4 w-full grow overflow-hidden bg-gray-300">
      <SliderPrimitive.Range className="absolute h-full bg-secondary-two-500" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="rounded-full block h-20 w-20 border-[3px] border-secondary-two-500 bg-white transition-colors focus:ring-2 focus:ring-primary-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
