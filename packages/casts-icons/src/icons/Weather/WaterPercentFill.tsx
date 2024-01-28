import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const WaterPercentFill = (initProps: IconProps) => {
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
    `${prefixCls}-water-percent-fill`,
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
      <path d="M12 .269 5.636 6.633a9 9 0 1 0 12.728 0L12 .269Zm4.243 9.902-7.071 7.072-1.415-1.415 7.072-7.07 1.414 1.413ZM8.11 9.111a1.5 1.5 0 1 1 2.121 2.121 1.5 1.5 0 0 1-2.121-2.121Zm7.778 7.778a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.12Z" />
    </svg>
  );
};
export { WaterPercentFill };
