import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Rocket2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-rocket2-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.498 20.005h7.004A6.52 6.52 0 0 1 12 23.507a6.52 6.52 0 0 1-3.502-3.502M18 14.81l2 2.268v1.927H4v-1.927l2-2.268V9.005c0-3.483 2.504-6.447 6-7.545 3.496 1.098 6 4.062 6 7.545zm-6-3.805a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    </svg>
  );
};
export { Rocket2Fill };
