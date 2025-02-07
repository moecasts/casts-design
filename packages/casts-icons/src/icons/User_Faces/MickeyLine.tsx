import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const MickeyLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-mickey-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M4.617 10.913A4.501 4.501 0 0 1 5.5 2a4.5 4.5 0 0 1 4.493 4.254A8 8 0 0 1 12 6c.693 0 1.365.088 2.007.254a4.5 4.5 0 1 1 5.376 4.66 8 8 0 1 1-14.766 0M3 6.5a2.5 2.5 0 0 0 2.766 2.486 8 8 0 0 1 2.158-1.871Q7.999 6.819 8 6.5a2.5 2.5 0 0 0-5 0m15.234 2.486q.13.014.266.014a2.5 2.5 0 1 0-2.424-1.885 8 8 0 0 1 2.158 1.871M6 14a6 6 0 1 0 12 0 6 6 0 0 0-12 0" />
    </svg>
  );
};
export { MickeyLine };
