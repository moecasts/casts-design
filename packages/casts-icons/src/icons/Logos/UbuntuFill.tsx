import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const UbuntuFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ubuntu-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M22.001 12c0 5.522-4.477 10-10 10s-10-4.478-10-10c0-5.523 4.477-10 10-10s10 4.477 10 10Zm-16.8-1.336a1.335 1.335 0 1 0 0 2.67 1.335 1.335 0 0 0 0-2.67Zm9.533 6.069a1.334 1.334 0 1 0 1.334 2.31 1.334 1.334 0 0 0-1.334-2.31ZM8.1 12c0-1.32.656-2.485 1.659-3.19l-.977-1.636a5.813 5.813 0 0 0-2.398 3.371 1.875 1.875 0 0 1 0 2.91 5.812 5.812 0 0 0 2.398 3.371l.977-1.636A3.892 3.892 0 0 1 8.1 12Zm3.9-3.9a3.9 3.9 0 0 1 3.884 3.554l1.903-.028a5.781 5.781 0 0 0-1.724-3.762 1.872 1.872 0 0 1-2.513-1.454 5.829 5.829 0 0 0-4.12.39l.927 1.663a3.885 3.885 0 0 1 1.643-.363Zm0 7.8c-.587 0-1.143-.13-1.643-.363l-.927 1.662a5.774 5.774 0 0 0 4.12.39 1.872 1.872 0 0 1 2.514-1.454 5.782 5.782 0 0 0 1.723-3.762l-1.903-.027A3.898 3.898 0 0 1 12 15.9Zm2.732-8.633a1.335 1.335 0 1 0 1.335-2.312 1.335 1.335 0 0 0-1.335 2.312Z" />
    </svg>
  );
};
export { UbuntuFill };
