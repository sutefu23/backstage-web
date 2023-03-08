corepackに移行してyarnとpnpmを入れる
```
$ npm uninstall -g yarn pnpm
$ npm i -g corepack

$ corepack enable yarn pnpm
```

[pnpmについて](https://zenn.dev/hibikine/articles/27621a7f95e761)

- install
  - pnpm i xxxx
  - pnpm add xxx
  - pnpm install xxxx
- install dev
  - pnpm add -D xxxx
  - pnpm install --development xxxxx
- uninstall
  - pnpm uninstall xxxx
- run scripts
  - pnpm run build
- exec package
  - pnpx xxxx

## 開発用コマンド

### css (PostCSS)

> pnpm run dev

### js (TypeScript)

> pnpm run watch

or

> pnpm tsc

## 表示確認
VS Codeに[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)をインストールして、右下に出てくるGo Liveをクリックしてください。

## スライダー設定
https://ja.splidejs.com/guides/options/