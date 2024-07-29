import React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const INPUT_SIZES = {
  TINY: "tiny",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

const inputVariants = cva(
  [
    "flex w-full items-center rounded-4 border border-gray-300 bg-bg-white text-gray-900 placeholder:text-gray-500 hover:border-gray-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 disabled:cursor-not-allowed disabled:opacity-50"
  ],
  {
    variants: {
      size: {
        [INPUT_SIZES.SMALL]: ["text-size-11", "px-4", "min-h-[2.4rem]"],
        [INPUT_SIZES.MEDIUM]: ["text-size-12", "px-8", "min-h-[3rem]"],
        [INPUT_SIZES.LARGE]: ["text-size-14", "px-12", "min-h-[3.6rem]"]
      }
    },
    defaultVariants: {
      size: INPUT_SIZES.LARGE
    }
  }
);

const Input = React.forwardRef(({ className, type, size, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(inputVariants({ size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input, INPUT_SIZES };
