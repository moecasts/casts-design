import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TestTubeLine = (initProps: IconProps) => {
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
    `${prefixCls}-test-tube-line`,
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
      <path d="M17 2v2h-1v14a4 4 0 0 1-8 0V4H7V2h10Zm-3 8h-4v8a2 2 0 1 0 4 0v-8Zm-1 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-2-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm3-8h-4v4h4V4Z" />
    </svg>
  );
};
export { TestTubeLine };
