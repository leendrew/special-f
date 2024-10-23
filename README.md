# Special for ?

Create a simple congratulations and share it immediately

[Deployed](https://special-f.pages.dev)

## Features

- Basic features for each section:
  - Change sections with fade in and fade out effect
  - Change single word in section with multiple values
  - Text typing effect
- ~~Sections builder~~
- ~~Own url shortener~~
- ~~Managing created urls~~

## Stack

- Vue 3
- Tailwind CSS
- VueUse Core, VueUse Motion

## Installation

### dev

```bash
cp .env.example .env.local
pnpm i
pnpm dev
```

### prod

```bash
cp .env.example .env.production
pnpm i --frozen-lockfile
pnpm build && pnpm preview
```

## How it Works

- All data for each section is in tuples (to reduce numbers of characters)
- Raw utf-8 string converts into binary data (ArrayBuffer)
- Binary data is compressed using Web API DecompressionStream (deflate-raw algorithm)
- Compressed binary data converts into base64 string
  | Flow | Lathin Length, characters | Diff with raw utf-8 string, % | Cyrillic Length, characters | Diff with raw utf-8 string, % |
  | :- | :- | :- | :- | :- |
  | utf-8 string | 282 | 0 | 282 | 0 |
  | utf-8 string -> base64 string | 472 | 67.38 | 652 | 131.21 |
  | utf-8 string -> bytes array -> compress (gzip) -> base64 string | 224 | -20.57 | 316 | 12.06 |
  | utf-8 string -> bytes array -> compress (deflate) -> base64 string | 208 | -26.24 | 300 | 6.38 |
  | utf-8 string -> bytes array -> compress (deflate-raw) -> base64 string | 200 | -29.08 | 292 | 3.55 |
- In hash page everything happens in reverse order: base64 string -> decompress (deflate-raw) -> utf-8 string
