# Casts Design

## Getting Started

Install dependencies,

```bash
$ pnpm i
```

Start the dev server,

```bash
$ pnpm start
```

> experimental: run `pnpm dev` to start a dev server base on vite

Build site app,

```bash
$ pnpm run build
```

> To speed up the build time, the icons package build can be ignored (except for the first time)
> `pnpm --filter=!'./packages/casts-icons' build`

install packages dependencies into root:

```
$ pnpm ts-node ./scripts/install-deps.ts -p './packages/!(casts-(cli|theme|standard))'
```

auto create index scss:

```
$ pnpm ts-node ./scripts/create-index-scss.ts -p './packages/!(casts-(cli|theme|standard))'
```
