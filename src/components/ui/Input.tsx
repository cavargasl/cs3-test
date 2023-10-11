import { cn } from "@/lib/utils"
import { forwardRef } from "react"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

/**
 * An input component.
 * @param props (InputProps): The props for the input.
 * @param props.className (string): The additional class name(s) for the input.
 * @param props.type (string): The type of the input. Can be one of "text", "password", "email", "number", "tel", "url", "search", "date", "time", "datetime-local", "month", or "week".
 * @returns (JSX.Element): An input component.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }