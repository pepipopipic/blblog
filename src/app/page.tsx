import Link from 'next/link'
import { getAllReviews, getAllCategories, getAllTags } from '@/lib/reviews'
import { ArticleCard } from '@/components/ui/ArticleCard'
import { CategoryList } from '@/components/ui/CategoryList'
import { TagList } from '@/components/ui/TagList'
import { SectionTitle } from '@/components/ui/SectionTitle'
import { ProfileCard } from '@/components/ui/ProfileCard'

function getPopularReviews(reviews: ReturnType<typeof getAllReviews>) {
  return [...reviews].sort((a, b) => b.frontmatter.rating - a.frontmatter.rating).slice(0, 3)
}

export default function HomePage() {
  const allReviews     = getAllReviews()
  const recentReviews  = allReviews.slice(0, 3)
  const popularReviews = getPopularReviews(allReviews)
  const categories     = getAllCategories()
  const tags           = getAllTags()

  return (
    <>
      {/* ── Hero ── */}
      <section style={{ borderBottom: '1px solid var(--border-subtle)' }}
        className="bg-base">
        <div className="container-wide py-20 md:py-28">
          <p className="eyebrow mb-4">Personal Review Blog</p>
          <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-[0.08em] mb-6"
            style={{ color: 'var(--text)' }}>
            BL LOG
          </h1>
          {/* 細い区切り線 */}
          <div style={{ backgroundColor: 'var(--accent)' }} className="w-10 h-px mb-7" />
          <p style={{ color: 'var(--text-muted)' }}
            className="text-sm md:text-base leading-loose max-w-lg font-sans font-light">
            読んだBL漫画の感想を、好き勝手に書き残すブログです。<br className="hidden sm:block" />
            学園・オフィス・ファンタジーなどジャンル問わず、<br className="hidden sm:block" />
            心が動いた作品を丁寧にレビューしています。
          </p>
        </div>
      </section>

      {/* ── メインコンテンツ ── */}
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-16 lg:gap-14 items-start">

          {/* ── メインカラム ── */}
          <div className="space-y-18 min-w-0">

            {/* 新着レビュー */}
            <section>
              <SectionTitle eyebrow="Latest" action={
                <Link href="/reviews" className="btn-ghost text-[11px] tracking-[0.15em] uppercase">
                  All Reviews →
                </Link>
              }>
                新着レビュー
              </SectionTitle>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {recentReviews.map(r => <ArticleCard key={r.slug} review={r} />)}
              </div>
            </section>

            {/* 人気レビュー */}
            <section className="mt-16">
              <SectionTitle eyebrow="Popular">
                人気レビュー
              </SectionTitle>
              <div className="space-y-3">
                {popularReviews.map(r => <ArticleCard key={r.slug} review={r} variant="compact" />)}
              </div>
            </section>

          </div>

          {/* ── サイドバー ── */}
          <aside className="space-y-12 lg:sticky lg:top-20">

            {/* プロフィール */}
            <ProfileCard compact />

            {/* カテゴリ */}
            <section>
              <SectionTitle eyebrow="Browse" action={
                <Link href="/categories" className="btn-ghost text-[10px] tracking-[0.15em] uppercase">
                  All →
                </Link>
              }>
                カテゴリ
              </SectionTitle>
              <div className="card px-5 py-1">
                <CategoryList categories={categories.slice(0, 6)} />
              </div>
            </section>

            {/* タグ */}
            <section>
              <SectionTitle eyebrow="Tags" action={
                <Link href="/tags" className="btn-ghost text-[10px] tracking-[0.15em] uppercase">
                  All →
                </Link>
              }>
                タグ
              </SectionTitle>
              <TagList tags={tags} />
            </section>

          </aside>
        </div>
      </div>
    </>
  )
}
