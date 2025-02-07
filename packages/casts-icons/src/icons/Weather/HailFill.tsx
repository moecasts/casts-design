import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const HailFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-hail-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M18.995 17.794a4 4 0 0 0-5.085-3.644A4.001 4.001 0 0 0 6 15c0 1.08.428 2.059 1.122 2.778a8 8 0 1 1 9.335-10.68 5.5 5.5 0 0 1 2.537 10.696M10 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4m5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-5 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    </svg>
  );
};
export { HailFill };
