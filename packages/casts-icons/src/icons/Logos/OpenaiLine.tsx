import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const OpenaiLine = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-openai-line`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M11 4c.649 0 1.25.206 1.741.556-1.292.673-2.48 1.52-3.741 2.248l1 1.732c1.575-.91 3.052-2.05 4.76-2.706a3 3 0 0 1 4.057 3.09C17.588 8.137 16.26 7.531 15 6.804l-1 1.732c1.575.91 3.302 1.618 4.723 2.77a3 3 0 0 1-.648 5.058C18.14 14.908 18 13.455 18 12h-2c0 1.818.25 3.669-.037 5.476a3 3 0 0 1-4.705 1.967c1.293-.673 2.482-1.52 3.742-2.247l-1-1.732c-1.575.91-3.052 2.05-4.76 2.706a3 3 0 0 1-4.057-3.09c1.23.782 2.557 1.388 3.817 2.116l1-1.732c-1.575-.91-3.302-1.618-4.724-2.77a3 3 0 0 1 .649-5.058C5.86 9.092 6 10.545 6 12h2c0-1.818-.25-3.669.037-5.476A3 3 0 0 1 11 4m3.793-.258a5.001 5.001 0 0 0-8.548 1.71 5.001 5.001 0 0 0-2.793 8.258 5.001 5.001 0 0 0 5.756 6.548 5.001 5.001 0 0 0 8.548-1.71 5.001 5.001 0 0 0 2.793-8.258 5.001 5.001 0 0 0-5.756-6.548" />
    </svg>
  );
};
export { OpenaiLine };
