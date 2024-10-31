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
      <path d="M2.88 18.05A35.9 35.9 0 0 1 11.41 1.728a.8.8 0 0 1 1.178 0q.25.27.412.456a35.9 35.9 0 0 1 8.119 15.864c-2.141.451-4.34.747-6.584.875L12.447 23.1a.5.5 0 0 1-.894 0l-2.089-4.177a44 44 0 0 1-6.584-.875m6.697-1.123 1.158.066L12 19.523l1.265-2.53 1.157-.066a42 42 0 0 0 4.227-.455 33.9 33.9 0 0 0-6.65-12.387 33.9 33.9 0 0 0-6.648 12.387 42 42 0 0 0 4.226.455M12 14.995a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  );
};
export { SpaceShipLine };
