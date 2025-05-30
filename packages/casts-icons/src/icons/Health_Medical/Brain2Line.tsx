import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Brain2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-brain2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M7 6q.001.357.115.67a1 1 0 0 1-1 1.333L6 8a2 2 0 0 0-1.491 3.333 1 1 0 0 1 0 1.334 2.001 2.001 0 0 0 .864 3.233 1 1 0 0 1 .67 1.135 2.5 2.5 0 1 0 4.932.824q.009-.063.025-.123V6a2 2 0 1 0-4 0m6 11.736q.016.06.025.122a2.5 2.5 0 1 0 4.932-.823 1 1 0 0 1 .67-1.135 2 2 0 0 0 .864-3.233 1 1 0 0 1 0-1.334 2 2 0 0 0-1.607-3.33 1 1 0 0 1-.999-1.333q.113-.313.115-.67a2 2 0 1 0-4 0zM9 2a4 4 0 0 1 3 1.354 4 4 0 0 1 6.998 2.771A4.002 4.002 0 0 1 21.465 12 3.997 3.997 0 0 1 20 17.465v.035a4.5 4.5 0 0 1-8 2.828A4.5 4.5 0 0 1 4 17.5v-.035A3.997 3.997 0 0 1 2.535 12a4.002 4.002 0 0 1 2.467-5.874L5 6a4 4 0 0 1 4-4" />
    </svg>
  );
};
export { Brain2Line };
