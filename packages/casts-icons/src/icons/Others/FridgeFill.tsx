import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const FridgeFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-fridge-fill', className);
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
      <path d="M20 12v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V12h16zM9 14H7v5h2v-5zM19 1a1 1 0 0 1 1 1v8H4V2a1 1 0 0 1 1-1h14zM9 4H7v4h2V4z" />
    </svg>
  );
};

export { FridgeFill };
