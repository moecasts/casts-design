import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Safe3Fill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-safe3-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M3 3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h1v2h2v-2h12v2h2v-2h1a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12.35 5.236 1.332-1.332 1.414 1.414-1.333 1.333a3.76 3.76 0 0 1 0 3.698l1.333 1.333-1.414 1.414-1.333-1.333a3.76 3.76 0 0 1-3.698 0l-1.333 1.333-1.414-1.414 1.333-1.333a3.76 3.76 0 0 1 0-3.698L8.904 8.318l1.414-1.414 1.333 1.332a3.76 3.76 0 0 1 3.698 0m-.613 2.026a1.75 1.75 0 1 0-2.474 2.475 1.75 1.75 0 0 0 2.474-2.475M5 8h2v7H5z" />
    </svg>
  );
};
export { Safe3Fill };
