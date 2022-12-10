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
