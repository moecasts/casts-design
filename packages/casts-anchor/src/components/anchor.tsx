import { FC, ReactNode } from 'react';
import { log } from '@casts/common';

import { AnchorProvider } from './anchor-context';
import { AnchorLink } from './anchor-link';
import { useAnchor } from './hooks';
import { AnchorLinkProps, AnchorProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/anchor.scss';

const _Anchor: FC<AnchorProps> = (props) => {
  const { items, direction } = props;

  const { classes, cursorClasses, wrapRef, cursorRef } = useAnchor(props);

  const getAnchorLinks = (items?: Partial<AnchorLinkProps>[]) => {
    const anchors = items?.map((item, index) => {
      let children: ReactNode[] | undefined = undefined;
      if (direction === 'horizontal') {
        log.warn(
          'AnchorLink children` is not supported when `Anchor` direction is horizontal',
        );
      } else {
        children = getAnchorLinks(
          item.children as Partial<AnchorLinkProps>[] | undefined,
        );
      }
      return (
        <AnchorLink title={item.title} href={item.href} key={index}>
          {children}
        </AnchorLink>
      );
    });

    return anchors;
  };

  const anchorLinks = getAnchorLinks(items);

  return (
    <ul className={classes} ref={wrapRef}>
      <span className={cursorClasses} ref={cursorRef}></span>
      {anchorLinks}
    </ul>
  );
};

export const Anchor: FC<AnchorProps> = (props: any) => (
  <AnchorProvider {...props}>
    <_Anchor {...props} />
  </AnchorProvider>
);
