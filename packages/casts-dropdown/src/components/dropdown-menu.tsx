import { forwardRef, Ref } from 'react';
import { Popup } from '@casts/popup';

import { useDropdownMenu } from './hooks';
import { DropdownProps } from './types';

import '@casts/theme/styles/scss/core.scss';
import './styles/dropdown.scss';

export const DropdownMenu = forwardRef(
  (props: DropdownProps, ref: Ref<HTMLUListElement>) => {
    const { classes, styles, children, options } = useDropdownMenu(props);

    console.log('options', options);
    return (
      <Popup
        content={
          <ul className={classes} style={styles} ref={ref}>
            {options}
          </ul>
        }
      >
        {children}
      </Popup>
    );
  },
);

DropdownMenu.displayName = 'DropdownMenu';
