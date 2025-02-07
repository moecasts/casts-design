import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PinDistanceFill = (initProps: IconProps) => {
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
    `${prefixCls}-pin-distance-fill`,
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
      <path d="M11.39 10.39 7.5 14.277 3.61 10.39a5.5 5.5 0 1 1 7.78 0M7.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4m12.89 10.89-3.89 3.888-3.89-3.889a5.5 5.5 0 1 1 7.78 0M16.5 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { PinDistanceFill };
