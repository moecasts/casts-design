import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BlurOffLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-blur-off-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.154 19.565A9 9 0 0 1 5.432 6.843L1.394 2.804 2.808 1.39l19.799 19.8-1.415 1.413zM6.848 8.258a7 7 0 0 0 9.89 9.891zm13.566 7.939-1.598-1.599a7 7 0 0 0-1.866-6.55L12 3.097 9.658 5.44 8.243 4.026 12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564" />
    </svg>
  );
};
export { BlurOffLine };
