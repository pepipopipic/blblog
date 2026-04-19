'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const NAV = [
  { href: '/reviews',    label: 'Reviews' },
  { href: '/categories', label: 'Categories' },
  { href: '/tags',       label: 'Tags' },
  { href: '/profile',    label: 'Profile' },
  { href: '/about',      label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: 'var(--surface)', borderBottom: '1px solid var(--border-subtle)' }}
      className="sticky top-0 z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-[60px]">

          {/* ロゴ */}
          <Link href="/" className="group flex items-baseline gap-3" onClick={() => setOpen(false)}>
            {/* 細い縦線 + サイト名 — Vogue的 */}
            <span style={{ backgroundColor: 'var(--accent)' }} className="w-px h-5 inline-block self-center" />
            <span style={{ color: 'var(--text)' }}
              className="font-display text-xl font-semibold tracking-[0.12em] transition-opacity duration-200 group-hover:opacity-60">
              BL LOG
            </span>
          </Link>

          {/* デスクトップナビ */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href}
                style={{ color: 'var(--text-muted)' }}
                className="text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-200 hover:text-[var(--accent)]">
                {label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* モバイル */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button onClick={() => setOpen(!open)}
              style={{ color: 'var(--text-muted)' }}
              className="p-1.5 transition-opacity duration-200 hover:opacity-60"
              aria-label="メニュー">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      {open && (
        <div style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border-subtle)' }}
          className="md:hidden">
          <nav className="container-wide py-5 flex flex-col gap-0">
            {NAV.map(({ href, label }) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}
                style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-subtle)' }}
                className="py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase last:border-b-0 transition-colors duration-200 hover:text-[var(--accent)]">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
