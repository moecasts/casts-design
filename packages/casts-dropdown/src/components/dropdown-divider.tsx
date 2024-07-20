import { Divider } from '@casts/divider';

import { useDropdownDivider } from './hooks';
import { DropdownProps } from './types';

import './styles/dropdown.scss';

export const DropdownDivider = (props: DropdownProps) => {
  const { classes, styles, ...rest } = useDropdownDivider(props);
  return (
    <Divider layout="horizontal" {...rest} className={classes} style={styles} />
  );
};

DropdownDivider.displayName = 'DropdownDivider';
