import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const Polaroid2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('casts-icon', 'casts-icon-polaroid2-fill', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 20.007V3.993zM6 17v2h12v-2H6zM5 5v2h2V5H5zm7 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    </svg>
  );
};

export { Polaroid2Fill };
