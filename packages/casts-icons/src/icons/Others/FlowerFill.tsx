import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FlowerFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-flower-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.455 2.309 12 2.076l-.455.233a12.034 12.034 0 0 0-3.09 2.265A14.047 14.047 0 0 1 12 7.202a14.047 14.047 0 0 1 3.544-2.628 12.036 12.036 0 0 0-3.089-2.265Zm-1.756 6.425a11.978 11.978 0 0 0-6.518-3.536L3 4.98v8.02a9.003 9.003 0 0 0 5.697 8.374A13.987 13.987 0 0 1 8 17c0-3.092 1.002-5.95 2.7-8.266ZM21 4.981l-1.18.217C14.232 6.224 10 11.117 10 17c0 1.536.29 3.007.817 4.36l.24.615c.314.01.629.025.943.025a9 9 0 0 0 9-9V4.981Z" />
    </svg>
  );
};
export { FlowerFill };
