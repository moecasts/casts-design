import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ExpandHorizontalSLine = (initProps: IconProps) => {
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
    `${prefixCls}-expand-horizontal-s-line`,
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
      <path d="M7.45 7.05 2.5 12l4.947 4.947 1.414-1.414L6.328 13h11.343l-2.535 2.535 1.414 1.414L21.5 12l-4.95-4.95-1.414 1.415L17.672 11H6.328l2.536-2.535z" />
    </svg>
  );
};
export { ExpandHorizontalSLine };
