import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const AlignVertically = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-align-vertically', className);
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
      <path d="M3 11h18v2H3v-2zm15 7v3h-2v-3h-3l4-4 4 4h-3zM8 18v3H6v-3H3l4-4 4 4H8zM18 6h3l-4 4-4-4h3V3h2v3zM8 6h3l-4 4-4-4h3V3h2v3z" />
    </svg>
  );
};

export { AlignVertically };