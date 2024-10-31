import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CactusLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-cactus-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11.998 2a4 4 0 0 1 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6c0 1.66-1.34 3-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v2c0 .55.45 1 1 1h1V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v14h4V6a2 2 0 0 0-2-2" />
    </svg>
  );
};
export { CactusLine };
