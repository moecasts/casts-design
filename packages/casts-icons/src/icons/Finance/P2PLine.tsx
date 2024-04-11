import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const P2PLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-p2-p-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M17 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3H7Zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2h3Zm-9-8a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2ZM5 21a2 2 0 1 1 4 0h2a4 4 0 0 0-8 0h2Z" />
    </svg>
  );
};
export { P2PLine };
