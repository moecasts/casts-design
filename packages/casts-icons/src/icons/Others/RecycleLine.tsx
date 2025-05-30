import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const RecycleLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-recycle-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m19.56 12.098 1.532 2.652A3.5 3.5 0 0 1 18.061 20h-2.062v2.5l-5-3.5 5-3.5V18h2.062a1.5 1.5 0 0 0 1.299-2.25l-1.532-2.652zM7.304 9.134l.53 6.08-2.165-1.25-1.03 1.786A1.5 1.5 0 0 0 5.937 18h3.062v2H5.937a3.5 3.5 0 0 1-3.032-5.25l1.031-1.787-2.165-1.249zm6.446-6.165a3.5 3.5 0 0 1 1.28 1.281l1.032 1.786 2.165-1.25-.531 6.08-5.531-2.58 2.165-1.25-1.031-1.786a1.5 1.5 0 0 0-2.598 0L9.168 7.903l-1.732-1L8.968 4.25a3.5 3.5 0 0 1 4.78-1.281" />
    </svg>
  );
};
export { RecycleLine };
