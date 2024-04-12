import { forwardRef, Ref } from 'react';
import { useDefaultProps } from '@casts/common';
import { useConfig } from '@casts/config-provider';

import { defaultDividerProps } from './default-props';
import { useDivider } from './hooks';
import { DividerProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/divider.scss';

export const Divider = forwardRef(
  (props: DividerProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const propsWithDefault = useDefaultProps(props, defaultDividerProps);

    const { classes, styles, getContent } = useDivider({
      ...propsWithDefault,
      getPrefixCls,
    });

    return (
      <div className={classes} ref={ref} style={styles}>
        {getContent()}
      </div>
    );
  },
);

Divider.displayName = 'Divider';
