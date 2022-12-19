import { forwardRef, Ref } from 'react';
import { useConfig } from '@casts/config-provider';
import { useContent } from './hooks';
import type { ContentProps } from './types';
import './styles/content.scss';

export const Content = forwardRef(
  (props: ContentProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const { classes, children, ...rest } = useContent({
      ...props,
      getPrefixCls,
    });

    return (
      <main className={classes} ref={ref} {...rest}>
        {children}
      </main>
    );
  },
);

Content.displayName = 'Layout.Content';
