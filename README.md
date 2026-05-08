# HRN Digital Business Card

Next.js (App Router) + TypeScript + Tailwind CSS で構築した、公開用のデジタル名刺サイトです。  
バックエンドエンジニアとしての経歴、スキル、主要プロジェクト、連絡先を1ページで確認できます。

## Main Contents

- Hero（名前・肩書き・プロフィール画像・資格）
- Skills（言語 / フロントエンド / バックエンド / インフラ）
- Projects（主要案件の抜粋）
- Career（2019年から現在までの職務経歴）
- Contact（メール・GitHub・問い合わせ導線）

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Run Locally

```bash
npm install
npm run dev
```

Open: `http://localhost:3000`

## Deployment

このプロジェクトは [Vercel](https://vercel.com/) へのデプロイを想定しています。

```bash
npm run build
npm run start
```

### Vercel 公開手順（推奨）

1. GitHub リポジトリを作成してこのプロジェクトを push
2. Vercel で `Add New Project` から該当リポジトリを Import
3. Framework は `Next.js` を選択（通常は自動検出）
4. 必要に応じて環境変数を設定
   - `NEXT_PUBLIC_SITE_URL` = 公開URL（例: `https://your-domain.vercel.app`）
5. `Deploy` を実行

初回公開後は、push ごとに自動デプロイされます。

### 公開前チェック

- `src/app/page.tsx` の連絡先情報（Email / GitHub）を最新化
- `src/app/layout.tsx` のメタ情報（title / description）を確認
- 画像アセット（`public/profile-cat.png`）が反映されているか確認

## Maintenance Notes

- ローカル運用メモ: `docs/dev-runbook.md`
