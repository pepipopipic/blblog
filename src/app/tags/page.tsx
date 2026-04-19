import type { Metadata } from 'next'
import { getAllTags } from '@/lib/reviews'
import { TagList } from '@/components/ui/TagList'

export const metadata: Metadata = { title: 'Tags', description: 'タグ一覧' }

export default function TagsPage() {
  const tags = getAllTags()
  return (
    <div className="container-content py-14 md:py-18">
      <header className="page-header">
        <p className="eyebrow mb-3">Tags</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold">
          タグ一覧
        </h1>
        <p style={{ color: 'var(--text-muted)' }} className="mt-3 text-sm">
          属性・雰囲気・キャラクターから探す
        </p>
      </header>

      {/* 件数あり / なしでグループ分け */}
      <div className="space-y-10">
        {(() => {
          const active  = tags.filter(t => (t.count ?? 0) > 0)
          const inactive = tags.filter(t => (t.count ?? 0) === 0)
          return <>
            {active.length > 0 && (
              <div>
                <p className="eyebrow mb-5">記事あり</p>
                <TagList tags={active} showCount />
              </div>
            )}
            {inactive.length > 0 && (
              <div>
                <p className="eyebrow mb-5">記事なし</p>
                <TagList tags={inactive} showCount={false} />
              </div>
            )}
          </>
        })()}
      </div>
    </div>
  )
}
