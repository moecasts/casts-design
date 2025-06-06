import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GogglesLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-goggles-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3.718 10.147C3.285 10.7 3 11.446 3 12.5c0 1.015.37 2.052.964 2.822C4.56 16.095 5.294 16.5 6 16.5c.762 0 1.514-.434 2.538-1.092C9.588 14.735 10.706 14 12 14s2.413.735 3.462 1.408c1.024.658 1.776 1.092 2.538 1.092.706 0 1.44-.405 2.036-1.178.593-.77.964-1.807.964-2.822 0-1.054-.285-1.8-.718-2.353-.443-.567-1.1-1.008-1.956-1.34C16.582 8.133 14.252 8 12 8s-4.58.132-6.327.808c-.856.331-1.512.772-1.955 1.339m1.234-3.205C7.08 6.118 9.75 6 12 6s4.92.118 7.049.942c1.08.419 2.08 1.04 2.81 1.974C22.596 9.862 23 11.054 23 12.5c0 1.47-.525 2.933-1.38 4.042C20.77 17.647 19.504 18.5 18 18.5c-1.425 0-2.656-.79-3.575-1.38C13.72 16.667 12.883 16 12 16s-1.72.667-2.425 1.12c-.919.59-2.15 1.38-3.575 1.38-1.503 0-2.769-.852-3.62-1.958A6.74 6.74 0 0 1 1 12.5c0-1.446.402-2.638 1.142-3.584.729-.933 1.728-1.555 2.81-1.974" />
    </svg>
  );
};
export { GogglesLine };
