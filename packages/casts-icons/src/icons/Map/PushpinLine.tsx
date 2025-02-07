import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PushpinLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-pushpin-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m13.827 1.69 8.486 8.485-1.415 1.414-.707-.707-4.242 4.243-.707 3.536-1.415 1.414-4.242-4.243-4.95 4.95-1.414-1.414 4.95-4.95-4.243-4.243 1.414-1.414 3.536-.707 4.242-4.243-.707-.707zm.707 3.536-4.67 4.67-2.822.565 6.5 6.5.564-2.822 4.671-4.67z" />
    </svg>
  );
};
export { PushpinLine };
