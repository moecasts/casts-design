import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const XboxFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-xbox-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.42 19.527A9.956 9.956 0 0 0 12 22a9.967 9.967 0 0 0 6.585-2.473c1.564-1.593-3.597-7.257-6.585-9.514-2.985 2.257-8.15 7.921-6.582 9.514Zm9.3-12.005c2.083 2.468 6.236 8.595 5.063 10.76A9.952 9.952 0 0 0 22 12.003a9.958 9.958 0 0 0-2.975-7.113s-.023-.018-.068-.035a.686.686 0 0 0-.234-.038c-.494 0-1.655.362-4.005 2.705ZM5.045 4.856c-.048.017-.068.034-.072.035a9.963 9.963 0 0 0-2.973 7.113c0 2.379.832 4.561 2.217 6.278C3.051 16.11 7.201 9.988 9.285 7.523 6.935 5.178 5.772 4.818 5.28 4.818a.604.604 0 0 0-.234.039v-.002Zm6.955.104s-2.454-1.436-4.37-1.504c-.753-.027-1.213.246-1.268.282C8.15 2.538 10.05 2 11.988 2H12c1.945 0 3.838.538 5.638 1.737-.056-.038-.512-.31-1.266-.282-1.917.068-4.372 1.5-4.372 1.5v.004Z" />
    </svg>
  );
};
export { XboxFill };
