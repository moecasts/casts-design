import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SignalWifiOffFill = (initProps: IconProps) => {
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
    `${prefixCls}-signal-wifi-off-fill`,
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
      <path d="m2.808 1.393 17.678 17.678-1.414 1.414-3.683-3.683L12 21 .69 6.997c.914-.74 1.902-1.391 2.951-1.942L1.394 2.808zM12.001 3c4.284 0 8.219 1.497 11.31 3.996l-5.407 6.693L7.725 3.511C9.095 3.177 10.527 3 12.001 3" />
    </svg>
  );
};
export { SignalWifiOffFill };
