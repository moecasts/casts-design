import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const Scissors2Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-scissors2-fill', className);
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
      <path d="m12 14.121-2.317 2.317a4 4 0 1 1-2.121-2.121L9.88 12 4.21 6.333a2 2 0 0 1 0-2.829l.708-.707L12 9.88l7.081-7.082.708.707a2 2 0 0 1 0 2.829L14.12 12l2.317 2.317a4 4 0 1 1-2.121 2.121L12 14.12zM6 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
};

export { Scissors2Fill };
