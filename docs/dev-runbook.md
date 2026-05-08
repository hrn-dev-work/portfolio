# Development Runbook

このドキュメントは、ローカル開発の起動/停止手順と、初期セットアップ時のトラブル対応ログを残すためのナレッジです。

## 1) 日常の起動手順

```bash
cd ~/workspace/portfolio
npm install
npm run dev
```

起動後、通常は `http://localhost:3000` を開きます。  
`3000` が使用中の場合は、Next.js が自動で `3001` など別ポートに切り替えます。

### 3000 固定で起動したい場合

```bash
pkill -f "next dev" || true
npm run dev -- -p 3000
```

## 2) 日常の停止手順

### 方法A: フォアグラウンド実行中の停止

ターミナル上で `npm run dev` を実行している場合は、以下で停止できます。

- `Ctrl + C`

### 方法B: バックグラウンドで動いてしまった場合の停止

まず該当プロセスを確認します。

```bash
ps aux | grep "next dev"
```

停止する場合:

```bash
pkill -f "next dev"
```

ポート指定で確認したい場合:

```bash
ss -ltnp | grep 3000
ss -ltnp | grep 3001
```

## 3) WSL 再起動後のチェック

```bash
node -v
npm -v
cd ~/workspace/portfolio
npm run dev
```

`npm` が見つからない場合は、シェルを開き直したうえで再実行してください。

## 4) 今回の復旧メモ

- 状況: `node` は存在したが `npm` 実行時に `Command 'npm' not found` が発生。
- 一時対応: `pnpm` を導入し、依存関係インストールと開発サーバー起動を先行実施。
- 根本対応: `nvm` 配下の Node/npm を再インストールし、`npm` を復旧。
- 仕上げ: `node_modules` をクリーンにして `npm install` を再実行し、`npm run dev` 起動確認。

## 5) 確認コマンド

```bash
node -v
npm -v
```

期待:

- `node`: `v24.15.0`（または同等の LTS）
- `npm`: `11.x`
