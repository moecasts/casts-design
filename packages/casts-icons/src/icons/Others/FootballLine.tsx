import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FootballLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-football-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m1.67 14h-3.34l-1.38 1.897.554 1.706A8 8 0 0 0 12 20c.871 0 1.71-.14 2.496-.397l.553-1.706zm-8.376-5.128-1.292.938L4 12c0 1.73.549 3.331 1.482 4.64h1.91l1.323-1.82-1.028-3.17zm13.412 0-2.393.778-1.028 3.17 1.322 1.82h1.91A7.96 7.96 0 0 0 20 12l-.003-.19zM12 9.536l-2.344 1.702.896 2.762h2.895l.896-2.762zm2.291-5.203L13 5.273V7.79l2.694 1.957 2.24-.727.554-1.703a8 8 0 0 0-4.196-2.984m-4.583 0a8 8 0 0 0-4.195 2.985l.554 1.702 2.239.727L11 7.79V5.273z" />
    </svg>
  );
};
export { FootballLine };
