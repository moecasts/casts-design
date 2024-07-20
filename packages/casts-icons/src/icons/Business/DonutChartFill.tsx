import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DonutChartFill = (initProps: IconProps) => {
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
    `${prefixCls}-donut-chart-fill`,
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
      <path d="M11 2.05v3.02a7.002 7.002 0 1 0 5.192 12.536l2.137 2.137A9.958 9.958 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95ZM21.95 13a9.954 9.954 0 0 1-2.207 5.328l-2.137-2.136A6.965 6.965 0 0 0 18.93 13h3.022ZM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-3.022a7.005 7.005 0 0 0-5.928-5.929V2.049Z" />
    </svg>
  );
};
export { DonutChartFill };
