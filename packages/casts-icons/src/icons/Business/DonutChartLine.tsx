import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DonutChartLine = (initProps: IconProps) => {
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
    `${prefixCls}-donut-chart-line`,
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
      <path d="M11 2.05v2.012a8.001 8.001 0 1 0 5.906 14.258l1.423 1.423A9.96 9.96 0 0 1 12 22C6.477 22 2 17.523 2 12c0-5.185 3.947-9.449 9-9.95M21.95 13a9.95 9.95 0 0 1-2.207 5.328l-1.423-1.422A7.96 7.96 0 0 0 19.938 13zM13.002 2.05c4.724.469 8.48 4.226 8.95 8.95h-2.013a8.004 8.004 0 0 0-6.937-6.938z" />
    </svg>
  );
};
export { DonutChartLine };
