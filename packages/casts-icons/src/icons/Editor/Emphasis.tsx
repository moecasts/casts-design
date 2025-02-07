import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Emphasis = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-emphasis`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12 19a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m11 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M18 3v2H8v4h9v2H8v4h10v2H6V3z" />
    </svg>
  );
};
export { Emphasis };
