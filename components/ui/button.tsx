import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap px-4 py-2 rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-md bg-text-primary  font-medium text-white hover:bg-text-secondary",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({ className, variant, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(buttonVariants({ className, variant }))}
    />
  )
}
