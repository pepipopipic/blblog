import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllReviewSlugs, getReviewBySlug, formatDate } from '@/lib/reviews'
import { CATEGORIES, TAGS } from '@/types'
import { RatingStars } from '@/components/ui/RatingStars'

type Props = { params: { slug: string } }

export async function generateStaticParams() {
  return getAllReviewSlugs().map(slug => ({ slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = getReviewBySlug(params.slug)
  if (!r) return {}
  return { title: r.frontmatter.title, description: r.frontmatter.description }
}

export default function ReviewDetailPage({ params }: Props) {
  const review = getReviewBySlug(params.slug)
  if (!review) notFound()
  const { frontmatter, content, readingTime } = review
  const cat = CATEGORIES[frontmatter.category]

  return (
    <div className="container-content py-12 md:py-16">

      {/* パンくず */}
      <nav style={{ color: 'var(--text-faint)' }} className="flex items-center gap-1.5 text-[11px] tracking-wide mb-10">
        <Link href="/" className="hover:text-[var(--accent)] transition-colors duration-200">Home</Link>
        <span>/</span>
        <Link href="/reviews" className="hover:text-[var(--accent)] transition-colors duration-200">Reviews</Link>
        <span>/</span>
        <span style={{ color: 'var(--text-muted)' }} className="truncate max-w-[160px]">
          {frontmatter.title}
        </span>
      </nav>

      {/* 記事ヘッダー */}
      <header style={{ borderBottom: '1px solid var(--border-subtle)' }} className="pb-10 mb-12">
        {cat && (
          <Link href={`/categories/${frontmatter.category}`} className="badge inline-block mb-6">
            {cat.label}
          </Link>
        )}

        <h1 style={{ color: 'var(--text)' }}
          className="font-display text-3xl md:text-4xl font-semibold leading-[1.25] mb-4">
          {frontmatter.title}
        </h1>

        <p style={{ color: 'var(--text-muted)' }} className="text-base leading-relaxed mb-8">
          {frontmatter.description}
        </p>

        {/* 評価 */}
        <div className="flex items-center gap-3 mb-7">
          <RatingStars rating={frontmatter.rating} size="lg" />
          <span style={{ color: 'var(--text-faint)' }} className="text-sm">{frontmatter.rating} / 5</span>
        </div>

        {/* メタ情報 */}
        <div style={{ color: 'var(--text-faint)' }}
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] tracking-wide">
          <time dateTime={frontmatter.publishedAt}>{formatDate(frontmatter.publishedAt)}</time>
          {frontmatter.updatedAt && <>
            <span>·</span>
            <span>更新: {formatDate(frontmatter.updatedAt)}</span>
          </>}
          <span>·</span>
          <span>{readingTime}</span>
        </div>
      </header>

      {/* 本文 */}
      <div className="prose-review mb-16">
        <MDXRemote source={content} />
      </div>

      {/* タグ */}
      {frontmatter.tags.length > 0 && (
        <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}
          className="py-8 mb-12">
          <p className="eyebrow mb-4">Tags</p>
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map(tag => (
              <Link key={tag} href={`/tags/${tag}`} className="tag-pill">
                #{TAGS[tag]?.label ?? tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ナビゲーション */}
      <Link href="/reviews" className="btn-ghost text-[11px] tracking-[0.15em] uppercase">
        ← All Reviews
      </Link>
    </div>
  )
}
