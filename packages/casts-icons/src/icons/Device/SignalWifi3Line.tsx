import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SignalWifi3Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-signal-wifi3-line', className);
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
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 7c-1.898 0-3.683.48-5.241 1.327l5.24 6.49 5.242-6.49A10.938 10.938 0 0 0 12 10zm0-5c-3.028 0-5.923.842-8.42 2.392l1.904 2.357C7.4 8.637 9.625 8 12 8s4.6.637 6.516 1.749L20.42 7.39A15.928 15.928 0 0 0 12 5z" />
    </svg>
  );
};

export { SignalWifi3Line };
