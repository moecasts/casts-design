import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BallPenLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-ball-pen-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m17.85 11.698-.708-.707-9.9 9.9H3v-4.243L14.314 5.334l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.477l-1.415-1.415zm-2.122-2.121-1.414-1.414L5 17.477v1.414h1.414zm2.828-7.071 2.829 2.828a1 1 0 0 1 0 1.415L19.97 8.163 15.728 3.92l1.414-1.414a1 1 0 0 1 1.414 0" />
    </svg>
  );
};
export { BallPenLine };
