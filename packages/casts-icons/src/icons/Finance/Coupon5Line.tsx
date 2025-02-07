import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Coupon5Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-coupon5-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.005 14v7a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1v-7a2 2 0 1 0 0-4V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 1 0 0 4m-2 1.465a4 4 0 0 1-2-3.465c0-1.48.804-2.773 2-3.465V4h-14v4.535c1.195.692 2 1.984 2 3.465s-.805 2.773-2 3.465V20h14zM9.005 6h6v2h-6zm0 10h6v2h-6z" />
    </svg>
  );
};
export { Coupon5Line };
