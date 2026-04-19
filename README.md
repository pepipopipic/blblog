# BLログ — BL漫画レビューブログ

個人的なBL漫画レビューを記録するブログサイトです。

## 技術スタック

| 項目 | 内容 |
|------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS |
| 記事フォーマット | MDX (`.mdx`) |
| 生成方式 | 静的生成 (SSG / `output: 'export'`) |

## ディレクトリ構成

```
bl-review-blog/
├── content/
│   └── reviews/          # レビュー記事（.mdx）
├── src/
│   ├── app/              # App Router ページ
│   │   ├── page.tsx                  # トップページ
│   │   ├── reviews/
│   │   │   ├── page.tsx              # レビュー一覧
│   │   │   └── [slug]/page.tsx       # レビュー詳細
│   │   ├── categories/
│   │   │   ├── page.tsx              # カテゴリ一覧
│   │   │   └── [slug]/page.tsx       # カテゴリ詳細
│   │   ├── tags/
│   │   │   ├── page.tsx              # タグ一覧
│   │   │   └── [slug]/page.tsx       # タグ詳細
│   │   ├── profile/page.tsx          # プロフィール
│   │   └── about/page.tsx            # About
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── ReviewCard.tsx
│   │       └── RatingStars.tsx
│   ├── lib/
│   │   └── reviews.ts    # 記事読み込みユーティリティ
│   └── types/
│       └── index.ts      # TypeScript型定義・マスターデータ
└── README.md
```

## セットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバー起動
npm run dev
# → http://localhost:3000

# 本番ビルド（静的HTML生成）
npm run build
# → /out ディレクトリに出力
```

## レビュー記事の書き方

`content/reviews/` に `.mdx` ファイルを追加します。

### ファイル名

URLのスラッグになります。例: `my-review.mdx` → `/reviews/my-review`

### フロントマター

```yaml
---
title: "作品タイトル"
description: "一行説明（カード・OGPに使用）"
author: "管理人名"
publishedAt: "2025-01-01"        # 公開日（必須）
updatedAt: "2025-01-10"          # 更新日（任意）
category: "school"               # カテゴリスラッグ（下記参照）
tags: ["classmates", "amamai"]   # タグスラッグ（複数可）
rating: 5                        # 1〜5の整数
draft: false                     # true にすると非公開
---
```

### 使用できるカテゴリ

| スラッグ | ラベル |
|---------|--------|
| `school` | 学園 |
| `office` | オフィス |
| `fantasy` | ファンタジー |
| `omegaverse` | オメガバース |
| `entertainment` | 芸能界 |
| `underworld` | 裏社会 |
| `reunion` | 再会 |
| `short-stories` | 短編集 |
| `series` | シリーズ |
| `beginner` | 初心者おすすめ |

### 使用できるタグ

| スラッグ | ラベル |
|---------|--------|
| `younger-seme` | 年下攻め |
| `older-seme` | 年上攻め |
| `wanko-seme` | わんこ攻め |
| `beauty-uke` | 美形受け |
| `kenage-uke` | けなげ受け |
| `setsunai` | 切ない |
| `amamai` | 甘甘 |
| `heavy-love` | 重め |
| `shuchaku` | 執着 |
| `reunion` | 再会もの |
| `misunderstanding` | すれ違い |
| `classmates` | 同級生 |
| `boss-subordinate` | 上司×部下 |
| `happy-end` | ハッピーエンド |
| `caution` | 閲覧注意 |

## Phase 2 以降の予定

- [ ] モバイルメニュー実装
- [ ] 検索機能
- [ ] OGP / Twitter Card 対応
- [ ] サイトマップ自動生成
- [ ] デザインの細かい作り込み
- [ ] Google Analytics 導入

## Phase 3 以降の予定

- [ ] お気に入り機能（ローカルストレージ）
- [ ] 関連レビュー表示
- [ ] RSS フィード
- [ ] お問い合わせフォーム
