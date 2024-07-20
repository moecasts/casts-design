import { FC } from 'react';
import { Button } from '@casts/button';
import { BaseComponentProps } from '@casts/common';
import { ExternalLinkLine } from '@casts/icons';

export type ExternalLinkProps = BaseComponentProps;

export const ExternalLink: FC<ExternalLinkProps> = () => {
  return (
    <Button
      variant="text"
      theme="neutral"
      icon={<ExternalLinkLine />}
      target="_blank"
      href="#"
    ></Button>
  );
};
