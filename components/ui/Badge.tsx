interface BadgeProps {
  children: React.ReactNode
  variant?: "success" | "primary"
}

export default function Badge({ children, variant = "success" }: BadgeProps) {
  const variants = {
    success: "bg-success/10 text-success",
    primary: "bg-primary/10 text-primary",
  }

  return (
    <span
      className={`inline-flex items-center font-display text-xs font-medium tracking-wider uppercase px-3 py-1 rounded-full ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
