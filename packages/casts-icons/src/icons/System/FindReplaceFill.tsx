import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const FindReplaceFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-find-replace-fill', className);
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
      <path d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zM16.659 9A6 6 0 0 0 11 5c-3.315 0-6 2.685-6 6h2a4.001 4.001 0 0 1 5.91-3.515L12 9h4.659zM17 11h-2a4.001 4.001 0 0 1-5.91 3.515L10 13H5.341A6 6 0 0 0 11 17c3.315 0 6-2.685 6-6z" />
    </svg>
  );
};

export { FindReplaceFill };
