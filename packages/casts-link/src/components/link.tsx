import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';

import { defaultLinkProps } from './default-props';
import { useLink } from './hooks';
import { LinkProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/link.scss';

export const Link = forwardRef(
  (props: LinkProps, ref: Ref<HTMLAnchorElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultLinkProps);

    const { classes, styles, children, href, ...rest } =
      useLink(propsWithDefault);

    return (
      <a className={classes} style={styles} href={href} ref={ref} {...rest}>
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';
