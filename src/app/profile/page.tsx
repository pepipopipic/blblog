import type { Metadata } from 'next'
import { ProfileCard } from '@/components/ui/ProfileCard'
import { getAllReviews } from '@/lib/reviews'
import { CATEGORIES } from '@/types'

export const metadata: Metadata = {
  title: 'Profile',
  description: 'BL LOGの管理人プロフィール',
}

export default function ProfilePage() {
  const reviews  = getAllReviews()
  const catCount = Object.keys(CATEGORIES).filter(
    slug => reviews.some(r => r.frontmatter.category === slug)
  ).length

  const stats = [
    { label: 'Reviews',    value: reviews.length },
    { label: 'Categories', value: catCount },
    { label: 'Avg Rating', value: reviews.length
        ? (reviews.reduce((s, r) => s + r.frontmatter.rating, 0) / reviews.length).toFixed(1)
        : '—' },
  ]

  return (
    <div className="container-content py-14 md:py-18">
      <header className="page-header">
        <p className="eyebrow mb-3">Author</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold">
          Profile
        </h1>
      </header>

      {/* プロフィールカード */}
      <ProfileCard />

      {/* スタッツ */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {stats.map(({ label, value }) => (
          <div key={label} className="card p-5 text-center">
            <p style={{ color: 'var(--accent)' }} className="font-display text-2xl font-semibold">
              {value}
            </p>
            <p style={{ color: 'var(--text-faint)' }} className="text-[10px] tracking-[0.2em] uppercase mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* このサイトについて */}
      <div className="mt-12 space-y-5 text-sm leading-loose" style={{ color: 'var(--text-muted)' }}>
        <p>
          レビューはすべて個人の感想です。作品・作者・出版社を批判する意図はありません。
          ネタバレには可能な限り配慮しますが、感想の性質上ストーリーに触れる場合があります。
        </p>
      </div>
    </div>
  )
}
