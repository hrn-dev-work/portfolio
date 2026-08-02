# 環境・ツールチェーンのバージョン一覧

**目的:** AI エージェントへのコンテキスト、オンボーディング。  
**最終確認日:** 2026-08-02（WSL2）

## 実行環境（ローカル）

| 項目 | バージョン |
|------|------------|
| OS | WSL2 Ubuntu |
| Node.js | v24.x（LTS 相当） |
| npm | 11.x |

```bash
node -v && npm -v
```

## 主要 npm（このリポ）

| パッケージ | 用途 |
|------------|------|
| `next` | App Router サイト |
| `next-intl` | `ja` / `en` |
| `react` / `react-dom` | UI |
| `tailwindcss` | スタイル |
| `lucide-react` | アイコン |
| `typescript` | 型 |

正確な版は `package-lock.json` を参照。

## ホスト

- 本番: [https://portfolio-teal-ten-31.vercel.app/](https://portfolio-teal-ten-31.vercel.app/)（`main` push でデプロイ）

## 分離済み

- **TaxPort**（確定申告）: `~/workspace/taxport` — DB / Prisma はそちら。本リポに Prisma は含めない。
