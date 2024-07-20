import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WirelessChargingLine = (initProps: IconProps) => {
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
    `${prefixCls}-wireless-charging-line`,
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
      <path d="m3.929 4.929 1.414 1.414A7.975 7.975 0 0 0 3 12c0 2.21.895 4.21 2.343 5.657L3.93 19.07A9.969 9.969 0 0 1 1 12.001a9.969 9.969 0 0 1 2.929-7.072Zm16.142 0A9.968 9.968 0 0 1 23 12a9.968 9.968 0 0 1-2.929 7.071l-1.414-1.414A7.975 7.975 0 0 0 21 12a7.975 7.975 0 0 0-2.342-5.656L20.07 4.93ZM13 5v6h3l-5 8v-6H8l5-8ZM6.757 7.757l1.415 1.415A3.987 3.987 0 0 0 7 12c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.981 5.981 0 0 1 5 12c0-1.657.672-3.157 1.757-4.243Zm10.487.001A5.981 5.981 0 0 1 19 12a5.981 5.981 0 0 1-1.757 4.243l-1.415-1.414A3.987 3.987 0 0 0 17 12a3.987 3.987 0 0 0-1.17-2.827l1.414-1.415Z" />
    </svg>
  );
};
export { WirelessChargingLine };
