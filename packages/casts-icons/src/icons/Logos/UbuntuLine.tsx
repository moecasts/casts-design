import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const UbuntuLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-ubuntu-line', className);
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
      <path d="m8.667 19.273 1.006-1.742a6.001 6.001 0 0 0 8.282-4.781h2.012A7.97 7.97 0 0 1 18.928 16a8 8 0 0 1-1.452 1.835 2.493 2.493 0 0 0-1.976.227 2.493 2.493 0 0 0-1.184 1.596 7.979 7.979 0 0 1-5.65-.385zm-1.3-.75a7.979 7.979 0 0 1-3.156-4.7A2.494 2.494 0 0 0 5 12c0-.72-.304-1.369-.791-1.825A8 8 0 0 1 5.072 8a7.97 7.97 0 0 1 2.295-2.524l1.006 1.742a6.001 6.001 0 0 0 0 9.563l-1.005 1.742zm1.3-13.796a8.007 8.007 0 0 1 5.648-.387 2.497 2.497 0 0 0 3.161 1.825 8.007 8.007 0 0 1 2.49 5.085h-2.013A5.99 5.99 0 0 0 15 6.804a5.99 5.99 0 0 0-5.327-.335L8.667 4.727zM16 5.072a1.5 1.5 0 1 1 1.5-2.598A1.5 1.5 0 0 1 16 5.072zM4 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12 6.928a1.5 1.5 0 1 1 1.5 2.598 1.5 1.5 0 0 1-1.5-2.598z" />
    </svg>
  );
};

export { UbuntuLine };
