import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FindReplaceLine = (initProps: IconProps) => {
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
    `${prefixCls}-find-replace-line`,
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
      <path d="m18.033 16.618 4.28 4.282-1.413 1.414-4.282-4.281A8.963 8.963 0 0 1 11 20a8.998 8.998 0 0 1-8.065-5H9l-1.304 2.173A6.972 6.972 0 0 0 11 18a6.977 6.977 0 0 0 4.875-1.975l.15-.15A6.977 6.977 0 0 0 18 11c0-.695-.101-1.366-.29-2h2.067c.146.643.223 1.313.223 2a8.963 8.963 0 0 1-1.967 5.618ZM19.065 7H13l1.304-2.173A6.972 6.972 0 0 0 11 4c-3.867 0-7 3.133-7 7 0 .695.101 1.366.29 2H2.223A9.038 9.038 0 0 1 2 11c0-4.973 4.027-9 9-9a8.997 8.997 0 0 1 8.065 5Z" />
    </svg>
  );
};
export { FindReplaceLine };
