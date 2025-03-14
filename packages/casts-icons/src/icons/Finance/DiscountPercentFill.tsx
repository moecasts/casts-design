import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const DiscountPercentFill = (initProps: IconProps) => {
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
    `${prefixCls}-discount-percent-fill`,
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
      <path d="M13.946 2.094a3 3 0 0 0-3.892 0L8.706 3.243a1 1 0 0 1-.569.236l-1.765.14A3 3 0 0 0 3.62 6.371l-.14 1.766a1 1 0 0 1-.237.569l-1.148 1.348a3 3 0 0 0 0 3.891l1.148 1.349a1 1 0 0 1 .236.569l.141 1.765a3 3 0 0 0 2.752 2.752l1.765.14a1 1 0 0 1 .57.237l1.347 1.148a3 3 0 0 0 3.892 0l1.348-1.148a1 1 0 0 1 .57-.236l1.765-.141a3 3 0 0 0 2.752-2.752l.14-1.765a1 1 0 0 1 .236-.57l1.149-1.347a3 3 0 0 0 0-3.892l-1.149-1.348a1 1 0 0 1-.236-.57l-.14-1.765a3 3 0 0 0-2.752-2.752l-1.766-.14a1 1 0 0 1-.569-.236zm.882 5.663 1.415 1.414-7.071 7.072-1.415-1.415zm-4.596 2.475a1.5 1.5 0 1 1-2.121-2.121 1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 1 2.12-2.121 1.5 1.5 0 0 1-2.12 2.12" />
    </svg>
  );
};
export { DiscountPercentFill };
