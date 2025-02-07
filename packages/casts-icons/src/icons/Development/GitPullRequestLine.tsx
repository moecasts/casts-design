import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const GitPullRequestLine = (initProps: IconProps) => {
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
    `${prefixCls}-git-pull-request-line`,
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
      <path d="M15 5h2a2 2 0 0 1 2 2v8.17a3.001 3.001 0 1 1-2 0V7h-2v3l-4.5-4L15 2zM5 8.83a3.001 3.001 0 1 1 2 0v6.34a3.001 3.001 0 1 1-2 0zM6 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2m12 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    </svg>
  );
};
export { GitPullRequestLine };
