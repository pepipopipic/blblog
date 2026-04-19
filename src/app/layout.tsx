import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: { default: 'BL LOG', template: '%s | BL LOG' },
  description: 'BL漫画の個人レビューブログ。学園・オフィス・ファンタジーなどジャンル横断でレビューします。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* ダークモードのフラッシュ防止 */}
        <script dangerouslySetInnerHTML={{ __html: `
          try {
            const t = localStorage.getItem('theme');
            const d = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (t === 'dark' || (!t && d)) document.documentElement.classList.add('dark');
          } catch(e) {}
        `}} />
      </head>
      <body className="min-h-screen flex flex-col bg-base text-base-color antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
