import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DashboardLine = (initProps: IconProps) => {
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
    `${prefixCls}-dashboard-line`,
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
      <path d="M13 21V11h8v10h-8ZM3 13V3h8v10H3Zm6-2V5H5v6h4ZM3 21v-6h8v6H3Zm2-2h4v-2H5v2Zm10 0h4v-6h-4v6ZM13 3h8v6h-8V3Zm2 2v2h4V5h-4Z" />
    </svg>
  );
};
export { DashboardLine };
