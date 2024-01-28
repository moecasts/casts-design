import { ForwardedRef, forwardRef } from 'react';

import { useCode } from './hooks';
import { CodeProps } from './types';

import './styles/code.scss';

export const Code = forwardRef(
  (props: CodeProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { classes, styles, element } = useCode(props);

    return (
      <div ref={ref} className={classes} style={styles}>
        {element}
      </div>
    );
  },
);

Code.displayName = 'Code';
