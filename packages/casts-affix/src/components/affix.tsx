import { forwardRef, useImperativeHandle } from 'react';

import { useAffix } from './hooks';
import { AffixProps } from './types';

export const Affix = forwardRef((props: AffixProps, ref) => {
  const { children } = props;

  const {
    classes,
    styles,
    wrapClasses,

    affixWrapRef,
    affixRef,
  } = useAffix(props);

  useImperativeHandle(ref, () => ({}));

  return (
    <div ref={affixWrapRef} className={wrapClasses}>
      <div className={classes} style={styles} ref={affixRef}>
        {children}
      </div>
    </div>
  );
});

Affix.displayName = 'Affix';
