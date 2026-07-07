# myitems-skeleton

前期JavaScript演習「自分のアイテム紹介アプリ（Myshop）」の教員配布スケルトンです。
Vite + React + React Router で組んだ土台に、あなたの私物の写真とJSONデータを流し込んで完成させます。

## セットアップ

```bash
npm install
npm run dev
```

`http://localhost:5173` にサンプルデータのままの一覧が表示されれば準備完了です。

## 提出フロー

1. このリポジトリを自分のGitHubアカウントにForkする（このForkがあなた自身のリポジトリになります）
2. GitHub Desktopでcloneする（ブランチは `main` のまま作業）
3. `public/items.json` と `public/images/` を自分のデータに差し替える
4. `main` ブランチにそのままcommit → 自分のForkにpush
5. 最終回にVercelなどでこのForkからそのままデプロイし、公開URLを共有

## ディレクトリ構成

```
myitems-skeleton/
├── public/
│   ├── items.json        ← 差し替え対象
│   └── images/           ← 写真を配置
├── src/
│   ├── App.jsx           ← BrowserRouter + Routes
│   ├── main.jsx          ← Reactエントリ
│   ├── index.css         ← CSS変数＋グローバルスタイル
│   ├── components/
│   │   ├── Header.jsx    ← ロゴ・ナビ・カートアイコン
│   │   ├── Footer.jsx    ← SNSリンク・copyright
│   │   └── ItemCard.jsx  ← 1アイテムの見た目
│   └── pages/
│       ├── Home.jsx      ← 一覧＋「more」ボタン
│       ├── About.jsx     ← ショップ紹介の雛形
│       ├── Favorites.jsx ← 空（次回実装）
│       └── Cart.jsx      ← 空（次回実装）
├── package.json
└── vite.config.js
```

## items.json のスキーマ

| キー | 型 | 内容 |
| --- | --- | --- |
| `id` | string | 一意なID（`"001"` から連番） |
| `name` | string | 商品名 |
| `image` | string | `/images/item-XX.jpg` のパス |
| `price` | number | 価格（円） |
| `category` | string | カテゴリ |
| `description` | string | 一言説明 |
| `status` | string | `"onsale"` または `"soldout"` |

## カスタマイズポイント

- `src/index.css` の `:root` にあるCSS変数（色・フォント・幅）
- `src/components/Header.jsx` のショップ名（`Myshop` を書き換え）
- `src/components/Footer.jsx` のSNSリンク先
