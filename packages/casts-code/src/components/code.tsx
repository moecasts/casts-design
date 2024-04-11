import { ForwardedRef, forwardRef } from 'react';
import { useDefaultProps } from '@casts/common';

import { defaultCodeProps } from './default-props';
import { useCode } from './hooks';
import { CodeProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/code.scss';

export const Code = forwardRef(
  (props: CodeProps, ref: ForwardedRef<HTMLDivElement>) => {
    const propsWithDefault = useDefaultProps(props, defaultCodeProps);

    const { classes, styles, element } = useCode(propsWithDefault);

    return (
      <div ref={ref} className={classes} style={styles}>
        {element}
      </div>
    );
  },
);

Code.displayName = 'Code';
