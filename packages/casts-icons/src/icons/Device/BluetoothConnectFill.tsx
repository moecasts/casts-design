import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BluetoothConnectFill = (initProps: IconProps) => {
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
    `${prefixCls}-bluetooth-connect-fill`,
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
      <path d="m14.311 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.415-1.415 5.779-5.778v-.97L5.219 5.737l1.415-1.415 4.364 4.364V2h2l5.656 5.657L14.311 12Zm-1.313 1.515v5.657l2.828-2.829-2.828-2.828Zm0-3.03 2.828-2.828-2.828-2.829v5.657ZM19.5 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm-13 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
    </svg>
  );
};
export { BluetoothConnectFill };
