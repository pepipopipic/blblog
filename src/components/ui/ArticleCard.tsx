import Link from 'next/link'
import { Review, CATEGORIES, TAGS, formatDate } from '@/types'
import { RatingStars } from './RatingStars'

type Props = {
  review: Review
  variant?: 'default' | 'compact' | 'featured'
}

export function ArticleCard({ review, variant = 'default' }: Props) {
  const { slug, frontmatter, readingTime, excerpt } = review
  const cat = CATEGORIES[frontmatter.category]

  /* compact: サイドバー・人気一覧用 */
  if (variant === 'compact') {
    return (
      <article className="card card-hover p-5">
        <Link href={`/reviews/${slug}`} className="group block">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0 flex-1">
              <h3 style={{ color: 'var(--text)' }}
                className="font-display text-[15px] font-semibold leading-snug mb-1
                           transition-colors duration-200 group-hover:text-[var(--accent)]">
                {frontmatter.title}
              </h3>
              <p style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed line-clamp-1">
                {frontmatter.description}
              </p>
            </div>
            <div className="shrink-0 mt-0.5">
              <RatingStars rating={frontmatter.rating} size="sm" />
            </div>
          </div>
          <div className="mt-3 flex items-center gap-3">
            {cat && <span className="badge">{cat.label}</span>}
            <time style={{ color: 'var(--text-faint)' }} className="text-[11px]">
              {formatDate(frontmatter.publishedAt)}
            </time>
          </div>
        </Link>
      </article>
    )
  }

  /* default: 一覧・グリッド用 */
  return (
    <article className="card card-hover flex flex-col">
      {/* カラーライン — カテゴリカラーアクセント */}
      <div style={{ backgroundColor: 'var(--accent-soft)' }} className="h-px w-full rounded-t-md" />

      <div className="p-6 flex flex-col gap-4 flex-1">
        {/* 上段: バッジ + 評価 */}
        <div className="flex items-center justify-between">
          {cat
            ? <Link href={`/categories/${frontmatter.category}`} className="badge">{cat.label}</Link>
            : <span />
          }
          <RatingStars rating={frontmatter.rating} size="sm" />
        </div>

        {/* タイトル・説明 */}
        <div className="flex-1">
          <Link href={`/reviews/${slug}`} className="group block">
            <h2 style={{ color: 'var(--text)' }}
              className="font-display text-lg font-semibold leading-snug mb-2
                         transition-colors duration-200 group-hover:text-[var(--accent)]">
              {frontmatter.title}
            </h2>
          </Link>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm leading-relaxed">
            {frontmatter.description}
          </p>
        </div>

        {/* 抜粋 */}
        {excerpt && (
          <p style={{ color: 'var(--text-muted)' }} className="text-[13px] leading-relaxed line-clamp-2">
            {excerpt}
          </p>
        )}

        {/* フッター */}
        <div style={{ borderTop: '1px solid var(--border-subtle)' }}
          className="pt-4 flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags.slice(0, 3).map(tag => (
              <Link key={tag} href={`/tags/${tag}`} className="tag-pill">
                #{TAGS[tag]?.label ?? tag}
              </Link>
            ))}
          </div>
          <div style={{ color: 'var(--text-faint)' }}
            className="flex items-center gap-1.5 text-[11px] shrink-0 ml-2">
            <span>{readingTime}</span>
            <span>·</span>
            <time dateTime={frontmatter.publishedAt}>{formatDate(frontmatter.publishedAt)}</time>
          </div>
        </div>
      </div>
    </article>
  )
}
