import { forwardRef, Ref, useMemo } from 'react';

import { useDropdownMenu } from './hooks';
import { DropdownMenuProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const DropdownMenu = forwardRef(
  (props: DropdownMenuProps, ref: Ref<HTMLUListElement>) => {
    const { classes, styles, renderOptions } = useDropdownMenu(props);

    const options = useMemo(
      () => renderOptions(props.children),
      [props.children, renderOptions],
    );

    return (
      <ul className={classes} style={styles} ref={ref}>
        {options}
      </ul>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';
