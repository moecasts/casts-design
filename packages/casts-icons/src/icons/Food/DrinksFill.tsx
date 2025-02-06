import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DrinksFill = (initProps: IconProps) => {
  const { className, style, size, fill, color, ...props } = initProps;
  const styles = {
    fontSize: size,
    fill: fill ? fill : color,
    ...style,
  };
  const { getPrefixCls } = useConfig();
  const prefixCls = getPrefixCls('icon');
  const classes = clsx(`${prefixCls}`, `${prefixCls}-drinks-fill`, className);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={classes}
      style={styles}
      role="img"
      {...props}
    >
      <path d="M14 2H6.205a1.25 1.25 0 0 0-1.226 1.005L4.18 7H2v2h20V7h-2.18l-.8-3.995A1.25 1.25 0 0 0 17.796 2H16V0h-2zm5.66 9H4.34l1.141 9.893A1.25 1.25 0 0 0 6.723 22h10.554a1.25 1.25 0 0 0 1.242-1.107z" />
    </svg>
  );
};
export { DrinksFill };
