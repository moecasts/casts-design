import { SVGProps } from 'react';
import clsx from 'clsx';
import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const SignalWifiErrorLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const classes = clsx(
    'casts-icon',
    'casts-icon-signal-wifi-error-line',
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 3c4.284 0 8.22 1.497 11.31 3.996l-1.257 1.556A15.936 15.936 0 0 0 12 5a15.92 15.92 0 0 0-8.419 2.392L12 17.817l6-7.429v3.183L12 21 .69 6.997A17.917 17.917 0 0 1 12 3zm10 16v2h-2v-2h2zm0-9v7h-2v-7h2z" />
    </svg>
  );
};

export { SignalWifiErrorLine };
