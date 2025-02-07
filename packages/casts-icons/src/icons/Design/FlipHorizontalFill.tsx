import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FlipHorizontalFill = (initProps: IconProps) => {
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
    `${prefixCls}-flip-horizontal-fill`,
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
      <path d="M11 2v20h2V2zM7 6v12H4V6zM4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm11 2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2z" />
    </svg>
  );
};
export { FlipHorizontalFill };
