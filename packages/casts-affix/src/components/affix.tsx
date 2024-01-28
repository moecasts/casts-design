import { forwardRef, useImperativeHandle } from 'react';

import { useAffix } from './hooks';
import { AffixProps } from './types';

export const Affix = forwardRef((props: AffixProps, ref) => {
  const { children } = props;

  const {
    classes,
    styles,

    affixWrapRef,
    affixRef,
  } = useAffix(props);

  useImperativeHandle(ref, () => ({}));

  return (
    <div ref={affixWrapRef}>
      <div className={classes} style={styles} ref={affixRef}>
        {children}
      </div>
    </div>
  );
});

Affix.displayName = 'Affix';
