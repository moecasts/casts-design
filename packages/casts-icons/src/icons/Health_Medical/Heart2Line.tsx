import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Heart2Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-heart2-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20.243 4.757a6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464 5.998 5.998 0 0 1 8.242.228ZM5.172 6.172a4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-5.646-5.64l-4.202 4.203-1.415-1.414 2.825-2.827-.082-.069a4.001 4.001 0 0 0-5.328.295Z" />
    </svg>
  );
};
export { Heart2Line };
