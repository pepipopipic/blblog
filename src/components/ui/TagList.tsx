import Link from 'next/link'
import { Tag } from '@/types'

type Props = { tags: Tag[]; showCount?: boolean }

export function TagList({ tags, showCount = true }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link key={tag.slug} href={`/tags/${tag.slug}`} className="tag-pill">
          <span>#{tag.label}</span>
          {showCount && tag.count !== undefined && tag.count > 0 && (
            <span style={{ color: 'var(--text-faint)' }} className="text-[10px] ml-0.5 tabular-nums">
              {tag.count}
            </span>
          )}
        </Link>
      ))}
    </div>
  )
}
