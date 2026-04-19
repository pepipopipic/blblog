import type { Metadata } from 'next'
import { getAllCategories } from '@/lib/reviews'
import { CategoryList } from '@/components/ui/CategoryList'

export const metadata: Metadata = { title: 'Categories', description: 'カテゴリ一覧' }

export default function CategoriesPage() {
  const categories = getAllCategories()
  return (
    <div className="container-content py-14 md:py-18">
      <header className="page-header">
        <p className="eyebrow mb-3">Browse</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold">
          カテゴリ一覧
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm">
          ジャンルや世界観からレビューを探す
        </p>
      </header>
      <div className="card px-6 py-1">
        <CategoryList categories={categories} />
      </div>
    </div>
  )
}
