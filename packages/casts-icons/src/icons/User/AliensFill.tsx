import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const AliensFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-aliens-fill', className);
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
      <path d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2zm5.5 10a4.5 4.5 0 0 0-4.475 4.975 4.5 4.5 0 0 0 4.95-4.95A4.552 4.552 0 0 0 17.5 12zm-11 0c-.16 0-.319.008-.475.025a4.5 4.5 0 0 0 4.95 4.95A4.5 4.5 0 0 0 6.5 12z" />
    </svg>
  );
};

export { AliensFill };
