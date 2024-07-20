import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MoneyEuroBoxFill = (initProps: IconProps) => {
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
    `${prefixCls}-money-euro-box-fill`,
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
      <path d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Zm7.05 8a2.5 2.5 0 0 1 4.064-1.41l1.7-1.133a4.5 4.5 0 0 0-7.787 2.543H7.005v2h1.027a4.5 4.5 0 0 0 7.788 2.543l-1.701-1.134a2.5 2.5 0 0 1-4.064-1.41h4.95v-2h-4.95Z" />
    </svg>
  );
};
export { MoneyEuroBoxFill };
