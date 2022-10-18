import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const XingLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-xing-line', className);
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
      <path d="M20.444 3.5 13.81 14.99 17.857 22h-2.31l-4.045-7.009H11.5L18.134 3.5h2.31zM8.31 7l2.422 4.196-.002.001L7.67 16.5H5.361l3.06-5.305L6.002 7H8.31z" />
    </svg>
  );
};

export { XingLine };
