import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const WindowsLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-windows-line', className);
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
      <path d="M21 2.5v19l-18-2v-15l18-2zm-2 10.499L12 13v5.487l7 .778V13zm-14 4.71 5 .556V13l-5-.001v4.71zM19 11V4.735l-7 .777V11l7-.001zm-9-5.265L5 6.29V11h5V5.734z" />
    </svg>
  );
};

export { WindowsLine };
