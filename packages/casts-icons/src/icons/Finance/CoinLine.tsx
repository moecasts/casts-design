import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const CoinLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-coin-line', className);
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
      <path d="M12 4c6.075 0 11 2.686 11 6v4c0 3.314-4.925 6-11 6-5.967 0-10.824-2.591-10.995-5.823L1 14v-4c0-3.314 4.925-6 11-6zm0 12c-3.72 0-7.01-1.007-9-2.55V14c0 1.882 3.883 4 9 4 5.01 0 8.838-2.03 8.995-3.882L21 14l.001-.55C19.011 14.992 15.721 16 12 16zm0-10c-5.117 0-9 2.118-9 4 0 1.882 3.883 4 9 4s9-2.118 9-4c0-1.882-3.883-4-9-4z" />
    </svg>
  );
};

export { CoinLine };
