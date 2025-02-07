import { FC } from 'react';
import { BaseComponentProps } from '@casts/common';

import { DocBanner } from '../doc-features/doc-banner';
import { SiteContent } from './content';

export const ComponentDoc: FC<BaseComponentProps> = (props) => {
  // eslint-disable-next-line no-empty-pattern
  const {} = props;

  return (
    <>
      <DocBanner />
      <SiteContent />
    </>
  );
};
