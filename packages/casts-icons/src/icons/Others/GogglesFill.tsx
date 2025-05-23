import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GogglesFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-goggles-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4.952 6.942C7.08 6.118 9.75 6 12 6s4.92.118 7.049.942c1.08.419 2.08 1.04 2.81 1.974C22.596 9.862 23 11.054 23 12.5c0 1.47-.525 2.933-1.38 4.042C20.77 17.647 19.504 18.5 18 18.5c-1.425 0-2.656-.79-3.575-1.38C13.72 16.667 12.883 16 12 16s-1.72.667-2.425 1.12c-.919.59-2.15 1.38-3.575 1.38-1.503 0-2.769-.852-3.62-1.958A6.74 6.74 0 0 1 1 12.5c0-1.446.402-2.638 1.142-3.584.729-.933 1.728-1.555 2.81-1.974" />
    </svg>
  );
};
export { GogglesFill };
