import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PercentFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-percent-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M17.505 21.003a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m-11-11a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m12.571-6.486 1.414 1.415L4.934 20.488 3.52 19.074z" />
    </svg>
  );
};
export { PercentFill };
