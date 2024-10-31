import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GitForkLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-git-fork-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 6a3 3 0 1 1 4 2.83V9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-.17a3.001 3.001 0 1 1 2 0V9a4 4 0 0 1-4 4h-2v2.17a3.001 3.001 0 1 1-2 0V13H9a4 4 0 0 1-4-4v-.17A3 3 0 0 1 3 6m15-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-6 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  );
};
export { GitForkLine };
