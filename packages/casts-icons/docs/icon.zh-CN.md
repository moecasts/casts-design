---
title: Icon 图标
group:
  title: 通用
nav:
  title: 组件
  path: /components
---

# Icon

<!-- ```tsx
import React from 'react';
import { AncientGateLine } from '@casts/icons';
import '@casts/icons/dist/esm/index.css';

export default () => {
  return (
    <>
      <AncientGateLine />
    </>
  );
};
``` -->

## Line

```tsx
import React from 'react';
import * as icons from '@casts/icons';
// import '@casts/icons/dist/esm/index.css';

const groupedIcons = {
  line: {},
  fill: {},
};

Object.keys(icons).forEach((name) => {
  if (/Fill$/i.test(name)) {
    return (groupedIcons.fill[name] = icons[name]);
  }

  if (/Line$/i.test(name)) {
    return (groupedIcons.line[name] = icons[name]);
  }
});

const pick = (object, keys) =>
  keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});

export default () => {
  const innerIcons = pick(groupedIcons, ['line']);
  return (
    <>
      {Object.keys(innerIcons).map((cat) => (
        <div className="casts-icons-section" key={cat}>
          {/* <div className="casts-icons-section-title">{cat.toUpperCase()}</div> */}
          <div className="casts-icons-section-content">
            {Object.keys(innerIcons[cat]).map((iconName) => {
              const IconComponent = innerIcons[cat][iconName];
              return (
                <div className="casts-icon-wrapper" key={iconName}>
                  <IconComponent size="36px" />
                  {/* <span className="casts-icon-name">{iconName}</span> */}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};
```

## Fill

```tsx
import React from 'react';
import * as icons from '@casts/icons';
// import '@casts/icons/dist/esm/index.css';

const groupedIcons = {
  line: {},
  fill: {},
};

Object.keys(icons).forEach((name) => {
  if (/Fill$/i.test(name)) {
    return (groupedIcons.fill[name] = icons[name]);
  }

  if (/Line$/i.test(name)) {
    return (groupedIcons.line[name] = icons[name]);
  }
});

const pick = (object, keys) =>
  keys.reduce((obj, key) => {
    if (object && object.hasOwnProperty(key)) {
      obj[key] = object[key];
    }
    return obj;
  }, {});

export default () => {
  const innerIcons = pick(groupedIcons, ['fill']);
  return (
    <>
      {Object.keys(innerIcons).map((cat) => (
        <div className="casts-icons-section" key={cat}>
          {/* <div className="casts-icons-section-title">{cat.toUpperCase()}</div> */}
          <div className="casts-icons-section-content">
            {Object.keys(innerIcons[cat]).map((iconName) => {
              const IconComponent = innerIcons[cat][iconName];
              return (
                <div className="casts-icon-wrapper" key={iconName}>
                  <IconComponent size="36px" />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};
```
