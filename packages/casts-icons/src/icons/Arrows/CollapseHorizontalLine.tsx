import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CollapseHorizontalLine = (initProps: IconProps) => {
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
    `${prefixCls}-collapse-horizontal-line`,
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
      <path d="m13.5 12 4.95-4.95 1.414 1.415L17.328 11H23v2h-5.672l2.534 2.533-1.415 1.414zM1 13h5.67l-2.534 2.535 1.414 1.414L10.5 12 5.55 7.05 4.136 8.465 6.672 11H1z" />
    </svg>
  );
};
export { CollapseHorizontalLine };
