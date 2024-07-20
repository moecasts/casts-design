import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const EyeCloseFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(
    `${prefixCls}`,
    `${prefixCls}-eye-close-fill`,
    className,
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m10.13 15.842-.787 2.94-1.932-.517.787-2.94a10.988 10.988 0 0 1-3.237-1.871l-2.153 2.153-1.414-1.414 2.153-2.154a10.957 10.957 0 0 1-2.371-5.07l.9-.164A16.923 16.923 0 0 0 12 10c3.704 0 7.132-1.184 9.924-3.195l.9.163a10.958 10.958 0 0 1-2.37 5.071l2.153 2.154-1.414 1.414-2.154-2.153a10.989 10.989 0 0 1-3.237 1.872l.788 2.939-1.932.517-.788-2.94a11.078 11.078 0 0 1-3.74 0Z" />
    </svg>
  );
};
export { EyeCloseFill };
