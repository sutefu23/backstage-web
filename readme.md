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
