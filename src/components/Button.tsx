import React from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "relative rounded-lg border-[1px] border-zinc-950 bg-zinc-50 dark:text-zinc-950 flex items-center justify-center text-xs font-semibold text-zinc-950 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_rgb(41,37,36)] dark:hover:shadow-[4px_4px_0_rgb(41,37,36)] hover:after:absolute hover:after:-bottom-2 hover:after:-right-2 hover:after:left-0 hover:after:top-0 hover:after:-z-10",
  variants: {
    size: {
      sm: "h-7 text-xs",
      md: "h-9 text-xs",
      lg: "h-11 text-base",
      icon: "h-9 min-w-9 max-w-9"
    },
    fullWidth: {
      true: "w-full",
      false: ""
    }
  },
  defaultVariants: {
    size: "md"
  }
})

type ButtonProps = VariantProps<typeof button> & {
  fullWidth?: boolean
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  fullWidth = true,
  onClick,
  className
}) => {
  return (
    <button
      className={button({ size, fullWidth, className })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
