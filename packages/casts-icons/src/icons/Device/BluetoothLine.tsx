import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BluetoothLine = (initProps: IconProps) => {
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
    `${prefixCls}-bluetooth-line`,
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
      <path d="m14.312 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.414-1.415 5.778-5.778v-.97L5.22 5.737l1.414-1.415 4.364 4.364V2h2l5.657 5.657L14.312 12Zm-1.314 1.515v5.657l2.828-2.829-2.828-2.828Zm0-3.03 2.828-2.828-2.828-2.829v5.657Z" />
    </svg>
  );
};
export { BluetoothLine };
