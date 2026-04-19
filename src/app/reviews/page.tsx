import type { Metadata } from 'next'
import { getAllReviews } from '@/lib/reviews'
import { ArticleCard } from '@/components/ui/ArticleCard'

export const metadata: Metadata = {
  title: 'Reviews',
  description: 'BL漫画レビューの一覧',
}

export default function ReviewsPage() {
  const reviews = getAllReviews()
  return (
    <div className="container-wide py-14 md:py-18">
      <header className="page-header">
        <p className="eyebrow mb-3">All Reviews</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold">
          レビュー一覧
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm">{reviews.length}件</p>
      </header>

      {reviews.length === 0
        ? <p style={{ color: 'var(--text-faint)' }} className="text-center py-24 text-sm">
            まだレビューがありません。
          </p>
        : <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {reviews.map(r => <ArticleCard key={r.slug} review={r} />)}
          </div>
      }
    </div>
  )
}
