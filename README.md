# Casts Design

## Requirements

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)

## Getting Started

Install dependencies,

```bash
$ pnpm i
```

Build packages,

```bash
$ pnpm build
```

Start the dev server,

```bash
$ pnpm start
```

Build site app,

```bash
$ pnpm build build
```

## Create Component Package

there is a command to create a component package quickly,

```bash
$ pnpm cli
```

Otherwise, if you want to run the cli standalone,

```bash
# Install the cli
$ pnpm add @casts/cd-cli

# Run it
$ cd-cli
```

## Lint

Lint all,

```bash
$ pnpm lint
```

Lint `js, jsx, ts, tsx`,

```bash
$ pnpm lint:js

# lint and fix
$ pnpm lint:js -- --fix
```

Lint `css, scss, sass, less`:

```bash
$ pnpm lint:css

# lint and fix
$ pnpm lint:css -- --fix
```
