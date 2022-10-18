import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const GovernmentFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-government-fill', className);
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
      <path d="M2 19V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2h3v2h-1v11h1v2H1v-2h1zm11 0v-7h-2v7h2zm-5 0v-7H6v7h2zm10 0v-7h-2v7h2zM6 5v1h12V5H6z" />
    </svg>
  );
};

export { GovernmentFill };
