import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const cn = (...classes: (string | undefined)[]) => {
  return classes.filter(Boolean).join(" ");
};

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-[#9aeae9] border border-transparent overflow-hidden tracking-wide",
  {
    variants: {
      variant: {
        default: [
          "bg-transparent",

          "hover:bg-[rgba(37,43,55,1)]",
          "hover:shadow-[0px_0px_12px_0px_rgba(255,255,255,0.52)_inset]",
          "hover:text-gray-300",

          "data-[active=true]:bg-[rgba(69,127,126,1)]",
          "data-[active=true]:shadow-[0px_0px_8px_0px_rgba(255,255,255,1)_inset]",
          "data-[active=true]:text-[#97ebea]",

          "before:absolute before:inset-0 before:rounded-lg before:p-[1px]",
          "before:bg-gradient-to-br before:from-white/60 before:via-white/30 before:to-white/30",
          "before:opacity-0 hover:before:opacity-100 data-[active=true]:before:opacity-100",
          "before:blur-sm before:transition-all before:duration-300 before:z-[-1]",

          "after:absolute after:top-0 after:left-1/4 after:right-1/4 after:h-1/2",
          "after:bg-gradient-to-b after:from-white/30 after:to-transparent",
          "after:rounded-t-2xl after:blur-sm",
          "after:opacity-0 hover:after:opacity-100 after:transition-all after:duration-100",
        ],

        plain: [
          "bg-[rgba(37,43,55,1)]",
          "hover:bg-[rgba(37,43,55,1)]",
          "hover:shadow-[0px_0px_12px_0px_rgba(255,255,255,0.52)_inset]",
          "hover:text-gray-300",
          "data-[active=true]:bg-[rgba(69,127,126,1)]",
          "data-[active=true]:shadow-[0px_0px_8px_0px_rgba(255,255,255,1)_inset]",
        ],
        secondary:
          "text-gray-400 hover:bg-gray-800 hover:text-white data-[active=true]:bg-gray-600 data-[active=true]:text-white",
        destructive:
          "text-red-400 hover:bg-red-900 hover:text-red-300 data-[active=true]:bg-red-500 data-[active=true]:text-white",
        outline:
          "border border-cyan-300 hover:bg-cyan-300 hover:text-black data-[active=true]:bg-cyan-500 data-[active=true]:text-white",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 py-2 text-base",
        default: "h-10 px-4 py-2 text-base",
        lg: "h-11 px-6 py-3 text-lg",
        xl: "h-14 px-6 py-3 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isActive?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isActive = false, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        data-active={isActive}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
