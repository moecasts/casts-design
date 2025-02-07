import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Drinks2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-drinks2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7.323 2H4V0h4.677l2 5H21v2h-2.118l-.827 14.059a1 1 0 0 1-.998.941H6.943a1 1 0 0 1-.998-.941L5.118 7H3V5h5.523zm-.202 5 .178 3.025c2.672.11 3.969.605 5.061 1.042 1.051.42 1.92.786 4.227.9L16.879 7z" />
    </svg>
  );
};
export { Drinks2Fill };
