import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SignalWifi2Line = (initProps: IconProps) => {
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
    `${prefixCls}-signal-wifi2-line`,
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
      <path d="M12 3c4.285 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.925 17.925 0 0 1 12 3Zm0 9c-1.42 0-2.764.33-3.958.915L12 17.817l3.958-4.902A8.963 8.963 0 0 0 12 12Zm0-7c-3.027 0-5.922.842-8.42 2.392l3.179 3.935A10.95 10.95 0 0 1 12 10c1.897 0 3.683.48 5.241 1.327L20.42 7.39A15.922 15.922 0 0 0 12 5Z" />
    </svg>
  );
};
export { SignalWifi2Line };
