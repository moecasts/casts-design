import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const GpsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-gps-line', className);
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
      <path d="M7.132 20.737A9.997 9.997 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.997 9.997 0 0 1-5.132 8.737l-.896-1.791a8 8 0 1 0-7.945 0l-.895 1.791zm1.792-3.584a6 6 0 1 1 6.151 0l-.898-1.797a4 4 0 1 0-4.354 0l-.899 1.797zM12 16l3 6H9l3-6z" />
    </svg>
  );
};

export { GpsLine };
