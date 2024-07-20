import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SpaceShipFill = (initProps: IconProps) => {
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
    `${prefixCls}-space-ship-fill`,
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
      <path d="M2.88 18.049a35.896 35.896 0 0 1 8.531-16.32.8.8 0 0 1 1.178 0 35.897 35.897 0 0 1 8.531 16.32c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44.015 44.015 0 0 1-6.584-.875ZM12 14.995a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
  );
};
export { SpaceShipFill };
