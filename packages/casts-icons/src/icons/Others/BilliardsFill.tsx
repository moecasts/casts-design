import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const BilliardsFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-billiards-fill', className);
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
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.75a2.5 2.5 0 0 1 1.88 4.148c.565.456.92 1.117.92 1.852 0 1.38-1.254 2.5-2.8 2.5-1.546 0-2.8-1.12-2.8-2.5 0-.735.355-1.396.92-1.853A2.5 2.5 0 0 1 12 7.75zm0 5c-.753 0-1.3.488-1.3 1s.547 1 1.3 1 1.3-.488 1.3-1-.547-1-1.3-1zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  );
};

export { BilliardsFill };
