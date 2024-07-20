import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SpaceShipLine = (initProps: IconProps) => {
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
    `${prefixCls}-space-ship-line`,
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
      <path d="M2.88 18.05A35.897 35.897 0 0 1 11.41 1.728a.8.8 0 0 1 1.178 0 35.897 35.897 0 0 1 8.531 16.32c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44.028 44.028 0 0 1-6.584-.875Zm6.697-1.123 1.158.066L12 19.523l1.265-2.53 1.157-.066a42.139 42.139 0 0 0 4.227-.455 33.914 33.914 0 0 0-6.65-12.387 33.913 33.913 0 0 0-6.648 12.387 42.14 42.14 0 0 0 4.226.455ZM12 14.995a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
};
export { SpaceShipLine };
