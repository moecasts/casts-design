import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ArmchairLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-armchair-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M8 3a4 4 0 0 0-4 4v2.126a4.002 4.002 0 0 0-1 7.339V21h2v-1h14v1h2v-4.535a4.002 4.002 0 0 0-1-7.339V7a4 4 0 0 0-4-4H8Zm10 6.126c-1.725.444-3 2.01-3 3.874H9a4.002 4.002 0 0 0-3-3.874V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.126ZM9 15h6v1h2v-3a2 2 0 1 1 2.667 1.886 1 1 0 0 0-.667.943V18H5v-2.17a1 1 0 0 0-.667-.944A2.001 2.001 0 0 1 5 11a2 2 0 0 1 2 2v3h2v-1Z" />
    </svg>
  );
};
export { ArmchairLine };
