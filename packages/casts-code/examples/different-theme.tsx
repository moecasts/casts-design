// @ts-ignore example should import React
import React from 'react';
import { Code } from '@casts/code';
import { Space } from '@casts/space';

export const source = `import map from 'map.js';
import basePickBy from './.internal/basePickBy.js';
import getAllKeysIn from './.internal/getAllKeysIn.js';

/**
 * Creates an object composed of the \`object\` properties \`predicate\` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 */
function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  const props = map(getAllKeysIn(object), prop => [prop]);
  return basePickBy(object, props, (value, path) => predicate(value, path[0]));
}

export default pickBy;
`;

export const CodeDifferentThemeDemo = () => {
  return (
    <Space className="demo-full" direction="vertical">
      <Code theme="dracula" language="tsx" source={source} />
      <Code theme="duotoneLight" language="tsx" source={source} />
    </Space>
  );
};

export default CodeDifferentThemeDemo;
