import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Group3Line = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-group3-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8.5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0M9 16.5a2.5 2.5 0 0 0-5 0V19h5zm2 4.5H2v-4.5a4.5 4.5 0 1 1 9 0zm8.5-14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-6 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0m6.5 9.5a2.5 2.5 0 0 0-5 0V19h5zM13 19v-2.5a4.5 4.5 0 1 1 9 0V21h-9z" />
    </svg>
  );
};
export { Group3Line };
