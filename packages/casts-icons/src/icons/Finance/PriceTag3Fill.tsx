import { useConfig } from '@casts/config-provider';
import clsx from 'clsx';
import type { SVGProps } from 'react';

import '../../styles.scss';
type IconProps = {
  size?: string;
} & SVGProps<SVGSVGElement>;
const PriceTag3Fill = (initProps: IconProps) => {
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
    `${prefixCls}-price-tag3-fill`,
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
      <path d="m10.904 2.1 9.9 1.414 1.414 9.9-9.193 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.413L10.905 2.1Zm2.829 8.486a2 2 0 1 0 2.828-2.829 2 2 0 0 0-2.828 2.829Z" />
    </svg>
  );
};
export { PriceTag3Fill };
