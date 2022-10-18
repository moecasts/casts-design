import React from 'react';
import { Paragraph } from '@casts/typography';
import '@casts/typography/dist/esm/styles.scss';

const content =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const ParagraphDemo = () => {
  return <Paragraph>{content}</Paragraph>;
};

export default ParagraphDemo;
