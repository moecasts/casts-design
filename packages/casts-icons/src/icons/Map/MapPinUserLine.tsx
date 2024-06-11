import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MapPinUserLine = (initProps: IconProps) => {
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
    `${prefixCls}-map-pin-user-line`,
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
      <path d="M17.084 15.812a7 7 0 1 0-10.168 0A5.996 5.996 0 0 1 12 13a5.996 5.996 0 0 1 5.084 2.812Zm-8.699 1.473L12 20.899l3.615-3.614a4 4 0 0 0-7.23 0ZM12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728ZM12 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 2a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
};
export { MapPinUserLine };
