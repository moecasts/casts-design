import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const SeedlingFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-seedling-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M21.998 7v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-7l.019-1a6.5 6.5 0 0 1 6.481-6zm-16-4a7 7 0 0 1 6.643 4.786A7.48 7.48 0 0 0 10.014 13H8.998a7 7 0 0 1-7-7V3z" />
    </svg>
  );
};
export { SeedlingFill };
