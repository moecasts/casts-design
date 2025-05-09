import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WaterPercentLine = (initProps: IconProps) => {
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
    `${prefixCls}-water-percent-line`,
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
      <path d="M7.05 8.047 12 3.097l4.95 4.95a7 7 0 1 1-9.9 0m11.314-1.414L12 .269 5.636 6.633a9 9 0 1 0 12.728 0m-2.121 3.538-1.414-1.414-7.072 7.071 1.415 1.415zM8.11 11.232a1.5 1.5 0 1 0 2.121-2.121 1.5 1.5 0 0 0-2.121 2.121m7.778 5.657a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12" />
    </svg>
  );
};
export { WaterPercentLine };
