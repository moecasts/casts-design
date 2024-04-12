import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TokenSwapFill = (initProps: IconProps) => {
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
    `${prefixCls}-token-swap-fill`,
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
      <path d="M21.5 9a6.502 6.502 0 0 1-4 6.002V15A8.5 8.5 0 0 0 9 6.5h-.002A6.502 6.502 0 0 1 21.5 9ZM7 3a4 4 0 0 0-4 4v1.5h2V7a2 2 0 0 1 2-2h1.5V3H7Zm12 12.5V17a2 2 0 0 1-2 2h-1.5v2H17a4 4 0 0 0 4-4v-1.5h-2Zm-10 6a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm0-9 2.5 2.5L9 17.5 6.5 15 9 12.5Z" />
    </svg>
  );
};
export { TokenSwapFill };
