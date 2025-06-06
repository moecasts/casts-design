import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DriveLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-drive-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M9.097 6.15 4.31 14.443l1.755 3.032 4.785-8.289zm-1.3 12.324h9.568l1.751-3.034H9.55zm11.314-5.034-4.786-8.29H10.83l4.787 8.29zM8.52 3.15h6.96L22 14.444l-3.48 6.03H5.49L2 14.444zm3.485 8.036-1.302 2.254h2.603z" />
    </svg>
  );
};
export { DriveLine };
