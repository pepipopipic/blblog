type Props = {
  rating: number
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl' }

export function RatingStars({ rating, size = 'md', showLabel = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-1 ${sizes[size]}`} aria-label={`評価 ${rating}/5`}>
      <span className="tracking-tight">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>★</span>
        ))}
      </span>
      {showLabel && (
        <span style={{ color: 'var(--text-faint)' }} className="text-xs ml-1">{rating}/5</span>
      )}
    </span>
  )
}
