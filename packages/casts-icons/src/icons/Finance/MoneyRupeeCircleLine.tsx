import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MoneyRupeeCircleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-money-rupee-circle-line`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0Zm2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-8.5-4c.328.436.563.946.675 1.5H16V11h-1.825a3.751 3.751 0 0 1-3.675 3h-.19l3.72 3.72-1.06 1.06L8 13.81V12.5h2.5c.98 0 1.813-.626 2.122-1.5H8V9.5h4.622A2.251 2.251 0 0 0 10.5 8H8V6.5h8V8h-2.5Z" />
    </svg>
  );
};
export { MoneyRupeeCircleLine };
