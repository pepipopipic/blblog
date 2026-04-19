import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'BL LOGについて',
}

const SECTIONS = [
  {
    title: 'このサイトについて',
    body: '「BL LOG」は、管理人が読んだBL漫画の感想・レビューを記録するための個人ブログです。商業誌・電子書籍を中心に、読んで心が動いた作品を丁寧にレビューしています。',
  },
  {
    title: 'レビューのスタンス',
    body: 'すべてのレビューは管理人個人の感想であり、作品・作者・出版社を批判する意図はありません。星評価もあくまで個人的な好みの指標です。ネタバレについては可能な限り配慮しますが、感想の性質上ストーリーの一部に触れる場合があります。',
  },
  {
    title: 'カテゴリ・タグについて',
    body: 'カテゴリは作品の主な舞台・世界観を基準に分類しています。タグはキャラクターの属性・作品の雰囲気・よく使われる設定などを独自に定義しています。',
  },
]

export default function AboutPage() {
  return (
    <div className="container-content py-14 md:py-18">
      <header className="page-header">
        <p className="eyebrow mb-3">About this site</p>
        <h1 style={{ color: 'var(--text)' }} className="font-display text-3xl font-semibold">
          About
        </h1>
      </header>

      {/* セクション */}
      <div className="space-y-12">
        {SECTIONS.map(({ title, body }) => (
          <section key={title}
            style={{ borderLeft: '2px solid var(--accent-soft)' }}
            className="pl-6">
            <h2 style={{ color: 'var(--text)' }}
              className="font-display text-lg font-semibold mb-3">
              {title}
            </h2>
            <p style={{ color: 'var(--text-muted)' }} className="text-sm leading-loose">
              {body}
            </p>
          </section>
        ))}

        {/* リンク */}
        <section style={{ borderLeft: '2px solid var(--accent-soft)' }} className="pl-6">
          <h2 style={{ color: 'var(--text)' }} className="font-display text-lg font-semibold mb-3">
            コンテンツを探す
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/categories" className="badge">Categories</Link>
            <Link href="/tags"       className="badge">Tags</Link>
            <Link href="/reviews"   className="badge">All Reviews</Link>
          </div>
        </section>
      </div>
    </div>
  )
}
