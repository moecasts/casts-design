import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Scales2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-scales2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.998 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8.001 8.001 0 0 1 19.998 15v6a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-6a8.001 8.001 0 0 1 7-7.938V5h-4c-1.66 0-3-1.34-3-3h2Zm6 7c-3.238 0-6 2.76-6 6v5h12v-5c0-3.238-2.762-6-6-6Zm0 2c.742 0 1.437.202 2.032.554l-2.74 2.739a1 1 0 0 0 1.32 1.497l.095-.083 2.74-2.739A4 4 0 1 1 11.998 11Z" />
    </svg>
  );
};
export { Scales2Line };
