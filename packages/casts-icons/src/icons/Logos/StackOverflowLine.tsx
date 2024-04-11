import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const StackOverflowLine = (initProps: IconProps) => {
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
    `${prefixCls}-stack-overflow-line`,
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
      <path d="M18.001 20.003V15h2v7.003h-16V15h2v5.003h12ZM7.501 18v-2h9v2h-9Zm.077-4.38.347-1.97 8.864 1.563-.348 1.97-8.863-1.563Zm1.634-5.504 1-1.732 7.794 4.5-1 1.732-7.794-4.5Zm3.417-4.613 1.532-1.285 5.785 6.894-1.532 1.286-5.785-6.895Z" />
    </svg>
  );
};
export { StackOverflowLine };
