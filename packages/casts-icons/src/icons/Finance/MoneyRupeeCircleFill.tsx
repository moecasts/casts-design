import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MoneyRupeeCircleFill = (initProps: IconProps) => {
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
    `${prefixCls}-money-rupee-circle-fill`,
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
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10m1.5-14c.328.436.563.946.675 1.5H16V11h-1.825a3.75 3.75 0 0 1-3.675 3h-.19l3.72 3.72-1.06 1.06L8 13.81V12.5h2.5c.98 0 1.813-.626 2.122-1.5H8V9.5h4.622A2.25 2.25 0 0 0 10.5 8H8V6.5h8V8z" />
    </svg>
  );
};
export { MoneyRupeeCircleFill };
