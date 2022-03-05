# @casts/config-provider

> a config provider

[![NPM](https://img.shields.io/npm/v/@casts/config-provider.svg)](https://www.npmjs.com/package/@casts/config-provider) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @casts/config-provider
```

## Usage

```tsx
import React, { Component } from 'react';

import { ConfigProvider } from '@casts/config-provider';
import '@casts/config-provider/dist/cjs/index.css';

export const Children = () => {
  const context = useContext(ConfigContext);
  console.log(context);
  return null;
};

export default () => {
  return (
    <ConfigProvider>
      <Children />
    </ConfigProvider>
  );
};
```

## License

MIT © [Caster &lt;moecasts.caster@gmail.com&gt;](https://github.com/moecasts &lt;moecasts.caster@gmail.com&gt;)
