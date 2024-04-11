import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Suitcase3Line = (initProps: IconProps) => {
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
    `${prefixCls}-suitcase3-line`,
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
      <path d="M15 1a1 1 0 0 1 1 1v5h1V6h2v1h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-1v1h-2v-1H7v1H5v-1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6h2v1h1V2a1 1 0 0 1 1-1h6Zm4 8H5v10h14V9ZM9 10v8H7v-8h2Zm4 0v8h-2v-8h2Zm4 0v8h-2v-8h2Zm-3-7h-4v4h4V3Z" />
    </svg>
  );
};
export { Suitcase3Line };
