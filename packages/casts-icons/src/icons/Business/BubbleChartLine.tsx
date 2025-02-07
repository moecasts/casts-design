import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const BubbleChartLine = (initProps: IconProps) => {
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
    `${prefixCls}-bubble-chart-line`,
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
      <path d="M16 16a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8 4 4 0 0 1 0-8m10 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8.5-12a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7" />
    </svg>
  );
};
export { BubbleChartLine };
