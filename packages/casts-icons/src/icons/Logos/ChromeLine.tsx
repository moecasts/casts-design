import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ChromeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-chrome-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="m10.365 19.833 1.93-3.342q-.147.009-.295.009a4.5 4.5 0 0 1-3.94-2.325L4.795 8.52a8.003 8.003 0 0 0 5.57 11.313m2.225.146A8 8 0 0 0 19.602 9.5h-3.86c.479.715.758 1.575.758 2.5 0 .848-.234 1.64-.642 2.318zm1.553-6.691.022-.038a2.5 2.5 0 1 0-4.354-.042l.024.042a2.499 2.499 0 0 0 4.308.037m-8.108-6.62 1.928 3.34A4.5 4.5 0 0 1 12 7.5h6.615A7.99 7.99 0 0 0 12 4a7.98 7.98 0 0 0-5.965 2.669M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10" />
    </svg>
  );
};
export { ChromeLine };
