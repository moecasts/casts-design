import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FootballFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-football-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2Zm1.67 14h-3.34l-1.38 1.897.554 1.706A7.993 7.993 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706L13.669 16Zm-8.376-5.128-1.292.938L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17-2.393-.778Zm13.412 0-2.393.778-1.028 3.17 1.322 1.82h1.91A7.963 7.963 0 0 0 20 12l-.003-.191-1.291-.937ZM14.29 4.333 13 5.273V7.79l2.694 1.957 2.24-.727.554-1.703a8.014 8.014 0 0 0-4.196-2.984Zm-4.582 0a8.014 8.014 0 0 0-4.196 2.985l.554 1.702 2.239.727L11 7.79V5.273l-1.291-.94Z" />
    </svg>
  );
};
export { FootballFill };
