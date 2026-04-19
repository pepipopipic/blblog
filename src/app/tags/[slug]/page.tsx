import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getReviewsByTag } from '@/lib/reviews'
import { TAGS } from '@/types'
import { ArticleCard } from '@/components/ui/ArticleCard'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return Object.keys(TAGS).map(slug => ({ slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const m = TAGS[params.slug]
  if (!m) return {}
  return { title: `#${m.label}`, description: `タグ「${m.label}」のレビュー一覧` }
}

export default function TagDetailPage({ params }: Props) {
  const meta = TAGS[params.slug]
  if (!meta) notFound()
  const reviews = getReviewsByTag(params.slug)

  return (
    <div className="container-wide py-14 md:py-18">
      {/* パンくず */}
      <nav style={{ color: 'var(--text-faint)' }}
        className="flex items-center gap-1.5 text-[11px] tracking-wide mb-10">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-200">Home</Link>
        <span>/</span>
        <Link href="/tags" className="hover:text-[var(--accent)] transition-colors duration-200">Tags</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-muted)' }}>#{meta.label}</span>
      </nav>

      <header className="page-header">
        <p className="eyebrow mb-3">Tag</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold mb-1">
          #{meta.label}
          <span style={{ color: 'var(--text-faint)' }} className="text-lg font-sans font-light ml-3">
            {reviews.length}件
          </span>
        </h1>
      </header>

      {reviews.length === 0
        ? <div className="text-center py-24">
            <p style={{ color: 'var(--text-faint)' }} className="text-sm mb-5">
              このタグのレビューはまだありません。
            </p>
            <Link href="/tags" className="btn-ghost text-[11px] tracking-[0.15em] uppercase">
              ← All Tags
            </Link>
          </div>
        : <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {reviews.map(r => <ArticleCard key={r.slug} review={r} />)}
          </div>
      }
    </div>
  )
}
