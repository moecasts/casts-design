import { useConfig } from '@casts/config-provider';
import { clsx } from 'clsx';

import { UseDropdownSectionProps } from '../types';

export const useDropdownSection = (props: UseDropdownSectionProps) => {
  const { className, style, ...rest } = props;

  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('dropdown-section');

  /* --------------------------------- classes ---------------------------------------- */
  const classes = clsx(prefixCls, className);
  const styles = style;

  const labelClasses = `${prefixCls}-label`;
  const contentClasses = `${prefixCls}-content`;

  return {
    ...rest,
    classes,
    labelClasses,
    contentClasses,
    styles,
  };
};
