import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FigmaFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-figma-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M5.333 5.333A3.333 3.333 0 0 1 8.666 2h6.667a3.333 3.333 0 1 1 0 6.667H12v10a3.333 3.333 0 1 1-3.334-3.334 3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1-3.333-3.334M12 12a3.333 3.333 0 1 0 6.666 0A3.333 3.333 0 0 0 12 12" />
    </svg>
  );
};
export { FigmaFill };
