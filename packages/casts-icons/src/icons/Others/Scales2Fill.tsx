import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const Scales2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-scales2-fill', className);
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
      <path d="M6 2c0 .513.49 1 1 1h10c.513 0 1-.49 1-1h2a3 3 0 0 1-3 3h-4l.001 2.062A8.002 8.002 0 0 1 20 15v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a8.001 8.001 0 0 1 7-7.938V5H7C5.34 5 4 3.66 4 2h2zm6 9c-2.21 0-4 1.79-4 4s1.79 4 4 4a3.999 3.999 0 0 0 3.446-6.032l-2.739 2.74-.094.082a1 1 0 0 1-1.32-1.497l2.739-2.74A4 4 0 0 0 12 11z" />
    </svg>
  );
};

export { Scales2Fill };
