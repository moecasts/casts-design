import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const ShoppingBasket2Line = (initProps: IconProps) => {
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
    `${prefixCls}-shopping-basket2-line`,
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
      <path d="m15.37 3.44 3.212 5.562h3.423v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.925a1 1 0 0 1-.997-.917l-.757-9.083H2.005v-2h3.422L8.639 3.44l1.732 1-2.634 4.562h8.535L13.639 4.44zm3.46 7.562H5.179l.667 8h12.319zm-5.825 2v4h-2v-4zm-4 0v4h-2v-4zm8 0v4h-2v-4z" />
    </svg>
  );
};
export { ShoppingBasket2Line };
