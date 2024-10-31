import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const CheckDoubleLine = (initProps: IconProps) => {
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
    `${prefixCls}-check-double-line`,
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
      <path d="m11.602 13.76 1.412 1.412 8.466-8.466 1.414 1.415-9.88 9.88-6.364-6.365 1.414-1.414 2.125 2.125zm.002-2.828 4.952-4.953 1.41 1.41-4.952 4.953zm-2.827 5.655L7.364 18 1 11.636l1.414-1.414 1.413 1.413-.001.001z" />
    </svg>
  );
};
export { CheckDoubleLine };
