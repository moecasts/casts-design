import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const FediverseLine = (initProps: IconProps) => {
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
    `${prefixCls}-fediverse-line`,
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
      <path d="M11 11.5V8.232L8.17 9.866l-1-1.732L10 6.5 7.17 4.866l1-1.732L11 4.768V1.5h2v3.268l2.83-1.634 1 1.732L14 6.5l2.83 1.634-1 1.732L13 8.232V11.5zm10.46 1.384-2.83 1.634V11.25h-2v3.268l-2.83-1.634-1 1.732 2.83 1.634-2.83 1.634 1 1.732 2.83-1.634v3.268h2v-3.268l2.83 1.634 1-1.732-2.83-1.634 2.83-1.634zM7.37 17.982v3.268h-2v-3.268l-2.83 1.634-1-1.732 2.83-1.634-2.83-1.634 1-1.732 2.83 1.633V11.25h2v3.268l2.83-1.635 1 1.733-2.83 1.634 2.83 1.634-1 1.732z" />
    </svg>
  );
};
export { FediverseLine };
