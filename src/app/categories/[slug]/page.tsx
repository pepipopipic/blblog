import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getReviewsByCategory } from '@/lib/reviews'
import { CATEGORIES } from '@/types'
import { ArticleCard } from '@/components/ui/ArticleCard'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map(slug => ({ slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = CATEGORIES[params.slug]
  if (!m) return {}
  return { title: m.label, description: m.description }
}

export default function CategoryDetailPage({ params }: Props) {
  const meta = CATEGORIES[params.slug]
  if (!meta) notFound()
  const reviews = getReviewsByCategory(params.slug)

  return (
    <div className="container-wide py-14 md:py-18">
      {/* パンくず */}
      <nav style={{ color: 'var(--text-faint)' }} className="flex items-center gap-1.5 text-[11px] tracking-wide mb-10">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-200">Home</Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-[var(--accent)] transition-colors duration-200">Categories</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-muted)' }}>{meta.label}</span>
      </nav>

      <header className="page-header">
        <span className="badge inline-block mb-4">{meta.label}</span>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold mb-3">
          {meta.label}
          <span style={{ color: 'var(--text-faint)' }} className="text-lg font-sans font-light ml-3">
            {reviews.length}件
          </span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="text-sm leading-relaxed max-w-xl">
          {meta.description}
        </p>
      </header>

      {reviews.length === 0
        ? <div className="text-center py-24">
            <p style={{ color: 'var(--text-faint)' }} className="text-sm mb-5">
              このカテゴリのレビューはまだありません。
            </p>
            <Link href="/categories" className="btn-ghost text-[11px] tracking-[0.15em] uppercase">
              ← All Categories
            </Link>
          </div>
        : <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {reviews.map(r => <ArticleCard key={r.slug} review={r} />)}
          </div>
      }
    </div>
  )
}
