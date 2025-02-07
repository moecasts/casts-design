import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ArmchairFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-armchair-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M16 3H8a4 4 0 0 0-4 4v1a5 5 0 0 1 5 5h6a5 5 0 0 1 5-5V7a4 4 0 0 0-4-4m4 7a3 3 0 0 0-3 3v3h-2v-1H9v1H7v-3a3 3 0 1 0-4 2.83V21h2v-1h14v1h2v-5.17A3.001 3.001 0 0 0 20 10" />
    </svg>
  );
};
export { ArmchairFill };
