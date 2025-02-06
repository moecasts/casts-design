import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const LogoutCircleLine = (initProps: IconProps) => {
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
    `${prefixCls}-logout-circle-line`,
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
      <path d="M5 11h8v2H5v3l-5-4 5-4zm-1 7h2.708a8 8 0 1 0 0-12H4A9.99 9.99 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.99 9.99 0 0 1-8-4" />
    </svg>
  );
};
export { LogoutCircleLine };
