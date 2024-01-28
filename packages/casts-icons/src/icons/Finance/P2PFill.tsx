import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const P2PFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-p2-p-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM7 3a4 4 0 0 0-4 4v2h2V7a2 2 0 0 1 2-2h3V3H7Zm10 18a4 4 0 0 0 4-4v-2h-2v2a2 2 0 0 1-2 2h-3v2h3ZM7 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10-7a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4ZM3 21a4 4 0 0 1 8 0H3Z" />
    </svg>
  );
};
export { P2PFill };
