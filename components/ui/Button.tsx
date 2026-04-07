"use client"

import { cn } from "@/lib/utils"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost"
  href?: string
  children: React.ReactNode
}

export default function Button({
  variant = "primary",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display font-medium text-base rounded-lg px-7 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-bg-dark"

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark active:scale-[0.98]",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-[0.98]",
    ghost:
      "text-primary hover:bg-bg-alt dark:hover:bg-bg-dark-alt active:scale-[0.98]",
  }

  const classes = cn(baseStyles, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
