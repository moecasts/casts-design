import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const Compasses2Line = (initProps: IconProps) => {
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
    `${prefixCls}-compasses2-line`,
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
      <path d="M16.33 13.497a6.988 6.988 0 0 0 2.67-5.5h2a8.987 8.987 0 0 1-3.662 7.246l2.528 4.378a2 2 0 0 1-.732 2.732l-3.527-6.108a8.971 8.971 0 0 1-3.607.752 8.97 8.97 0 0 1-3.607-.752l-3.527 6.108a2 2 0 0 1-.732-2.732l5.064-8.77A4.002 4.002 0 0 1 11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.803 6.728l1.527 2.646ZM14.6 14.498l-1.528-2.646a4.003 4.003 0 0 1-2.142 0l-1.528 2.646c.804.322 1.68.499 2.599.499a6.98 6.98 0 0 0 2.599-.499ZM12 9.997a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
};
export { Compasses2Line };
