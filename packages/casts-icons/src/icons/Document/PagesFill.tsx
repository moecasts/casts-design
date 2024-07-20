import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PagesFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-pages-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M20 22H4a1 1 0 0 1-1-1V8h18v13a1 1 0 0 1-1 1Zm1-16H3V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3ZM7 11v4h4v-4H7Zm0 6v2h10v-2H7Zm6-5v2h4v-2h-4Z" />
    </svg>
  );
};
export { PagesFill };
