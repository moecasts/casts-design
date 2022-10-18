import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const EdgeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-edge-line', className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      className={classes}
      style={styles}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8.007 14.001A4.559 4.559 0 0 0 8 14.25C8 16.632 9.753 19 13 19c2.373 0 4.528-.655 6-1.553v3.35C17.211 21.564 15.113 22 13 22c-5.502 0-8-3.47-8-7.75 0-3.231 2.041-6 4.943-7.164C8.539 8.663 8 10.341 8 10.996L18 11c0-3.406-2.548-6-6-6-5 0-8.001 3.988-9 5.999C3.29 6.237 7.01 2 12 2c5.2 0 9 4.03 9 9v3H8l.007.001z" />
    </svg>
  );
};

export { EdgeLine };
