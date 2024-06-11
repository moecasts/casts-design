// @ts-ignore example should import React
import React from 'react';
import { Heading } from '@casts/typography';

import '@casts/typography/dist/esm/styles.scss';

const HeadingDemo = () => {
  return (
    <section>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </section>
  );
};

export default HeadingDemo;
