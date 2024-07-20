// @ts-ignore example should import React
import React from 'react';
import { Text } from '@casts/typography';

import '@casts/typography/dist/esm/styles.scss';

const TextDemo = () => {
  return (
    <section className="docs-section--typography">
      <Text variant="hero">hero text</Text>
      <br />
      <Text>span text</Text>
      <br />
      <Text mark>mark text</Text>
      <br />
      <Text underline>underline text</Text>
      <br />
      <Text delete>delete text</Text>
      <br />
      <Text strong>strong text</Text>
      <br />
      <Text code>code text</Text>
      <br />
      <Text keyboard>keyboard text</Text>
      <br />
      <Text italic>italic text</Text>
      <br />
      <Text variant="subtitle">subtitle text</Text>
      <br />
      <Text variant="caption">caption text</Text>
      <br />
    </section>
  );
};

export default TextDemo;
