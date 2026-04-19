import Link from 'next/link'

const COL1 = [
  { href: '/reviews',    label: 'Reviews' },
  { href: '/categories', label: 'Categories' },
  { href: '/tags',       label: 'Tags' },
]
const COL2 = [
  { href: '/profile', label: 'Profile' },
  { href: '/about',   label: 'About' },
]

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border-subtle)' }} className="mt-28">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16">

          {/* ブランドコラム */}
          <div>
            <Link href="/" className="flex items-baseline gap-3 mb-4 group">
              <span style={{ backgroundColor: 'var(--accent)' }} className="w-px h-4 inline-block self-center" />
              <span style={{ color: 'var(--text)' }}
                className="font-display text-lg font-semibold tracking-[0.12em] transition-opacity duration-200 group-hover:opacity-60">
                BL LOG
              </span>
            </Link>
            <p style={{ color: 'var(--text-faint)' }} className="text-xs leading-loose max-w-[220px]">
              読んだBL漫画の感想を、<br />好き勝手に書き残すブログです。
            </p>
          </div>

          {/* ナビコラム1 */}
          <div>
            <p style={{ color: 'var(--text-faint)' }}
              className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5">Contents</p>
            <ul className="space-y-3">
              {COL1.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    style={{ color: 'var(--text-muted)' }}
                    className="text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[var(--accent)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ナビコラム2 */}
          <div>
            <p style={{ color: 'var(--text-faint)' }}
              className="text-[10px] font-medium tracking-[0.25em] uppercase mb-5">Info</p>
            <ul className="space-y-3">
              {COL2.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    style={{ color: 'var(--text-muted)' }}
                    className="text-xs tracking-[0.12em] uppercase transition-colors duration-200 hover:text-[var(--accent)]">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ボトムバー */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', color: 'var(--text-faint)' }}
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] tracking-widest uppercase">
          <span>© {new Date().getFullYear()} BL Log</span>
          <span>Personal Review Blog</span>
        </div>
      </div>
    </footer>
  )
}
