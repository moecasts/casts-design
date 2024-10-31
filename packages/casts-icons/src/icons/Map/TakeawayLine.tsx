import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TakeawayLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-takeaway-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16 1a1 1 0 0 1 1 1v.999L22 3v6l-2.02-.001 2.767 7.596a4 4 0 1 1-7.62 2.406h-4.253a4.002 4.002 0 0 1-7.8-.229A2 2 0 0 1 2 17V4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8a1 1 0 0 0 .883.993L12 13h2a1 1 0 0 0 .993-.883L15 12V3h-3V1zM7 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4m12-.001a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-1.148-7H17V12a3 3 0 0 1-3 3h-2a3 3 0 0 1-2.829-2H4v2.354A4.002 4.002 0 0 1 10.874 17h4.252a4 4 0 0 1 4.57-2.94zM9 8H4v3h5zm11-3h-3v2h3zM9 5H4v1h5z" />
    </svg>
  );
};
export { TakeawayLine };
