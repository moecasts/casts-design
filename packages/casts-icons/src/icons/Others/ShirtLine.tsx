import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ShirtLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-shirt-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M12.998 20h6v-4h-4v-2h4V6h-2v5l-4-1.6zm-2 0V9.4l-4 1.6V6h-2v14zm-4-16V3h10v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm5 4 3.5-3h-7z" />
    </svg>
  );
};
export { ShirtLine };
