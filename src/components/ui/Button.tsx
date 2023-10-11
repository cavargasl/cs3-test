import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { forwardRef } from "react"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-semibold transition-all focus-visible:outline-none focus-visible:ring-foreground focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 ease-out-circ whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:shadow-md hover:shadow-foreground",
        outline: "border text-paragraph hover:shadow-md hover:shadow-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:shadow-md hover:shadow-foreground",
        ghost: "hover:bg-primary text-paragraph hover:text-primary-foreground",
        link: "hover:underline-offset-4 hover:underline text-paragraph",
      },
      size: {
        default: "h-9 px-3 py-1",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

