import Link from 'next/link'
import { Category } from '@/types'

type Props = { categories: Category[]; showCount?: boolean }

export function CategoryList({ categories, showCount = true }: Props) {
  return (
    <ul>
      {categories.map((cat, i) => (
        <li key={cat.slug}
          style={{ borderBottom: i < categories.length - 1 ? '1px solid var(--border-subtle)' : 'none' }}>
          <Link href={`/categories/${cat.slug}`}
            className="flex items-center justify-between py-4 group transition-colors duration-200">
            <div className="min-w-0 flex-1">
              <span style={{ color: 'var(--text)' }}
                className="text-sm font-medium transition-colors duration-200 group-hover:text-[var(--accent)]">
                {cat.label}
              </span>
              {cat.description && (
                <p style={{ color: 'var(--text-faint)' }} className="text-xs mt-0.5 line-clamp-1 leading-relaxed">
                  {cat.description}
                </p>
              )}
            </div>
            <div className="flex items-center gap-3 ml-4 shrink-0">
              {showCount && (
                <span style={{ color: 'var(--text-faint)' }} className="text-[11px] tabular-nums">
                  {cat.count ?? 0}
                </span>
              )}
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                style={{ color: 'var(--text-faint)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
