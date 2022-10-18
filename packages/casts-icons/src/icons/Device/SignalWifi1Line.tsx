import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SignalWifi1Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx('cds-icon', 'cds-icon-signal-wifi1-line', className);
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
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm0 12a6.01 6.01 0 0 0-2 .34l2 2.477 2-2.477a6.074 6.074 0 0 0-2-.34zm0-10c-3.028 0-5.923.842-8.42 2.392l5.108 6.324A7.965 7.965 0 0 1 12 13c1.181 0 2.303.256 3.312.716L20.42 7.39A15.928 15.928 0 0 0 12 5z" />
    </svg>
  );
};

export { SignalWifi1Line };
