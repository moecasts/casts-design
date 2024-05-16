import { forwardRef, Ref } from 'react';

import { useDropdownMenu } from './hooks';
import { DropdownProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const DropdownMenu = forwardRef(
  (props: DropdownProps, ref: Ref<HTMLUListElement>) => {
    const { classes, styles, options } = useDropdownMenu(props);

    return (
      <ul className={classes} style={styles} ref={ref}>
        {options}
      </ul>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';
