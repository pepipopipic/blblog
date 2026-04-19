type Props = {
  children: React.ReactNode
  action?: React.ReactNode
  eyebrow?: string
  className?: string
}

export function SectionTitle({ children, action, eyebrow, className = '' }: Props) {
  return (
    <div className={`mb-8 ${className}`}>
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <div className="flex items-baseline justify-between">
        <h2 className="section-title">{children}</h2>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}
