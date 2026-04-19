import Link from 'next/link'

type Props = { compact?: boolean }

export function ProfileCard({ compact = false }: Props) {
  const TASTES = ['切ない系', '感情描写が丁寧', '甘甘', '執着', '年の差', 'HE必須']

  if (compact) {
    return (
      <div className="card p-5">
        <div className="flex items-center gap-4">
          <div style={{ backgroundColor: 'var(--accent-bg)', border: '1px solid var(--accent-soft)' }}
            className="w-11 h-11 rounded-full flex items-center justify-center shrink-0">
            <span style={{ color: 'var(--accent)' }} className="font-display text-lg font-semibold">M</span>
          </div>
          <div className="min-w-0 flex-1">
            <p style={{ color: 'var(--text)' }} className="font-display text-sm font-semibold">管理人</p>
            <p style={{ color: 'var(--text-muted)' }} className="text-xs mt-0.5 leading-relaxed line-clamp-2">
              BL漫画愛好家。切ない系・感情描写が丁寧な作品が好き。
            </p>
          </div>
        </div>
        <Link href="/profile"
          style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--accent)' }}
          className="block mt-4 pt-4 text-[11px] font-medium tracking-[0.12em] uppercase
                     transition-opacity duration-200 hover:opacity-60">
          Profile →
        </Link>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <div className="flex items-start gap-5 mb-7">
        <div style={{ backgroundColor: 'var(--accent-bg)', border: '1px solid var(--accent-soft)' }}
          className="w-16 h-16 rounded-full flex items-center justify-center shrink-0">
          <span style={{ color: 'var(--accent)' }} className="font-display text-3xl font-semibold">M</span>
        </div>
        <div className="pt-1">
          <p className="eyebrow mb-2">Author</p>
          <p style={{ color: 'var(--text)' }} className="font-display text-xl font-semibold">管理人</p>
          <p style={{ color: 'var(--text-muted)' }} className="text-sm mt-0.5">BL漫画愛好家</p>
        </div>
      </div>

      <div className="space-y-4 text-sm leading-loose" style={{ color: 'var(--text-muted)' }}>
        <p>BL漫画が好きすぎて、感想を書き残す場所を作りました。</p>
        <p>甘甘よりも少し切なさのある作品、感情の描写が丁寧な作品が特に好きです。重めもいけます。</p>
        <p>レビューは「自分がなぜこの作品が好きなのか」を整理するために書いています。</p>
      </div>

      <div style={{ borderTop: '1px solid var(--border-subtle)' }} className="mt-7 pt-6">
        <p className="eyebrow mb-4">Preferences</p>
        <div className="flex flex-wrap gap-2">
          {TASTES.map(t => <span key={t} className="badge-neutral">{t}</span>)}
        </div>
      </div>
    </div>
  )
}
