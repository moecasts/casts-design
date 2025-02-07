import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const TreeLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-tree-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 7a6 6 0 1 1 11.95.775A6 6 0 0 1 15 19h-2v3h-2v-3H8.5A5.5 5.5 0 0 1 6.191 8.507 6 6 0 0 1 6 7m1.01 3.332A3.502 3.502 0 0 0 8.5 17H15a4 4 0 0 0 1.454-7.728l-.841-.328C15.79 8.304 16 7.672 16 7a4 4 0 1 0-6.4 3.2L8.4 11.8a6 6 0 0 1-1.39-1.468" />
    </svg>
  );
};
export { TreeLine };
