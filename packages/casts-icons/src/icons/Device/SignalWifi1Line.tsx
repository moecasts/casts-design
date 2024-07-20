import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SignalWifi1Line = (initProps: IconProps) => {
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
    `${prefixCls}-signal-wifi1-line`,
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
      <path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.925 17.925 0 0 1 12 3Zm0 12c-.693 0-1.367.117-2 .34l2 2.477 2-2.477a6.066 6.066 0 0 0-2-.34Zm0-10c-3.027 0-5.922.842-8.42 2.392l5.109 6.324A7.971 7.971 0 0 1 12 13c1.18 0 2.302.256 3.311.716L20.42 7.39A15.922 15.922 0 0 0 12 5Z" />
    </svg>
  );
};
export { SignalWifi1Line };
