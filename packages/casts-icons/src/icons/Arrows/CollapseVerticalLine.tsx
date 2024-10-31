import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CollapseVerticalLine = (initProps: IconProps) => {
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
    `${prefixCls}-collapse-vertical-line`,
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
      <path d="m12 13.5 4.95 4.95-1.415 1.413-2.536-2.535V23h-2v-5.672L8.467 19.86l-1.414-1.414zM11 1v5.67L8.465 4.135 7.05 5.55 12 10.5l4.95-4.95-1.414-1.414L13 6.672V1z" />
    </svg>
  );
};
export { CollapseVerticalLine };
