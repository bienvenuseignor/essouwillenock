interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionTitle({ label, title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      {label && (
        <span className="font-display font-medium text-sm tracking-[0.08em] uppercase text-primary mb-4 block">
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl mb-6 ${light ? "text-white" : ""}`}>
        {title}
      </h2>
      <div className="w-[60px] h-1 bg-primary mx-auto mb-6 rounded-full" />
      {subtitle && (
        <p className={`text-lg ${light ? "text-white/80" : "text-text-body"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
