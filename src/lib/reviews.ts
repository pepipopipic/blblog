import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { ReviewFrontmatter, Review, ReviewDetail, Category, Tag, CATEGORIES, TAGS } from '@/types'

const CONTENT_DIR = path.join(process.cwd(), 'content/reviews')

// 全レビューのslugを取得
export function getAllReviewSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

// 読了時間の簡易計算（日本語対応）
function calcReadingTime(content: string): string {
  const charCount = content.replace(/\s/g, '').length
  const minutes = Math.ceil(charCount / 400) // 日本語平均読書速度 400字/分
  return `約${minutes}分`
}

// 本文から抜粋を生成
function extractExcerpt(content: string, length = 120): string {
  const plain = content
    .replace(/^#+\s.+$/gm, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\[(.+?)\]\(.+?\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim()
  return plain.length > length ? plain.slice(0, length) + '…' : plain
}

// 全レビュー一覧を取得（本文なし）
export function getAllReviews(): Review[] {
  const slugs = getAllReviewSlugs()
  const reviews = slugs
    .map((slug) => {
      const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
      const source = fs.readFileSync(filePath, 'utf-8')
      const { data, content } = matter(source)
      const frontmatter = data as ReviewFrontmatter
      if (frontmatter.draft) return null
      return {
        slug,
        frontmatter,
        readingTime: calcReadingTime(content),
        excerpt: extractExcerpt(content),
      }
    })
    .filter((r): r is Review => r !== null)

  // 公開日降順
  return reviews.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime()
  )
}

// 特定slugのレビュー詳細を取得（本文あり）
export function getReviewBySlug(slug: string): ReviewDetail | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const frontmatter = data as ReviewFrontmatter
  return {
    slug,
    frontmatter,
    readingTime: calcReadingTime(content),
    excerpt: extractExcerpt(content),
    content,
  }
}

// カテゴリ別レビューを取得
export function getReviewsByCategory(categorySlug: string): Review[] {
  return getAllReviews().filter((r) => r.frontmatter.category === categorySlug)
}

// タグ別レビューを取得
export function getReviewsByTag(tagSlug: string): Review[] {
  return getAllReviews().filter((r) => r.frontmatter.tags.includes(tagSlug))
}

// 全カテゴリを取得（記事数付き）
export function getAllCategories(): Category[] {
  const reviews = getAllReviews()
  return Object.entries(CATEGORIES).map(([slug, meta]) => ({
    slug,
    ...meta,
    count: reviews.filter((r) => r.frontmatter.category === slug).length,
  }))
}

// 全タグを取得（記事数付き）
export function getAllTags(): Tag[] {
  const reviews = getAllReviews()
  return Object.entries(TAGS).map(([slug, meta]) => ({
    slug,
    ...meta,
    count: reviews.filter((r) => r.frontmatter.tags.includes(slug)).length,
  }))
}

// 星評価を文字列に変換
export function formatRating(rating: number): string {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating)
}

// 日付フォーマット
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
