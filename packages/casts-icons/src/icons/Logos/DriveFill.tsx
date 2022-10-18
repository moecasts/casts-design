import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const DriveFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-drive-fill', className);
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
      <path d="m7.94 4.146 3.482 6.03-5.94 10.293L2 14.44 7.94 4.146zm2.176 10.294H22l-3.482 6.029H6.635l3.481-6.029zm4.343-1L8.518 3.145h6.964l5.94 10.295H14.46z" />
    </svg>
  );
};

export { DriveFill };
