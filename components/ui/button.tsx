import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs cursor-pointer",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 hover:shadow-sm hover:-translate-y-0.5 ",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground hover:shadow-sm hover:-translate-y-0.5 ",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:shadow-sm hover:-translate-y-0.5 ",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Ripple effect component
interface RippleProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const Ripple: React.FC<RippleProps> = ({ x, y, onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 600);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <span
      className="absolute bg-white/30 rounded-full animate-ripple"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};

function Button({
  className,
  variant,
  size,
  asChild = false,
  onClick,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const [ripples, setRipples] = React.useState<
    Array<{ x: number; y: number; id: number }>
  >([]);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const rippleId = React.useRef(0);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newRipple = { x, y, id: rippleId.current++ };
      setRipples((prev) => [...prev, newRipple]);
    }

    onClick?.(event);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
  };

  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={buttonRef}
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      onClick={handleClick}
      {...props}
    >
      {children}
      {ripples.map((ripple) => (
        <Ripple
          key={ripple.id}
          x={ripple.x}
          y={ripple.y}
          onComplete={() => removeRipple(ripple.id)}
        />
      ))}
    </Comp>
  );
}

export { Button, buttonVariants };
