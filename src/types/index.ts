// レビュー記事のフロントマター型
export type ReviewFrontmatter = {
  title: string
  description: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  rating: number // 1〜5
  coverImage?: string
  series?: string
  volume?: number
  draft?: boolean
}

// レビュー記事の完全な型（フロントマター + メタ情報）
export type Review = {
  slug: string
  frontmatter: ReviewFrontmatter
  readingTime: string
  excerpt: string
}

// レビュー詳細（本文含む）
export type ReviewDetail = Review & {
  content: string
}

// カテゴリの型
export type Category = {
  slug: string
  label: string
  description: string
  count?: number
}

// タグの型
export type Tag = {
  slug: string
  label: string
  count?: number
}

// カテゴリマスターデータ
export const CATEGORIES: Record<string, Omit<Category, 'slug' | 'count'>> = {
  school: {
    label: '学園',
    description: '学校を舞台にした青春BL。制服・部活・文化祭など胸キュン設定が満載。',
  },
  office: {
    label: 'オフィス',
    description: '職場を舞台にした大人のBL。上司と部下、同期など社会人ならではのリアルな関係性。',
  },
  fantasy: {
    label: 'ファンタジー',
    description: '異世界・魔法・剣と魔法の世界観で繰り広げられるBL。壮大なスケールの恋愛譚。',
  },
  omegaverse: {
    label: 'オメガバース',
    description: 'αβΩの世界観を使ったBL。本能と感情の葛藤が描かれる濃厚な設定。',
  },
  entertainment: {
    label: '芸能界',
    description: '俳優・アイドル・モデルなど華やかな世界を舞台にしたBL。',
  },
  underworld: {
    label: '裏社会',
    description: 'ヤクザ・マフィア・裏稼業など危険な世界のBL。緊迫感とロマンスの融合。',
  },
  reunion: {
    label: '再会',
    description: '昔の恋人や幼馴染との再会から始まる恋愛BL。切なさと懐かしさが交差する。',
  },
  'short-stories': {
    label: '短編集',
    description: '読み切りや短編を集めたBL作品集。隙間時間にさくっと読めるのが魅力。',
  },
  series: {
    label: 'シリーズ',
    description: '複数巻にわたって展開する長編BL。じっくりキャラクターの成長と恋愛を楽しめる。',
  },
  beginner: {
    label: '初心者おすすめ',
    description: 'BL初心者が読みやすい作品を厳選。ここから始めると沼にはまること間違いなし。',
  },
}

// タグマスターデータ
export const TAGS: Record<string, Omit<Tag, 'slug' | 'count'>> = {
  'younger-seme': { label: '年下攻め' },
  'older-seme': { label: '年上攻め' },
  'wanko-seme': { label: 'わんこ攻め' },
  'beauty-uke': { label: '美形受け' },
  'kenage-uke': { label: 'けなげ受け' },
  setsunai: { label: '切ない' },
  amamai: { label: '甘甘' },
  'heavy-love': { label: '重め' },
  shuchaku: { label: '執着' },
  reunion: { label: '再会もの' },
  misunderstanding: { label: 'すれ違い' },
  classmates: { label: '同級生' },
  'boss-subordinate': { label: '上司×部下' },
  'happy-end': { label: 'ハッピーエンド' },
  caution: { label: '閲覧注意' },
}
