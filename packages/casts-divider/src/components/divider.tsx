import { useConfig } from '@casts/config-provider';
import { forwardRef, Ref } from 'react';
import { defaultDividerProps } from './default-props';
import { useDivider } from './hooks';
import { DividerProps } from './types';
import './styles/divider.scss';

export const Divider = forwardRef(
  (props: DividerProps, ref: Ref<HTMLDivElement>) => {
    const { getPrefixCls } = useConfig();
    const { classes, styles, getContent } = useDivider({
      ...props,
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
Divider.defaultProps = defaultDividerProps;
